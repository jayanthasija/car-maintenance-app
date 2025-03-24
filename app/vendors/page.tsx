import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import VendorDirectory from "@/components/vendor-directory"
import AddVendorForm from "@/components/add-vendor-form"

export const metadata: Metadata = {
  title: "Vendors | Car Maintenance Tracker",
  description: "Manage your service providers and vendors",
}

export default function VendorsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Vendors</h1>
          <p className="text-muted-foreground">Manage your service providers, mechanics, and parts suppliers.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <AddVendorForm />
          <VendorDirectory />
        </div>
      </div>
    </DashboardLayout>
  )
}

