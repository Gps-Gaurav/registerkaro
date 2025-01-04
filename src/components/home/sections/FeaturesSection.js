// src/components/home/sections/FeaturesSection.js
export const FeaturesSection = () => {
    const features = [
      {
        title: 'Expert Team',
        description: '24/7 support from our expert team'
      },
      {
        title: 'Fast Processing',
        description: 'Quick and efficient service delivery'
      },
      {
        title: 'Secure Platform',
        description: 'Your data is safe with us'
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };