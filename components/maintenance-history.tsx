"use client"

import { useState } from "react"
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
import { Trash2, Eye, Calendar, Wrench, DollarSign } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function MaintenanceHistory() {
  const { toast } = useToast()
  const [records, setRecords] = useState([
    {
      id: 1,
      vehicle: "2020 Toyota Camry",
      service: "Oil Change",
      date: "2023-12-15",
      mileage: 24500,
      cost: 45.99,
      vendor: "Quick Lube",
      notes: "Used synthetic oil, replaced filter",
    },
    {
      id: 2,
      vehicle: "2019 Honda Accord",
      service: "Tire Rotation",
      date: "2024-01-10",
      mileage: 32000,
      cost: 25.0,
      vendor: "Discount Tire",
      notes: "Rotated all four tires, checked pressure",
    },
    {
      id: 3,
      vehicle: "2019 Honda Accord",
      service: "Air Filter Replacement",
      date: "2024-02-05",
      mileage: 32300,
      cost: 18.5,
      vendor: "AutoZone",
      notes: "Replaced cabin and engine air filters",
    },
    {
      id: 4,
      vehicle: "2020 Toyota Camry",
      service: "Brake Inspection",
      date: "2024-03-01",
      mileage: 24900,
      cost: 0.0,
      vendor: "Toyota Dealership",
      notes: "Brakes in good condition, no service needed",
    },
    {
      id: 5,
      vehicle: "2019 Honda Accord",
      service: "Brake Service",
      date: "2023-05-20",
      mileage: 30000,
      cost: 320.5,
      vendor: "Honda Dealership",
      notes: "Replaced front brake pads and rotors",
    },
  ])
  const [selectedRecord, setSelectedRecord] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleDelete = (id: number) => {
    setRecords(records.filter((record) => record.id !== id))
    toast({
      title: "Record deleted",
      description: "The maintenance record has been removed successfully.",
    })
  }

  const handleViewDetails = (record: any) => {
    setSelectedRecord(record)
    setIsDialogOpen(true)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Maintenance Records</CardTitle>
        <CardDescription>Complete history of all maintenance services</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Mileage</TableHead>
              <TableHead>Cost</TableHead>
              <TableHead>Vendor</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
                <TableCell>{record.vehicle}</TableCell>
                <TableCell>{record.service}</TableCell>
                <TableCell>{record.mileage.toLocaleString()} mi</TableCell>
                <TableCell>${record.cost.toFixed(2)}</TableCell>
                <TableCell>{record.vendor}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleViewDetails(record)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive"
                      onClick={() => handleDelete(record.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Maintenance Record Details</DialogTitle>
              <DialogDescription>Complete information about this service.</DialogDescription>
            </DialogHeader>
            {selectedRecord && (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Service</h3>
                    <p className="text-lg font-medium">{selectedRecord.service}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Vehicle</h3>
                    <p className="text-lg font-medium">{selectedRecord.vehicle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground">Date</h3>
                      <p>{new Date(selectedRecord.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wrench className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground">Mileage</h3>
                      <p>{selectedRecord.mileage.toLocaleString()} mi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground">Cost</h3>
                      <p>${selectedRecord.cost.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Vendor</h3>
                  <p>{selectedRecord.vendor}</p>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Notes</h3>
                  <p className="text-sm">{selectedRecord.notes}</p>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

