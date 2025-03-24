import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import MaintenanceCalendar from "@/components/maintenance-calendar"
import UpcomingServices from "@/components/upcoming-services"

export const metadata: Metadata = {
  title: "Maintenance Schedule | Car Maintenance Tracker",
  description: "View and manage your vehicle maintenance schedule",
}

export default function SchedulePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Maintenance Schedule</h1>
          <p className="text-muted-foreground">Plan and track upcoming maintenance for your vehicles.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <MaintenanceCalendar />
          <div className="lg:col-span-1">
            <UpcomingServices />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

