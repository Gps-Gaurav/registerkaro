'use client';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "How long does company registration take?",
    answer: "Typically, company registration takes 7-10 working days once all required documents are submitted correctly."
  },
  {
    id: 2,
    question: "What documents are needed for GST registration?",
    answer: "You'll need PAN card, address proof, bank account details, and business registration documents."
  },
  {
    id: 3,
    question: "Do you provide post-registration support?",
    answer: "Yes, we provide comprehensive post-registration support including compliance and filing assistance."
  }
];

const FAQItem = ({ faq, isOpen, toggleOpen }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <button
      className="w-full text-left font-semibold flex justify-between items-center"
      onClick={toggleOpen}
    >
      {faq.question}
      <span className="ml-2">
        {isOpen ? '-' : '+'}
      </span>
    </button>
    {isOpen && (
      <p className="text-gray-600 mt-2">
        {faq.answer}
      </p>
    )}
  </div>
);

const Faqs = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="bg-gray-50 py-16" id="faqs">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              toggleOpen={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;