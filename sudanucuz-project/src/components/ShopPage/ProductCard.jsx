import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

export default function ProductCard(props){


    const cards = props.products.map( (product) => (
        <div className="relative flex flex-col items-center h-auto w-[348px] overflow-hidden">
            <nav className='w-full'>
                <NavLink to={`/shop/${product.key}`}><img src={product.src} className="block h-[427px] w-full object-cover sm:w-[300px] sm:h-auto" /></NavLink>
                <NavLink to={`/shop/${product.key}`}><p className='font-bold text-center'> {product.caption} </p></NavLink>
            </nav>      
            <p> {product.price} </p>
        </div>
    ) );

    return (
        <>
        
            {cards}
        
        </>
        
    );
}