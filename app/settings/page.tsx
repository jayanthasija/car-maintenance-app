import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import ProfileSettings from "@/components/profile-settings"
import VehicleSettings from "@/components/vehicle-settings"
import NotificationSettings from "@/components/notification-settings"
import AppSettings from "@/components/app-settings"

export const metadata: Metadata = {
  title: "Settings | Car Maintenance Tracker",
  description: "Configure your account and application preferences",
}

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-4 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account, vehicles, and application preferences.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ProfileSettings />
          <NotificationSettings />
        </div>

        <VehicleSettings />
        <AppSettings />
      </div>
    </DashboardLayout>
  )
}

