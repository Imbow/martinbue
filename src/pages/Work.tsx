
import { ArrowLeft, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Work = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = (id: string) => {
    if (playingVideo !== id) {
      setPlayingVideo(id);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  // Array of work items with real videos and placeholders
  const workItems = [
    {
      id: "video1",
      title: "Video 1",
      videoId: "1076397038",
      description: "Commercial brand video with cinematic visuals",
    },
    {
      id: "video2",
      title: "Video 2",
      videoId: "338242418",
      description: "Restaurant promotional video showcasing fine dining experience",
    },
    {
      id: "placeholder1",
      title: "Video 3",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800",
      description: "Placeholder for upcoming video project",
    },
    {
      id: "placeholder2",
      title: "Video 4",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      description: "Placeholder for upcoming video project",
    },
    {
      id: "placeholder3",
      title: "Video 5",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      description: "Placeholder for upcoming video project",
    },
    {
      id: "placeholder4",
      title: "Video 6",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
      description: "Placeholder for upcoming video project",
    },
    {
      id: "placeholder5",
      title: "Video 7",
      thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800",
      description: "Placeholder for upcoming video project",
    },
  ];

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
          {workItems.map((work, index) => (
            <div
              key={work.id}
              className="group hover-video-card animate-fade-in opacity-0 relative rounded-xl overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => work.videoId && toggleVideo(work.id)}
            >
              {work.videoId ? (
                <div className="aspect-video w-full relative">
                  {playingVideo === work.id ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${work.videoId}?autoplay=1&title=0&byline=0&portrait=0&controls=1&playsinline=1&autopause=0&transparent=0&player_id=${work.id}`}
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
                <div className="aspect-video w-full relative">
                  <img
                    src={work.thumbnail}
                    alt={work.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity">
                    <div className="text-white text-xl font-bold">Coming Soon</div>
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 to-transparent p-4">
                <h3 className="text-xl font-medium text-white transition-colors">{work.title}</h3>
                <p className="mt-2 text-sm text-white/80">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
