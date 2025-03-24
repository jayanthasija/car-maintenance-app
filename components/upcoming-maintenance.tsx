import { Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function UpcomingMaintenance() {
  const upcomingServices = [
    {
      id: 1,
      vehicle: "2020 Toyota Camry",
      service: "Oil Change",
      dueDate: "2024-04-15",
      daysLeft: 7,
      priority: "medium",
    },
    {
      id: 2,
      vehicle: "2020 Toyota Camry",
      service: "Tire Rotation",
      dueDate: "2024-04-20",
      daysLeft: 12,
      priority: "low",
    },
    {
      id: 3,
      vehicle: "2019 Honda Accord",
      service: "Brake Inspection",
      dueDate: "2024-04-10",
      daysLeft: 2,
      priority: "high",
    },
  ]

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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Maintenance</CardTitle>
        <CardDescription>Services scheduled for the next 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingServices.map((service) => (
            <div key={service.id} className="flex items-center justify-between rounded-lg border p-3">
              <div className="grid gap-1">
                <div className="font-medium">{service.service}</div>
                <div className="text-sm text-muted-foreground">{service.vehicle}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{new Date(service.dueDate).toLocaleDateString()}</span>
                  </div>
                  <div>{getPriorityBadge(service.priority)}</div>
                </div>
                <Button variant="outline" size="sm">
                  Complete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

