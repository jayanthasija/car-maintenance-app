"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, TrendingUp, TrendingDown, Calendar } from "lucide-react"
import { useState } from "react"

export default function CostOverview() {
  const [timeRange, setTimeRange] = useState("year")

  // Sample data
  const costData = {
    year: {
      total: 952.47,
      average: 79.37,
      change: 12.5,
      increasing: true,
    },
    sixMonths: {
      total: 456.98,
      average: 76.16,
      change: 8.2,
      increasing: true,
    },
    threeMonths: {
      total: 89.49,
      average: 29.83,
      change: 5.3,
      increasing: false,
    },
  }

  const getCurrentData = () => {
    switch (timeRange) {
      case "year":
        return costData.year
      case "6months":
        return costData.sixMonths
      case "3months":
        return costData.threeMonths
      default:
        return costData.year
    }
  }

  const currentData = getCurrentData()

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">${currentData.total.toFixed(2)}</h2>
              <p className="text-sm text-muted-foreground">Total maintenance costs</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">${currentData.average.toFixed(2)}</h2>
              <p className="text-sm text-muted-foreground">Monthly average</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              {currentData.increasing ? (
                <TrendingUp className="h-6 w-6 text-red-500" />
              ) : (
                <TrendingDown className="h-6 w-6 text-green-500" />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold flex items-center">
                {currentData.change}%
                <span className={currentData.increasing ? "text-red-500" : "text-green-500"}>
                  {currentData.increasing ? "↑" : "↓"}
                </span>
              </h2>
              <p className="text-sm text-muted-foreground">From previous period</p>
            </div>
          </div>

          <div>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="year">Past Year</SelectItem>
                <SelectItem value="6months">Past 6 Months</SelectItem>
                <SelectItem value="3months">Past 3 Months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

