"use client"

import { useState } from "react"
import { Car, Calendar, AlertTriangle, DollarSign, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import VehicleCard from "@/components/vehicle-card"
import UpcomingMaintenance from "@/components/upcoming-maintenance"
import RecentServices from "@/components/recent-services"
import MaintenanceCosts from "@/components/maintenance-costs"

export default function VehicleOverview() {
  const [open, setOpen] = useState(false)

  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Vehicle Overview</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Vehicle
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Vehicle</DialogTitle>
              <DialogDescription>Enter your vehicle details to start tracking maintenance.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="make" className="text-right">
                  Make
                </Label>
                <Input id="make" className="col-span-3" placeholder="Toyota" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="model" className="text-right">
                  Model
                </Label>
                <Input id="model" className="col-span-3" placeholder="Camry" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="year" className="text-right">
                  Year
                </Label>
                <Input id="year" className="col-span-3" placeholder="2020" type="number" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mileage" className="text-right">
                  Mileage
                </Label>
                <Input id="mileage" className="col-span-3" placeholder="25000" type="number" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="vin" className="text-right">
                  VIN
                </Label>
                <Input id="vin" className="col-span-3" placeholder="1HGCM82633A123456" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => setOpen(false)}>
                Save Vehicle
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <VehicleCard
          make="Toyota"
          model="Camry"
          year="2020"
          mileage={25000}
          lastService="Oil Change"
          lastServiceDate="2023-12-15"
        />
        <VehicleCard
          make="Honda"
          model="Accord"
          year="2019"
          mileage={32500}
          lastService="Tire Rotation"
          lastServiceDate="2024-01-10"
        />
        <Card className="flex h-[220px] flex-col items-center justify-center border-dashed">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="mb-4 rounded-full bg-muted p-3">
              <Plus className="h-6 w-6" />
            </div>
            <Button variant="secondary" onClick={() => setOpen(true)}>
              Add Vehicle
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="recent">Recent Services</TabsTrigger>
          <TabsTrigger value="costs">Costs</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="mt-6">
          <UpcomingMaintenance />
        </TabsContent>
        <TabsContent value="recent" className="mt-6">
          <RecentServices />
        </TabsContent>
        <TabsContent value="costs" className="mt-6">
          <MaintenanceCosts />
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Vehicles</CardTitle>
            <Car className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Across all locations</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Services</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">In the next 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Requires immediate attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,248</div>
            <p className="text-xs text-muted-foreground">Year to date</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

