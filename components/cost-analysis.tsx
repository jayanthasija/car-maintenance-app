"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function CostAnalysis() {
  // Sample data for the chart
  const data = [
    { month: "Jan", cost: 0 },
    { month: "Feb", cost: 45.99 },
    { month: "Mar", cost: 0 },
    { month: "Apr", cost: 25 },
    { month: "May", cost: 320.5 },
    { month: "Jun", cost: 0 },
    { month: "Jul", cost: 45.99 },
    { month: "Aug", cost: 18.5 },
    { month: "Sep", cost: 0 },
    { month: "Oct", cost: 0 },
    { month: "Nov", cost: 450 },
    { month: "Dec", cost: 45.99 },
  ]

  const totalCost = data.reduce((sum, item) => sum + item.cost, 0)
  const averageCost = totalCost / 12

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Cost Analysis</CardTitle>
            <CardDescription>Monthly maintenance expenses</CardDescription>
          </div>
          <Select defaultValue="camry">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select vehicle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Vehicles</SelectItem>
              <SelectItem value="camry">2020 Toyota Camry</SelectItem>
              <SelectItem value="accord">2019 Honda Accord</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, "Cost"]} />
              <Legend />
              <Bar dataKey="cost" name="Maintenance Cost" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col space-y-1">
            <span className="text-muted-foreground">Total Cost</span>
            <span className="text-xl font-bold">${totalCost.toFixed(2)}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-muted-foreground">Monthly Average</span>
            <span className="text-xl font-bold">${averageCost.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

