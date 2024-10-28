import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FAQProps {
    question: string;
    answer: string;
    value: string;
  }
  
const FAQList: FAQProps[] = [
    {
        question: "What is AI Trip Planner?",
        answer: "AI Trip Planner is an intelligent tool that helps you plan your trips efficiently using AI technology.",
        value: "item-1",
    },
    {
        question: "How does AI Trip Planner work?",
        answer:
            "AI Trip Planner uses the Gemini API to make trip suggestions, Google Maps for navigation, and Firebase for storage.",
        value: "item-2",
    },
    {
        question: "Can I customize my travel itinerary?",
        answer:
            "Yes, you can customize your travel itinerary to suit your needs and preferences.",
        value: "item-3",
    },
    {
        question: "Is AI Trip Planner free to use?",
        answer: "Yes, AI Trip Planner is free forever because it is a project for a hackathon powered by Google.",
        value: "item-4",
    },
    {
        question: "How do I get started with AI Trip Planner?",
        answer: "Simply sign up on our website and start planning your trip with our easy-to-use interface.",
        value: "item-5",
    },
];
  
  export const FAQSection = () => {
    return (
      <section id="faq" className="container md:w-[700px] py-24 sm:py-32 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            FAQS
          </h2>
  
          <h2 className="text-3xl md:text-4xl text-center font-bold">
            Common Questions
          </h2>
        </div>
  
        <Accordion type="single" collapsible className="AccordionRoot">
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
  
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    );
  };