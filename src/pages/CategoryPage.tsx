
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';

// Video placeholder data
const categoryVideos = {
  'brand-campaign': [
    {
      id: 'bc1',
      title: 'Lifestyle Brand Campaign',
      description: 'Cinematic storytelling for a premium lifestyle brand',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-product-photos-on-a-wooden-table-2527/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1551184451-76b792a6e5c2?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'bc2',
      title: 'Sports Brand Story',
      description: 'Dynamic visuals showcasing athletic performance',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-runners-legs-9716/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'bc3',
      title: 'Fashion Collection',
      description: 'Elegant visual narrative for seasonal collection',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-woman-in-a-fur-coat-posing-for-the-camera-4894/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1571217668979-f46db8864fe6?auto=format&fit=crop&q=80&w=800'
    }
  ],
  'product-launch': [
    {
      id: 'pl1',
      title: 'Tech Product Reveal',
      description: 'Sleek presentation of innovative technology',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-typing-on-macbook-pro-8539/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'pl2',
      title: 'Culinary Product Feature',
      description: 'Appetizing showcase of premium kitchenware',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-making-cookies-5925/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1607083681678-52733140f93a?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'pl3',
      title: 'Luxury Item Showcase',
      description: 'Detailed examination of craftsmanship',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-close-up-of-hands-with-watch-5066/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800'
    }
  ],
  'corporate-event': [
    {
      id: 'ce1',
      title: 'Annual Conference',
      description: 'Complete coverage of keynotes and networking',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-business-presentation-7343/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ce2',
      title: 'Executive Summit',
      description: 'Leadership discussions and strategic planning',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-business-people-5570/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ce3',
      title: 'Team Building Retreat',
      description: 'Capturing collaborative activities and team dynamics',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-friends-high-fiving-7641/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
    }
  ],
  'personal-projects': [
    {
      id: 'pp1',
      title: 'Urban Exploration',
      description: 'Visual journey through city architecture',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-a-beach-road-5971/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'pp2',
      title: 'Nature Documentary',
      description: 'Intimate look at local wildlife',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-close-up-shot-of-a-plant-4417/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'pp3',
      title: 'Cultural Portrait',
      description: 'Exploring traditions and community stories',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-japanese-street-at-night-4287/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800'
    }
  ],
  'motion-animation': [
    {
      id: 'ma1',
      title: '3D Product Animation',
      description: 'Photorealistic rendering and movement',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-app-development-1578/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ma2',
      title: 'Motion Graphics Reel',
      description: 'Dynamic text and graphic animations',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-using-a-tablet-to-code-4258/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ma3',
      title: 'Title Sequence',
      description: 'Opening credits design for film project',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-motion-graphics-9453/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1550063873-ab792950096b?auto=format&fit=crop&q=80&w=800'
    }
  ],
  'aerial-cinematography': [
    {
      id: 'ac1',
      title: 'Mountain Range Flight',
      description: 'Sweeping vistas of dramatic landscapes',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-flying-over-a-mountain-475/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1502825751399-28baa9b776c5?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ac2',
      title: 'Coastal Journey',
      description: 'Following shorelines and ocean waves',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-aerial-shot-of-a-beach-2717/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ac3',
      title: 'Urban Flyover',
      description: 'City architecture from above',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-los-angeles-1158/1080p.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800'
    }
  ]
};

// Category titles mapping
const categoryTitles = {
  'brand-campaign': 'Brand Campaign',
  'product-launch': 'Product Launch',
  'corporate-event': 'Corporate Event',
  'personal-projects': 'Personal Projects',
  'motion-animation': 'Motion & Animation',
  'aerial-cinematography': 'Aerial Cinematography'
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Default to 'brand-campaign' if no categoryId is provided or if it doesn't exist
  const safeCategory = categoryId && categoryVideos[categoryId as keyof typeof categoryVideos] 
    ? categoryId 
    : 'brand-campaign';
  
  const videos = categoryVideos[safeCategory as keyof typeof categoryVideos];
  const categoryTitle = categoryTitles[safeCategory as keyof typeof categoryTitles];

  return (
    <div className="min-h-screen w-full bg-black">
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
        
        <h1 className="text-4xl font-bold mb-4 text-white">{categoryTitle}</h1>
        <p className="text-gray-300 max-w-2xl mb-12">
          Explore our collection of {categoryTitle.toLowerCase()} videos showcasing our expertise in this field.
        </p>
        
        {/* Videos Grid */}
        <div className="grid gap-12 mb-16">
          {videos.map((video) => (
            <div key={video.id} className="animate-fade-in opacity-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl order-2 md:order-1">
                  <video
                    className="h-full w-full object-cover rounded-xl"
                    poster={video.thumbnail}
                    controls
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                  </video>
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-xl group-hover:bg-opacity-10 transition-all">
                    <Play className="h-16 w-16 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-2xl font-bold text-white mb-3">{video.title}</h2>
                  <p className="text-gray-300 mb-4">{video.description}</p>
                  <p className="text-gray-400">
                    This is a sample project showcasing our work in {categoryTitle.toLowerCase()}. 
                    Each video demonstrates our approach to storytelling, technical excellence, and creative vision.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
          >
            Discuss Your Project
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
