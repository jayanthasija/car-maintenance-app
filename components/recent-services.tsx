import { Calendar, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function RecentServices() {
  const recentServices = [
    {
      id: 1,
      vehicle: "2020 Toyota Camry",
      service: "Oil Change",
      date: "2023-12-15",
      cost: 45.99,
      vendor: "Quick Lube",
      notes: "Used synthetic oil, replaced filter",
    },
    {
      id: 2,
      vehicle: "2019 Honda Accord",
      service: "Tire Rotation",
      date: "2024-01-10",
      cost: 25.0,
      vendor: "Discount Tire",
      notes: "Rotated all four tires, checked pressure",
    },
    {
      id: 3,
      vehicle: "2019 Honda Accord",
      service: "Air Filter Replacement",
      date: "2024-02-05",
      cost: 18.5,
      vendor: "AutoZone",
      notes: "Replaced cabin and engine air filters",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Services</CardTitle>
        <CardDescription>Maintenance performed in the last 90 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentServices.map((service) => (
            <div key={service.id} className="flex items-center justify-between rounded-lg border p-3">
              <div className="grid gap-1">
                <div className="font-medium">{service.service}</div>
                <div className="text-sm text-muted-foreground">{service.vehicle}</div>
                <div className="text-sm text-muted-foreground">{service.vendor}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{new Date(service.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>${service.cost.toFixed(2)}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

