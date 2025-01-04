// src/components/sections/HappyClients.jsx
const clients = [
    { id: 1, name: 'Client 1', logo: '/images/client1.png' },
    { id: 2, name: 'Client 2', logo: '/images/client2.png' },
    { id: 3, name: 'Client 3', logo: '/images/client3.png' },
    { id: 4, name: 'Client 4', logo: '/images/client4.png' }
  ];
  
  const HappyClients = () => {
    return (
      <section className="container mx-auto px-4" id="clients">
        <h2 className="text-3xl font-bold text-center mb-10">Our Happy Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div key={client.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="bg-gray-200 h-20 rounded mb-4">
              
              </div>
              <p className="text-center text-gray-600">{client.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HappyClients;