
import Link from 'next/link';

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Track the Hottest <span className="text-gradient">IPOs</span> of 2025
          </h1>
          <p className="text-lg text-muted-foreground">
            Stay informed about upcoming initial public offerings, analyze performance metrics,
            and make data-driven investment decisions.
          </p>
          <div className="pt-4 space-x-4">
            <Link href="/ipos" className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Browse IPOs
            </Link>
            <Link href="/login" className="px-6 py-3 bg-muted text-muted-foreground rounded-md hover:bg-muted/70 transition-colors">
              Log In
            </Link>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl animate-fade-in">
          <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 md:p-8 rounded-xl">
            <div className="absolute top-0 right-0 p-4 bg-black/20 rounded-bl-xl text-white">
              Featured IPO
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Blue Water Logistics</h2>
            <div className="grid grid-cols-2 gap-4 text-white/90">
              <div>
                <p className="text-xs uppercase">Open Date</p>
                <p className="font-medium">27 May 2025</p>
              </div>
              <div>
                <p className="text-xs uppercase">Close Date</p>
                <p className="font-medium">29 May 2025</p>
              </div>
              <div>
                <p className="text-xs uppercase">Price Band</p>
                <p className="font-medium">₹132 - ₹135</p>
              </div>
              <div>
                <p className="text-xs uppercase">Issue Size</p>
                <p className="font-medium">₹40.50 Cr.</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/ipos/682cb19358f15cc8daa65481" className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-white/90 transition-colors text-sm font-medium">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Use IPO Tracker?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Comprehensive Data</h3>
            <p className="text-muted-foreground">Access detailed information about upcoming IPOs including financials, key dates, and performance metrics.</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Market Analysis</h3>
            <p className="text-muted-foreground">Get insights on market trends, sector performance, and expert recommendations on upcoming offerings.</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Real-Time Updates</h3>
            <p className="text-muted-foreground">Stay informed with timely notifications about IPO openings, closings, and allotment status.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
