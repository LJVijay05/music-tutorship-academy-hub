
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const PremiumFAQ = () => {
  const faqs = [
    {
      question: "Do I need prior music production experience?",
      answer: "Not at all! Our courses are designed to accommodate complete beginners through advanced producers. We start with fundamentals and gradually build complexity based on your progress and learning pace."
    },
    {
      question: "What software and equipment do I need?",
      answer: "We provide access to industry-standard software including Ableton Live, Logic Pro, and Pro Tools. For hardware, a basic computer and audio interface are sufficient to start. We'll guide you on equipment recommendations as you progress."
    },
    {
      question: "How does the mentorship program work?",
      answer: "Our 1-on-1 mentorship includes weekly video sessions, personalized feedback on your projects, custom learning materials, and direct access to your mentor via messaging. You'll also get industry networking opportunities and career guidance."
    },
    {
      question: "What's the difference between group and individual courses?",
      answer: "Group courses offer collaborative learning with 15 students per batch, structured curriculum, and peer interaction. Individual mentorship provides personalized attention, flexible scheduling, custom projects, and accelerated learning based on your specific goals."
    },
    {
      question: "Do you offer job placement assistance?",
      answer: "Yes! We provide career guidance, portfolio review, industry networking opportunities, and connections with record labels and studios. Many of our graduates have secured positions at major music companies or launched successful independent careers."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the course quality or teaching methodology within the first 30 days, we'll provide a full refund, no questions asked."
    },
    {
      question: "Can I switch between course types?",
      answer: "Absolutely! You can upgrade from group to individual mentorship at any time, or switch between different specializations within the first month. We'll credit your previous payments toward the new program."
    },
    {
      question: "How long do I have access to course materials?",
      answer: "All course materials, recordings, and resources are yours for life. You'll also receive free updates to curriculum and new content as the industry evolves. Our alumni network and community access never expires."
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
              Frequently Asked
              <span className="block font-light bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Everything you need to know about our programs
            </p>
          </div>

          {/* FAQ Accordion */}
          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <Accordion type="single" collapsible className="space-y-6">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-0 border-b border-gray-200 last:border-b-0"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6 text-lg md:text-xl font-light text-gray-900 hover:text-blue-600 transition-colors duration-200">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6 font-light">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@musictutorship.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Email Support
              </a>
              <a 
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFAQ;
