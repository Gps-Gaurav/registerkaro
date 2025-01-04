// src/components/home/sections/SubscribeSection.js
export const SubscribeSection = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle subscription logic
    };
  
    return (
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for latest updates</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  };