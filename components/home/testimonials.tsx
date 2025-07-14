"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  image?: string;
  relation: string;
  date: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "Mani",
    name: "Manishankar Kolipakula",
    position: "Senior Software Engineer, DE SHAW",
    relation: "Mentor",
    date: "July 1, 2024",
    quote: "I’ve worked with Surya on a few fast-paced projects, and he’s one of those rare people who stays calm under pressure. He writes clean code, asks the right questions, and genuinely cares about building things the right way. You can tell he’s not just coding — he’s thinking about the product, the user, and the team." 
  },
  {
    id: "sahithi",
    name: "Sahithi Yarlagadda",
    position: "Software Engineer, United Health Group",
    relation: "Colleague",
    date: "May 23, 2023",
    quote: "Surya was the kind of teammate everyone wanted to work with — thoughtful, reliable, and always ready to jump in when something broke right before a release. He has a solid grasp of full-stack development and never shied away from tough problems. What really stood out was how well he communicated — he made complex backend logic easy to understand for the whole team."
    }
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">      
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Testimonals
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            What mentors and colleagues say about my work
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  
                  <p className="italic text-muted-foreground mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.relation} • {testimonial.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}