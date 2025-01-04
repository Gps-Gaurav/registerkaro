// src/components/home/sections/FAQSection.js
import { useState } from 'react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does company registration take?',
      answer: 'Typically, it takes 7-10 working days for complete registration.'
    },
    {
      question: 'What documents are required?',
      answer: 'You need ID proof, address proof, and business details.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-white rounded-lg shadow hover:shadow-md"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-semibold">{faq.question}</h3>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};