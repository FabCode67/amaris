import { motion } from 'framer-motion';
import Image from 'next/image'; // Assuming you are using Next.js for image optimization
import { CiMedicalCase } from 'react-icons/ci';
import { RiNurseFill } from 'react-icons/ri';
import { TbDental } from 'react-icons/tb';

const MedicalServices = () => {
    return (
        <section id='services' className=" py-3 w-full bg-[#00205A] relative h-fit rounded-e-full rounded-se-3xl min-h-screen">
            <div className="max-w-7xl flex justify-center items-center self-center mx-auto">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className='abslo absolute top-0'>
            <h2 className="text-white md:text-5xl text-2xl  font-bold">Our Medical Services</h2>
                <p className="text-white md:text-lg text-sm">
                    We are dedicated to serve you the best medical services.
                </p>
                </div>
                <div className="flex w-full items-end md:mt-0 mt-20">
                    <div className="space-y-3 flex  justify-betwemen md:w-[50%] w-full">    
                        <div className='flex w-1/2  space-y-5 flex-col'> 
                            <div className="grid grid-cols-1  md:gap-4 gap-1">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-2 py-10 rounded-xl md:w-[15rem] w-[10rem] shadow-lg flex flex-col items-center space-y-4"
                                >
                                    <div className="text-teal-500">
                                        <CiMedicalCase className="text-7xl" />
                                    </div>
                                    <h1 className="text-xl font-bold text-gray-800">General consultation</h1>
                                    <p className="text-gray-700">
                                        We provide general consultation for all types of diseases and health conditions.
                                    </p>
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-2 rounded-xl py-10 md:w-[15rem] w-[10rem] shadow-lg flex flex-col items-center space-y-4"
                                >
                                    <div className="text-teal-500">
                                        <RiNurseFill className="text-7xl" />
                                    </div>
                                    <h1 className="text-xl font-bold text-gray-800">Nursing Care</h1>
                                    <p className="text-gray-700">
                                        We provide nursing care services for all types of patients.
                                        Our nurses are well trained and experienced.
                                    </p>
                                </motion.div>
                            </div>

                        </div>
                        <div className="grid grid-cols-1  h-fit my-auto justify-center self-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-white p-2 rounded-xl py-10 md:w-[18rem] w-[11rem] shadow-lg flex flex-col items-center space-y-4"
                            >
                                <div className="text-teal-500">
                                    <TbDental className="text-7xl" />
                                </div>
                                <h1 className="text-xl font-bold text-gray-800">Dental Care</h1>
                                <p className="text-gray-700">
                                    We provide dental care services for all types of dental problems.
                                    We care for your smile, and we care for your health.
                                    Team of experienced dentists are here to help you.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column - Images */}
                    <div className=" w-[45%] float-end justify-end ml-auto justify-items-end items-end space-y-5 md:flex hidden flex-col">
                        <div className='flex space-x-4'>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src="/team-doctors.jpg"
                                alt="Doctor with patient"
                                width={500}
                                height={300}
                                className="object-cover w-[100%] h-[10rem] flex justify-self-end justify-end items-end ml-auto"
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src="/team-doctors.jpg"
                                alt="Doctor with patient"
                                width={500}
                                height={300}
                                className="object-cover w-[100%] h-[10rem] flex justify-self-end justify-end items-end ml-auto"
                            />
                        </motion.div>
                        </div>
                        

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src="/team-doctors.jpg"
                                alt="Medical team"
                                width={500}
                                height={300}
                                className="object-cover"
                            />
                        </motion.div>

                        <div className='flex space-x-4'>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-xl overflow-hidden shadow-lg my-auto flex justify-center"
                        >
                            <Image
                                src="/team-doctors.jpg"
                                alt="Doctor with patient"
                                width={500}
                                height={300}
                                className="object-cover w-[100%] h-[10rem] flex justify-self-end justify-end items-end ml-auto"
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src="/team-doctors.jpg"
                                alt="Doctor with patient"
                                width={500}
                                height={300}
                                className="object-cover w-[100%] h-[12rem] flex justify-self-end justify-end items-end ml-auto"
                            />
                        </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default MedicalServices;
