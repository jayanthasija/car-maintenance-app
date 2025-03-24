"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function MileageReport() {
  // Sample data for the chart
  const data = [
    { month: "Jan", mileage: 24000 },
    { month: "Feb", mileage: 24300 },
    { month: "Mar", mileage: 24600 },
    { month: "Apr", mileage: 25000 },
    { month: "May", mileage: 25200 },
    { month: "Jun", mileage: 25500 },
    { month: "Jul", mileage: 25800 },
    { month: "Aug", mileage: 26100 },
    { month: "Sep", mileage: 26400 },
    { month: "Oct", mileage: 26700 },
    { month: "Nov", mileage: 27000 },
    { month: "Dec", mileage: 27300 },
  ]

  const initialMileage = data[0].mileage
  const currentMileage = data[data.length - 1].mileage
  const mileageDifference = currentMileage - initialMileage
  const monthlyAverage = mileageDifference / (data.length - 1)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Mileage Report</CardTitle>
            <CardDescription>Vehicle usage patterns over time</CardDescription>
          </div>
          <Select defaultValue="camry">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select vehicle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="camry">2020 Toyota Camry</SelectItem>
              <SelectItem value="accord">2019 Honda Accord</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value.toLocaleString()} mi`, "Mileage"]} />
              <Area type="monotone" dataKey="mileage" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col space-y-1">
            <span className="text-muted-foreground">Total Miles Added</span>
            <span className="text-xl font-bold">{mileageDifference.toLocaleString()} mi</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-muted-foreground">Monthly Average</span>
            <span className="text-xl font-bold">{Math.round(monthlyAverage).toLocaleString()} mi</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

