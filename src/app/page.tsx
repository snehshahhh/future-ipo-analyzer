
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-ipo-blue/20 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-ipo-purple/20 to-transparent rounded-full blur-3xl animate-float animation-delay-200"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-ipo-pink/20 to-transparent rounded-full blur-3xl animate-float animation-delay-400"></div>
      
      <section className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-ipo-blue/10 to-ipo-purple/10 border border-ipo-blue/20 mb-8 animate-pulse-glow">
            <span className="text-sm font-medium text-gradient">🚀 Track the Future of IPOs</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-slide-up">
            Discover the Next
            <br />
            <span className="text-gradient">Big Investment</span>
            <br />
            Opportunity
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up animation-delay-200">
            Stay ahead of the market with comprehensive IPO analysis, real-time updates, 
            and data-driven insights. Make informed investment decisions with our advanced tracking platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-300">
            <Link 
              href="/ipos" 
              className="group relative px-8 py-4 bg-gradient-to-r from-ipo-blue to-ipo-purple rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow"
            >
              <span className="relative z-10">Explore IPOs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-ipo-purple to-ipo-pink rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/login" 
              className="px-8 py-4 glassmorphism rounded-xl font-semibold hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Free
            </Link>
          </div>
        </div>

        {/* Featured IPO Card */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in animation-delay-400">
          <div className="glassmorphism rounded-2xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-ipo-emerald/20 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-ipo-emerald to-ipo-cyan rounded-full text-white text-xs font-semibold mb-3">
                    🔥 Hot IPO
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gradient-secondary mb-2">
                    Blue Water Logistics
                  </h2>
                  <p className="text-muted-foreground">SME • Logistics & Supply Chain</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">8.5/10</div>
                  <div className="text-sm text-muted-foreground">Overall Score</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 rounded-xl bg-gradient-to-b from-ipo-blue/10 to-transparent">
                  <div className="text-xs uppercase text-muted-foreground mb-1">Open Date</div>
                  <div className="font-semibold">27 May 2025</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-b from-ipo-purple/10 to-transparent">
                  <div className="text-xs uppercase text-muted-foreground mb-1">Close Date</div>
                  <div className="font-semibold">29 May 2025</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-b from-ipo-pink/10 to-transparent">
                  <div className="text-xs uppercase text-muted-foreground mb-1">Price Band</div>
                  <div className="font-semibold">₹132 - ₹135</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-b from-ipo-cyan/10 to-transparent">
                  <div className="text-xs uppercase text-muted-foreground mb-1">Issue Size</div>
                  <div className="font-semibold">₹40.50 Cr.</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  href="/ipos/682cb19358f15cc8daa65481" 
                  className="px-6 py-3 bg-gradient-to-r from-ipo-cyan to-ipo-blue rounded-lg text-white font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  View Complete Analysis →
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mb-20 animate-fade-in animation-delay-500">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose <span className="text-gradient">IPO Tracker</span>?
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Advanced analytics and comprehensive data to help you make smarter investment decisions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="ipo-card p-8 glassmorphism rounded-2xl text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-ipo-blue to-ipo-purple flex items-center justify-center text-white text-2xl animate-pulse-glow">
                📊
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                Comprehensive Analysis
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Deep dive into fundamentals, risk assessment, performance metrics, and market timing analysis for every IPO.
              </p>
            </div>
            
            <div className="ipo-card p-8 glassmorphism rounded-2xl text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-ipo-purple to-ipo-pink flex items-center justify-center text-white text-2xl animate-pulse-glow animation-delay-100">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                Real-Time Updates
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Stay informed with instant notifications about IPO openings, closings, allotments, and listing updates.
              </p>
            </div>
            
            <div className="ipo-card p-8 glassmorphism rounded-2xl text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-ipo-pink to-ipo-cyan flex items-center justify-center text-white text-2xl animate-pulse-glow animation-delay-200">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                Smart Recommendations
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                AI-powered investment recommendations based on comprehensive analysis and market trends.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fade-in animation-delay-600">
          <div className="text-center p-6 glassmorphism rounded-xl">
            <div className="text-3xl font-bold text-gradient mb-2">150+</div>
            <div className="text-sm text-muted-foreground">IPOs Tracked</div>
          </div>
          <div className="text-center p-6 glassmorphism rounded-xl">
            <div className="text-3xl font-bold text-gradient mb-2">₹50K Cr</div>
            <div className="text-sm text-muted-foreground">Total Issue Size</div>
          </div>
          <div className="text-center p-6 glassmorphism rounded-xl">
            <div className="text-3xl font-bold text-gradient mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="text-center p-6 glassmorphism rounded-xl">
            <div className="text-3xl font-bold text-gradient mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glassmorphism rounded-2xl p-12 animate-fade-in animation-delay-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start <span className="text-gradient">Investing Smart</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of investors who trust IPO Tracker for their investment decisions
          </p>
          <Link 
            href="/ipos" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-ipo-blue via-ipo-purple to-ipo-pink rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow"
          >
            Explore All IPOs →
          </Link>
        </div>
      </section>
    </div>
  );
}
