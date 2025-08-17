import React, {useState} from "react";
import { Facebook, Heart, Instagram, Mail, Phone, Search, ShoppingCart, Twitter, Youtube, User, Menu } from 'lucide-react';
import Dropdown from "../components/Dropdown/Dropdown";
import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <>
        <div class="hidden md:block">
            <div class="flex flew-row justify-between items-center mx-auto px-[20px] gap-[200px] w-full h-[46px] bg-[#252B42] text-white">
                    <div class="flex items-center gap-[10px] h-[46px]">
                        <div class="flex items-center gap-[5px]">
                            <Phone color="white" size={16} />
                            <p>(225) 555-0118</p>
                        </div>
                        <div class="flex items-center gap-[5px]">
                            <Mail color="white" size={16}/>
                            <p>abc@example.com</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-[10px] h-[46px]">
                        <p> Follow us and get a chance to win 80% off </p>
                    </div>
                    <div class="flex items-center gap-[10px] h-[46px]">
                        <p>Follow us &nbsp;: </p>
                        <div class="flex items-center gap-[5px]">
                            <Twitter color="white" size={16}/>
                            <Instagram color="white" size={16}/>
                            <Youtube color="white" size={16}/>
                            <Facebook color="white" size={16}/>
                        </div>
                    </div>
            </div>
        </div>
        <div class="hidden md:block">
            <div className="flex flex-row justify-left items-center my-0 mx-auto px-[20px] gap-[200px] w-full h-[58px] bg-white">
                    <div class="font-bold text-2xl leading-8 tracking-[0.1px]">Bandage</div>
                    <div class="w-full flex items-center justify-between">
                        <nav class="flex items-center gap-[10px]">
                            <NavLink to="/" exact>Home</NavLink>
                            
                            <NavLink to="/shop"><Dropdown/></NavLink>
                            <NavLink to="/shop">About</NavLink>
                            <NavLink to="/pricing">Pricing</NavLink>
                            <NavLink to="/about">About Us</NavLink>
                            <NavLink to="/contact">Team</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>

                        <div class="flex items-center gap-[10px]">
                            <a href="#" class="login">Login / Register</a>
                            <Search color="black" size={16}/>
                            <ShoppingCart color="black" size={16}/>
                            <Heart color="black" size={16}/>
                        </div>
                    </div>
            </div>
        </div>
        <div class="block md:hidden">
            <div className="flex flex-row justify-between items-center w-full px-4 py-4">
                 <div class="font-bold text-2xl leading-8 tracking-[0.2px]">Bandage</div>
                 <div class="flex items-center gap-[10px]">
                    <User color="black" size={16}/>
                    <Search color="black" size={16}/>
                    <ShoppingCart color="black" size={16}/>
                    <Menu color="black" size={16}/>
                </div>
            </div>
            <nav class="flex flex-col items-center gap-[20px] font-medium text-[16px] leading-[30px] tracking-[0.2px] py-4">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/pricing" exact>Pricing</NavLink>
                <NavLink to="/about" exact>About Us</NavLink>
                <NavLink to="/team" exact>Team</NavLink>
                <NavLink to="/contact" exact>Contact</NavLink>
            </nav>
        </div>

        </>
    );
}
