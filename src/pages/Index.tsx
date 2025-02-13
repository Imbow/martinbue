
import { useRef, useState } from "react";
import { PlayCircle, ArrowRight, VideoIcon, Film, Clapperboard, Menu, X } from "lucide-react";

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-black/10 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="text-xl font-bold text-white hover:text-orange-400 transition-colors">
              VideoStudio
            </a>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-orange-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection(workRef)}
                className="text-white hover:text-orange-400 transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="text-white hover:text-orange-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-white hover:text-orange-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection(workRef)}
                  className="text-white hover:text-orange-400 transition-colors"
                >
                  Work
                </button>
                <button
                  onClick={() => scrollToSection(servicesRef)}
                  className="text-white hover:text-orange-400 transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="text-white hover:text-orange-400 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full clip-triangle bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        >
          <source src="https://cdn.coverr.co/videos/coverr-a-girl-filming-with-her-camera-3633/1080p.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center">
            <h1 className="animate-fade-in text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Crafting <span className="text-orange-400">Visual</span> Stories
            </h1>
            <p className="mx-auto mt-6 max-w-lg animate-fade-in text-lg text-gray-200 opacity-0 [animation-delay:300ms]">
              Professional videographer specializing in creating compelling visual narratives
            </p>
            <button
              onClick={scrollToServices}
              className="group mt-8 inline-flex animate-fade-in items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white opacity-0 transition-all duration-300 hover:bg-orange-600 hover:scale-105 [animation-delay:600ms]"
            >
              View Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section ref={workRef} className="py-20">
        <div className="container px-4">
          <h2 className="animate-fade-in text-center text-3xl font-bold">Recent Work</h2>
          <p className="mx-auto mt-4 max-w-2xl animate-fade-in text-center text-gray-600 opacity-0 [animation-delay:200ms]">
            A selection of my latest video projects, showcasing versatility and creativity in visual storytelling
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Brand Campaign",
                thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Product Launch",
                thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Corporate Event",
                thumbnail: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80&w=800",
              },
            ].map((work, index) => (
              <div
                key={work.title}
                className="group hover-video-card animate-fade-in opacity-0"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <PlayCircle className="h-16 w-16 text-orange-400" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-medium text-white group-hover:text-orange-400 transition-colors">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="bg-gray-50 py-20">
        <div className="container px-4">
          <h2 className="animate-fade-in text-center text-3xl font-bold">Services</h2>
          <p className="mx-auto mt-4 max-w-2xl animate-fade-in text-center text-gray-600 opacity-0 [animation-delay:200ms]">
            Comprehensive video production services tailored to your needs
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: VideoIcon,
                title: "Commercial Production",
                description: "High-quality commercials and promotional videos that capture attention and drive engagement",
              },
              {
                icon: Film,
                title: "Corporate Videos",
                description: "Professional corporate videos for training, presentations, and internal communications",
              },
              {
                icon: Clapperboard,
                title: "Event Coverage",
                description: "Comprehensive event documentation from multiple angles with professional editing",
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="group animate-fade-in rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-100/50 opacity-0"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <service.icon className="h-12 w-12 text-orange-500" />
                <h3 className="mt-4 text-xl font-medium group-hover:text-orange-500 transition-colors">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={contactRef} className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="animate-fade-in text-3xl font-bold">Let's Create Something <span className="text-orange-500">Amazing</span></h2>
            <p className="mx-auto mt-4 animate-fade-in text-gray-600 opacity-0 [animation-delay:200ms]">
              Ready to bring your vision to life? Get in touch to discuss your project
            </p>
            <button className="group mt-8 animate-fade-in inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-medium text-white opacity-0 transition-all duration-300 hover:bg-orange-600 hover:scale-105 [animation-delay:400ms]">
              Contact Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
