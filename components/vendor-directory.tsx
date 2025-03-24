"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, MapPin, Globe, Mail, Star, Trash2, Pencil } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function VendorDirectory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [vendors, setVendors] = useState([
    {
      id: 1,
      name: "Quick Lube",
      type: "Oil Change",
      phone: "(555) 123-4567",
      address: "123 Main St, Anytown, USA",
      website: "quicklube.example.com",
      email: "service@quicklube.example.com",
      notes: "Good prices on synthetic oil changes.",
      favorite: true,
    },
    {
      id: 2,
      name: "Discount Tire",
      type: "Tire Service",
      phone: "(555) 987-6543",
      address: "456 Oak Ave, Anytown, USA",
      website: "discounttire.example.com",
      email: "service@discounttire.example.com",
      notes: "Free tire rotations with purchase.",
      favorite: false,
    },
    {
      id: 3,
      name: "AutoZone",
      type: "Parts Store",
      phone: "(555) 456-7890",
      address: "789 Elm St, Anytown, USA",
      website: "autozone.example.com",
      email: "service@autozone.example.com",
      notes: "Good selection of filters and basic parts.",
      favorite: false,
    },
    {
      id: 4,
      name: "Toyota Dealership",
      type: "Dealership",
      phone: "(555) 789-0123",
      address: "321 Pine Rd, Anytown, USA",
      website: "toyotadealer.example.com",
      email: "service@toyotadealer.example.com",
      notes: "Expensive but reliable for complex issues.",
      favorite: true,
    },
  ])
  const [editingVendor, setEditingVendor] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredVendors = vendors.filter(
    (vendor) =>
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDelete = (id: number) => {
    setVendors(vendors.filter((vendor) => vendor.id !== id))
  }

  const handleEdit = (vendor: any) => {
    setEditingVendor(vendor)
    setIsDialogOpen(true)
  }

  const handleSaveEdit = () => {
    if (editingVendor) {
      setVendors(vendors.map((vendor) => (vendor.id === editingVendor.id ? editingVendor : vendor)))
      setIsDialogOpen(false)
    }
  }

  const toggleFavorite = (id: number) => {
    setVendors(vendors.map((vendor) => (vendor.id === id ? { ...vendor, favorite: !vendor.favorite } : vendor)))
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Vendor Directory</CardTitle>
        <CardDescription>Your saved service providers and vendors</CardDescription>
        <div className="mt-2">
          <Input placeholder="Search vendors..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredVendors.length > 0 ? (
            filteredVendors.map((vendor) => (
              <div key={vendor.id} className="flex flex-col space-y-2 rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{vendor.name}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={vendor.favorite ? "text-yellow-500" : "text-muted-foreground"}
                      onClick={() => toggleFavorite(vendor.id)}
                    >
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(vendor)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive"
                      onClick={() => handleDelete(vendor.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="text-sm font-medium text-muted-foreground">{vendor.type}</div>
                <div className="grid gap-1 text-sm">
                  <div className="flex items-center gap-1">
                    <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{vendor.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{vendor.address}</span>
                  </div>
                  {vendor.website && (
                    <div className="flex items-center gap-1">
                      <Globe className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{vendor.website}</span>
                    </div>
                  )}
                  {vendor.email && (
                    <div className="flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{vendor.email}</span>
                    </div>
                  )}
                </div>
                {vendor.notes && (
                  <div className="mt-1 text-sm text-muted-foreground">
                    <span className="font-medium">Notes: </span>
                    {vendor.notes}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <p className="font-medium">No vendors found</p>
              <p className="text-sm text-muted-foreground">Try a different search term or add a new vendor.</p>
            </div>
          )}
        </div>
      </CardContent>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Vendor</DialogTitle>
            <DialogDescription>Update vendor information below.</DialogDescription>
          </DialogHeader>
          {editingVendor && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-name">Name</Label>
                <Input
                  id="edit-name"
                  value={editingVendor.name}
                  onChange={(e) => setEditingVendor({ ...editingVendor, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-type">Type</Label>
                <Input
                  id="edit-type"
                  value={editingVendor.type}
                  onChange={(e) => setEditingVendor({ ...editingVendor, type: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-phone">Phone</Label>
                <Input
                  id="edit-phone"
                  value={editingVendor.phone}
                  onChange={(e) => setEditingVendor({ ...editingVendor, phone: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-address">Address</Label>
                <Input
                  id="edit-address"
                  value={editingVendor.address}
                  onChange={(e) => setEditingVendor({ ...editingVendor, address: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-website">Website</Label>
                <Input
                  id="edit-website"
                  value={editingVendor.website}
                  onChange={(e) => setEditingVendor({ ...editingVendor, website: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-email">Email</Label>
                <Input
                  id="edit-email"
                  value={editingVendor.email}
                  onChange={(e) => setEditingVendor({ ...editingVendor, email: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-notes">Notes</Label>
                <Textarea
                  id="edit-notes"
                  value={editingVendor.notes}
                  onChange={(e) => setEditingVendor({ ...editingVendor, notes: e.target.value })}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button type="submit" onClick={handleSaveEdit}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

