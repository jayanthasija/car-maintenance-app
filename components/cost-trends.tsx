"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { useState } from "react"

export default function CostTrends() {
  const [vehicle, setVehicle] = useState("all")

  // Sample data for the chart
  const data = [
    { month: "Jan", camry: 45.99, accord: 0, all: 45.99 },
    { month: "Feb", camry: 0, accord: 25.0, all: 25.0 },
    { month: "Mar", camry: 0, accord: 18.5, all: 18.5 },
    { month: "Apr", camry: 0, accord: 0, all: 0 },
    { month: "May", camry: 0, accord: 320.5, all: 320.5 },
    { month: "Jun", camry: 45.99, accord: 0, all: 45.99 },
    { month: "Jul", camry: 0, accord: 0, all: 0 },
    { month: "Aug", camry: 0, accord: 0, all: 0 },
    { month: "Sep", camry: 0, accord: 0, all: 0 },
    { month: "Oct", camry: 0, accord: 0, all: 0 },
    { month: "Nov", camry: 0, accord: 450.0, all: 450.0 },
    { month: "Dec", camry: 45.99, accord: 0, all: 45.99 },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Cost Trends</CardTitle>
            <CardDescription>Monthly maintenance expenses over time</CardDescription>
          </div>
          <Select value={vehicle} onValueChange={setVehicle}>
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
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, "Cost"]} />
              <Legend />
              {vehicle === "all" ? (
                <Line type="monotone" dataKey="all" name="All Vehicles" stroke="#8884d8" activeDot={{ r: 8 }} />
              ) : vehicle === "camry" ? (
                <Line type="monotone" dataKey="camry" name="2020 Toyota Camry" stroke="#82ca9d" activeDot={{ r: 8 }} />
              ) : (
                <Line type="monotone" dataKey="accord" name="2019 Honda Accord" stroke="#ffc658" activeDot={{ r: 8 }} />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

