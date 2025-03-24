"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, Trash2, Plus } from "lucide-react"
import { useState } from "react"

export default function VehicleSettings() {
  const [open, setOpen] = useState(false)
  const [editingVehicle, setEditingVehicle] = useState<any>(null)

  const vehicles = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: "2020",
      vin: "1HGCM82633A123456",
      licensePlate: "ABC-1234",
    },
    {
      id: 2,
      make: "Honda",
      model: "Accord",
      year: "2019",
      vin: "5FNRL38409B408970",
      licensePlate: "XYZ-5678",
    },
  ]

  const handleEdit = (vehicle: any) => {
    setEditingVehicle(vehicle)
    setOpen(true)
  }

  const handleAdd = () => {
    setEditingVehicle(null)
    setOpen(true)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Vehicle Settings</CardTitle>
            <CardDescription>Manage your vehicles and their information</CardDescription>
          </div>
          <Button onClick={handleAdd}>
            <Plus className="mr-2 h-4 w-4" />
            Add Vehicle
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Make</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>VIN</TableHead>
              <TableHead>License Plate</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vehicles.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell className="font-medium">{vehicle.make}</TableCell>
                <TableCell>{vehicle.model}</TableCell>
                <TableCell>{vehicle.year}</TableCell>
                <TableCell>{vehicle.vin}</TableCell>
                <TableCell>{vehicle.licensePlate}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(vehicle)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingVehicle ? "Edit Vehicle" : "Add New Vehicle"}</DialogTitle>
              <DialogDescription>
                {editingVehicle
                  ? "Update your vehicle information below."
                  : "Enter your vehicle details to add it to your account."}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="make" className="text-right">
                  Make
                </Label>
                <Input
                  id="make"
                  className="col-span-3"
                  placeholder="Toyota"
                  defaultValue={editingVehicle?.make || ""}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="model" className="text-right">
                  Model
                </Label>
                <Input
                  id="model"
                  className="col-span-3"
                  placeholder="Camry"
                  defaultValue={editingVehicle?.model || ""}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="year" className="text-right">
                  Year
                </Label>
                <Input
                  id="year"
                  className="col-span-3"
                  placeholder="2020"
                  type="number"
                  defaultValue={editingVehicle?.year || ""}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="vin" className="text-right">
                  VIN
                </Label>
                <Input
                  id="vin"
                  className="col-span-3"
                  placeholder="1HGCM82633A123456"
                  defaultValue={editingVehicle?.vin || ""}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="license" className="text-right">
                  License Plate
                </Label>
                <Input
                  id="license"
                  className="col-span-3"
                  placeholder="ABC-1234"
                  defaultValue={editingVehicle?.licensePlate || ""}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => setOpen(false)}>
                {editingVehicle ? "Save Changes" : "Add Vehicle"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

