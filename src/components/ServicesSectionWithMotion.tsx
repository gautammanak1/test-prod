"use client";

import { motion } from "framer-motion";
import { ServicesSection } from "@/components/Services-section";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ServicesSectionWithMotion() {
  return (
    <motion.section
      id="services"
      className="py-16 bg-muted/50"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Services</h2>
        <ServicesSection />
      </div>
    </motion.section>
  );
}
