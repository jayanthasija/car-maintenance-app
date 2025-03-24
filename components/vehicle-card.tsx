import { Car, Calendar, Gauge } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface VehicleCardProps {
  make: string
  model: string
  year: string
  mileage: number
  lastService: string
  lastServiceDate: string
}

export default function VehicleCard({ make, model, year, mileage, lastService, lastServiceDate }: VehicleCardProps) {
  // Calculate days since last service
  const daysSinceService = Math.floor((new Date().getTime() - new Date(lastServiceDate).getTime()) / (1000 * 3600 * 24))

  // Calculate service interval (example: oil change every 90 days)
  const serviceInterval = 90
  const serviceProgress = (daysSinceService / serviceInterval) * 100

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>
            {year} {make} {model}
          </span>
          <Car className="h-5 w-5 text-muted-foreground" />
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid gap-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <Gauge className="mr-1 h-4 w-4 text-muted-foreground" />
              <span>Current Mileage</span>
            </div>
            <span className="font-medium">{mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
              <span>Last Service</span>
            </div>
            <span className="font-medium">{lastService}</span>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between text-sm mb-1">
              <span>Next service due</span>
              <span className="font-medium">{Math.max(0, serviceInterval - daysSinceService)} days</span>
            </div>
            <Progress value={Math.min(100, serviceProgress)} className="h-2" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Log Service
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Update Mileage
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

