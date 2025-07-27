
import { ArrowLeft, Camera, Film, MountainSnow } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-white">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About My Approach</h1>
        
        <div className="mb-12 relative h-[400px] overflow-hidden rounded-xl">
          <img 
            src="/lovable-uploads/547ffb49-3c74-42d7-b41a-a7ab024b3ce2.png" 
            alt="Videographer with camera" 
            className="w-full h-full object-cover object-[center_30%]"
          />
        </div>

        <div className="prose prose-lg max-w-none prose-invert">
          <p className="text-lg leading-relaxed mb-6 text-gray-200">
            I believe great visual content starts with clarity and collaboration. Whether it's a short-form animated explainer or a full-length testimonial edit, my approach blends creativity with structure, ensuring each project moves smoothly from concept to final delivery. I aim to create work that not only looks sharp but also serves a clear purpose.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 flex items-center text-white">
            <Camera className="mr-3 h-6 w-6" />
            Authentic Storytelling
          </h2>
          <p className="mb-8 text-gray-200">
            From brand campaigns to product launches, my work is rooted in storytelling that feels real. I specialize in content that connects, whether it's through dynamic animation, polished video edits, or interview-driven narratives. I strive to elevate each message with authenticity, making sure it reflects your brand and resonates with your audience.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 flex items-center text-white">
            <Film className="mr-3 h-6 w-6" />
            Technical Excellence
          </h2>
          <p className="mb-8 text-gray-200">
            Tools like After Effects, Premiere Pro, and Figma are part of my daily workflow, but I never let software overshadow storytelling. With experience managing end-to-end video production across departments and deadlines, I bring both technical expertise and project leadership to the table. I'm just as comfortable fine-tuning animations as I am coordinating timelines and aligning teams.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 flex items-center text-white">
            <MountainSnow className="mr-3 h-6 w-6" />
            What Makes Me Different
          </h2>
          <p className="mb-8 text-gray-200">
            I'm not just here to design and edit, I'm here to make things work. With a background as an in-house video lead at a fast-paced B2B tech company, I know how to manage multiple stakeholders, keep production on track, and pivot quickly when challenges come up. I bring a solutions-first mindset to every project, along with a calm, collaborative energy that helps teams do their best work.
          </p>

          <p className="text-lg mt-12 text-gray-200">
            When I'm not deep in Adobe land, I'm probably out hiking, planning my next trip, or catching up on a dozen podcasts covering everything from behavioral science to emerging tech. I'm always exploring, creatively and otherwise, and I bring that curiosity into every project I take on.
          </p>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-all duration-300 hover:bg-gray-200 hover:scale-105"
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
