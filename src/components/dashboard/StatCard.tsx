
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  className?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

export const StatCard = ({
  title,
  value,
  description,
  icon,
  className,
  trend,
  trendValue
}: StatCardProps) => {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:shadow-md animate-scale-up",
        className
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center space-x-2">
          {description && (
            <CardDescription className="text-xs">{description}</CardDescription>
          )}
          {trend && trendValue && (
            <span
              className={cn(
                "text-xs font-medium",
                trend === "up" && "text-ipo-green",
                trend === "down" && "text-ipo-red",
                trend === "neutral" && "text-muted-foreground"
              )}
            >
              {trendValue}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
