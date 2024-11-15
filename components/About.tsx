import React from 'react';
import { Card, CardContent } from "./ui/card"

import { Heart, Users, Building2, Stethoscope, Trophy, Clock } from "lucide-react";

const AboutPage = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Patient-Centered Care",
      description: "We prioritize your comfort and well-being with personalized healthcare solutions."
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-500" />,
      title: "Modern Facilities",
      description: "State-of-the-art medical technology for accurate diagnosis and treatment."
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Expert Team",
      description: "Experienced healthcare professionals dedicated to your health."
    }
  ];

  return (
    <div className="bg-white w-full">
      <div className="relative md:h-[200px] h-[100px] overflow-hidden">
        <img
          src="/hero5.jpg"
          alt="Amaris Medical Clinic Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            About Amaris Medical Clinic
          </h1>
        </div>
      </div>
      <div className="container py-16 flex flex-col justify-center mx-auto px-4 md:px-8 md:max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
          <div className="bg-blue-100 text-[#334C7B] hover:bg-blue-100 text-lg px-2 py-1">
          Healthcare Excellence in Rwanda
            </div>
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
                Amaris Medical Clinic is a healthcare provider located in
                Nyarugenge Sector, Nyarugenge District, City of Kigali,
                Rwanda. We are dedicated to delivering high-quality,
                patient-centered healthcare services in general medicine
                and dentistry services.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Our clinic is equipped with modern medical technology and staffed
                by experienced healthcare professionals committed to improving the well-being
                of our patients. Our services are designed to be affordable and effective
                to the communities we serve.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Stethoscope className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Patients Served</div>
              </div>
              <div className="text-center">
                <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Available Care</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="hero11.jpg"
              alt="Medical Staff"
              className="rounded-2xl shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Amaris Medical Clinic</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;