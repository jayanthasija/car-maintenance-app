"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"

export default function HistoryFilters() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end">
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium">Search</label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by service, vendor, etc." className="pl-8" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
            <div className="space-y-2">
              <label className="text-sm font-medium">Vehicle</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All vehicles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All vehicles</SelectItem>
                  <SelectItem value="camry">2020 Toyota Camry</SelectItem>
                  <SelectItem value="accord">2019 Honda Accord</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Date Range</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All time</SelectItem>
                  <SelectItem value="year">Past year</SelectItem>
                  <SelectItem value="6months">Past 6 months</SelectItem>
                  <SelectItem value="3months">Past 3 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="gap-1">
            <Filter className="h-4 w-4" />
            Apply Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

