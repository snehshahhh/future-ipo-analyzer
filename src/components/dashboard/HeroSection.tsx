
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background to-muted">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="animate-slide-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-r from-ipo-blue via-ipo-purple to-ipo-pink dark:from-ipo-cyan dark:via-ipo-blue dark:to-ipo-indigo bg-clip-text text-transparent">
              Upcoming IPOs at Your Fingertips
            </h1>
            <p className="animate-slide-up animation-delay-100 mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Track, analyze, and make informed decisions on upcoming IPOs with our comprehensive analysis framework.
            </p>
          </div>
          <div className="space-x-4 animate-slide-up animation-delay-200">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300">
              <Link to="/ipos">
                Explore IPOs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract gradient */}
      <div className="absolute -bottom-48 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-ipo-blue/20 dark:bg-ipo-indigo/20 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ipo-purple/40 dark:bg-ipo-purple/20 rounded-full blur-3xl opacity-20 animation-delay-200 animate-float"></div>
      </div>
    </section>
  );
};
