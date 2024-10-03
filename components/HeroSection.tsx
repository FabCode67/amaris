import { useState, useEffect } from "react";
import { ArrowDown, Calendar, Search } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HeroSection = () => {
    const services = ["Dental Care", "General Medicine", "Nursing Care", "Reception", "Laboratory"];
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [currentServiceText, setCurrentServiceText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [charIndex, setCharIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const router = useRouter();

    const TYPING_SPEED = 100;
    const DELETING_SPEED = 50;
    const PAUSE_DURATION = 2000;

    useEffect(() => {
        let typingTimeout: NodeJS.Timeout;

        if (isTyping && charIndex < services[currentServiceIndex].length) {
            typingTimeout = setTimeout(() => {
                setCurrentServiceText((prev) => prev + services[currentServiceIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, TYPING_SPEED);
        } else if (isTyping && charIndex === services[currentServiceIndex].length) {
            setIsPaused(true);  // Pause after typing a service
            setTimeout(() => {
                setIsTyping(false);
                setIsPaused(false);
            }, PAUSE_DURATION);
        }

        return () => clearTimeout(typingTimeout);
    }, [isTyping, charIndex, currentServiceIndex, services]);

    useEffect(() => {
        let deletingTimeout: NodeJS.Timeout;

        if (!isTyping && charIndex > 0) {
            deletingTimeout = setTimeout(() => {
                setCurrentServiceText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            }, DELETING_SPEED);
        } else if (!isTyping && charIndex === 0 && !isPaused) {
            setIsPaused(true);
            setTimeout(() => {
                setIsTyping(true);
                setCurrentServiceIndex((prevIndex) =>
                    prevIndex === services.length - 1 ? 0 : prevIndex + 1
                );
                setIsPaused(false);
            }, 500);  // Pause before typing the next service
        }

        return () => clearTimeout(deletingTimeout);
    }, [isTyping, charIndex, isPaused, services.length]);

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.5, duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="relative bg-medBlue bg-[#00205A] min-h-screen text-white w-full h-fit py-16 my-auto justify-center items-center flex ">
            <div className="container flex md:flex-row flex-col mx-auto px-4 md:px-8 md:max-w-7xl w-full md:space-y-0 space-y-6">
                <motion.div
                    className="flex flex-col justify-center my-auto space-y-6 md:w-[50%] w-full"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Accuracy and Clinical Acceptability of <span className="text-gray-400">Amaris Medical Clinic</span>
                    </h1>
                    <div className="Services text-md md:text-lg text-gray-300 font-bold">
                        We offer but are not limited to these services:{" "}
                        <span className="text-white text-xl">
                            {currentServiceText}
                        </span>
                    </div>
                    <div className="space-y-4">
                        <Button
                            onClick={() => router.push("#team")}
                            className="bg-medGreen hover:bg-[#334C7B] border-white border"
                        >
                            Meet with Our Clinicians <span><ArrowDown width={40} /></span>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    className="relative h-full w-fit self-end ml-auto"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <div className="bg-[#334C7B] h-full w-fit p-4 justify-end ml-auto rounded-full">
                        <div className="bg-[#66799C] w-fit p-3 rounded-full">
                            <img src="/docs.svg" alt="Doctors" className="w-full rounded-full" />
                        </div>
                    </div>

                    <motion.div
                        className="absolute backdrop-blur-2xl text-xs px-2 py-1 rounded-lg shadow-md bottom-2 flex flex-col right-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <p>Contact no:</p>
                        <p>+250 788 888 888</p>
                    </motion.div>

                    <motion.div
                        className="absolute bg-[#66799C] md:px-4 px-2 py-1 text-xs rounded-lg shadow-md md:bottom-20 bottom-12 flex md:-left-24 -left-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <Search className="flex my-auto justify-center mr-3" />
                        <div className="flex flex-col">
                            <p className="font-semibold">Well Qualified doctors</p>
                            <p>Treat with care</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute bg-[#66799C] md:px-4 px-2 py-1 text-xs rounded-lg shadow-md md:bottom-56 bottom-64 flex md:-left-24 -left-2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                    >
                        <Calendar className="flex my-auto justify-center mr-3" />
                        <div className="flex flex-col">
                            <p className="font-semibold">Book appointment</p>
                            <p>Online appointment</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
