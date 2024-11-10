import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "3D representation",
    description: "Allowing user to explore the city and the places with the help of the new 3D Google Map.",
    pro: 1,
  },
  {
    title: "Booking and Reservations",
    description: "Integrating options for users to book hotels and reserve spots at popular attractions directly through the app, streamlining the planning process and enhancing convenience.",
    pro: 1,
  },
  {
    title: "Dynamic Suggestions",
    description: "Enhancing the AI’s ability to offer unique and dynamic suggestions that evolve with the user’s tastes and feedback.",
    pro: 1,
  },
  {
    title: "Feedback Integration",
    description: "Allowing users to give direct feedback on AI-generated suggestions for continuous learning and improvement.",
    pro: 1,
  },
  
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Our Future Services
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We are working on some exciting new features to enhance your trip planning experience. Stay tuned!
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              SOON
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
