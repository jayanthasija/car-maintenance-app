"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ServiceFrequency() {
  const serviceData = [
    {
      service: "Oil Change",
      count: 4,
      averageInterval: "3 months",
      averageCost: "$45.99",
      lastPerformed: "2023-12-15",
    },
    {
      service: "Tire Rotation",
      count: 2,
      averageInterval: "6 months",
      averageCost: "$25.00",
      lastPerformed: "2024-01-10",
    },
    {
      service: "Brake Inspection",
      count: 1,
      averageInterval: "12 months",
      averageCost: "$0.00",
      lastPerformed: "2024-03-01",
    },
    {
      service: "Air Filter",
      count: 3,
      averageInterval: "4 months",
      averageCost: "$18.50",
      lastPerformed: "2024-02-05",
    },
    {
      service: "Brake Service",
      count: 1,
      averageInterval: "12 months",
      averageCost: "$320.50",
      lastPerformed: "2023-05-20",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Service Frequency</CardTitle>
            <CardDescription>Analysis of service intervals and frequency</CardDescription>
          </div>
          <Select defaultValue="year">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="year">Past Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead className="text-right">Count</TableHead>
              <TableHead className="text-right">Avg. Interval</TableHead>
              <TableHead className="text-right">Avg. Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {serviceData.map((item) => (
              <TableRow key={item.service}>
                <TableCell className="font-medium">{item.service}</TableCell>
                <TableCell className="text-right">{item.count}</TableCell>
                <TableCell className="text-right">{item.averageInterval}</TableCell>
                <TableCell className="text-right">{item.averageCost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

