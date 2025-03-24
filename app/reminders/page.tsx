import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import ReminderForm from "@/components/reminder-form"
import ReminderList from "@/components/reminder-list"

export const metadata: Metadata = {
  title: "Maintenance Reminders | Car Maintenance Tracker",
  description: "Set up and manage maintenance reminders for your vehicles",
}

export default function RemindersPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Maintenance Reminders</h1>
          <p className="text-muted-foreground">
            Set up reminders for upcoming maintenance tasks and never miss a service.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <ReminderForm />
          <ReminderList />
        </div>
      </div>
    </DashboardLayout>
  )
}

