import { Card, CardContent } from "@/components/ui/card"
import { Code, Brain, Megaphone, GraduationCap, PenTool, Users } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Web Developer",
    description: "Creating responsive and dynamic web applications using modern technologies.",
    icon: <Code className="h-8 w-8 text-primary" />,
  },
  {
    title: "AI Developer",
    description: "Implementing cutting-edge AI solutions for various business needs.",
    icon: <Brain className="h-8 w-8 text-primary" />,
  },
  {
    title: "Product Marketing",
    description: "Developing and executing marketing strategies for product success.",
    icon: <Megaphone className="h-8 w-8 text-primary" />,
  },
  {
    title: "Educator",
    description: "Sharing knowledge through workshops, and training sessions.",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
  },
  {
    title: "Content Writer",
    description: "Crafting engaging and informative content for various platforms.",
    icon: <PenTool className="h-8 w-8 text-primary" />,
  },
  {
    title: "Community Builder",
    description: "Fostering and growing vibrant tech communities and networks.",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
]

export function ServicesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <motion.div
                className="mb-4 text-primary"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {service.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

