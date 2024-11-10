import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile Friendly",
    description:
      "Our platform is optimized for mobile devices, ensuring you can plan your trips on the go.",
  },
  {
    icon: "BadgeCheck",
    title: "Easy Trip Planning",
    description:
      "Plan your trips effortlessly with our user-friendly interface and comprehensive tools.",
  },
  {
    icon: "Goal",
    title: "Easy Navigation",
    description:
      "Navigate through our platform with ease, thanks to our intuitive design and layout.",
  },
  {
    icon: "PictureInPicture",
    title: "Saved Trips",
    description:
      "Save your favorite trips and access them anytime, anywhere with just a few clicks.",
  },
  {
    icon: "MousePointerClick",
    title: "Best Hotel and Places Recommendations",
    description:
      "Get the best recommendations for hotels and places to visit, tailored to your preferences.",
  },
  {
    icon: "Newspaper",
    title: "Real On-Date Images",
    description:
      "View real-time images of destinations to help you make informed decisions.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Our proud features
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Discover the features that make our platform the best choice for planning your trips.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};