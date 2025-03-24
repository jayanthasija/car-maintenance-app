import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import VehicleOverview from "@/components/vehicle-overview"

export const metadata: Metadata = {
  title: "Car Maintenance Tracker",
  description: "Track and manage your vehicle maintenance",
}

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Track and manage your vehicle maintenance in one place.</p>
        </div>
        <VehicleOverview />
      </div>
    </DashboardLayout>
  )
}

