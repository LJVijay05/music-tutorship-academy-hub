
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

// Extract FAQ data to a constant for better maintainability
const FAQ_DATA = [
  {
    question: "What is online music production coaching?",
    answer: "Online music production coaching is personalized, one-on-one mentorship delivered through video calls. You'll get direct feedback on your tracks, learn industry techniques, and receive guidance tailored to your specific goals and skill level."
  },
  {
    question: "Which DAWs do you teach?",
    answer: "We teach all major Digital Audio Workstations including FL Studio, Ableton Live, Logic Pro, Pro Tools, and more. Our sessions are customized to your preferred DAW, ensuring you master the tools you want to use."
  },
  {
    question: "Do I need prior music knowledge to start?",
    answer: "No prior music knowledge is required! Our coaching adapts to your skill level, whether you're a complete beginner or an experienced producer looking to refine specific techniques."
  },
  {
    question: "How does mentorship differ from tutorials?",
    answer: "Unlike generic tutorials, our mentorship provides personalized feedback on your actual projects, addresses your specific challenges, and adapts to your learning pace. You get real-time guidance and industry insights you can't find in standard tutorials."
  },
  {
    question: "Can I get feedback on my own music?",
    answer: "Absolutely! Getting feedback on your own tracks is a core part of our mentorship. We'll analyze your productions, suggest improvements, and guide you through professional mixing and mastering techniques."
  }
] as const;

// Contact actions for better reusability
const CONTACT_ACTIONS = [
  {
    href: "https://wa.me/916374428173",
    label: "Chat with Us",
    variant: "primary" as const
  },
  {
    href: "mailto:contact@musictutorship.com",
    label: "Email Us", 
    variant: "secondary" as const
  }
] as const;

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions <span className="text-red-600">(FAQs)</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore answers to the most common questions about our music mentorship program, designed to help you excel in your musical journey.
            </p>
          </header>

          <Accordion type="single" collapsible className="space-y-0">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem 
                key={`faq-${index}`}
                value={`item-${index}`}
                className="border-0 border-b border-gray-200 last:border-b-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 px-0 text-red-600 font-medium text-lg group relative [&>svg]:hidden">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-1 h-8 bg-red-600 flex-shrink-0" />
                    <span className="flex-1">{faq.question}</span>
                    <Plus className="w-6 h-6 text-gray-400 group-data-[state=open]:rotate-45 transition-transform duration-200 flex-shrink-0" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-6 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <footer className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {CONTACT_ACTIONS.map((action) => (
                <a 
                  key={action.label}
                  href={action.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-block ${
                    action.variant === 'primary' 
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'border-2 border-red-600 text-red-600 hover:bg-red-50'
                  }`}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
