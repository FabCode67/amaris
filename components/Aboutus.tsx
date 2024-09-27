import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from 'next/image';
import { ArrowRight } from "lucide-react";
import Parteners from "./WhoWeAre";

const AboutUsSection = () => {
    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.2,
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="about"  className="bg-white w-full py-16">
            <div className="container flex mx-auto px-2 md:px-8 max-w-7xl">
            <motion.div
                className="w-full md:w-1/2 md:flex hidden justify-start mr-4"
                initial="hidden"
                animate="visible"
                variants={imageVariants}
            >
                <Image
                    src="/dent.webp"
                    alt="Doctor"
                    width={600}
                    height={500}
                    className="w-full h-full object-cover justify-start flex mr-auto rounded-xl "
                />
            </motion.div>

            <motion.div
                className="w-full md:w-1/2 flex flex-col space-y-4"
                initial="hidden"
                animate="visible"
                variants={textVariants}
            >
                <h3 className="text-lg text-gray-500 font-medium">About Us</h3>
                <h1 className="text-4xl font-bold text-gray-800">We Help Your Health</h1>
                <p className="text-gray-600 leading-relaxed">
                    This profile describes the activities of health services and medical support 
                    as well as the facilities and conditions of the General Hospital which is reflected 
                    in the general public served from all groups, religions and beliefs, ethnicity and 
                    the level and frequency of bed occupancy which continues to increase significantly.
                </p>
                <div className="flex space-x-4">
                
                <div className="space-y-4">
                        <Button className="bg-medGreen hover:bg-[#334C7B] border-[#334C7B] text-[#334C7B] hover:text-white border">
                            Book an appointment <span><ArrowRight width={40} /></span>
                        </Button>
                    </div>
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                    More About Us
                </Button>
                </div>
            </motion.div>
            </div>
            <Parteners />
        </section>
    );
};

export default AboutUsSection;
