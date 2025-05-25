
import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/dashboard/HeroSection";
import { FeaturedIPOs } from "@/components/dashboard/FeaturedIPOs";
import { useEffect } from "react";

const Index = () => {
  // Add fade-in effect when the page loads
  useEffect(() => {
    document.title = "IPO Tracker - Home";
  }, []);

  return (
    <PageLayout>
      <HeroSection />
      <FeaturedIPOs />
    </PageLayout>
  );
};

export default Index;
