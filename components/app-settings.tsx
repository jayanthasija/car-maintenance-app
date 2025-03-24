"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Moon, Sun, Monitor } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AppSettings() {
  const { toast } = useToast()
  const [settings, setSettings] = useState({
    theme: "system",
    distanceUnit: "miles",
    currency: "usd",
    dateFormat: "mdy",
    autoBackup: true,
    analytics: true,
  })

  const handleThemeChange = (value: string) => {
    setSettings({ ...settings, theme: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setSettings({ ...settings, [name]: value })
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setSettings({ ...settings, [name]: checked })
  }

  const handleSaveSettings = () => {
    // In a real app, this would save to a database or local storage
    toast({
      title: "Settings saved",
      description: "Your application settings have been updated.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Settings</CardTitle>
        <CardDescription>Customize your application experience</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Theme</Label>
          <RadioGroup value={settings.theme} onValueChange={handleThemeChange} className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="light" />
              <Label htmlFor="light" className="flex items-center gap-1 cursor-pointer">
                <Sun className="h-4 w-4" />
                Light
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="dark" />
              <Label htmlFor="dark" className="flex items-center gap-1 cursor-pointer">
                <Moon className="h-4 w-4" />
                Dark
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="system" id="system" />
              <Label htmlFor="system" className="flex items-center gap-1 cursor-pointer">
                <Monitor className="h-4 w-4" />
                System
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="distance-unit">Distance Unit</Label>
          <Select value={settings.distanceUnit} onValueChange={(value) => handleSelectChange("distanceUnit", value)}>
            <SelectTrigger id="distance-unit">
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="miles">Miles</SelectItem>
              <SelectItem value="kilometers">Kilometers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="currency">Currency</Label>
          <Select value={settings.currency} onValueChange={(value) => handleSelectChange("currency", value)}>
            <SelectTrigger id="currency">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD ($)</SelectItem>
              <SelectItem value="eur">EUR (€)</SelectItem>
              <SelectItem value="gbp">GBP (£)</SelectItem>
              <SelectItem value="cad">CAD ($)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="date-format">Date Format</Label>
          <Select value={settings.dateFormat} onValueChange={(value) => handleSelectChange("dateFormat", value)}>
            <SelectTrigger id="date-format">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
              <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
              <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="auto-backup">Automatic Data Backup</Label>
          <Switch
            id="auto-backup"
            checked={settings.autoBackup}
            onCheckedChange={(checked) => handleSwitchChange("autoBackup", checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="analytics">Usage Analytics</Label>
          <Switch
            id="analytics"
            checked={settings.analytics}
            onCheckedChange={(checked) => handleSwitchChange("analytics", checked)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSaveSettings}>
          Save Settings
        </Button>
      </CardFooter>
    </Card>
  )
}

