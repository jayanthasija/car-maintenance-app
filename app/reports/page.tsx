import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import MaintenanceSummary from "@/components/maintenance-summary"
import CostAnalysis from "@/components/cost-analysis"
import ServiceFrequency from "@/components/service-frequency"
import MileageReport from "@/components/mileage-report"

export const metadata: Metadata = {
  title: "Reports | Car Maintenance Tracker",
  description: "View detailed reports and analytics for your vehicle maintenance",
}

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            Analyze your vehicle maintenance data with detailed reports and visualizations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <MaintenanceSummary />
          <CostAnalysis />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ServiceFrequency />
          <MileageReport />
        </div>
      </div>
    </DashboardLayout>
  )
}

