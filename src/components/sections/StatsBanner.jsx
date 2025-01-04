const stats = [
  { number: '1000+', label: 'Clients' },
  { number: '50+', label: 'Services' },
  { number: '10+', label: 'Years' },
  { number: '100%', label: 'Satisfaction' }
];

const StatsBanner = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {stat.number}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;