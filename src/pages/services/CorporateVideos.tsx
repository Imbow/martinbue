
import { ArrowLeft, Film } from "lucide-react";
import { Link } from "react-router-dom";

const CorporateVideos = () => {
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
            <Film className="h-12 w-12 text-gray-900" />
            <h1 className="text-4xl font-bold">Corporate Videos</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            Professional corporate videos for training, presentations, and internal communications.
            We create engaging content that effectively communicates your message to employees and stakeholders.
          </p>

          <div className="grid gap-8">
            <div className="rounded-xl bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Services Include</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-2">
                  • Training and onboarding videos
                </li>
                <li className="flex items-start gap-2">
                  • Company culture and mission videos
                </li>
                <li className="flex items-start gap-2">
                  • Executive communications
                </li>
                <li className="flex items-start gap-2">
                  • Product demonstrations
                </li>
                <li className="flex items-start gap-2">
                  • Internal announcements
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">1. Strategy Development</h3>
                  <p className="text-gray-600">Understanding your corporate objectives and target audience.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">2. Content Planning</h3>
                  <p className="text-gray-600">Creating engaging scripts and visual concepts that align with your brand.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">3. Professional Production</h3>
                  <p className="text-gray-600">High-quality filming with attention to corporate guidelines.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">4. Review and Delivery</h3>
                  <p className="text-gray-600">Collaborative review process and delivery in multiple formats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateVideos;
