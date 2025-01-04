// src/components/sections/VideoInstructions.jsx
const VideoInstructions = () => {
  return (
    <section className="bg-gray-50 py-16" id="video-instructions">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Video Instructions
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-96 rounded-lg"
              src="https://www.youtube.com/embed/your-video-id"
              title="Registration Process"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoInstructions;