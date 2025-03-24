import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Calendar, DollarSign, FileText } from "lucide-react"

export default function ServiceLogList() {
  const serviceLogs = [
    {
      id: 1,
      vehicle: "2020 Toyota Camry",
      service: "Oil Change",
      date: "2023-12-15",
      mileage: 24500,
      cost: 45.99,
      vendor: "Quick Lube",
    },
    {
      id: 2,
      vehicle: "2019 Honda Accord",
      service: "Tire Rotation",
      date: "2024-01-10",
      mileage: 32000,
      cost: 25.0,
      vendor: "Discount Tire",
    },
    {
      id: 3,
      vehicle: "2019 Honda Accord",
      service: "Air Filter Replacement",
      date: "2024-02-05",
      mileage: 32300,
      cost: 18.5,
      vendor: "AutoZone",
    },
    {
      id: 4,
      vehicle: "2020 Toyota Camry",
      service: "Brake Inspection",
      date: "2024-03-01",
      mileage: 24900,
      cost: 0.0,
      vendor: "Toyota Dealership",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Service History</CardTitle>
        <CardDescription>Recent maintenance records for all vehicles</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {serviceLogs.map((log) => (
            <div key={log.id} className="flex flex-col space-y-2 rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <div className="font-medium">{log.service}</div>
                <Button variant="ghost" size="sm">
                  <FileText className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">{log.vehicle}</div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{new Date(log.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wrench className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{log.mileage.toLocaleString()} mi</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>${log.cost.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

