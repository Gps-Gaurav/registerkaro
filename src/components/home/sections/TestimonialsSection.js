// src/components/home/sections/TestimonialsSection.js
export const TestimonialsSection = () => {
    const testimonials = [
      {
        name: 'John Doe',
        company: 'ABC Corp',
        text: 'Excellent service and support throughout the process.'
      },
      {
        name: 'Jane Smith',
        company: 'XYZ Ltd',
        text: 'Made company registration incredibly simple.'
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };