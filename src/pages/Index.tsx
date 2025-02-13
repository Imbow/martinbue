
import { useRef } from "react";
import { PlayCircle, ArrowRight, VideoIcon, Film, Clapperboard } from "lucide-react";

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
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
              Crafting Visual Stories
            </h1>
            <p className="mx-auto mt-6 max-w-lg animate-fade-in text-lg text-gray-200 opacity-0 [animation-delay:300ms]">
              Professional videographer specializing in creating compelling visual narratives
            </p>
            <button
              onClick={scrollToServices}
              className="group mt-8 inline-flex animate-fade-in items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black opacity-0 transition-transform hover:scale-105 [animation-delay:600ms]"
            >
              View Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-20">
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
                  <PlayCircle className="h-16 w-16 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-medium text-white">{work.title}</h3>
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
                className="group animate-fade-in rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-[1.02] opacity-0"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <service.icon className="h-12 w-12 text-gray-900" />
                <h3 className="mt-4 text-xl font-medium">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="animate-fade-in text-3xl font-bold">Let's Create Something Amazing</h2>
            <p className="mx-auto mt-4 animate-fade-in text-gray-600 opacity-0 [animation-delay:200ms]">
              Ready to bring your vision to life? Get in touch to discuss your project
            </p>
            <button className="group mt-8 animate-fade-in inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-medium text-white opacity-0 transition-transform hover:scale-105 [animation-delay:400ms]">
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
