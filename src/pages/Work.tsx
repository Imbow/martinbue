
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Work Grid */}
      <div className="container px-4 py-8">
        <div className="pt-8 flex items-center gap-4 mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white bg-orange-500/80 hover:bg-orange-600/80 px-4 py-2 rounded-md transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-white">Work</h1>
        <p className="text-gray-300 max-w-2xl mb-12">
          Explore my portfolio of video projects, from brand campaigns to corporate events.
          Each project represents my commitment to excellence in visual storytelling.
        </p>
        
        {/* Video Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Brand Campaign",
              description: "A compelling brand story through cinematic visuals",
              videoUrl: "https://cdn.coverr.co/videos/coverr-product-photos-on-a-wooden-table-2527/1080p.mp4",
              path: "/category/brand-campaign"
            },
            {
              title: "Product Launch",
              description: "Showcasing product features with stunning detail",
              videoUrl: "https://cdn.coverr.co/videos/coverr-a-woman-taking-pictures-5765/1080p.mp4",
              path: "/category/product-launch"
            },
            {
              title: "Corporate Event",
              description: "Full coverage of major corporate gatherings",
              videoUrl: "https://cdn.coverr.co/videos/coverr-an-aerial-view-of-a-forest-5964/1080p.mp4",
              path: "/category/corporate-event"
            },
            {
              title: "Personal Projects",
              description: "Creative passion projects and artistic explorations",
              videoUrl: "https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-5132/1080p.mp4",
              path: "/category/personal-projects"
            },
            {
              title: "Motion & Animation",
              description: "2D/3D animations and motion graphics",
              videoUrl: "https://cdn.coverr.co/videos/coverr-waves-splashing-on-rocks-9109/1080p.mp4",
              path: "/category/motion-animation"
            },
            {
              title: "Aerial Cinematography",
              description: "Breathtaking perspectives from above",
              videoUrl: "https://cdn.coverr.co/videos/coverr-flying-over-a-mountain-range-2646/1080p.mp4",
              path: "/category/aerial-cinematography"
            },
          ].map((project, index) => (
            <Link
              key={project.title}
              to={project.path}
              className="group animate-fade-in hover-video-card opacity-0 cursor-pointer overflow-hidden rounded-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 w-full">
                <video
                  className="h-full w-full object-cover rounded-xl"
                  loop
                  muted
                  autoPlay
                  playsInline
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              </div>
              <div className="p-4 bg-black bg-opacity-90">
                <h3 className="text-xl font-medium text-white group-hover:text-white transition-colors">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
