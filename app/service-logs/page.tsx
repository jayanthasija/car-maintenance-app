import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import ServiceLogForm from "@/components/service-log-form"
import ServiceLogList from "@/components/service-log-list"

export const metadata: Metadata = {
  title: "Service Logs | Car Maintenance Tracker",
  description: "Log and track all maintenance services for your vehicles",
}

export default function ServiceLogsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Service Logs</h1>
          <p className="text-muted-foreground">Record and track all maintenance services performed on your vehicles.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <ServiceLogForm />
          <ServiceLogList />
        </div>
      </div>
    </DashboardLayout>
  )
}

