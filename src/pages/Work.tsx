import { ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Work = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const toggleVideo = (id: string) => {
    if (playingVideo !== id) {
      setPlayingVideo(id);
    }
  };

  return (
    <div className="min-h-screen w-full">
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
        
        <h1 className="text-4xl font-bold mb-4 text-white">Work</h1>
        <p className="text-gray-300 max-w-2xl mb-12">
          Explore my portfolio of video projects, from brand campaigns to corporate events and personal work. Each crafted with a dedication to visual storytelling and creative excellence.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: "brand-campaign",
              title: "Brand Campaign",
              category: "Marketing",
              videoId: "1076397038",
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
              category: "Commercial",
              thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
              description: "Artistic expression through visual rhythms",
            },
            {
              title: "Aerial Cinematography",
              category: "Specialty",
              thumbnail: "https://images.unsplash.com/photo-1534397860164-120c97f4db0b?auto=format&fit=crop&q=80&w=800",
              description: "Breathtaking perspectives from above",
            },
            {
              id: "restaurant-promo",
              title: "Restaurant Promo",
              category: "Commercial",
              videoId: "338242418",
              description: "A cinematic look into the craft of a little French fine dining restaurant in Copenhagen",
            },
          ].map((work, index) => (
            <div
              key={work.title}
              className="group hover-video-card animate-fade-in opacity-0 relative"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => work.videoId && toggleVideo(work.videoId)}
            >
              {work.videoId ? (
                <div className="aspect-video w-full relative">
                  {playingVideo === work.videoId ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${work.videoId}?autoplay=1&title=0&byline=0&portrait=0&controls=1&playsinline=1&autopause=0&transparent=0`}
                      className="w-full h-full rounded-xl"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={`https://vumbnail.com/${work.videoId}.jpg`}
                        alt={work.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:opacity-70">
                        <Play className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  className="aspect-video w-full object-cover rounded-xl"
                />
              )}
              {!playingVideo && (
                <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <span className="text-sm text-gray-300">{work.category}</span>
                  <h3 className="text-xl font-medium text-white transition-colors">{work.title}</h3>
                  <p className="mt-2 text-sm text-white">{work.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
