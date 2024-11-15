import React from 'react';
import {
 
    Users,
    CheckCircle2,
    Percent,
    Building,
    Badge,
    
} from 'lucide-react';

const insurancePartners = [
    {
        id: 1,
        name: "Old Mutual",
        logo: "/old.png",
        coverage: ["Outpatient Services", "Inpatient Care", "Specialized Treatments", "Emergency Services"],
        benefits: ["Direct Billing Available", "Wide Network Coverage", "24/7 Customer Support"],

    },
    {
        id: 2,
        name: "Eden Care",
        logo: "eden.png",
        coverage: ["Primary Healthcare", "Specialist Consultations", "Maternity Care", "Dental Services"],
        benefits: ["Quick Claims Processing", "Family Coverage Plans", "Preventive Care Benefits"],

    },
    {
        id: 3,
        name: "Radiant",
        logo: "/radiant.png",
        coverage: ["General Medical Services", "Surgical Procedures", "Prescription Medicine", "Lab Tests"],
        benefits: ["Digital Claims Platform", "Flexible Payment Options", "Comprehensive Coverage"],

    }
];

const PartnersPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-b bg-[#334C7B]  text-white">
                <div className="container mx-auto px-4 md:py-16 py-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="md:text-4xl text-2xl font-bold mb-4">Insurance Partners</h1>
                        <p className="md:text-lg text-base text-blue-100 mb-8">
                            We work with leading insurance providers to ensure our patients receive quality healthcare with convenient coverage options.
                        </p>
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <Badge className="px-4 py-2">
                                Easy Claims Process
                            </Badge>
                            <Badge className="px-4 py-2">
                                Direct Billing Available
                            </Badge>
                            <Badge className="px-4 py-2">
                                24/7 Support
                            </Badge>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-3 gap-8">
                    {insurancePartners.map((partner) => (
                        <div key={partner.id} className="overflow-hidden items-center w-full h-full hover:shadow-lg shadow-lg justify-center transition-shadow m-auto duration-300">
                            <img
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                className="my-auto flex items-center mx-auto justify-center h-52"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Insurance Process</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Building className="w-8 h-8 text-[#334C7B]" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">1. Visit Our Facility</h3>
                            <p className="text-gray-600">Present your insurance card at reception</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">2. Verification</h3>
                            <p className="text-gray-600">Quick insurance coverage verification</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-[#334C7B]" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">3. Receive Care</h3>
                            <p className="text-gray-600">Get the medical care you need</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Percent className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">4. Settlement</h3>
                            <p className="text-gray-600">We handle direct billing with insurers</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnersPage;