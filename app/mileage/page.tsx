import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import MileageTracker from "@/components/mileage-tracker"
import MileageChart from "@/components/mileage-chart"

export const metadata: Metadata = {
  title: "Mileage Tracking | Car Maintenance Tracker",
  description: "Track and analyze your vehicle mileage over time",
}

export default function MileagePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Mileage Tracking</h1>
          <p className="text-muted-foreground">
            Monitor and record your vehicle mileage to track usage and plan maintenance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <MileageTracker />
          <MileageChart />
        </div>
      </div>
    </DashboardLayout>
  )
}

