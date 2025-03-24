"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function UpcomingServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      vehicle: "2020 Toyota Camry",
      service: "Oil Change",
      dueDate: "2024-04-15",
      daysLeft: 7,
      priority: "medium",
      completed: false,
    },
    {
      id: 2,
      vehicle: "2020 Toyota Camry",
      service: "Tire Rotation",
      dueDate: "2024-04-20",
      daysLeft: 12,
      priority: "low",
      completed: false,
    },
    {
      id: 3,
      vehicle: "2019 Honda Accord",
      service: "Brake Inspection",
      dueDate: "2024-04-10",
      daysLeft: 2,
      priority: "high",
      completed: false,
    },
  ])

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">Urgent</Badge>
      case "medium":
        return <Badge variant="default">Soon</Badge>
      case "low":
        return <Badge variant="secondary">Planned</Badge>
      default:
        return null
    }
  }

  const handleComplete = (id: number) => {
    setServices(services.map((service) => (service.id === id ? { ...service, completed: true } : service)))
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Upcoming Services</CardTitle>
        <CardDescription>Services scheduled for the next 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex items-center justify-between rounded-lg border p-3 ${
                service.completed ? "bg-muted/50" : ""
              }`}
            >
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  {service.completed ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : null}
                  <span className={`font-medium ${service.completed ? "line-through text-muted-foreground" : ""}`}>
                    {service.service}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">{service.vehicle}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{new Date(service.dueDate).toLocaleDateString()}</span>
                  </div>
                  {!service.completed && getPriorityBadge(service.priority)}
                </div>
                {!service.completed && (
                  <Button variant="outline" size="sm" onClick={() => handleComplete(service.id)}>
                    Complete
                  </Button>
                )}
              </div>
            </div>
          ))}
          {services.every((service) => service.completed) && (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
              <p className="font-medium">All services completed!</p>
              <p className="text-sm text-muted-foreground">No upcoming services scheduled.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

