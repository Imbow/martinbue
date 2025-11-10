const Showreel = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      <div className="container px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Showreel</h1>
        
        <div className="w-full" style={{ height: 'calc(100vh - 200px)' }}>
          <iframe
            src="https://player.vimeo.com/video/1135447972?autoplay=1&title=0&byline=0&portrait=0&controls=1"
            className="w-full h-full rounded-xl"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Showreel;
