import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Input } from './ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { format } from "date-fns"
import { Calendar as CalendarIcon, CheckCircleIcon } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Calendar } from "@/components/ui/calendar"
import { toast } from 'react-toastify';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { createAppointment, fetchExistingSlotsInDate } from '@/app/server/apis';
import { cn } from "@/lib/utils"
import TimeSlotCalendar from './TimeSlot';
import { AppointmentDataInterface } from '@/app/server/apis';
const clinic_id: number = parseInt(process.env.NEXT_PUBLIC_ID ?? '0', 10);
interface NewAppointmentProps {
    isModalVisible: boolean;
    selectedUser: {
        id: number;
        first_name: string;
        last_name: string;
    };
    handleCancel: () => void; // Add this line
}

const NewAppointment = ({ isModalVisible, selectedUser, handleCancel }: NewAppointmentProps) => {
    const [availableDates, setAvailableDates] = useState<string[]>([]);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
    const [isTimeSlotCalendarOpen, setIsTimeSlotCalendarOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [slotID, setSlotID] = useState<number>(0);
    const [selectedStartDate, setSelectedStartDate] = useState<Date>();
    const [appointmentCreated, setAppointmentCreated] = useState(false); // New state for modal
    const [appointmentSummary, setAppointmentSummary] = useState<AppointmentDataInterface>(); // For storing the appointment summary
    const [appointment, setAppointment] = useState({
        title: "",
        patient_id: "",
        doctor_id: "",
        client: "",
        date: "",
        timeslot_id: "",
        comment: "",
        hide_details: false,
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        date_of_birth: "",
        gender: "",
    });
    const formatDate = (date: Date) => {
        if (!date) return '';
        return format(new Date(date), "MMMM d, yyyy");
    };
    const openTimeSlotCalendar = () => {
        setIsTimeSlotCalendarOpen(true);
    };

    const handleTimeSlotClose = (time: string, slotID: number) => {
        setIsTimeSlotCalendarOpen(false);
        if (time) {
            setSelectedTimeSlot(time);
            setSlotID(slotID);
        }
    };

    useEffect(() => {
        const getExistingSlots = async () => {
            const response = await fetchExistingSlotsInDate(selectedUser?.id, selectedStartDate);
            const keyDates = Object.keys(response || {});
            setAvailableDates(keyDates);
        };
        getExistingSlots();
    }, [isModalVisible, selectedUser, selectedStartDate]);

    const handleReset = () => {
        setAppointment({
            title: "",
            patient_id: "",
            doctor_id: "",
            client: "",
            date: "",
            timeslot_id: "",
            comment: "",
            hide_details: false,
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            date_of_birth: "",
            gender: "",
        });
        setSelectedTimeSlot(null);
    };

    const handleAppointmentChange = (event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setAppointment({ ...appointment, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setLoading(true);
        const { first_name, last_name, email, phone_number, gender, date_of_birth, comment } = appointment;
        const appointmentData: AppointmentDataInterface = {
            title: "Appointment",
            clinic_id: clinic_id,
            doctor_id: selectedUser?.id,
            timeslot_id: slotID,
            date: dayjs(selectedStartDate).format("YYYY-MM-DD"),
            hide_details: false,
            comment,
            first_name,
            last_name,
            email,
            phone_number,
            gender,
            date_of_birth,
        };

        if (!selectedTimeSlot) {
            toast.error("Please select a time slot");
            setLoading(false);
            return;
        }

        try {
            const response = await createAppointment(appointmentData);
            if (response?.error) {
                toast.error("Failed to create appointment");
            } else if (response?.token) {
                toast.success("Appointment created successfully");
                setAppointmentSummary(appointmentData);
                setAppointmentCreated(true);
                handleReset();
                handleCancel();
            }
            else {
                toast.error("Failed to create appointment");
            }
        } catch (e) {
            console.error(e);
            toast.error("Failed to create appointment");
        }
        setLoading(false);
    };

    const downloadSummary = () => {
        const summary = `
            Appointment Summary:
            Name: ${appointmentSummary?.first_name} ${appointmentSummary?.last_name}
            Email: ${appointmentSummary?.email}
            Phone: ${appointmentSummary?.phone_number}
            Date: ${appointmentSummary?.date}
        `;
        const blob = new Blob([summary], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "appointment-summary.txt";
        link.click();
    };
    return (
        <><Dialog open={isModalVisible} onOpenChange={handleCancel}>
            <DialogContent className=' md:w-full w-[95%]'>
                <DialogHeader>
                    <DialogTitle>Book Appointment with <span className='t text-[#00205A]'>{selectedUser?.first_name + ' ' + selectedUser?.last_name}</span></DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className=' gap-2 flex flex-col'>
                    <div className="flex w-full gap-2 flex-col md:flex-row">
                        <Input
                            className='rounded-md'
                            placeholder="Enter your first name"
                            value={appointment.first_name}
                            onChange={handleAppointmentChange}
                            name="first_name"
                            required />
                        <Input
                            placeholder="Enter your last name"
                            value={appointment.last_name}
                            onChange={handleAppointmentChange}
                            name="last_name"
                            required />
                    </div>
                    <div className="flex w-full gap-2 flex-col md:flex-row">
                        <Input

                            placeholder="Email"
                            value={appointment.email}
                            onChange={handleAppointmentChange}
                            name="email"
                            required />
                        <Input

                            placeholder="phone_number (+250786684390)"
                            value={appointment.phone_number}
                            onChange={handleAppointmentChange}
                            name="phone_number"
                            required />
                    </div>
                    <div className="flex w-full gap-2 flex-col md:flex-row">
                        <Select>
                            <SelectTrigger className="md:w-1/2 w-full">
                                <SelectValue placeholder="Select a gender" />
                            </SelectTrigger>
                            <SelectContent className='bg-white'>
                                <SelectGroup>
                                    <SelectLabel>Gender</SelectLabel>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value='female'>Female</SelectItem>
                                </SelectGroup>
                            </SelectContent></Select>
                        <input
                            type="date"
                            value={appointment.date_of_birth}
                            onChange={handleAppointmentChange}
                            name="date_of_birth"
                            className='rounded-md  border-gray-900 border-[1px] outline-none p-[4px] md:w-1/2 w-full'
                            required />
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !selectedStartDate && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {selectedStartDate ? formatDate(selectedStartDate) : <span>Pick a Date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white">
                            <Calendar
                                mode="single"
                                selected={selectedStartDate ? new Date(selectedStartDate) : undefined}
                                onSelect={setSelectedStartDate}
                                initialFocus
                                disabled={(currentDate) => {
                                    const formattedDate = format(currentDate, 'yyyy-MM-dd');
                                    return currentDate < new Date() || !availableDates?.includes(formattedDate);
                                }} />
                        </PopoverContent>
                    </Popover>

                    {selectedStartDate && (
                        <div onClick={openTimeSlotCalendar} className="cursor-pointer border border-black p-[5px]">
                            {selectedTimeSlot || "Select a time slot"}
                        </div>
                    )}
                    <Textarea
                        placeholder="Reason for appointment"
                        value={appointment.comment}
                        onChange={handleAppointmentChange}
                        name="comment"
                        required />
                    <Button
                     variant={'secondary'} type="submit" disabled={
                        !selectedTimeSlot || !appointment.first_name || !appointment.last_name || !appointment.email || !appointment.phone_number || !appointment.date_of_birth || !selectedStartDate || loading
                    }>
                        {loading ? "Submitting..." : "Submit"}
                    </Button>
                </form>
                {isTimeSlotCalendarOpen && (
                    <TimeSlotCalendar
                        selectedDate={selectedStartDate as Date}
                        onClose={handleTimeSlotClose}
                        userID={selectedUser?.id}
                        clinicSubdomain={process?.env?.NEXT_SUBDOMAIN} />
                )}
            </DialogContent>
        </Dialog> <Dialog open={appointmentCreated} onOpenChange={() => setAppointmentCreated(false)}>
                <DialogContent className="p-4">
                    <DialogHeader className="flex flex-col items-center">
                        <CheckCircleIcon className="text-[#00205A] h-16 w-16 mb-2" />
                        <DialogTitle className="text-2xl font-bold text-center text-[#00205A]">
                            Appointment Created Successfully
                        </DialogTitle>
                    </DialogHeader>
                    <div className="text-center mt-2">
                        <p className="text-lg text-gray-700">
                            Your appointment has been successfully created!
                        </p>
                        <p className="text-gray-600">
                            An email with login credentials has been sent to <strong>{appointmentSummary?.email}</strong>.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Appointment Summary</h3>
                        <table className="min-w-full table-auto border-collapse border border-gray-300">
                            <tbody>
                                <tr className="bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2 font-medium">Name:</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {appointmentSummary?.first_name} {appointmentSummary?.last_name}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 font-medium">Email:</td>
                                    <td className="border border-gray-300 px-4 py-2">{appointmentSummary?.email}</td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2 font-medium">Phone:</td>
                                    <td className="border border-gray-300 px-4 py-2">{appointmentSummary?.phone_number}</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 font-medium">Date:</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {appointmentSummary?.date ? dayjs(appointmentSummary?.date).format("MMMM D, YYYY") : ""}
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Button variant={"secondary"} onClick={downloadSummary} className=" text-white px-4 py-2 rounded">
                            Download Summary
                        </Button>
                    </div>
                </DialogContent>
            </Dialog></>
    );
};

export default NewAppointment;
