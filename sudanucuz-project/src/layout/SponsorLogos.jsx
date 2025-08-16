import { IoLogoReddit,IoLogoGoogle } from "react-icons/io5";
import { FaHooli } from "react-icons/fa";
import { SiW3Schools } from "react-icons/si";

export default function SponsorLogos(){
    return(
        <>
        <div className="flex flex-col sm:flex-row items-center gap-16 sm:justify-between sm:px-64 py-16 sm:py-8">
                <IoLogoReddit size={75} color="gray"/>
                <IoLogoGoogle size={75} color="gray"/>
                <FaHooli size={100} color="gray"/>
                <SiW3Schools size={75} color="gray"/>
        </div>  

        </>
    );
}