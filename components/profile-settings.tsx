"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, MapPin, Camera } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ProfileSettings() {
  const { toast } = useToast()
  const [profile, setProfile] = useState({
    name: "User Name",
    email: "user@example.com",
    phone: "(123) 456-7890",
    location: "City, State",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setProfile({ ...profile, [id]: value })
  }

  const handleSaveProfile = () => {
    // In a real app, this would save to a database
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
        <CardDescription>Manage your personal information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-semibold">{profile.name}</h3>
            <p className="text-sm text-muted-foreground">{profile.email}</p>
            <Button variant="outline" size="sm" className="mt-2">
              <Camera className="mr-2 h-4 w-4" />
              Change Photo
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <div className="flex items-center rounded-md border px-3">
            <User className="mr-2 h-4 w-4 text-muted-foreground" />
            <Input
              id="name"
              placeholder="Your name"
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              value={profile.name}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="flex items-center rounded-md border px-3">
            <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              placeholder="your.email@example.com"
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              value={profile.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <div className="flex items-center rounded-md border px-3">
            <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
            <Input
              id="phone"
              placeholder="(123) 456-7890"
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              value={profile.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <div className="flex items-center rounded-md border px-3">
            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
            <Input
              id="location"
              placeholder="City, State"
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              value={profile.location}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSaveProfile}>
          Save Profile
        </Button>
      </CardFooter>
    </Card>
  )
}

