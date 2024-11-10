import { FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import getDoctors from '@/app/server/apis';
import { useEffect, useState } from 'react';
import { Linkedin, Phone } from 'lucide-react';
import { BsTwitterX, BsWhatsapp } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import NewAppointment from './Appointment';

type Doctor = {
    id: number; // Make sure id is always a number
    active: boolean;
    profile_picture_url?: string;
    gender?: string;
    first_name?: string;
    last_name?: string;
    role?: string;
    phone?: string;
    email?: string;
};

const TeamPage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedClinic, setSelectedClinic] = useState<{
        id: number;
        first_name: string;
        last_name: string;
    } | null>(null);
    const [teamData, setTeamData] = useState<Doctor[]>([]);
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await getDoctors();

                if (response && Array.isArray(response.data)) {
                    setTeamData(response.data);
                } else {
                    console.error("Unexpected response structure:", response);
                    setTeamData([]);
                }
            } catch (error) {
                console.error("Error fetching doctors:", error);
                setTeamData([]);
            }
        };
        fetchDoctors();
    }, []);


    const showModal = (doctor: Doctor) => {
        setSelectedClinic({ id: doctor.id, first_name: doctor.first_name!, last_name: doctor.last_name! });
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <section id='team' className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 md:px-8 md:max-w-7xl w-full">
                <h2 className="text-center text-4xl font-bold text-[#334C7B] mb-8">Meet Our Team</h2>
                <div className=" flex md:flex-row flex-col w-full md:space-x-4 space-x-0 ">
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className=" p-6 shadow rounded-xl flex flex-col items-center  md:w-[30%] w-full md:h-[32rem] h-fit space-y-4"
                    >
                        <img
                            src="/admin2.jpg"
                            alt="team"
                            className=" object-cover h-full"
                        />
                        <div className="text-center">
                            <h3 className="text-lg font-medium text-gray-800">Angelo IGITEGO</h3>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mt-0 text-gray-800">Managing Director</h3>
                        </div>
                        <div className="flex space-x-4 text-[#334C7B] mt-4">
                            <a target="_blank" rel="noopener noreferrer"
                                href={`https://x.com/angelo_igitego`}
                            >
                                <BsTwitterX size={20} />
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
                                href={`in/angelo-igitego`}
                            >
                                <Linkedin size={20} />
                            </a>

                            <a target="_blank" rel="noopener noreferrer"
                                href={`tel:+250788597772`}
                            >
                                <Phone size={20} />
                            </a>
                            <a target="_blank"
                                href={`mailto:angelo.igitego@gmail.com`}
                                rel="noopener noreferrer"
                            >
                                <TfiEmail size={20} />
                            </a>
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href={`https://wa.me/+250788597772`}
                            >
                                <BsWhatsapp size={20} />
                            </a>
                        </div>
                    </motion.div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 md:w-[70%] md:mt-0 mt-5 w-full">
                        {Array.isArray(teamData) ? (
                            teamData.filter((member) => member.active).filter((member) =>  member?.role !== "receptionist" && member?.role !== "lab_technician" && member?.role !== "nurse" ).map((member, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white md:p-3 p-1 text-sm md:rounded-xl rounded-none shadow-lg flex h-fit flex-col items-center space-y-2"
                                >
                                    <img
                                        src={member?.profile_picture_url ? member?.profile_picture_url : member?.gender === "Female" ? "/womandoc.png" : "mandoc.png"}
                                        alt={member.first_name}
                                        className="w-full h-40 object-contain"
                                    />
                                    <div className="text-center">
                                        <h3 className="md:text-md text-sm font-semibold text-gray-800">{member.first_name} {member.last_name}</h3>
                                        <p className="text-[#334C7B]">
                                            {member.role && (
                                                member.role.charAt(0).toUpperCase() + member.role.slice(1)
                                            )}
                                        </p>
                                    </div>
                                    {((member?.role !== "receptionist") && (member?.role !== "nurse") && (member?.role !== "financial_manager") && (member?.role !== "lab_techinician")) ? (
                                        <motion.button
                                            whileHover={{ scale: 1.01 }}
                                            className="bg-[#334C7B] w-full text-sm text-white py-1 lg:px-4 md:text-xs lg:text-sm px-1 rounded-md justify-center mx-auto text-center inline-flex items-center space-x-2"
                                        >
                                            <FaCalendarAlt />
                                            <span
                                                onClick={() => showModal(member)}
                                            >Book Appointment</span>
                                        </motion.button>
                                    ) : (
                                        <div className="flex space-x-4 py-1 text-[#334C7B]">
                                            <a target="_blank" rel="noopener noreferrer"
                                                href={`tel:${member?.phone}`}
                                            >
                                                <Phone size={20} />
                                            </a>
                                            <a target="_blank"
                                                href={`mailto:${member?.email}`}
                                                rel="noopener noreferrer"
                                            >
                                                <TfiEmail size={20} />
                                            </a>
                                            <a target="_blank"
                                                rel="noopener noreferrer"
                                                href={`https://wa.me/${member?.phone}`}
                                            >
                                                <BsWhatsapp size={20} />
                                            </a>
                                        </div>
                                    )}

                                </motion.div>
                            ))
                        ) : (
                            <p>No team data available.</p>
                        )}
                    </div>
                </div>
            </div>
            <NewAppointment
                isModalVisible={isModalVisible}
                selectedUser={selectedClinic ?? {} as { id: number; first_name: string; last_name: string }}
                handleCancel={handleCancel}
            />
        </section>
    );
};

export default TeamPage;
