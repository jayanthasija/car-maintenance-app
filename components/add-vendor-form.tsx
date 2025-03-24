"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"

export default function AddVendorForm() {
  const { toast } = useToast()
  const [newVendor, setNewVendor] = useState({
    name: "",
    type: "",
    phone: "",
    address: "",
    website: "",
    email: "",
    notes: "",
    favorite: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setNewVendor({ ...newVendor, [id.replace("vendor-", "")]: value })
  }

  const handleSwitchChange = (checked: boolean) => {
    setNewVendor({ ...newVendor, favorite: checked })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!newVendor.name || !newVendor.type || !newVendor.phone) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would save to a database
    toast({
      title: "Vendor added",
      description: `${newVendor.name} has been added to your vendors.`,
    })

    // Reset form
    setNewVendor({
      name: "",
      type: "",
      phone: "",
      address: "",
      website: "",
      email: "",
      notes: "",
      favorite: false,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Vendor</CardTitle>
        <CardDescription>Add a new service provider or parts supplier</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="vendor-name">Name *</Label>
            <Input
              id="vendor-name"
              placeholder="Business name"
              value={newVendor.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="vendor-type">Type *</Label>
            <Input
              id="vendor-type"
              placeholder="e.g., Mechanic, Parts Store, Dealership"
              value={newVendor.type}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="vendor-phone">Phone *</Label>
            <Input
              id="vendor-phone"
              placeholder="(555) 123-4567"
              value={newVendor.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="vendor-address">Address</Label>
            <Input
              id="vendor-address"
              placeholder="Street address, city, state, zip"
              value={newVendor.address}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="vendor-website">Website</Label>
            <Input
              id="vendor-website"
              placeholder="www.example.com"
              value={newVendor.website}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="vendor-email">Email</Label>
            <Input
              id="vendor-email"
              placeholder="contact@example.com"
              type="email"
              value={newVendor.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="vendor-notes">Notes</Label>
            <Textarea
              id="vendor-notes"
              placeholder="Additional information about this vendor"
              value={newVendor.notes}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="vendor-favorite" checked={newVendor.favorite} onCheckedChange={handleSwitchChange} />
            <Label htmlFor="vendor-favorite">Mark as favorite</Label>
          </div>

          <Button type="submit" className="w-full">
            Add Vendor
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

