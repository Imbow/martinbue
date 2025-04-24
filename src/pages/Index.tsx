
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const toggleVideo = (videoId: string) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoId);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full bg-black">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="relative h-full w-full">
            <iframe 
              src={isMobile 
                ? "https://www.youtube.com/embed/RjdA52P69iM?autoplay=1&mute=1&loop=1&playlist=RjdA52P69iM&controls=0&playsinline=1"
                : "https://player.vimeo.com/video/1077359095?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1&playsinline=1"
              }
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
              style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', objectFit:'cover', transform: 'scale(1.2)'}} 
              title="Showreel"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center">
            <h1 className="animate-fade-in text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Crafting Visual Stories
            </h1>
            <p className="mx-auto mt-6 max-w-lg animate-fade-in text-lg text-gray-200 opacity-0 font-bold [animation-delay:300ms]">
              Professional videographer specializing in creating compelling visual narratives
            </p>
            <Link
              to="/work"
              className="group mt-8 inline-flex animate-fade-in items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white opacity-0 transition-all duration-300 hover:bg-orange-600 hover:scale-105 [animation-delay:600ms]"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        {/* Arrow indicator - perfectly centered */}
        <div className="absolute bottom-12 left-0 right-0 mx-auto w-8 flex justify-center animate-bounce">
          <ArrowDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="bg-black py-20">
        <div className="container px-4">
          <h2 className="animate-fade-in text-center text-3xl font-bold text-white">Featured Work</h2>
          <p className="mx-auto mt-4 max-w-2xl animate-fade-in text-center text-gray-300 opacity-0 [animation-delay:200ms]">
            A selection of recent video projects
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: "video1",
                title: "Commercial: Neurons Brand Story",
                description: "A brand story capturing Neurons and the values behind their work.",
                vimeoId: "1076397038",
              },
              {
                id: "video2",
                title: "Corporate: Imerco City",
                description: "A recap of Imerco's annual summit, bringing together store managers & partners.",
                vimeoId: "1076391791",
              },
              {
                id: "video3",
                title: "Commercial: Neurons AI",
                description: "An explainer of Neurons' AI tool and how it helps you save time and reduce costs.",
                vimeoId: "1011312650",
              },
            ].map((work, index) => (
              <div
                key={work.id}
                className="group animate-fade-in hover-video-card opacity-0 cursor-pointer overflow-hidden rounded-xl"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
                onClick={() => toggleVideo(work.id)}
              >
                <div className={`relative ${isMobile ? 'h-48' : 'h-64'} w-full`}>
                  {playingVideo === work.id ? (
                    <div className="h-full w-full">
                      <iframe
                        src={`https://player.vimeo.com/video/${work.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&controls=1&playsinline=1&transparent=0&autopause=0`}
                        className="h-full w-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="relative h-full w-full">
                      <img
                        src={`https://vumbnail.com/${work.vimeoId}.jpg`}
                        className="h-full w-full object-cover rounded-xl"
                        alt={work.title}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity group-hover:opacity-70">
                        <Play className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 bg-gray-700 bg-opacity-90">
                  <h3 className="text-xl font-medium text-white group-hover:text-white transition-colors">{work.title}</h3>
                  <p className="mt-2 text-gray-300">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border border-black rounded-md hover:bg-gray-100 transition-colors"
            >
              See All Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="animate-fade-in text-3xl font-bold">Let's Create Something Amazing</h2>
            <p className="mx-auto mt-4 animate-fade-in text-white text-opacity-90 opacity-0 [animation-delay:200ms]">
              Ready to bring your vision to life? Get in touch to discuss your project
            </p>
            <Link 
              to="/contact"
              className="group mt-8 animate-fade-in inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-medium text-white opacity-0 transition-all duration-300 hover:bg-orange-600 hover:scale-105 [animation-delay:400ms]"
            >
              Contact Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
