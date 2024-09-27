import { FaPhoneAlt, FaEnvelope, FaTwitter, FaLinkedin, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactUsPage = () => {
    return (
        <section id='contact' className="bg-[#CCD2DE] min-h-screen h-fit text-black py-16">
            <div className="container max-w-7xl  mx-auto px-4 md:px-8">
                <h2 className="text-center text-4xl font-bold  mb-12">Contact Us</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col justify-center">
                        <h3 className="md:text-6xl text-4xl font-semibold text-gray-800 mb-6 uppercase ">Get in Touch</h3>
                        <p className=" mb-6 text-xl uppercase">
                            If you have any questions, feel free to reach out to us. We are here to help you with any inquiries or information you may need.
                        </p>

                        <div className='flex flex-col space-y-4'>
                            <div className='flex flex-col space-y-1'>
                                <h1 className='text-xl font-semibold text-gray-800'>Location:</h1>
                                <p className=''>Kigali-City, in Nyarugenge District </p>
                                <p className=''>Nyamirambo, KN 2 AVe </p>
                                <p className=''>Near by traffic rights</p>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <h1 className='text-xl font-semibold text-gray-800'>Call us:</h1>
                                <p className=''><FaPhoneAlt className='inline-block mr-2' /> +256 000 000 000</p>
                                <p className=''><FaPhoneAlt className='inline-block mr-2' /> +256 000 000 000</p>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <h1 className='text-xl font-semibold text-gray-800'>Message:</h1>
                                <p className=''><FaEnvelope className='inline-block mr-2' /> +256 000 000 000</p>
                                <p className=''><FaEnvelope className='inline-block mr-2' /> user@example.com</p>
                                <p className=''><FaWhatsapp className='inline-block mr-2' /> user@example.com</p>
                            </div>
                            
                        </div>

                        <div className="flex space-x-6  mt-8">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                <FaTwitter size={32} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                <FaLinkedin size={32} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                <FaFacebookF size={32} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Location Map or Image */}
                    <div className="flex justify-center h-full flex-col space-y-4">
                        <img
                            src="/location.jpg"  // Replace with actual map or location image
                            alt="Our Location"
                            className="w-full h-[20rem] object-cover rounded-lg shadow-lg"
                        />
                        <img
                            src="/location2.jpg"  // Replace with actual map or location image
                            alt="Our Location"
                            className="w-full h-[20rem] object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsPage;
