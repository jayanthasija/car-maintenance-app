"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function CostByVehicle() {
  // Sample data for the chart
  const data = [
    { name: "2020 Toyota Camry", cost: 365.48 },
    { name: "2019 Honda Accord", cost: 586.99 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost By Vehicle</CardTitle>
        <CardDescription>Maintenance expenses for each vehicle</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip formatter={(value) => [`$${value}`, "Cost"]} />
              <Legend />
              <Bar dataKey="cost" name="Maintenance Cost" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col space-y-1">
            <span className="text-muted-foreground">Most Expensive</span>
            <span className="text-xl font-bold">
              {data.reduce((prev, current) => (prev.cost > current.cost ? prev : current)).name}
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-muted-foreground">Cost Difference</span>
            <span className="text-xl font-bold">${Math.abs(data[0].cost - data[1].cost).toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

