
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  // Ensure Vimeo script is loaded
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section with Vimeo Video - Expanded to be more immersive */}
      <section className="relative h-screen w-full bg-black">
        <div className="absolute inset-0">
          <div style={{ height: "100%" }}>
            <iframe 
              src="https://player.vimeo.com/video/439714738?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&background=1&muted=1&autoplay=1&loop=1" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title="Showreel"
              className="opacity-60"
            />
          </div>
        </div>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center">
            <h1 className="animate-fade-in text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Crafting Visual Stories
            </h1>
            <p className="mx-auto mt-6 max-w-lg animate-fade-in text-xl text-white text-opacity-100 opacity-0 font-medium leading-relaxed [animation-delay:300ms]">
              Professional videographer specializing in creating compelling visual narratives
            </p>
            <Link
              to="/work"
              className="group mt-8 inline-flex animate-fade-in items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-medium text-white opacity-0 transition-all duration-300 hover:bg-orange-700 hover:scale-105 hover:shadow-md [animation-delay:600ms]"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator animation - moved higher and centered */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-10 w-10 text-white opacity-90" />
        </div>
      </section>

      {/* Featured Work Section - Improved visibility and made consistent with dark theme */}
      <section className="bg-black py-16">
        <div className="container px-4">
          <h2 className="animate-fade-in text-center text-3xl font-bold text-white">Featured Work</h2>
          <p className="mx-auto mt-4 max-w-2xl animate-fade-in text-center text-gray-300 opacity-0 [animation-delay:200ms]">
            A selection of my best video projects
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Commercial: Brand Story",
                description: "A compelling brand narrative for a leading lifestyle company",
                videoUrl: "https://cdn.coverr.co/videos/coverr-product-photos-on-a-wooden-table-2527/1080p.mp4",
                path: "/category/brand-campaign"
              },
              {
                title: "Corporate: Annual Summit",
                description: "Documenting key moments from an industry-leading conference",
                videoUrl: "https://cdn.coverr.co/videos/coverr-a-woman-taking-pictures-5765/1080p.mp4",
                path: "/category/corporate-event"
              },
              {
                title: "Event: Music Festival",
                description: "Capturing the atmosphere and performances of a major cultural event",
                videoUrl: "https://cdn.coverr.co/videos/coverr-an-aerial-view-of-a-forest-5964/1080p.mp4",
                path: "/category/aerial-cinematography"
              },
            ].map((work, index) => (
              <Link
                key={work.title}
                to={work.path}
                className="group animate-fade-in hover-video-card opacity-0 cursor-pointer overflow-hidden rounded-xl"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="relative h-64 w-full">
                  <video
                    className="h-full w-full object-cover rounded-xl"
                    loop
                    muted
                    autoPlay
                    playsInline
                  >
                    <source src={work.videoUrl} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                </div>
                <div className="p-4 bg-black bg-opacity-90">
                  <h3 className="text-xl font-medium text-white group-hover:text-white transition-colors">{work.title}</h3>
                  <p className="mt-2 text-gray-300">{work.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 hover:shadow-md transition-colors"
            >
              See All Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA with different orange shade */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="animate-fade-in text-3xl font-bold text-white">Let's Create Something Amazing</h2>
            <p className="mx-auto mt-4 animate-fade-in text-white text-opacity-90 opacity-0 [animation-delay:200ms]">
              Ready to bring your vision to life? Get in touch to discuss your project
            </p>
            <Link 
              to="/contact"
              className="group mt-8 animate-fade-in inline-flex items-center gap-2 rounded-full bg-orange-400 px-8 py-4 text-sm font-medium text-white opacity-0 transition-all duration-300 hover:bg-orange-500 hover:scale-105 hover:shadow-md [animation-delay:400ms]"
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
