import {
  Stethoscope,
  Users,
  Smile,
  FlaskConical,
  Scissors,
  ClipboardCheck,
  Siren,
  Activity,
  Baby,
  HeartHandshake,
  CalendarHeart,
  Heart,
  PersonStanding,
  HeartPulse,
  Apple,
  ShieldCheck,
  Sparkles,
  Award,
  Clock,
  type LucideIcon,
} from "lucide-react";

export const SITE_URL = "https://amarisclinic.rw";

export const contactInfo = {
  phone: "+250 788 318 764",
  phoneHref: "tel:+250788318764",
  whatsapp: "+250 782 033 055",
  whatsappHref: "https://wa.me/250782033055",
  appointmentWhatsappHref:
    "https://wa.me/250782033055?text=" +
    encodeURIComponent("Hi, I'd like to book an appointment at Amaris Medical Clinic."),
  email: "amarisclinic1@gmail.com",
  emailHref: "mailto:amarisclinic1@gmail.com",
  emergencyPhone: "+250 788 318 764",
  emergencyHref: "tel:+250788318764",
  website: "amarisclinic.rw",
  addressShort: "KN 2 Ave, Nyamirambo, Kigali",
  addressFull:
    "Amaris Medical Clinic, KN 2 Ave, Rwampala Cell, Nyarugenge Sector, Nyarugenge District, City of Kigali, Rwanda — directly across from Club Rafiki and Nyamirambo Police Station.",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1168.9204803476034!2d30.057366276401503!3d-1.9699674305961783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca540c061e9f9%3A0xb887f081d7845204!2sAmaris%20Medical%20Clinic!5e0!3m2!1sen!2srw!4v1737744476404!5m2!1sen!2srw",
};

export const workingHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 8:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "8:00 AM – 9:00 PM" },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Facilities", href: "#facilities" },
  { name: "Insurance", href: "#partners" },
  { name: "Contact", href: "#contact" },
];

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  category: "primary" | "specialist";
}

export const services: Service[] = [
  {
    title: "General Consultation",
    description:
      "Comprehensive medical evaluations and diagnosis for patients of all ages, delivered with care and clinical precision.",
    icon: Stethoscope,
    category: "primary",
  },
  {
    title: "Family Medicine",
    description:
      "Continuous, whole-family healthcare covering everyday illnesses, checkups and long-term wellbeing.",
    icon: Users,
    category: "primary",
  },
  {
    title: "Dental Care",
    description:
      "Modern dentistry including scaling, fillings, braces and extractions in a dedicated dental suite.",
    icon: Smile,
    category: "primary",
  },
  {
    title: "Laboratory",
    description:
      "On-site hematology and biochemistry testing for fast, accurate diagnostic results.",
    icon: FlaskConical,
    category: "primary",
  },
  {
    title: "Minor Surgery",
    description:
      "Minor surgical and outpatient procedures performed in a safe, sterile environment.",
    icon: Scissors,
    category: "primary",
  },
  {
    title: "Health Checkup",
    description:
      "Preventive screening packages designed to catch potential health issues early.",
    icon: ClipboardCheck,
    category: "primary",
  },
  {
    title: "Emergency Care",
    description:
      "Prompt attention for urgent medical needs, with clear emergency contact lines available.",
    icon: Siren,
    category: "primary",
  },
  {
    title: "Diabetes Care",
    description:
      "Ongoing monitoring and management plans to help patients keep blood sugar under control.",
    icon: Activity,
    category: "specialist",
  },
  {
    title: "Obstetrics",
    description:
      "Dedicated care through pregnancy and delivery planning, focused on mother and baby.",
    icon: Baby,
    category: "specialist",
  },
  {
    title: "Gynecology",
    description:
      "Confidential, respectful women's health consultations and examinations.",
    icon: HeartHandshake,
    category: "specialist",
  },
  {
    title: "Antenatal Care",
    description:
      "Regular prenatal checkups to support a healthy pregnancy from the first trimester onward.",
    icon: CalendarHeart,
    category: "specialist",
  },
  {
    title: "Maternal Health",
    description:
      "Holistic support for mothers before, during and after childbirth.",
    icon: Heart,
    category: "specialist",
  },
  {
    title: "Child Healthcare",
    description:
      "Growth monitoring, vaccinations and pediatric consultations for infants and children.",
    icon: PersonStanding,
    category: "specialist",
  },
  {
    title: "Hypertension Management",
    description:
      "Blood pressure screening and long-term care plans to reduce cardiovascular risk.",
    icon: HeartPulse,
    category: "specialist",
  },
  {
    title: "Nutrition Counseling",
    description:
      "Personalized dietary guidance to support recovery, chronic condition management and healthy living.",
    icon: Apple,
    category: "specialist",
  },
];

export interface InsurancePartner {
  name: string;
  logo: string | null;
}

export const insurancePartners: InsurancePartner[] = [
  { name: "RSSB", logo: "/rssb.jpeg" },
  { name: "MMI", logo: "/mmilogo.png" },
  { name: "Britam", logo: "/britamlogo.png" },
  { name: "Prime Insurance", logo: "/promelogo.jpg" },
  { name: "Radiant", logo: "/radiant.png" },
  { name: "Old Mutual", logo: "/old.png" },
  { name: "Eden Care", logo: "/eden.png" },
];

export interface TeamMember {
  name: string;
  role: string;
  credentials?: string;
  bio: string;
  hours?: string;
  email?: string;
  phone: string;
  phoneHref: string;
  whatsappHref: string;
  photo: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "MUGABARIGIRA Jean de Dieu",
    role: "Managing Director",
    bio: "Mugabarigira oversees the overall management and strategic direction of Amaris Medical Clinic, ensuring smooth operations across every department.",
    phone: "+250 788 398 483",
    phoneHref: "tel:+250788398483",
    whatsappHref: "https://wa.me/250788398483",
    photo: "/managing_director.jpeg",
  },
  {
    name: "Dr. Raban DUSABIMANA",
    role: "Clinic Director",
    credentials: "MD, MSc",
    bio: "A medical doctor with professional experience in clinical activities, research and quality improvement. He earned his Medical Degree from the University of Rwanda in 2018, and a Master of Science in Diabetes from the University of South Wales (UK). He worked in different district hospitals in Rwanda from 2018 to 2021, and has contributed to several research projects with 7 online publications. He holds a specialist certificate in Introduction to Quality Improvement and Patient Safety from the International Society for Quality in Health Care (ISQua). He has experience in research, emergency management, and working in low-resource settings, and is a trainer for Basic Life Support (BLS) and Advanced Cardiac Life Support (ACLS).",
    hours: "7:00 AM – 10:00 AM, Monday – Sunday",
    email: "dusabimanaraban@gmail.com",
    phone: "+250 782 033 055",
    phoneHref: "tel:+250782033055",
    whatsappHref: "https://wa.me/250782033055",
    photo: "/medical_director.jpg",
  },
  {
    name: "INDATWA Jean de Dieu",
    role: "Administrative Assistant & Legal Officer",
    credentials: "LL.M, LL.B, DLP, Certified Mediator, PD in Theology",
    bio: "Jean de Dieu manages administrative operations and legal transactions at Amaris Medical Clinic, ensuring smooth day-to-day running of the facility for patients and staff alike.",
    email: "indatwa8@gmail.com",
    phone: "+250 788 318 764",
    phoneHref: "tel:+250788318764",
    whatsappHref: "https://wa.me/250788318764",
    photo: "/Administrative_Assistant_and_Legal_officer.jpeg",
  },
];

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
}

export const stats: Stat[] = [
  { label: "Patients Served", value: 1000, suffix: "+", icon: Users },
  { label: "Years of Experience", value: 5, suffix: "+", icon: Award },
  { label: "Insurance Partners", value: 7, icon: ShieldCheck },
  { label: "Services Offered", value: 15, suffix: "+", icon: Sparkles },
];

export const coreValues = [
  {
    title: "Compassion",
    description:
      "We prioritize our patients' needs and offer empathetic, dignified care at every visit.",
  },
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every interaction, with patients and partners alike.",
  },
  {
    title: "Innovation",
    description:
      "We adopt modern medical technology and continuously refine how we deliver care.",
  },
  {
    title: "Excellence",
    description:
      "We strive for superior outcomes in patient care and service delivery, every time.",
  },
  {
    title: "Community",
    description:
      "We are committed to improving the health of the Nyamirambo community and beyond.",
  },
];

export const whyChooseUs = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:
      "We prioritize your comfort and wellbeing with personalized healthcare solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Insurance Network",
    description:
      "Direct billing with RSSB, MMI, Britam, Radiant, Old Mutual, Eden Care and Prime Insurance.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "A dedicated medical and administrative team focused on quality outcomes.",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description:
      "Open every day of the week, including evenings, to fit around your schedule.",
  },
];

export const timeline = [
  {
    year: "Founding",
    title: "Amaris Medical Clinic opens its doors",
    description:
      "Established in Nyamirambo, Kigali, to provide accessible general medicine and dental care to the local community.",
  },
  {
    year: "Growth",
    title: "Expansion of services",
    description:
      "Laboratory, pharmacy and dedicated dental suite added, along with an on-site sterilization unit for safer procedures.",
  },
  {
    year: "Partnerships",
    title: "Insurance partnerships secured",
    description:
      "Direct billing agreements formed with RSSB, MMI, Radiant, Old Mutual and other leading insurers to widen access to care.",
  },
  {
    year: "Today",
    title: "Continued investment in quality",
    description:
      "Ongoing staff training, digital patient management, and plans to grow our clinical team as demand increases.",
  },
];

export interface FacilityImage {
  src: string;
  title: string;
  caption: string;
  size: "sm" | "md" | "lg";
}

export const facilityImages: FacilityImage[] = [
  {
    src: "/hero15.jpg",
    title: "Reception & Waiting Area",
    caption: "A calm, comfortable space for patients as they check in and wait to be seen.",
    size: "lg",
  },
  {
    src: "/hero10.jpg",
    title: "Dental Treatment Room",
    caption: "Fully equipped dental chair and instruments for scaling, fillings and braces.",
    size: "md",
  },
  {
    src: "/hero11.jpg",
    title: "Consultation Corridor",
    caption: "Clearly signposted general consultation, triage and laboratory rooms.",
    size: "sm",
  },
  {
    src: "/hero9.jpg",
    title: "Sterilization Room",
    caption: "Dedicated sterilization equipment to keep every instrument safe for reuse.",
    size: "sm",
  },
  {
    src: "/hero3.jpg",
    title: "Laboratory",
    caption: "Hematology and biochemistry testing for fast, accurate diagnostics.",
    size: "md",
  },
  {
    src: "/hero13.jpg",
    title: "Dental Suite",
    caption: "A second dental treatment bay to reduce waiting times for patients.",
    size: "sm",
  },
  {
    src: "/hero16.jpg",
    title: "Waiting Area Signage",
    caption: "Clear wayfinding to reception, general consultation, triage and the laboratory.",
    size: "sm",
  },
  {
    src: "/hero14.jpg",
    title: "Clinic Entrance",
    caption: "Our main entrance on KN 2 Ave, easy to find and access.",
    size: "md",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Uwase M.",
    role: "Patient, Nyamirambo",
    quote:
      "The staff at Amaris were so patient with me and explained everything clearly. My RSSB cover was accepted with no hassle at all.",
    rating: 5,
  },
  {
    name: "Jean Claude N.",
    role: "Patient, Kigali",
    quote:
      "I came in for a dental scaling and left impressed by how clean and modern the treatment room was. Booking was simple too.",
    rating: 5,
  },
  {
    name: "Aline K.",
    role: "Antenatal patient",
    quote:
      "My antenatal visits have been consistent and reassuring. The team always takes time to answer my questions.",
    rating: 5,
  },
  {
    name: "Eric R.",
    role: "Patient, Nyarugenge",
    quote:
      "Quick lab results and a pharmacy on site meant I didn't have to run around the city. Everything I needed was in one place.",
    rating: 4,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What insurance providers does Amaris Medical Clinic accept?",
    answer:
      "We work directly with RSSB, MMI, Britam, Prime Insurance, Radiant, Old Mutual and Eden Care, with direct billing available so you don't have to pay upfront in most cases.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Friday from 8:00 AM to 8:00 PM, and Saturday and Sunday from 8:00 AM to 9:00 PM.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can call or WhatsApp us directly, use the appointment button on this site, or sign in to our online patient portal to book a convenient time.",
  },
  {
    question: "Do you offer emergency care?",
    answer:
      "Yes. For urgent medical needs, call our emergency line and our team will guide you on the next steps immediately.",
  },
  {
    question: "Where exactly is the clinic located?",
    answer:
      "We're on KN 2 Ave in Nyamirambo, Nyarugenge District, City of Kigali — directly across from Club Rafiki and the Nyamirambo Police Station.",
  },
  {
    question: "Do you provide maternal and child healthcare?",
    answer:
      "Yes, our services include obstetrics, gynecology, antenatal care, maternal health and child healthcare, alongside our general medicine and dental services.",
  },
];

export interface HealthTip {
  title: string;
  excerpt: string;
  tag: string;
}

export const healthTips: HealthTip[] = [
  {
    title: "Why regular blood pressure checks matter",
    excerpt:
      "Hypertension often has no symptoms until it becomes serious. A quick check at every visit can catch it early.",
    tag: "Hypertension",
  },
  {
    title: "Caring for your teeth between dental visits",
    excerpt:
      "Simple daily habits like proper brushing and reducing sugary drinks go a long way in preventing costly dental work.",
    tag: "Dental Care",
  },
  {
    title: "What to expect at your first antenatal visit",
    excerpt:
      "Early and regular antenatal checkups help track your baby's growth and catch potential complications early.",
    tag: "Maternal Health",
  },
];

export const newsItems = [
  {
    title: "Amaris Medical Clinic expands insurance partnerships",
    date: "2026",
    excerpt:
      "We continue to grow our network of insurance partners to make quality healthcare more accessible to the community.",
  },
  {
    title: "Digital patient management now live",
    date: "2026",
    excerpt:
      "Our clinic has adopted a digital patient management system for faster check-ins and more seamless care.",
  },
];

export const socialLinks = {
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
  facebook: "https://facebook.com",
  whatsapp: contactInfo.whatsappHref,
};
