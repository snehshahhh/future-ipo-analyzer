
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
        "overflow-hidden transition-all hover:shadow-md animate-scale-up border-opacity-50 hover:border-primary/50 dark:hover:border-primary/50",
        className
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">{title}</CardTitle>
        {icon && <div className="text-muted-foreground rounded-full p-2 bg-accent/30">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{value}</div>
        <div className="flex items-center space-x-2 mt-1">
          {description && (
            <CardDescription className="text-xs">{description}</CardDescription>
          )}
          {trend && trendValue && (
            <span
              className={cn(
                "text-xs font-medium flex items-center",
                trend === "up" && "text-ipo-green",
                trend === "down" && "text-ipo-red",
                trend === "neutral" && "text-muted-foreground"
              )}
            >
              {trend === "up" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              )}
              {trend === "down" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.707-8.707l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 00-1.414 1.414z" clipRule="evenodd" />
                </svg>
              )}
              {trendValue}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
