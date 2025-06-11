
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
    question: "What is the eligible age to join your music production courses?",
    answer: "Our music production training is open to all age groups. Whether you're 8 years old, a teenager, or an adult exploring music later in life, you're welcome to join. If you have a passion for music production, age is never a limitation."
  },
  {
    question: "What types of music production courses are available?",
    answer: "We offer complete music production courses designed for beginners, intermediate learners, and advanced producers. This includes full music production programs, electronic music production, and personalized one-on-one mentorship that covers songwriting, sound design, mixing, and mastering."
  },
  {
    question: "How are the music production classes conducted?",
    answer: "Our classes follow a structured format that blends music theory with practical training. Each session includes individual attention, group collaboration, and hands-on experience with professional music software. Students will actively create, produce, and refine music throughout the course."
  },
  {
    question: "What is the class size for each batch?",
    answer: "We maintain a small class size of 15 students per batch to ensure focused learning and individual support. For those looking for deeper, customized learning, we offer personal one-on-one mentorship programs tailored to your specific music production goals."
  },
  {
    question: "How long is each music production class?",
    answer: "Weekly group sessions last between 60 to 90 minutes. We also offer extended 120-minute sessions for students seeking an intensive learning experience. One-on-one mentorship classes typically run for 90 minutes and are scheduled with flexible timing."
  },
  {
    question: "What software do students learn during the course?",
    answer: "Students are trained on industry-standard digital audio workstations (DAWs) such as Logic Pro X, Ableton Live, and other professional music production tools. We also provide access to high-quality sample libraries, VST plugins, and virtual instruments used in modern music production."
  },
  {
    question: "Is there ongoing support after completing the music production course?",
    answer: "Yes, students enrolled in our premium courses receive lifetime access to mentorship support. You'll also be part of an exclusive alumni network with career guidance, music industry opportunities, and long-term support to help you succeed as a professional music producer."
  }
] as const;

// Contact actions for better reusability
const CONTACT_ACTIONS = [
  {
    href: "https://wa.me/919514499932",
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
              Common Inquiries About <span className="text-red-600">My Mentorship</span>
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
