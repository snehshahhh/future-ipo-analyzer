
import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/dashboard/HeroSection";
import { FeaturedIPOs } from "@/components/dashboard/FeaturedIPOs";
import { dummyIpos } from "@/lib/data";
import { useEffect } from "react";

const Index = () => {
  // Add fade-in effect when the page loads
  useEffect(() => {
    document.title = "IPO Tracker - Home";
  }, []);

  return (
    <PageLayout>
      <HeroSection />
      <FeaturedIPOs ipos={dummyIpos} />
    </PageLayout>
  );
};

export default Index;
