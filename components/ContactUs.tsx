import { FaPhoneAlt, FaEnvelope, FaTwitter, FaLinkedin, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaGlobe, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const ContactUsPage = () => {
    return (
        <section id='contact' className=" min-h-screen bg-white h-fit text-black py-16">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="flex justify-center h-full flex-col space-y-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1168.9204803476034!2d30.057366276401503!3d-1.9699674305961783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca540c061e9f9%3A0xb887f081d7845204!2sAmaris%20Medical%20Clinic!5e0!3m2!1sen!2srw!4v1737744476404!5m2!1sen!2srw" width="100%" height="350" loading="lazy"></iframe>
                        <motion.img
                            whileHover={{ scale: 1.02 }}
                            src="/hero7.jpg"
                            alt="Amaris Medical Clinic Interior"
                            className="w-full h-[20rem] object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="md:text-5xl text-4xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
                        <Card className="mb-8 bg-[#CCD2DE] backdrop-blur">
                            <CardContent className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                                    <FaMapMarkerAlt className="mr-2 text-[#334C7B]" />
                                    Our Location
                                </h4>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Amaris Medical Clinic is strategically located on the KN 2 Ave road, in the neighborhood commonly referred to as Nyamirambo. It is in the City of Kigali, Nyarugenge District, Nyarugenge Sector, Rwampala Cell, right across Club Rafiki and the Nyamirambo Police Station. Amaris Clinic offers easy access for patients, providing quality care without the need for extensive travel.
                                </p>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-700">
                                        <strong>Full Address:</strong><br />
                                        Rwampala Cell, Nyarugenge Sector,<br />
                                        Nyarugenge District, City of Kigali, Rwanda
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#CCD2DE] backdrop-blur p-4 rounded-lg shadow-sm"
                            >
                                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                    <FaUser className="mr-2 text-[#334C7B]" />
                                    Management
                                </h4>
                                <p className="text-gray-700 mb-2">Contact Person:</p>
                                <p className="text-gray-900 font-medium">Angelo Igitego (CEO)</p>
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#CCD2DE] backdrop-blur p-4 rounded-lg shadow-sm"
                            >
                                <h4 className="text-lg font-semibold text-gray-800 mb-3">Contact Methods</h4>
                                <div className="space-y-2">
                                    <a href="tel:+250788597772" className="flex items-center text-gray-700 hover:text-[#334C7B]">
                                        <FaPhoneAlt className="mr-2" />
                                        +250-788-597-772
                                    </a>
                                    <a href="mailto:amarisclinic1@gmail.com" className="flex items-center text-gray-700 hover:text-[#334C7B]">
                                        <FaEnvelope className="mr-2" />
                                        amarisclinic1@gmail.com
                                    </a>
                                    <a href="https://www.amarismedicalclinic.rw" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-[#334C7B]">
                                        <FaGlobe className="mr-2" />
                                        www.amarismedicalclinic.rw
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex space-x-6 mt-4">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#334C7B] hover:text-blue-600"
                            >
                                <FaTwitter size={32} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#334C7B] hover:text-blue-700"
                            >
                                <FaLinkedin size={32} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#334C7B] hover:text-blue-800"
                            >
                                <FaFacebookF size={32} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://wa.me/250788597772"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#334C7B] hover:text-green-600"
                            >
                                <FaWhatsapp size={32} />
                            </motion.a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default ContactUsPage;