"use client"

import type React from "react"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Car,
  Gauge,
  Calendar,
  Receipt,
  Users,
  FileText,
  History,
  Bell,
  FileCheck,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useMobile } from "@/hooks/use-mobile"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  const routes = [
    {
      label: "Dashboard",
      icon: <Car className="h-5 w-5" />,
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Mileage",
      icon: <Gauge className="h-5 w-5" />,
      href: "/mileage",
      active: pathname === "/mileage",
    },
    {
      label: "Schedule",
      icon: <Calendar className="h-5 w-5" />,
      href: "/schedule",
      active: pathname === "/schedule",
    },
    {
      label: "Costs",
      icon: <Receipt className="h-5 w-5" />,
      href: "/costs",
      active: pathname === "/costs",
    },
    {
      label: "Vendors",
      icon: <Users className="h-5 w-5" />,
      href: "/vendors",
      active: pathname === "/vendors",
    },
    {
      label: "Service Logs",
      icon: <FileText className="h-5 w-5" />,
      href: "/service-logs",
      active: pathname === "/service-logs",
    },
    {
      label: "History",
      icon: <History className="h-5 w-5" />,
      href: "/history",
      active: pathname === "/history",
    },
    {
      label: "Reminders",
      icon: <Bell className="h-5 w-5" />,
      href: "/reminders",
      active: pathname === "/reminders",
    },
    {
      label: "Documents",
      icon: <FileCheck className="h-5 w-5" />,
      href: "/documents",
      active: pathname === "/documents",
    },
    {
      label: "Reports",
      icon: <BarChart3 className="h-5 w-5" />,
      href: "/reports",
      active: pathname === "/reports",
    },
    {
      label: "Settings",
      icon: <Settings className="h-5 w-5" />,
      href: "/settings",
      active: pathname === "/settings",
    },
  ]

  return (
    <div className="flex min-h-screen w-full bg-muted/10">
      {!isMobile && (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 border-r bg-background lg:flex lg:flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Car className="h-6 w-6" />
              <span>Car Maintenance</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <ul className="grid gap-1 px-2">
              {routes.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/50",
                      route.active ? "bg-muted" : "transparent",
                    )}
                  >
                    {route.icon}
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto border-t p-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5 text-sm">
                <div className="font-medium">User Name</div>
                <div className="text-xs text-muted-foreground">user@example.com</div>
              </div>
            </div>
          </div>
        </aside>
      )}
      <div className={cn("flex flex-col w-full", !isMobile && "lg:pl-64")}>
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
          {isMobile && (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <div className="flex h-14 items-center border-b px-4">
                  <Link href="/" className="flex items-center gap-2 font-semibold">
                    <Car className="h-6 w-6" />
                    <span>Car Maintenance</span>
                  </Link>
                  <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <nav className="flex-1 overflow-auto py-4">
                  <ul className="grid gap-1 px-2">
                    {routes.map((route) => (
                      <li key={route.href}>
                        <Link
                          href={route.href}
                          className={cn(
                            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/50",
                            route.active ? "bg-muted" : "transparent",
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {route.icon}
                          {route.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          )}
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Car Maintenance Tracker</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Bell className="mr-2 h-4 w-4" />
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
            </Button>
            {isMobile && (
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

