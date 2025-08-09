import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer(){
    return(
    <>
        <div class='flex flex-col items-center justify-between w-full'>
            <div class='flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between h-36 md:h-[142px] w-full bg-[#FAFAFA] px-8 md:px-[100px] gap-4'>
                <div class="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">Bandage</div>
                <div class="flex flex-row gap-[10px]">
                    <Twitter color="blue" size={16}/>
                    <Instagram color="blue" size={16}/>
                    <Facebook color="blue" size={16}/>
                </div>
            </div>
            <div class='flex flex-col items-center justify-start md:justify-center md:h-[272px] w-full bg-white py-4'>
                <div class='flex flex-col md:flex-row items-start justify-between text-left w-full px-8 md:px-[100px]'>
                    <div>
                        <h5 class='footer_h5'>Company Info</h5>
                        <p class='footer_p'>About Us</p>
                        <p class='footer_p'>Center</p>
                        <p class='footer_p'>We are hiring</p>
                        <p class='footer_p'>Blog</p>
                    </div>
                    <div>
                        <h5 class='footer_h5'>Legal</h5>
                        <p class='footer_p'>About Us</p>
                        <p class='footer_p'>Center</p>
                        <p class='footer_p'>We are hiring</p>
                        <p class='footer_p'>Blog</p>
                    </div>   
                    <div>
                        <h5 class='footer_h5'>Features</h5>
                        <p class='footer_p'>Business Marketing</p>
                        <p class='footer_p'>Resources</p>
                        <p class='footer_p'>Live Chat</p>
                        <p class='footer_p'>Unlimited Support</p>
                    </div>
                    <div>
                        <h5 class='footer_h5'>Resources</h5>
                        <p class='footer_p'>IOS & Android</p>
                        <p class='footer_p'>Watch a Demo</p>
                        <p class='footer_p'>Customers</p>
                        <p class='footer_p'>API</p>
                    </div>
                    <div>
                        <h5 class='footer_h5'>Get In Touch</h5>
                        <div>
                            <input type='email' placeholder='Your Email' className="flex-1 h-[58px] px-4 py-2 bg-gray-100 text-sm outline-none"/>
                            <button className="bg-blue-400 w-[117px] h-[58px] text-white px-4 font-semibold text-sm hover:bg-blue-600 transition-colors">
                                Subscribe</button> 
                        </div>
                        <span className="text-xs mt-2">Lore imp sum dolor Amit</span>
                    </div>  
                </div>                  
            </div>
            <div class='flex flex-row items-center h-[74px] w-full bg-[#FAFAFA] px-[100px]'>
                <span className="text-sm text-center font-bold text-[#737373]">Made With Love By Finland All Right Reserved </span>
            </div>
        </div>
    </>
    );
}