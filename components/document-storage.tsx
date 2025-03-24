"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileUp, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function DocumentStorage() {
  const { toast } = useToast()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    vehicle: "",
    documentType: "",
    documentName: "",
    documentDate: "",
    notes: "",
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.vehicle || !formData.documentType || !formData.documentName || !selectedFile) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields and select a file.",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would upload the file to a server
    toast({
      title: "Document uploaded",
      description: `${formData.documentName} has been uploaded successfully.`,
    })

    // Reset form
    setFormData({
      vehicle: "",
      documentType: "",
      documentName: "",
      documentDate: "",
      notes: "",
    })
    setSelectedFile(null)

    // Reset file input
    const fileInput = document.getElementById("file-upload") as HTMLInputElement
    if (fileInput) {
      fileInput.value = ""
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Document</CardTitle>
        <CardDescription>Store important vehicle documents like receipts, warranties, and manuals</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="vehicle">Vehicle</Label>
            <Select value={formData.vehicle} onValueChange={(value) => handleSelectChange("vehicle", value)}>
              <SelectTrigger id="vehicle">
                <SelectValue placeholder="Select vehicle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="camry">2020 Toyota Camry</SelectItem>
                <SelectItem value="accord">2019 Honda Accord</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="documentType">Document Type</Label>
            <Select value={formData.documentType} onValueChange={(value) => handleSelectChange("documentType", value)}>
              <SelectTrigger id="documentType">
                <SelectValue placeholder="Select document type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="receipt">Receipt</SelectItem>
                <SelectItem value="warranty">Warranty</SelectItem>
                <SelectItem value="manual">Owner's Manual</SelectItem>
                <SelectItem value="insurance">Insurance</SelectItem>
                <SelectItem value="registration">Registration</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="documentName">Document Name</Label>
            <Input
              id="documentName"
              placeholder="Enter a name for this document"
              value={formData.documentName}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="documentDate">Document Date</Label>
            <Input id="documentDate" type="date" value={formData.documentDate} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Input
              id="notes"
              placeholder="Additional information about this document"
              value={formData.notes}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file-upload">Upload File</Label>
            <div className="flex items-center gap-2">
              <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
              <Label
                htmlFor="file-upload"
                className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <FileUp className="mr-2 h-4 w-4" />
                {selectedFile ? selectedFile.name : "Select file"}
              </Label>
            </div>
            {selectedFile && (
              <p className="text-xs text-muted-foreground">
                {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
              </p>
            )}
          </div>

          <Button type="submit" className="w-full">
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

