import { CalendarDays, Users, Building2 } from "lucide-react";

const stats = [
  {
    name: "Total Bookings",
    value: "2,345",
    icon: CalendarDays,
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Active Teachers",
    value: "48",
    icon: Users,
    change: "+2.1%",
    changeType: "positive",
  },
  {
    name: "Partner Studios",
    value: "12",
    icon: Building2,
    change: "+12.5%",
    changeType: "positive",
  },
];

export function DashboardHeader() {
  return (
    <div className="rounded-lg bg-card p-8">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <p className="text-muted-foreground mt-2">
        Welcome back! Here's an overview of your platform.
      </p>
      
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="rounded-lg border bg-background p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.name}</p>
                  <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                </div>
                <Icon className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="mt-4">
                <span
                  className={`text-sm ${
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-muted-foreground"> from last month</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}