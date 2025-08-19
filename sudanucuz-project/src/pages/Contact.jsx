import { FaFacebookSquare,FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa";
import { FiPhone,FiSend } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
import { PiArrowBendRightDownLight } from "react-icons/pi";
import SponsorLogos from "../layout/SponsorLogos";

export default function Contact(){
    return(
        <>
        <div className="flex flex-col sm:flex-row  bg-[#FAFAFA]">
            <div className="flex flex-col text-center justify-center sm:items-start px-24 py-4">
                <p className="text-[#252B42] text-base font-bold tracking-wide py-2">CONTACT US</p>
                <p className="text-[#252B42] text-4xl font-bold py-4">Get in touch today!</p>
                <p className="py-4"> We know how large objects will act, but things on a small scale just do not act that way.</p>
                <p className="text-[#252B42] text-xl font-bold py-2">Phone: +451 215 215</p>
                <p className="text-[#252B42] text-xl font-bold py-2">Fax: +451 215 215</p>
                <div className="flex flex-row gap-4 justify-center py-4 ">
                    <FaTwitter size={30}/><FaFacebookSquare size={30}/><FaInstagram size={30} /><FaLinkedin size={30} />
                </div>
            </div>
            <img src="https://as2.ftcdn.net/v2/jpg/01/67/30/35/1000_F_167303528_7OL0U1mBUCCAE71BqNvD4k0HYYwd7B45.jpg" className="px-4 sm:w-[500px] sm:h-auto sm:py-4"></img>
        </div>
        <div className="flex flex-col text-center justify-center px-24 py-8">
            <p className="text-[#252B42] text-base font-bold tracking-wide py-2">VISIT OUR OFFICE</p>
            <p className="text-[#252B42] text-4xl font-bold py-4">We help small businesses with big ideas</p>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-16">
                <div className="flex flex-col items-center py-12 sm:px-4">
                    <FiPhone size={75} className="text-sky-500"/>
                    <p className="text-[#252B42] text-sm font-bold tracking-wide pt-2">georgia.young@example.com</p>
                    <p className="text-[#252B42] text-sm font-bold tracking-wide">georgia.young@ple.com</p>
                    <p className="text-[#252B42] text-lg font-bold tracking-wide py-3">Get Support</p>
                    <button className="bg-white rounded outline outline-1 outline-sky-500 text-sky-500 text-center px-8 py-2 font-bold">Submit Request</button>
                </div>
                <div className="flex flex-col items-center py-12 sm:px-4 bg-[#252B42]">
                    <TiLocation size={75} className="text-sky-500"/>
                    <p className="text-white text-sm font-bold tracking-wide pt-2">georgia.young@example.com</p>
                    <p className="text-white text-sm font-bold tracking-wide">georgia.young@ple.com</p>
                    <p className="text-white text-lg font-bold tracking-wide py-3">Get Support</p>
                    <button className="bg-tranparent rounded outline outline-1 outline-sky-500 text-sky-500 text-center px-8 py-2 font-bold">Submit Request</button>
                </div>
                <div className="flex flex-col items-center py-12 sm:px-4">
                    <FiSend size={75} className="text-sky-500"/>
                    <p className="text-[#252B42] text-sm font-bold tracking-wide pt-2">georgia.young@example.com</p>
                    <p className="text-[#252B42] text-sm font-bold tracking-wide">georgia.young@ple.com</p>
                    <p className="text-[#252B42] text-lg font-bold tracking-wide py-3">Get Support</p>
                    <button className="bg-white rounded outline outline-1 outline-sky-500 text-sky-500 text-center px-8 py-2 font-bold">Submit Request</button>
                </div>
            </div>            
        </div>
        <div className="flex flex-col bg-[#FAFAFA] items-center py-12">
            <PiArrowBendRightDownLight size={75} className="text-sky-500"/>
            <p className="text-[#252B42] text-sm font-bold tracking-wide pt-2">WE CAN'T WAIT TO MEET YOU</p>
            <p className="text-[#252B42] text-6xl font-bold tracking-wide py-6">Let's Talk</p>
            <button className="bg-sky-500 text-white rounded text-center px-8 py-2 font-semibold">Try it free now</button>
        </div>
        <SponsorLogos/>
        

        </>
    );
}