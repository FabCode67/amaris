import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";

// Locally bundled variable fonts (no network fetch required at build time).
const fontSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});

const fontHeading = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-heading",
  weight: "100 900",
  display: "swap",
});

const SITE_URL = "https://amarisclinic.rw";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Amaris Medical Clinic | Trusted Healthcare in Kigali, Rwanda",
    template: "%s | Amaris Medical Clinic",
  },
  description:
    "Amaris Medical Clinic is a premium, patient-centered healthcare provider in Nyamirambo, Kigali. General medicine, dental care, maternal health, laboratory, pharmacy and more — with RSSB, MMI, Britam, Radiant and other insurance partners accepted.",
  keywords: [
    "Amaris Medical Clinic",
    "Amaris Clinic Kigali",
    "clinic in Nyamirambo",
    "general medicine Rwanda",
    "dental clinic Kigali",
    "maternal health Rwanda",
    "family medicine Kigali",
    "RSSB clinic",
    "private clinic Rwanda",
  ],
  authors: [{ name: "Amaris Medical Clinic" }],
  creator: "Amaris Medical Clinic",
  applicationName: "Amaris Medical Clinic",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_RW",
    url: SITE_URL,
    siteName: "Amaris Medical Clinic",
    title: "Amaris Medical Clinic | Trusted Healthcare in Kigali, Rwanda",
    description:
      "Premium, patient-centered general medicine, dental care and maternal health services in Nyamirambo, Kigali.",
    images: [
      {
        url: "/hero1.jpg",
        width: 1200,
        height: 630,
        alt: "Amaris Medical Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaris Medical Clinic | Trusted Healthcare in Kigali, Rwanda",
    description:
      "Premium, patient-centered general medicine, dental care and maternal health services in Nyamirambo, Kigali.",
    images: ["/hero1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Amaris Medical Clinic",
  image: `${SITE_URL}/hero1.jpg`,
  url: SITE_URL,
  telephone: "+250788318764",
  email: "amarisclinic1@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "KN 2 Ave, Rwampala Cell, Nyarugenge Sector",
    addressLocality: "Kigali",
    addressRegion: "Nyarugenge District",
    addressCountry: "RW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.9699674305961783,
    longitude: 30.057366276401503,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  medicalSpecialty: [
    "General Practice",
    "Dentistry",
    "Obstetrics and Gynecology",
    "Pediatrics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontHeading.variable} ${fontSans.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
