import {  CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Microscope, Scissors, Droplet, Stethoscope, Battery, LightbulbIcon } from "lucide-react";
import { motion } from "framer-motion";

const FacilitiesPage = () => {
  return (
    <section id="facilities" className="bg-gray-50 py-16">
      <div className="container mx-auto  px-4 md:px-8 md:max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-[#334C7B] mb-12">Facilities & Technology</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg"
          >
            <div className="p-6">
              <div className="bg-blue-100 lg:p-3 p-0 rounded-lg inline-block">
                <Users className="w-8 h-8 text-[#334C7B]" />
              </div>
              <CardHeader>
                <CardTitle>Reception & Waiting Area</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A fully equipped reception desk and comfortable waiting area for patients.
                </CardDescription>
              </CardContent>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg"
          >
            <div className="p-6 ">
              <div className="bg-blue-100 lg:p-3 p-0 rounded-lg inline-block mb-4">
                <Microscope className="w-8 h-8 text-[#334C7B]" />
              </div>
              <CardHeader>
                <CardTitle>Laboratory</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Laboratory room with hematology and biochemistry testing capabilities.
                </CardDescription>
              </CardContent>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg"
          >
            <div className="p-6  ">
              <div className="bg-blue-100  lg:p-3 p-0 rounded-lg inline-block mb-4">
                <Stethoscope className="w-8 h-8 text-[#334C7B]" />
              </div>
              <CardHeader>
                <CardTitle>Consultation Room</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  General consultation room with a gynecology examination table.
                </CardDescription>
              </CardContent>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg"
          >
            <div className="p-6">
              <div className="bg-blue-100 lg:p-3 p-0 rounded-lg inline-block mb-4">
                <Scissors className="w-8 h-8 text-[#334C7B]" />
              </div>
              <CardHeader>
                <CardTitle>Minor Surgery Room</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dedicated room for minor surgical procedures.
                </CardDescription>
              </CardContent>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg"
          >
            <div className="p-6">
              <div className="bg-blue-100  lg:p-3 p-0 rounded-lg inline-block mb-4">
                <Droplet className="w-8 h-8 text-[#334C7B]" />
              </div>
              <CardHeader>
                <CardTitle>Nursing Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nursing care and observation room for patient monitoring.
                </CardDescription>
              </CardContent>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg"
          >
            <div className="p-6">
              <div className="bg-blue-100 lg:p-3 p-0 rounded-lg inline-block mb-4">
                <Battery className="w-8 h-8 text-[#334C7B]" />
              </div>
              <CardHeader>
                <CardTitle>Power Backup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A modern and clean energy power backup that uses batteries.
                </CardDescription>
              </CardContent>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg col-span-2"
          >
            <div className="p-6">
              <div className="bg-blue-100 lg:p-3 p-0 rounded-lg inline-block mb-4">
                <LightbulbIcon className="w-8 h-8 text-[#334C7B]" />
              </div>
              <CardHeader>
                <CardTitle>Digital Patient Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A digital patient management system for efficient and seamless care.
                </CardDescription>
              </CardContent>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesPage;