"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

export default function MaintenanceSummary() {
  // Sample data for the chart
  const data = [
    { name: "Oil Changes", value: 4, color: "#8884d8" },
    { name: "Tire Services", value: 2, color: "#82ca9d" },
    { name: "Brakes", value: 1, color: "#ffc658" },
    { name: "Filters", value: 3, color: "#ff8042" },
    { name: "Other", value: 2, color: "#0088fe" },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Maintenance Summary</CardTitle>
            <CardDescription>Breakdown of maintenance services by type</CardDescription>
          </div>
          <Select defaultValue="year">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="year">Past Year</SelectItem>
              <SelectItem value="6months">Past 6 Months</SelectItem>
              <SelectItem value="3months">Past 3 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col space-y-1">
            <span className="text-muted-foreground">Total Services</span>
            <span className="text-xl font-bold">{data.reduce((sum, item) => sum + item.value, 0)}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-muted-foreground">Most Common</span>
            <span className="text-xl font-bold">
              {data.reduce((prev, current) => (prev.value > current.value ? prev : current)).name}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

