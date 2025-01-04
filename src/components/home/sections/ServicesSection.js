// src/components/home/sections/ServicesSection.js
export const ServicesSection = () => {
    const services = [
      {
        title: 'Company Registration',
        description: 'Start your business journey with proper registration',
        icon: '🏢'
      },
      {
        title: 'GST Registration',
        description: 'Complete GST registration and compliance',
        icon: '📝'
      },
      {
        title: 'Business License',
        description: 'Get all required business licenses',
        icon: '📄'
      }
    ];
  
    return (
      <section className="py-16 bg-white" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };