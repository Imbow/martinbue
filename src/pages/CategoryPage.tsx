
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

// Define the category metadata
const categoryData = {
  "brand-campaign": {
    title: "Brand Campaign",
    description: "Our brand campaigns tell compelling stories that connect with audiences and elevate brands through cinematic storytelling.",
    videos: [
      {
        title: "Luxury Brand Story",
        description: "Creating an emotional connection through visual storytelling",
        thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Product Narrative",
        description: "Crafting a narrative around innovative products",
        thumbnail: "https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Brand Identity Film",
        description: "Establishing visual identity through cinematography",
        thumbnail: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  "product-launch": {
    title: "Product Launch",
    description: "We create stunning product launches that highlight features, benefits, and brand values through detailed visual presentations.",
    videos: [
      {
        title: "Tech Product Reveal",
        description: "Dramatic unveiling of new technology",
        thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Fashion Collection Launch",
        description: "Stylish presentation of new fashion lines",
        thumbnail: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Food Product Showcase",
        description: "Appetizing visuals for culinary products",
        thumbnail: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  "corporate-event": {
    title: "Corporate Event",
    description: "Our corporate event coverage captures key moments, presentations, and the atmosphere of professional gatherings.",
    videos: [
      {
        title: "Annual Conference",
        description: "Complete coverage of keynote speeches and breakout sessions",
        thumbnail: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Leadership Summit",
        description: "Documenting executive meetings and leadership development",
        thumbnail: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Award Ceremony",
        description: "Celebrating achievements and recognitions",
        thumbnail: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  "personal-projects": {
    title: "Personal Projects",
    description: "Explore my creative passion projects that push boundaries and explore new visual techniques and storytelling approaches.",
    videos: [
      {
        title: "Experimental Short Film",
        description: "Artistic exploration of visual concepts",
        thumbnail: "https://images.unsplash.com/photo-1601506521793-dc748fc80b67?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Visual Poetry",
        description: "Emotional storytelling through abstract visuals",
        thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Portrait Series",
        description: "Intimate character studies through video",
        thumbnail: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  "motion-animation": {
    title: "Motion & Animation",
    description: "Our 2D and 3D animations bring concepts to life through dynamic motion graphics and creative visual effects.",
    videos: [
      {
        title: "3D Product Animation",
        description: "Detailed 3D rendering and animation of products",
        thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Motion Graphics Reel",
        description: "Dynamic typography and graphic animations",
        thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Animated Explainer",
        description: "Making complex concepts simple through animation",
        thumbnail: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  "aerial-cinematography": {
    title: "Aerial Cinematography",
    description: "Our aerial footage provides stunning perspectives from above, revealing landscapes and architecture in breathtaking new ways.",
    videos: [
      {
        title: "Urban Landscape",
        description: "Capturing city skylines and urban development",
        thumbnail: "https://images.unsplash.com/photo-1534397860164-120c97f4db0b?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Natural Wonders",
        description: "Sweeping views of mountains, forests and coastlines",
        thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Event Coverage",
        description: "Aerial documentation of large-scale events",
        thumbnail: "https://images.unsplash.com/photo-1551972251-12070d63502a?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Default to brand-campaign if categoryId is undefined or not found
  const category = categoryId && categoryData[categoryId as keyof typeof categoryData] 
    ? categoryData[categoryId as keyof typeof categoryData]
    : categoryData["brand-campaign"];

  return (
    <div className="min-h-screen w-full">
      <div className="container px-4 py-8">
        <div className="pt-8 flex items-center gap-4 mb-8">
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-white">{category.title}</h1>
        <p className="text-gray-400 max-w-2xl mb-12">
          {category.description}
        </p>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {category.videos.map((video, index) => (
            <div
              key={video.title}
              className="group hover-video-card animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="aspect-video w-full object-cover"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-xl font-medium text-white transition-colors">{video.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
