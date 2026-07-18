"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { testimonials } from "@/lib/site-data";

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 md:max-w-7xl">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What our patients say"
          description="Real feedback from people we've had the privilege of caring for."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white border border-border p-6 shadow-soft hover:shadow-soft-lg transition-all flex flex-col"
            >
              <Quote className="w-8 h-8 text-accent/40 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 pt-4 border-t border-border">
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
