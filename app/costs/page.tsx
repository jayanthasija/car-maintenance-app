import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import CostOverview from "@/components/cost-overview"
import CostBreakdown from "@/components/cost-breakdown"
import CostByVehicle from "@/components/cost-by-vehicle"
import CostTrends from "@/components/cost-trends"

export const metadata: Metadata = {
  title: "Maintenance Costs | Car Maintenance Tracker",
  description: "Track and analyze your vehicle maintenance costs",
}

export default function CostsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Maintenance Costs</h1>
          <p className="text-muted-foreground">Track and analyze your vehicle maintenance expenses.</p>
        </div>

        <CostOverview />

        <div className="grid gap-6 md:grid-cols-2">
          <CostBreakdown />
          <CostByVehicle />
        </div>

        <CostTrends />
      </div>
    </DashboardLayout>
  )
}

