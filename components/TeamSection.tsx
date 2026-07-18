"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, GraduationCap, Mail, Phone, Users } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { teamMembers } from "@/lib/site-data";

const teamHighlights = [
  {
    icon: Users,
    title: "Expert Leadership",
    description: "Clinic Director & Administrative Leadership",
  },
  {
    icon: GraduationCap,
    title: "Qualified Clinical Team",
    description: "Licensed doctors, dentists & nurses",
  },
  {
    icon: Award,
    title: "Continuous Learning",
    description: "Regular training & professional development",
  },
];

const TeamPage = () => {
  return (
    <section id="team" className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 md:max-w-7xl">
        <SectionHeading
          eyebrow="Our People"
          title="Meet the team behind your care"
          description="Amaris Medical Clinic is guided by dedicated leadership and a clinical team committed to quality, compassionate healthcare."
        />

        <div className="bg-white rounded-2xl shadow-soft p-8 mt-14 mb-14">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {teamHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl"
                >
                  <Icon className="w-8 h-8 text-medBlue shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
            As a general medicine and dental clinic, Amaris is supported by
            licensed medical and dental professionals, alongside a dedicated
            administrative team. Our staff is expected to grow as more
            insurance partnerships are secured and regulatory approvals are
            obtained. The team regularly undergoes training to stay current
            with the latest advancements in medicine.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} delay={(index % 8) * 0.06}>
              <div className="bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow overflow-hidden h-full flex flex-col">
                <div className="relative w-full aspect-[3/4] bg-gray-100">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover object-[center_12%]"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1 text-center">
                  <h3 className="font-heading text-sm md:text-base font-bold text-gray-900 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-accent text-xs md:text-sm font-semibold mt-1">{member.role}</p>
                  <p className="text-gray-600 text-xs mt-2 leading-relaxed flex-1 line-clamp-3">
                    {member.bio}
                  </p>
                  <div className="flex items-center justify-center gap-2.5 pt-3 text-medBlue">
                    <a
                      href={member.phoneHref}
                      aria-label={`Call ${member.name}`}
                      className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors"
                    >
                      <Phone size={14} />
                    </a>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name}`}
                        className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors"
                      >
                        <Mail size={14} />
                      </a>
                    )}
                    <a
                      href={member.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp ${member.name}`}
                      className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-100 transition-colors"
                    >
                      <BsWhatsapp size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
