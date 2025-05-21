
import { Calendar, TrendingUp, PieChart, Users, Wallet } from "lucide-react";
import { StatCard } from "../dashboard/StatCard";
import { IpoDetail } from "@/lib/types";

interface AdminStatsCardsProps {
  ipos: IpoDetail[];
}

export const AdminStatsCards = ({ ipos }: AdminStatsCardsProps) => {
  // Calculate statistics
  const upcomingIpos = ipos.filter(ipo => ipo.status === "upcoming").length;
  const openIpos = ipos.filter(ipo => ipo.status === "open").length;
  const closedIpos = ipos.filter(ipo => ipo.status === "closed").length;
  const strongBuyIpos = ipos.filter(ipo => ipo.recommendation === "Strong Buy").length;
  
  // Calculate total issue size (this is just an example calculation)
  const totalIssueSize = ipos.reduce((total, ipo) => {
    // Extract numeric value from ₹X Cr format
    const match = ipo.issueSize.match(/₹(\d+(\.\d+)?) Cr/);
    if (match && match[1]) {
      return total + parseFloat(match[1]);
    }
    return total;
  }, 0);
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      <StatCard
        title="Upcoming IPOs"
        value={upcomingIpos.toString()}
        description="Scheduled for listing"
        icon={<Calendar className="h-4 w-4" />}
        trend="up"
        trendValue="+2 from last month"
      />
      
      <StatCard
        title="Open IPOs"
        value={openIpos.toString()}
        description="Currently accepting bids"
        icon={<TrendingUp className="h-4 w-4" />}
        trend="neutral"
        trendValue="Same as last month"
      />
      
      <StatCard
        title="Recommended IPOs"
        value={strongBuyIpos.toString()}
        description="With 'Strong Buy' rating"
        icon={<PieChart className="h-4 w-4" />}
        trend="up"
        trendValue="+1 from last month"
      />
      
      <StatCard
        title="Total Issue Size"
        value={`₹${totalIssueSize.toFixed(0)} Cr`}
        description="Cumulative value"
        icon={<Wallet className="h-4 w-4" />}
        trend="up"
        trendValue="+₹350 Cr from last month"
      />
    </div>
  );
};
