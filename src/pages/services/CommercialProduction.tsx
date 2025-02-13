
import { ArrowLeft, VideoIcon } from "lucide-react";
import { Link } from "react-router-dom";

const CommercialProduction = () => {
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
            <VideoIcon className="h-12 w-12 text-gray-900" />
            <h1 className="text-4xl font-bold">Commercial Production</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            High-quality commercials and promotional videos that capture attention and drive engagement.
            Our commercial production service delivers compelling visual content that resonates with your target audience.
          </p>

          <div className="grid gap-8">
            <div className="rounded-xl bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-2">
                  • Professional cinematography and lighting
                </li>
                <li className="flex items-start gap-2">
                  • Creative concept development
                </li>
                <li className="flex items-start gap-2">
                  • Script writing and storyboarding
                </li>
                <li className="flex items-start gap-2">
                  • Post-production and special effects
                </li>
                <li className="flex items-start gap-2">
                  • Sound design and music selection
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold mb-4">Process</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">1. Initial Consultation</h3>
                  <p className="text-gray-600">We begin with understanding your brand, target audience, and campaign objectives.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">2. Pre-Production</h3>
                  <p className="text-gray-600">Development of concept, script, and detailed production timeline.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">3. Production</h3>
                  <p className="text-gray-600">Professional filming with state-of-the-art equipment and experienced crew.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">4. Post-Production</h3>
                  <p className="text-gray-600">Editing, color grading, sound design, and final delivery in required formats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialProduction;
