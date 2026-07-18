"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { facilityImages } from "@/lib/site-data";

const sizeToHeight: Record<string, string> = {
  sm: "h-56",
  md: "h-72",
  lg: "h-96",
};

const FacilitiesPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % facilityImages.length));
  const showPrev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + facilityImages.length) % facilityImages.length
    );

  return (
    <section id="facilities" className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 md:max-w-7xl">
        <SectionHeading
          eyebrow="Inside Amaris"
          title="Facilities & Technology"
          description="A closer look at our consultation rooms, dental unit, reception, laboratory and more."
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 mt-14 [column-fill:_balance]">
          {facilityImages.map((facility, index) => (
            <motion.button
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
              onClick={() => setActiveIndex(index)}
              className="group relative mb-5 w-full break-inside-avoid overflow-hidden rounded-2xl shadow-soft hover:shadow-soft-lg transition-shadow text-left"
            >
              <div className={`relative w-full ${sizeToHeight[facility.size]}`}>
                <Image
                  src={facility.src}
                  alt={facility.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-medBlue" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-heading font-bold">{facility.title}</h3>
                  <p className="text-white/85 text-xs mt-1 leading-relaxed">{facility.caption}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 text-white/80 hover:text-white"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 md:left-8 text-white/70 hover:text-white"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 md:right-8 text-white/70 hover:text-white"
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              <div className="relative w-full h-[60vh] rounded-xl overflow-hidden">
                <Image
                  src={facilityImages[activeIndex].src}
                  alt={facilityImages[activeIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-white font-heading text-lg font-bold">
                  {facilityImages[activeIndex].title}
                </h3>
                <p className="text-white/70 text-sm mt-1">{facilityImages[activeIndex].caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FacilitiesPage;
