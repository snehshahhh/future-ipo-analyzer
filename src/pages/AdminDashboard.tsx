
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { useAuth } from "@/contexts/AuthContext";
import { AdminIPOsTable } from "@/components/admin/AdminIPOsTable";
import { AdminStatsCards } from "@/components/admin/AdminStatsCards";
import { dummyIpos } from "@/lib/data";
import { Navigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, LineChart } from "recharts";

const AdminDashboard = () => {
  const { isAdmin } = useAuth();
  
  useEffect(() => {
    document.title = "IPO Tracker - Admin Dashboard";
  }, []);
  
  // Redirect if not admin
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <PageLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6 animate-fade-in">Admin Dashboard</h1>
        
        <AdminStatsCards ipos={dummyIpos} />
        
        <Tabs defaultValue="ipos" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="ipos">IPO Management</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ipos">
            <AdminIPOsTable ipos={dummyIpos} />
          </TabsContent>
          
          <TabsContent value="users">
            <div className="bg-card rounded-lg p-8 text-center animate-fade-in">
              <h3 className="text-xl font-medium mb-4">User Management</h3>
              <p className="text-muted-foreground">
                This section will contain user management functionality.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="bg-card rounded-lg p-8 text-center animate-fade-in">
              <h3 className="text-xl font-medium mb-4">System Settings</h3>
              <p className="text-muted-foreground">
                This section will contain system configuration options.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default AdminDashboard;
