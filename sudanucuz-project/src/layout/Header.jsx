import React, {useState} from "react";
import { Facebook, Heart, Instagram, Mail, Phone, Search, ShoppingCart, Twitter, Youtube } from 'lucide-react';
import './Header.css';
import Dropdown from "../components/Dropdown/Dropdown";

export default function Header(){
    return (
        <>
        <div className="header">
            <div className="header-dark">
                    <div className="contact">
                        <div className="contact-phone">
                            <Phone color="white" size={16} />
                            <p>(225) 555-0118</p>
                        </div>
                        <div className="contact-mail">
                            <Mail color="white" size={16}/>
                            <p>abc@example.com</p>
                        </div>
                    </div>
                    <div className="announcement">
                        <p> Follow us and get a chance to win 80% off </p>
                    </div>
                    <div className="social">
                        <p>Follow us &nbsp;: </p>
                        <div className="social-logos">
                            <Twitter color="white" size={16}/>
                            <Instagram color="white" size={16}/>
                            <Youtube color="white" size={16}/>
                            <Facebook color="white" size={16}/>
                        </div>
                    </div>
            </div>
            <div className="header-light">
                    <div class="logo">Bandage</div>
                    <div class="menu-bar">
                        <nav class="nav">
                            <a href="#">Home</a>
                            <Dropdown/>
                            <a href="#">About</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                            <a href="#">Pages</a>
                        </nav>

                        <div class="actions">
                            <a href="#" class="login">Login / Register</a>
                            <Search color="black" size={16}/>
                            <ShoppingCart color="black" size={16}/>
                            <Heart color="black" size={16}/>
                        </div>
                    </div>
            </div>
        </div>
        
        </>
    );
}
