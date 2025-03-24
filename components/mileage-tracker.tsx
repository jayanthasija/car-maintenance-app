"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function MileageTracker() {
  const [date, setDate] = useState<Date>()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Update Mileage</CardTitle>
        <CardDescription>Record your current vehicle mileage</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="vehicle">Vehicle</Label>
          <Select>
            <SelectTrigger id="vehicle">
              <SelectValue placeholder="Select vehicle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="camry">2020 Toyota Camry</SelectItem>
              <SelectItem value="accord">2019 Honda Accord</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mileage">Current Mileage</Label>
          <Input id="mileage" type="number" placeholder="Enter current odometer reading" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Date Recorded</Label>
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
          <Label htmlFor="notes">Notes (Optional)</Label>
          <Input id="notes" placeholder="Trip details, fuel fill-up, etc." />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save Mileage</Button>
      </CardFooter>
    </Card>
  )
}

