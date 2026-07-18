"use client";

import { motion } from "framer-motion";
import { Newspaper, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { healthTips, newsItems } from "@/lib/site-data";

const Insights = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 md:max-w-7xl">
        <SectionHeading
          eyebrow="Health Insights"
          title="News & health tips from Amaris"
          description="Practical guidance and updates from our clinical team."
        />

        <div className="grid lg:grid-cols-2 gap-10 mt-14">
          <div>
            <h3 className="font-heading text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              Health Tips
            </h3>
            <div className="space-y-4">
              {healthTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl bg-white border border-border p-5 shadow-soft hover:shadow-soft-lg transition-all"
                >
                  <Badge variant="outline" className="mb-2">{tip.tag}</Badge>
                  <h4 className="font-heading font-bold text-gray-900">{tip.title}</h4>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{tip.excerpt}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-medBlue" />
              Latest News
            </h3>
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl bg-white border border-border p-5 shadow-soft hover:shadow-soft-lg transition-all"
                >
                  <span className="text-xs font-semibold text-gray-400">{item.date}</span>
                  <h4 className="font-heading font-bold text-gray-900 mt-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.excerpt}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
