
import { ArrowLeft, Camera, Film, MountainSnow } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About My Approach</h1>
        
        <div className="mb-12 relative h-[400px] overflow-hidden rounded-xl">
          <img 
            src="https://images.unsplash.com/photo-1616432043562-3e156e3dc9d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
            alt="Videographer at work" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            I believe that every story has a unique pulse—a rhythm and emotion that deserves to be captured authentically. My approach to videography is centered around finding that heartbeat and translating it into visual language that resonates with viewers.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 flex items-center">
            <Camera className="mr-3 h-6 w-6" />
            Authentic Storytelling
          </h2>
          <p className="mb-8">
            Whether I'm shooting a commercial, documenting an event, or creating corporate content, my priority is always authenticity. I strive to capture genuine moments rather than manufactured ones, creating a narrative that feels true to your brand, event, or message.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 flex items-center">
            <Film className="mr-3 h-6 w-6" />
            Technical Excellence
          </h2>
          <p className="mb-8">
            With years of experience behind the camera, I've developed a keen eye for composition, lighting, and movement. I use state-of-the-art equipment and post-production techniques to ensure every frame is visually stunning, but I never let technology overshadow the story.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 flex items-center">
            <MountainSnow className="mr-3 h-6 w-6" />
            What Makes Me Different
          </h2>
          <p className="mb-8">
            My background in both documentary and commercial filmmaking gives me a unique perspective. I bring documentary authenticity to commercial projects and cinematic quality to documentary work. This versatility allows me to adapt to your specific needs while maintaining a consistent level of quality and creativity.
          </p>

          <p className="text-lg mt-12">
            I approach each project as a collaboration, working closely with clients to understand their vision and bring it to life in ways that exceed expectations. Whether you're looking to promote a product, document a milestone, or tell your brand's story, I'm here to help you create something truly memorable.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:scale-105"
          >
            Let's Work Together
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
