"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

export default function CostBreakdown() {
  // Sample data for the chart
  const data = [
    { name: "Oil Changes", value: 183.96, color: "#8884d8" },
    { name: "Tires", value: 450.0, color: "#82ca9d" },
    { name: "Brakes", value: 320.5, color: "#ffc658" },
    { name: "Filters", value: 55.5, color: "#ff8042" },
    { name: "Other", value: 45.0, color: "#0088fe" },
  ]

  const totalCost = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost Breakdown</CardTitle>
        <CardDescription>Maintenance expenses by category</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, "Cost"]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col space-y-1">
            <span className="text-muted-foreground">Total Cost</span>
            <span className="text-xl font-bold">${totalCost.toFixed(2)}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-muted-foreground">Highest Category</span>
            <span className="text-xl font-bold">
              {data.reduce((prev, current) => (prev.value > current.value ? prev : current)).name}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

