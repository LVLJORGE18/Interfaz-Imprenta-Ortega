import { Users, DollarSign, ArrowUpRight, ArrowDownRight, Moon, Sun } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsCard } from "@/components/StatsCard";
import { OverviewChart } from "@/components/OverviewChart";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {isDark ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Revenue"
            value="$45,231.89"
            description="+20.1% from last month"
            icon={DollarSign}
          />
          <StatsCard
            title="Active Users"
            value="2,350"
            description="+180.1% from last month"
            icon={Users}
          />
          <StatsCard
            title="Sales"
            value="+12.5%"
            description="Increased by 12.5%"
            icon={ArrowUpRight}
          />
          <StatsCard
            title="Churn Rate"
            value="-2.3%"
            description="Decreased by 2.3%"
            icon={ArrowDownRight}
          />
        </div>
        <OverviewChart />
      </div>
    </DashboardLayout>
  );
}

export default Index;