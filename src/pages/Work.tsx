
import { ArrowLeft, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Work Grid */}
      <div className="container px-4 py-8">
        <div className="pt-8 flex items-center gap-4 mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        {/* Featured Showreel Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">Featured Showreel</h2>
          <div className="relative aspect-video w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-xl">
            {/* Replace with your showreel video */}
            <div className="relative w-full h-full bg-gray-900 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200" 
                alt="Showreel thumbnail" 
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="h-24 w-24 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h3 className="text-2xl font-bold text-white">Martin Bue Showreel 2023</h3>
                <p className="text-gray-300 mt-2">A collection of my finest work and creative vision</p>
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-white">Our Work</h1>
        <p className="text-gray-300 max-w-2xl mb-12">
          Explore our portfolio of video projects, from brand campaigns to corporate events.
          Each project represents our commitment to excellence in visual storytelling.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Brand Campaign",
              category: "Marketing",
              thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
              description: "A compelling brand story through cinematic visuals",
            },
            {
              title: "Product Launch",
              category: "Commercial",
              thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
              description: "Showcasing product features with stunning detail",
            },
            {
              title: "Corporate Event",
              category: "Events",
              thumbnail: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80&w=800",
              description: "Full coverage of major corporate gatherings",
            },
            {
              title: "Documentary",
              category: "Storytelling",
              thumbnail: "https://images.unsplash.com/photo-1601506521793-dc748fc80b67?auto=format&fit=crop&q=80&w=800",
              description: "In-depth storytelling through powerful narratives",
            },
            {
              title: "Music Video",
              category: "Creative",
              thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
              description: "Artistic expression through visual rhythms",
            },
            {
              title: "Aerial Cinematography",
              category: "Specialty",
              thumbnail: "https://images.unsplash.com/photo-1534397860164-120c97f4db0b?auto=format&fit=crop&q=80&w=800",
              description: "Breathtaking perspectives from above",
            },
          ].map((work, index) => (
            <div
              key={work.title}
              className="group hover-video-card animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={work.thumbnail}
                alt={work.title}
                className="aspect-video w-full object-cover"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <PlayCircle className="h-16 w-16 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 to-transparent p-6">
                <span className="text-sm text-gray-300">{work.category}</span>
                <h3 className="text-xl font-medium text-white transition-colors">{work.title}</h3>
                <p className="mt-2 text-sm text-white">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
