
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the age range for your music classes?",
      answer: "My classes cater to learners of all ages, from young children to adults. Whether you're 8 or 80, if you have a passion for music production, you're welcome to join our programs."
    },
    {
      question: "What courses do you offer?",
      answer: "I offer comprehensive courses in Music Theory and Music Production, as well as one-on-one mentorship covering all aspects of music and song production. From beginner fundamentals to advanced professional techniques."
    },
    {
      question: "What is the class structure like?",
      answer: "My classes balance theory and practical application. Each session combines individual instruction, group activities, and performance opportunities. You'll learn hands-on with industry-standard software while building a strong theoretical foundation."
    },
    {
      question: "What is the class size?",
      answer: "Classes are kept small with 7-15 students per batch (varies by course) to ensure individual attention. We also offer One-on-one personal mentorship that covers all aspects of music making for those seeking personalized guidance."
    },
    {
      question: "What is the duration of each class?",
      answer: "Classes run for 60-90 minutes weekly, with options to extend to 120 minutes per week for intensive learning. One-on-one sessions are typically 90 minutes and can be scheduled flexibly."
    },
    {
      question: "Do you provide certificates upon completion?",
      answer: "Yes, all students receive industry-recognized certificates upon successful completion of their chosen program. These certificates are valued by music studios and production houses worldwide."
    },
    {
      question: "What software will I learn?",
      answer: "You'll master industry-standard DAWs including Logic Pro, Ableton Live, and other professional music production software. We provide access to premium sample libraries and production tools."
    },
    {
      question: "Is there ongoing support after the course?",
      answer: "Absolutely! Our premium students get lifetime mentorship support, alumni network access, and career guidance. We're committed to your long-term success in music production."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-red-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get answers to the most common questions about our music mentorship program
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl px-4 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 text-sm font-medium text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-4 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA at bottom */}
          <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <p className="text-base text-gray-600 mb-4">Still have questions? We're here to help!</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="https://wa.me/919514499932" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 inline-block text-sm"
              >
                Chat with Us
              </a>
              <a 
                href="mailto:contact@musictutorship.com"
                className="border-2 border-red-500 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-block text-sm"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
