"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

export default function ReminderForm() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    vehicle: "",
    serviceType: "",
    mileage: "",
    notes: "",
    emailNotification: false,
    repeat: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.vehicle || !formData.serviceType || !date) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would save to a database
    toast({
      title: "Reminder created",
      description: `Reminder for ${formData.serviceType} has been set for your ${formData.vehicle}.`,
    })

    // Reset form
    setFormData({
      vehicle: "",
      serviceType: "",
      mileage: "",
      notes: "",
      emailNotification: false,
      repeat: false,
    })
    setDate(undefined)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Reminder</CardTitle>
        <CardDescription>Set up a new maintenance reminder</CardDescription>
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
            <Label htmlFor="due-date">Due Date</Label>
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
            <Label htmlFor="mileage">Due Mileage (Optional)</Label>
            <Input
              id="mileage"
              type="number"
              placeholder="Mileage when service is due"
              value={formData.mileage}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Input
              id="notes"
              placeholder="Additional details about the reminder"
              value={formData.notes}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="email-notification"
              checked={formData.emailNotification}
              onCheckedChange={(checked) => handleSwitchChange("emailNotification", checked)}
            />
            <Label htmlFor="email-notification">Email notification</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="repeat"
              checked={formData.repeat}
              onCheckedChange={(checked) => handleSwitchChange("repeat", checked)}
            />
            <Label htmlFor="repeat">Repeat reminder</Label>
          </div>

          <Button type="submit" className="w-full">
            Create Reminder
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

