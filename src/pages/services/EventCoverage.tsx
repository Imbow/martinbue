
import { ArrowLeft, Clapperboard } from "lucide-react";
import { Link } from "react-router-dom";

const EventCoverage = () => {
  return (
    <div className="min-h-screen w-full">
      <nav className="fixed top-0 z-50 w-full bg-black/10 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="text-xl font-bold text-white hover:text-gray-200 transition-colors">
              VideoStudio
            </Link>
          </div>
        </div>
      </nav>

      <div className="container px-4 pt-32 pb-20">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <Clapperboard className="h-12 w-12 text-gray-900" />
            <h1 className="text-4xl font-bold">Event Coverage</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            Comprehensive event documentation from multiple angles with professional editing.
            We capture the essence of your events with attention to detail and storytelling.
          </p>

          <div className="grid gap-8">
            <div className="rounded-xl bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold mb-4">Event Types</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-2">
                  • Corporate conferences and seminars
                </li>
                <li className="flex items-start gap-2">
                  • Product launches and exhibitions
                </li>
                <li className="flex items-start gap-2">
                  • Award ceremonies and galas
                </li>
                <li className="flex items-start gap-2">
                  • Live performances and concerts
                </li>
                <li className="flex items-start gap-2">
                  • Trade shows and conventions
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold mb-4">Coverage Details</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">1. Pre-Event Planning</h3>
                  <p className="text-gray-600">Site visits, equipment planning, and shot list preparation.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">2. Multiple Camera Setup</h3>
                  <p className="text-gray-600">Strategic camera placement for comprehensive coverage.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">3. Live Moments</h3>
                  <p className="text-gray-600">Capturing key moments, speeches, and audience reactions.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">4. Quick Turnaround</h3>
                  <p className="text-gray-600">Fast delivery of highlight reels and complete event documentation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCoverage;
