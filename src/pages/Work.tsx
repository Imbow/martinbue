
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Work = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: "video1",
      videoId: "1076397038"
    },
    {
      id: "video2",
      videoId: "338242418"
    },
    // Placeholders for future videos
    { id: "placeholder1" },
    { id: "placeholder2" },
    { id: "placeholder3" },
    { id: "placeholder4" },
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
          {videos.map((video) => (
            <div
              key={video.id}
              className="group animate-fade-in opacity-0 rounded-xl overflow-hidden"
              onClick={() => video.videoId && setActiveVideo(video.id)}
            >
              {video.videoId ? (
                <div className="aspect-video w-full">
                  {activeVideo === video.id ? (
                    <iframe
                      src={`https://player.vimeo.com/video/${video.videoId}?autoplay=1&title=0&byline=0&portrait=0&controls=1&playsinline=1&transparent=0&autopause=0&player_id=${video.id}`}
                      className="w-full h-full rounded-xl"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src={`https://vumbnail.com/${video.videoId}.jpg`}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover rounded-xl cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  )}
                </div>
              ) : (
                <div className="aspect-video w-full bg-gray-800 rounded-xl flex items-center justify-center">
                  <span className="text-gray-400">Coming Soon</span>
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

