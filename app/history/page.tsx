import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import MaintenanceHistory from "@/components/maintenance-history"
import HistoryFilters from "@/components/history-filters"

export const metadata: Metadata = {
  title: "Maintenance History | Car Maintenance Tracker",
  description: "View your complete vehicle maintenance history",
}

export default function HistoryPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Maintenance History</h1>
          <p className="text-muted-foreground">View and search your complete vehicle maintenance history.</p>
        </div>
        <HistoryFilters />
        <MaintenanceHistory />
      </div>
    </DashboardLayout>
  )
}

