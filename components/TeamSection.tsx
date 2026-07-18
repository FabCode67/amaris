"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Clock, GraduationCap, Mail, Phone, Users } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { teamMembers, type TeamMember } from "@/lib/site-data";

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
  const [selected, setSelected] = useState<TeamMember | null>(null);

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
                  {member.credentials && (
                    <p className="text-gray-400 text-[11px] font-medium mt-0.5 tracking-wide uppercase">
                      {member.credentials}
                    </p>
                  )}
                  <p className="text-gray-600 text-xs mt-2 leading-relaxed flex-1 line-clamp-3">
                    {member.bio}
                  </p>
                  <button
                    onClick={() => setSelected(member)}
                    className="text-xs font-semibold text-medBlue hover:text-brand-700 mt-2 underline underline-offset-2"
                  >
                    View more
                  </button>
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

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 bg-gray-100">
                    <Image
                      src={selected.photo}
                      alt={selected.name}
                      fill
                      sizes="80px"
                      className="object-cover object-[center_12%]"
                    />
                  </div>
                  <div className="text-left">
                    <DialogTitle className="text-xl">{selected.name}</DialogTitle>
                    <p className="text-accent font-semibold text-sm mt-0.5">{selected.role}</p>
                    {selected.credentials && (
                      <p className="text-gray-400 text-[11px] font-medium tracking-wide uppercase mt-0.5">
                        {selected.credentials}
                      </p>
                    )}
                  </div>
                </div>
              </DialogHeader>

              <p className="text-gray-600 text-sm leading-relaxed">{selected.bio}</p>

              {selected.hours && (
                <div className="flex items-start gap-2 text-sm text-gray-700 bg-blue-50/60 rounded-lg p-3">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-medBlue" />
                  <span>{selected.hours}</span>
                </div>
              )}

              <div className="flex items-center gap-3 pt-2 text-medBlue">
                <a
                  href={selected.phoneHref}
                  aria-label={`Call ${selected.name}`}
                  className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors"
                >
                  <Phone size={18} />
                </a>
                {selected.email && (
                  <a
                    href={`mailto:${selected.email}`}
                    aria-label={`Email ${selected.name}`}
                    className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                )}
                <a
                  href={selected.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${selected.name}`}
                  className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-100 transition-colors"
                >
                  <BsWhatsapp size={17} />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TeamPage;
