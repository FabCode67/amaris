import { FaTwitter, FaLinkedin, FaGlobe, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const teamData = [
    {
        name: 'Dr. John Doe',
        role: 'Cardiologist',
        bio: 'Expert in heart disease and cardiology treatments with over 15 years of experience.',
        image: '/images/team1.jpg', 
        socialLinks: {
            twitter: '#',
            linkedin: '#',
            website: '#',
        },
    },
    {
        name: 'Dr. Jane Smith',
        role: 'Pediatrician',
        bio: 'Specializing in child health and care, ensuring children’s health and well-being.',
        image: '/images/team2.jpg',
        socialLinks: {
            twitter: '#',
            linkedin: '#',
            website: '#',
        },
    },
    {
        name: 'Dr. Jane Smith',
        role: 'Pediatrician',
        bio: 'Specializing in child health and care, ensuring children’s health and well-being.',
        image: '/images/team2.jpg',
        socialLinks: {
            twitter: '#',
            linkedin: '#',
            website: '#',
        },
    },
    {
        name: 'Dr. Jane Smith',
        role: 'Pediatrician',
        bio: 'Specializing in child health and care, ensuring children’s health and well-being.',
        image: '/images/team2.jpg',
        socialLinks: {
            twitter: '#',
            linkedin: '#',
            website: '#',
        },
    },
    {
        name: 'Dr. Jane Smith',
        role: 'Pediatrician',
        bio: 'Specializing in child health and care, ensuring children’s health and well-being.',
        image: '/images/team2.jpg',
        socialLinks: {
            twitter: '#',
            linkedin: '#',
            website: '#',
        },
    },
    {
        name: 'Dr. Jane Smith',
        role: 'Pediatrician',
        bio: 'Specializing in child health and care, ensuring children’s health and well-being.',
        image: '/images/team2.jpg',
        socialLinks: {
            twitter: '#',
            linkedin: '#',
            website: '#',
        },
    },
    {
        name: 'Dr. Jane Smith',
        role: 'Pediatrician',
        bio: 'Specializing in child health and care, ensuring children’s health and well-being.',
        image: '/images/team2.jpg',
        socialLinks: {
            twitter: '#',
            linkedin: '#',
            website: '#',
        },
    },
    {
        name: 'Dr. Jane Smith',
        role: 'Pediatrician',
        bio: 'Specializing in child health and care, ensuring children’s health and well-being.',
        image: '/images/team2.jpg',
        socialLinks: {
            twitter: '#',
            linkedin: '#',
            website: '#',
        },
    },
];

const TeamPage = () => {
    return (
        <section id='team' className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 md:px-8 md:max-w-7xl w-full">
                <h2 className="text-center text-4xl font-bold text-[#334C7B] mb-8">Meet Our Team</h2>

                <div className=" flex md:flex-row flex-col w-full md:space-x-4 space-x-0 ">
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className=" p-6 shadow rounded-xl flex flex-col items-center  md:w-[30%] w-full md:h-[32rem] h-[28rem] space-y-4"
                    >
                        <img
                            src="/admin2.jpg"
                            alt="team"
                            className=" object-cover h-full"
                        />
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-gray-800">CEO & CTO</h3>
                        </div>
                       
                        <div className="flex space-x-4 text-[#334C7B] mt-4">
                            <a target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={24} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer">
                                <FaGlobe size={24} />
                            </a>
                        </div>
                    </motion.div>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-3 md:w-[70%] md:mt-0 mt-5 w-full">
                        {teamData.map((member, index) => (
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                key={index}
                                className="bg-white md:p-3 p-1 text-sm md:rounded-xl rounded-none shadow-lg flex h-fit flex-col items-center space-y-2"
                            >
                                {/* Member Image */}
                                <img
                                    src="/muganga.png"
                                    alt={member.name}
                                    className="w-full   object-cover"
                                />
                                {/* Member Info */}
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                    <p className="text-[#334C7B]">{member.role}</p>
                                    {/* <p className="text-gray-600 text-sm mt-2">{member.bio}</p> */}
                                </div>
                                {/* Social Links */}

                                {/* Book Appointment Button */}
                                <motion.a
                                    whileHover={{ scale: 1.01 }}
                                    href="#"
                                    className="bg-[#334C7B] w-full text-white py-2 md:px-4 px-1 rounded-md justify-center mx-auto text-center inline-flex items-center space-x-2"
                                >
                                    <FaCalendarAlt />
                                    <span>Book Appointment</span>
                                </motion.a>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamPage;
