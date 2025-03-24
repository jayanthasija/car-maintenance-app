"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Mail, MessageSquare, Calendar } from "lucide-react"

export default function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Configure how you receive maintenance alerts and reminders</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="h-4 w-4 text-muted-foreground" />
            <Label htmlFor="maintenance-due">Maintenance Due Alerts</Label>
          </div>
          <Switch id="maintenance-due" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <Label htmlFor="upcoming-service">Upcoming Service Reminders</Label>
          </div>
          <Switch id="upcoming-service" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <Label htmlFor="email-notifications">Email Notifications</Label>
          </div>
          <Switch id="email-notifications" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
            <Label htmlFor="sms-notifications">SMS Notifications</Label>
          </div>
          <Switch id="sms-notifications" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="reminder-time">Reminder Time</Label>
          <Select defaultValue="7days">
            <SelectTrigger id="reminder-time">
              <SelectValue placeholder="Select reminder time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1day">1 day before</SelectItem>
              <SelectItem value="3days">3 days before</SelectItem>
              <SelectItem value="7days">7 days before</SelectItem>
              <SelectItem value="14days">14 days before</SelectItem>
              <SelectItem value="30days">30 days before</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save Notification Settings</Button>
      </CardFooter>
    </Card>
  )
}

