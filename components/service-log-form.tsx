"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

export default function ServiceLogForm() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    vehicle: "",
    serviceType: "",
    mileage: "",
    cost: "",
    vendor: "",
    notes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.vehicle || !formData.serviceType || !date || !formData.mileage) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would save to a database
    toast({
      title: "Service log added",
      description: `${formData.serviceType} has been recorded for your ${formData.vehicle}.`,
    })

    // Reset form
    setFormData({
      vehicle: "",
      serviceType: "",
      mileage: "",
      cost: "",
      vendor: "",
      notes: "",
    })
    setDate(undefined)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log Service</CardTitle>
        <CardDescription>Record a new maintenance service for your vehicle</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="vehicle">Vehicle</Label>
            <Select value={formData.vehicle} onValueChange={(value) => handleSelectChange("vehicle", value)}>
              <SelectTrigger id="vehicle">
                <SelectValue placeholder="Select vehicle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2020 Toyota Camry">2020 Toyota Camry</SelectItem>
                <SelectItem value="2019 Honda Accord">2019 Honda Accord</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceType">Service Type</Label>
            <Select value={formData.serviceType} onValueChange={(value) => handleSelectChange("serviceType", value)}>
              <SelectTrigger id="serviceType">
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Oil Change">Oil Change</SelectItem>
                <SelectItem value="Tire Rotation">Tire Rotation</SelectItem>
                <SelectItem value="Brake Service">Brake Service</SelectItem>
                <SelectItem value="Air Filter Replacement">Air Filter Replacement</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Service Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mileage">Mileage</Label>
            <Input
              id="mileage"
              type="number"
              placeholder="Current vehicle mileage"
              value={formData.mileage}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cost">Cost ($)</Label>
            <Input
              id="cost"
              type="number"
              step="0.01"
              placeholder="0.00"
              value={formData.cost}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="vendor">Service Provider/Vendor</Label>
            <Input
              id="vendor"
              placeholder="Mechanic or shop name"
              value={formData.vendor}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Enter service details, parts replaced, etc."
              value={formData.notes}
              onChange={handleInputChange}
            />
          </div>

          <Button type="submit" className="w-full">
            Save Service Log
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

