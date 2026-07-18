"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building, CheckCircle2, Percent, ShieldCheck, Users } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/ui/reveal";
import { insurancePartners } from "@/lib/site-data";

const processSteps = [
  {
    icon: Building,
    title: "Visit Our Facility",
    description: "Present your insurance card at reception.",
    color: "text-medBlue bg-blue-100",
  },
  {
    icon: CheckCircle2,
    title: "Verification",
    description: "Quick insurance coverage verification.",
    color: "text-green-600 bg-green-100",
  },
  {
    icon: Users,
    title: "Receive Care",
    description: "Get the medical care you need.",
    color: "text-medBlue bg-purple-100",
  },
  {
    icon: Percent,
    title: "Settlement",
    description: "We handle direct billing with insurers.",
    color: "text-orange-600 bg-orange-100",
  },
];

const PartnersPage = () => {
  return (
    <section id="partners" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 md:max-w-7xl">
        <SectionHeading
          eyebrow="Insurance Partners"
          title="Quality care, covered your way"
          description="We work with leading insurance providers to ensure our patients receive quality healthcare with convenient, direct-billing coverage options."
        />

        <div className="flex items-center justify-center gap-3 flex-wrap mt-8">
          <Badge variant="outline">Easy Claims Process</Badge>
          <Badge variant="outline">Direct Billing Available</Badge>
          <Badge variant="outline">Friendly Support</Badge>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mt-14 items-center">
          <Reveal className="lg:col-span-2 h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-soft-lg h-72 sm:h-80 lg:h-[380px]">
              <Image
                src="/hero6.jpg"
                alt="Insurance partner signage at the Amaris Medical Clinic entrance"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-3 grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {insurancePartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-white p-5 shadow-soft hover:shadow-soft-lg transition-all h-32"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain"
                  />
                ) : (
                  <ShieldCheck className="w-8 h-8 text-medBlue" />
                )}
                <span className="text-sm font-semibold text-gray-700 text-center">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="font-heading text-2xl font-bold text-center mb-12">How Insurance Billing Works</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 0.08}>
                  <div className="text-center p-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${step.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">
                      {index + 1}. {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersPage;
