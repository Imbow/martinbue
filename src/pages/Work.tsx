
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const Work = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [cinemaMode, setCinemaMode] = useState<string | null>(null);
  const [preloadedVideos, setPreloadedVideos] = useState<string[]>([]);

  const videos = [
    {
      id: "video1",
      videoId: "1076397038"
    },
    {
      id: "video2",
      videoId: "338242418"
    },
    {
      id: "video6", // Swapped position (was video3)
      videoId: "1083316472" // This is the second video to swap
    },
    {
      id: "video4",
      videoId: "1077355173"
    },
    {
      id: "video5",
      videoId: "283184274"
    },
    {
      id: "video3", // Swapped position (was video6)
      videoId: "1077355301" // This is the first video to swap
    },
    {
      id: "video7",
      videoId: "366076919"
    },
    {
      id: "video8",
      videoId: "382828911"
    },
    {
      id: "video9",
      videoId: "413135509"
    },
    {
      id: "video10",
      videoId: "414972452"
    },
    {
      id: "video11",
      videoId: "447223574"
    },
    {
      id: "video12",
      videoId: "440255508"
    },
    {
      id: "video13",
      videoId: "360461474"
    },
    {
      id: "video14",
      videoId: "725411022"
    },
    // Adding the two new videos below the existing ones
    {
      id: "video15",
      videoId: "359708590"
    },
    {
      id: "video16",
      videoId: "1083336732"
    },
    { id: "placeholder1" },
    { id: "placeholder2" },
    { id: "placeholder3" },
    { id: "placeholder4" },
  ];

  // Preload videos when component mounts
  useEffect(() => {
    // Create hidden iframes to preload videos
    const videosToPreload = videos.filter(video => video.videoId).map(video => video.videoId as string);
    setPreloadedVideos(videosToPreload);
  }, []);

  const handleOpenCinema = (videoId: string) => {
    console.log("Opening cinema mode for:", videoId);
    setCinemaMode(videoId);
  };

  return (
    <div className="min-h-screen w-full">
      {/* Preload iframes (hidden) */}
      <div className="hidden">
        {preloadedVideos.map(videoId => (
          <iframe
            key={`preload-${videoId}`}
            src={`https://player.vimeo.com/video/${videoId}?preload=auto&background=1&autoplay=0`}
            style={{ display: 'none' }}
            title="Preloaded video"
          ></iframe>
        ))}
      </div>

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
            >
              {video.videoId ? (
                <HoverCard openDelay={0} closeDelay={0}>
                  <HoverCardTrigger asChild>
                    <div 
                      className="aspect-video w-full relative cursor-pointer"
                      onClick={() => video.videoId && handleOpenCinema(video.id)}
                      onMouseEnter={() => video.videoId && setHoveredVideo(video.id)}
                      onMouseLeave={() => setHoveredVideo(null)}
                    >
                      <div className="absolute inset-0 z-10" />
                      <img
                        src={`https://vumbnail.com/${video.videoId}.jpg`}
                        alt="Video thumbnail"
                        className={`w-full h-full object-cover rounded-xl transition-opacity ${hoveredVideo === video.id ? 'opacity-0' : 'opacity-100'}`}
                      />
                      {hoveredVideo === video.id && (
                        <iframe
                          src={`https://player.vimeo.com/video/${video.videoId}?autoplay=1&title=0&byline=0&portrait=0&controls=0&playsinline=1&transparent=1&autopause=0&player_id=${video.id}&background=1`}
                          className="w-full h-full rounded-xl absolute top-0 left-0"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      )}
                    </div>
                  </HoverCardTrigger>
                </HoverCard>
              ) : (
                <div className="aspect-video w-full bg-gray-800 rounded-xl flex items-center justify-center">
                  <span className="text-gray-400">Coming Soon</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Cinema Mode Dialog */}
      <Dialog open={cinemaMode !== null} onOpenChange={(open) => !open && setCinemaMode(null)}>
        <DialogOverlay className="bg-black/90" />
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <button 
            onClick={() => setCinemaMode(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
            aria-label="Close cinema mode"
          >
            <X className="h-6 w-6" />
          </button>
          
          {cinemaMode && videos.find(v => v.id === cinemaMode)?.videoId && (
            <div className="aspect-video w-full">
              <iframe
                src={`https://player.vimeo.com/video/${videos.find(v => v.id === cinemaMode)?.videoId}?autoplay=1&title=0&byline=0&portrait=0&controls=1&playsinline=1&transparent=0&autopause=0`}
                className="w-full h-full rounded-xl"
                style={{ maxHeight: "80vh" }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Work;
