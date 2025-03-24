import { DollarSign, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MaintenanceCosts() {
  const costData = [
    {
      category: "Oil Changes",
      amount: 135.97,
      change: 5.2,
      increasing: true,
    },
    {
      category: "Tires",
      amount: 450.0,
      change: 0,
      increasing: false,
    },
    {
      category: "Brakes",
      amount: 320.5,
      change: 12.5,
      increasing: true,
    },
    {
      category: "Filters",
      amount: 45.75,
      change: 2.1,
      increasing: false,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Maintenance Costs</CardTitle>
        <CardDescription>Year-to-date maintenance expenses by category</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {costData.map((item) => (
            <div key={item.category} className="flex items-center justify-between rounded-lg border p-3">
              <div className="grid gap-1">
                <div className="font-medium">{item.category}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-sm">
                  <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="font-medium">${item.amount.toFixed(2)}</span>
                </div>
                {item.change > 0 && (
                  <div className="flex items-center gap-1 text-sm">
                    {item.increasing ? (
                      <TrendingUp className={`h-3.5 w-3.5 ${item.increasing ? "text-red-500" : "text-green-500"}`} />
                    ) : (
                      <TrendingDown className={`h-3.5 w-3.5 ${item.increasing ? "text-red-500" : "text-green-500"}`} />
                    )}
                    <span className={item.increasing ? "text-red-500" : "text-green-500"}>{item.change}%</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between rounded-lg border p-3 bg-muted/50">
            <div className="font-medium">Total</div>
            <div className="font-bold">${costData.reduce((sum, item) => sum + item.amount, 0).toFixed(2)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

