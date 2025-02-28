
import { Link } from "react-router-dom";
import { PlayCircle, ArrowRight } from "lucide-react";

const Index = () => {
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
            <Link
              to="/work"
              className="group mt-8 inline-flex animate-fade-in items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black opacity-0 transition-all duration-300 hover:bg-gray-100 hover:scale-105 [animation-delay:600ms]"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section (Replaced Services) */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4">
          <h2 className="animate-fade-in text-center text-3xl font-bold text-black">Featured Work</h2>
          <p className="mx-auto mt-4 max-w-2xl animate-fade-in text-center text-gray-600 opacity-0 [animation-delay:200ms]">
            A selection of my best video projects
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Commercial: Brand Story",
                description: "A compelling brand narrative for a leading lifestyle company",
                videoUrl: "https://cdn.coverr.co/videos/coverr-product-photos-on-a-wooden-table-2527/1080p.mp4",
                path: "/services/commercial-production"
              },
              {
                title: "Corporate: Annual Summit",
                description: "Documenting key moments from an industry-leading conference",
                videoUrl: "https://cdn.coverr.co/videos/coverr-a-woman-taking-pictures-5765/1080p.mp4",
                path: "/services/corporate-videos"
              },
              {
                title: "Event: Music Festival",
                description: "Capturing the atmosphere and performances of a major cultural event",
                videoUrl: "https://cdn.coverr.co/videos/coverr-an-aerial-view-of-a-forest-5964/1080p.mp4",
                path: "/services/event-coverage"
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
                    <PlayCircle className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium group-hover:text-gray-700 transition-colors">{work.title}</h3>
                  <p className="mt-2 text-gray-600">{work.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
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
            <p className="mx-auto mt-4 animate-fade-in text-gray-600 opacity-0 [animation-delay:200ms]">
              Ready to bring your vision to life? Get in touch to discuss your project
            </p>
            <Link 
              to="/contact"
              className="group mt-8 animate-fade-in inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-medium text-white opacity-0 transition-all duration-300 hover:bg-gray-800 hover:scale-105 [animation-delay:400ms]"
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
