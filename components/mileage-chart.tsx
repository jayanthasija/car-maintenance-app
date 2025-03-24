"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function MileageChart() {
  // Sample data for the chart
  const mileageData = [
    { month: "Jan", mileage: 24000 },
    { month: "Feb", mileage: 24300 },
    { month: "Mar", mileage: 24600 },
    { month: "Apr", mileage: 25000 },
    { month: "May", mileage: 25200 },
    { month: "Jun", mileage: 25500 },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Mileage History</CardTitle>
            <CardDescription>Track your vehicle mileage over time</CardDescription>
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
        <Tabs defaultValue="6months">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="3months">3 Months</TabsTrigger>
            <TabsTrigger value="6months">6 Months</TabsTrigger>
            <TabsTrigger value="1year">1 Year</TabsTrigger>
          </TabsList>
          <TabsContent value="3months" className="h-[300px] pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mileageData.slice(-3)} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="mileage" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="6months" className="h-[300px] pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mileageData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="mileage" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="1year" className="h-[300px] pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={[
                  ...mileageData,
                  { month: "Jul", mileage: 25800 },
                  { month: "Aug", mileage: 26100 },
                  { month: "Sep", mileage: 26400 },
                  { month: "Oct", mileage: 26700 },
                  { month: "Nov", mileage: 27000 },
                  { month: "Dec", mileage: 27300 },
                ]}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="mileage" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

