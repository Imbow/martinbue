
import { ArrowLeft, Folder } from "lucide-react";
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
          Each category represents my commitment to excellence in visual storytelling.
        </p>
        
        {/* Category Buttons Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Brand Campaign",
              description: "A compelling brand story through cinematic visuals",
              thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
              path: "/category/brand-campaign"
            },
            {
              title: "Product Launch",
              description: "Showcasing product features with stunning detail",
              thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
              path: "/category/product-launch"
            },
            {
              title: "Corporate Event",
              description: "Full coverage of major corporate gatherings",
              thumbnail: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80&w=800",
              path: "/category/corporate-event"
            },
            {
              title: "Personal Projects",
              description: "Creative passion projects and artistic explorations",
              thumbnail: "https://images.unsplash.com/photo-1601506521793-dc748fc80b67?auto=format&fit=crop&q=80&w=800",
              path: "/category/personal-projects"
            },
            {
              title: "Motion & Animation",
              description: "2D/3D animations and motion graphics",
              thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
              path: "/category/motion-animation"
            },
            {
              title: "Aerial Cinematography",
              description: "Breathtaking perspectives from above",
              thumbnail: "https://images.unsplash.com/photo-1534397860164-120c97f4db0b?auto=format&fit=crop&q=80&w=800",
              path: "/category/aerial-cinematography"
            },
          ].map((category, index) => (
            <Link
              key={category.title}
              to={category.path}
              className="group animate-fade-in hover-scale bg-gray-900 rounded-xl overflow-hidden shadow-xl opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 w-full">
                <img
                  src={category.thumbnail}
                  alt={category.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Folder className="h-16 w-16 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-6 bg-black bg-opacity-80">
                <h3 className="text-xl font-medium text-white group-hover:text-white transition-colors">{category.title}</h3>
                <p className="mt-2 text-gray-300">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
