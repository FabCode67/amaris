"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Eye, HeartHandshake } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import SectionHeading from "@/components/ui/section-heading";
import AnimatedCounter from "@/components/ui/animated-counter";
import { coreValues, whyChooseUs, stats } from "@/lib/site-data";

const AboutPage = () => {
  return (
    <section id="about" className="bg-white w-full py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 md:max-w-7xl">
        <SectionHeading
          eyebrow="About Amaris"
          title="Healthcare excellence rooted in Nyamirambo"
          description="Amaris Medical Clinic is a patient-centered healthcare provider in Nyarugenge District, City of Kigali, dedicated to delivering high-quality general medicine, dental and maternal health services."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          <Reveal>
            <div className="prose prose-lg max-w-none space-y-5">
              <p className="text-gray-600 leading-relaxed">
                Amaris Medical Clinic was founded to make quality healthcare
                genuinely accessible in Nyamirambo — combining modern medical
                technology with a warm, patient-first approach. What began as
                a general medicine and dental practice has grown into a
                multi-service clinic trusted by the local community.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our clinic is equipped with modern medical technology and
                staffed by experienced healthcare professionals committed to
                improving the wellbeing of every patient who walks through
                our doors. Services are designed to be affordable, effective
                and easy to access — with direct insurance billing to remove
                friction from your care.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <Icon className="w-7 h-7 text-accent mx-auto mb-2" />
                    <div className="font-heading text-2xl font-bold text-gray-900">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ y: -6 }} className="col-span-2">
                <Image
                  src="/location.jpg"
                  alt="Amaris Medical Clinic signage and street entrance"
                  width={600}
                  height={340}
                  className="rounded-2xl shadow-soft-lg w-full h-56 object-cover"
                />
              </motion.div>
              <motion.div whileHover={{ y: -6 }}>
                <Image
                  src="/hero11.jpg"
                  alt="Interior corridor at Amaris Medical Clinic"
                  width={300}
                  height={220}
                  className="rounded-2xl shadow-soft-lg w-full h-40 object-cover"
                />
              </motion.div>
              <motion.div whileHover={{ y: -6 }}>
                <Image
                  src="/hero6.jpg"
                  alt="Amaris Medical Clinic entrance with insurance partner signage"
                  width={300}
                  height={220}
                  className="rounded-2xl shadow-soft-lg w-full h-40 object-cover"
                />
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">
          <Reveal delay={0}>
            <div className="h-full rounded-2xl border border-border bg-white p-8 shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-medBlue" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading healthcare facility in Kigali, recognized
                for excellence in patient care, innovation, and compassionate
                service.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-white p-8 shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-medBlue" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide affordable, accessible and quality healthcare
                services to all, ensuring a patient-first approach that
                fosters trust and enhances wellbeing.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-border bg-white p-8 shadow-soft hover:shadow-soft-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6 text-medBlue" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Core Values</h3>
              <ul className="text-gray-600 leading-relaxed space-y-1">
                {coreValues.map((value) => (
                  <li key={value.title}>
                    <span className="font-semibold text-gray-800">{value.title}:</span>{" "}
                    {value.description}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Why choose us */}
        <div className="mt-24">
          <SectionHeading title="Why Choose Amaris Medical Clinic" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyChooseUs.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={index * 0.08}>
                  <div className="h-full text-center rounded-2xl border border-border bg-white p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
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

export default AboutPage;
