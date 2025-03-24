import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Gauge } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ReminderList() {
  const reminders = [
    {
      id: 1,
      vehicle: "2020 Toyota Camry",
      service: "Oil Change",
      dueDate: "2024-04-15",
      dueMileage: 28000,
      currentMileage: 25000,
      priority: "medium",
    },
    {
      id: 2,
      vehicle: "2020 Toyota Camry",
      service: "Tire Rotation",
      dueDate: "2024-04-20",
      dueMileage: 30000,
      currentMileage: 25000,
      priority: "low",
    },
    {
      id: 3,
      vehicle: "2019 Honda Accord",
      service: "Brake Inspection",
      dueDate: "2024-04-10",
      dueMileage: 35000,
      currentMileage: 32500,
      priority: "high",
    },
    {
      id: 4,
      vehicle: "2019 Honda Accord",
      service: "Air Filter Replacement",
      dueDate: "2024-05-15",
      dueMileage: 37500,
      currentMileage: 32500,
      priority: "low",
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
        <CardTitle>Upcoming Reminders</CardTitle>
        <CardDescription>Scheduled maintenance reminders for your vehicles</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reminders.map((reminder) => (
            <div key={reminder.id} className="flex flex-col space-y-2 rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <div className="font-medium">{reminder.service}</div>
                <div>{getPriorityBadge(reminder.priority)}</div>
              </div>
              <div className="text-sm text-muted-foreground">{reminder.vehicle}</div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Due: {new Date(reminder.dueDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Gauge className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>At: {reminder.dueMileage.toLocaleString()} mi</span>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  Snooze
                </Button>
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

