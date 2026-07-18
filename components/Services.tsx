"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { services, type Service, contactInfo } from "@/lib/site-data";

const ServicesPage = () => {
  const [selected, setSelected] = useState<Service | null>(null);

  const primary = services.filter((s) => s.category === "primary");
  const specialist = services.filter((s) => s.category === "specialist");

  const renderGrid = (list: Service[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-border bg-white p-6 shadow-soft hover:shadow-soft-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-medBlue transition-colors">
              <Icon className="w-6 h-6 text-medBlue group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-heading text-lg font-bold text-gray-900">{service.title}</h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{service.description}</p>
            <button
              onClick={() => setSelected(service)}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-medBlue hover:text-brand-700"
            >
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section id="services" className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 md:max-w-7xl">
        <SectionHeading
          eyebrow="What We Offer"
          title="Comprehensive care, all in one clinic"
          description="From everyday general medicine to specialist maternal and chronic-condition care, our services are designed around you."
        />

        <div className="mt-14 space-y-16">
          <div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">Core Medical Services</h3>
            {renderGrid(primary)}
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">Specialist &amp; Maternal Care</h3>
            {renderGrid(specialist)}
          </div>
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-2">
                  <selected.icon className="w-6 h-6 text-medBlue" />
                </div>
                <DialogTitle className="text-2xl">{selected.title}</DialogTitle>
                <DialogDescription className="text-base text-gray-600 pt-2">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href={contactInfo.appointmentWhatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="w-full bg-medBlue text-white hover:bg-brand-700 rounded-full">
                    Book This Service
                  </Button>
                </a>
                <a href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full rounded-full border-medBlue text-medBlue gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Ask on WhatsApp
                  </Button>
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesPage;
