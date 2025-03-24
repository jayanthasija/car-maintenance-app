"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"

export default function MaintenanceCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Sample maintenance events
  const maintenanceEvents = [
    { date: new Date(2024, 3, 10), service: "Brake Inspection", vehicle: "2019 Honda Accord" },
    { date: new Date(2024, 3, 15), service: "Oil Change", vehicle: "2020 Toyota Camry" },
    { date: new Date(2024, 3, 20), service: "Tire Rotation", vehicle: "2020 Toyota Camry" },
  ]

  // Function to add a class to dates with events
  const getDayClass = (day: Date) => {
    const hasEvent = maintenanceEvents.some((event) => event.date.toDateString() === day.toDateString())
    return hasEvent ? "bg-primary/20 text-primary font-bold rounded-full" : undefined
  }

  // Function to handle adding a new maintenance event
  const handleAddEvent = () => {
    setIsDialogOpen(false)
    // In a real app, this would save the event to a database
  }

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Maintenance Calendar</CardTitle>
            <CardDescription>View and schedule maintenance services</CardDescription>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Event
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Schedule Maintenance</DialogTitle>
                <DialogDescription>Add a new maintenance event to your calendar.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="vehicle" className="text-right">
                    Vehicle
                  </Label>
                  <Select>
                    <SelectTrigger id="vehicle" className="col-span-3">
                      <SelectValue placeholder="Select vehicle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="camry">2020 Toyota Camry</SelectItem>
                      <SelectItem value="accord">2019 Honda Accord</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="service" className="text-right">
                    Service
                  </Label>
                  <Select>
                    <SelectTrigger id="service" className="col-span-3">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oil-change">Oil Change</SelectItem>
                      <SelectItem value="tire-rotation">Tire Rotation</SelectItem>
                      <SelectItem value="brake-service">Brake Service</SelectItem>
                      <SelectItem value="air-filter">Air Filter Replacement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="event-date" className="text-right">
                    Date
                  </Label>
                  <Input
                    id="event-date"
                    type="date"
                    className="col-span-3"
                    defaultValue={date ? date.toISOString().split("T")[0] : undefined}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="notes" className="text-right">
                    Notes
                  </Label>
                  <Textarea id="notes" placeholder="Additional details" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddEvent}>
                  Save Event
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            event: (date) => maintenanceEvents.some((event) => event.date.toDateString() === date.toDateString()),
          }}
          modifiersClassNames={{
            event: "bg-primary/20 text-primary font-bold rounded-full",
          }}
        />

        {date && (
          <div className="mt-6">
            <h3 className="font-medium">Events for {date.toLocaleDateString()}</h3>
            <div className="mt-2 space-y-2">
              {maintenanceEvents
                .filter((event) => event.date.toDateString() === date.toDateString())
                .map((event, index) => (
                  <div key={index} className="rounded-md border p-3">
                    <div className="font-medium">{event.service}</div>
                    <div className="text-sm text-muted-foreground">{event.vehicle}</div>
                  </div>
                ))}
              {maintenanceEvents.filter((event) => event.date.toDateString() === date.toDateString()).length === 0 && (
                <p className="text-sm text-muted-foreground">No events scheduled for this day.</p>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

