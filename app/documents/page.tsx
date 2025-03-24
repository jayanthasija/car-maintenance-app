import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import DocumentStorage from "@/components/document-storage"
import DocumentList from "@/components/document-list"

export const metadata: Metadata = {
  title: "Documents | Car Maintenance Tracker",
  description: "Store and manage important vehicle documents",
}

export default function DocumentsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
          <p className="text-muted-foreground">Store and manage important documents related to your vehicles.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <DocumentStorage />
          <DocumentList />
        </div>
      </div>
    </DashboardLayout>
  )
}

