import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, HeartPulse, Scissors, Activity, BookOpen, FlaskConical } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "General Medicine",
      description: "Comprehensive medical care for patients of all ages, including diagnosis and treatment of various health conditions.",
      icon: Stethoscope
    },
    {
      title: "Laboratory Services",
      description: "State-of-the-art diagnostic testing and laboratory services for accurate health assessments.",
      icon: FlaskConical
    },
    {
      title: "Preventive Health Screenings",
      description: "Regular health check-ups and screenings to detect potential health issues early.",
      icon: HeartPulse
    },
    {
      title: "Minor Surgeries and Procedures",
      description: "Various minor surgical procedures performed in a safe and controlled environment.",
      icon: Scissors
    },
    {
      title: "Chronic Disease Management",
      description: "Ongoing care and management of chronic conditions to improve quality of life.",
      icon: Activity
    },
    {
      title: "Health Education and Wellness",
      description: "Educational programs and resources to promote better health and wellness practices.",
      icon: BookOpen
    }
  ];

  return (
    <div id='services' className="min-h-screen bg-gray-50">
      <div className="relative  bg-[#334C7B] text-white md:py-20 py-10">
        <div className="container justify-center flex flex-col items-center mx-auto px-6">
          <h1 className="md:text-4xl text-2xl font-bold mb-4">Our Services</h1>
          <p className="md:text-xl text-base justify-center text-center ">
            Providing comprehensive healthcare solutions with a focus on quality and patient comfort.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 transform skew-y-2"></div>
      </div>
      <div className="container py-16 flex flex-col justify-center mx-auto px-4 md:px-8 md:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transform transition-transform hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#334C7B]" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;