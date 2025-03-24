"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

export default function DocumentList() {
  const { toast } = useToast()
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Oil Change Receipt",
      type: "receipt",
      vehicle: "2020 Toyota Camry",
      date: "2023-12-15",
      fileSize: "245 KB",
      fileType: "PDF",
    },
    {
      id: 2,
      name: "Vehicle Warranty",
      type: "warranty",
      vehicle: "2020 Toyota Camry",
      date: "2020-01-10",
      fileSize: "1.2 MB",
      fileType: "PDF",
    },
    {
      id: 3,
      name: "Insurance Policy",
      type: "insurance",
      vehicle: "2019 Honda Accord",
      date: "2024-01-01",
      fileSize: "850 KB",
      fileType: "PDF",
    },
    {
      id: 4,
      name: "Tire Replacement Invoice",
      type: "receipt",
      vehicle: "2019 Honda Accord",
      date: "2023-10-15",
      fileSize: "320 KB",
      fileType: "PDF",
    },
  ])

  const getDocumentTypeBadge = (type: string) => {
    switch (type) {
      case "receipt":
        return <Badge variant="outline">Receipt</Badge>
      case "warranty":
        return <Badge variant="outline">Warranty</Badge>
      case "manual":
        return <Badge variant="outline">Manual</Badge>
      case "insurance":
        return <Badge variant="outline">Insurance</Badge>
      case "registration":
        return <Badge variant="outline">Registration</Badge>
      default:
        return <Badge variant="outline">Other</Badge>
    }
  }

  const handleDelete = (id: number) => {
    setDocuments(documents.filter((doc) => doc.id !== id))
    toast({
      title: "Document deleted",
      description: "The document has been removed successfully.",
    })
  }

  const handleDownload = (document: any) => {
    // In a real app, this would download the file
    toast({
      title: "Download started",
      description: `Downloading ${document.name}.`,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stored Documents</CardTitle>
        <CardDescription>Access and manage your vehicle documents</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {documents.length > 0 ? (
            documents.map((document) => (
              <div key={document.id} className="flex flex-col space-y-2 rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{document.name}</span>
                  </div>
                  <div>{getDocumentTypeBadge(document.type)}</div>
                </div>
                <div className="text-sm text-muted-foreground">{document.vehicle}</div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{new Date(document.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">
                      {document.fileType} • {document.fileSize}
                    </span>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleDownload(document)}>
                    <Download className="h-3.5 w-3.5 mr-1" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                    onClick={() => handleDelete(document.id)}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <FileText className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="font-medium">No documents found</p>
              <p className="text-sm text-muted-foreground">Upload documents to see them here.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

