import React, { useEffect, useState } from 'react';

export default function ProductCard(props){


    const cards = props.products.map( (product) => (
        <div className="relative flex flex-col items-center h-auto w-[348px] overflow-hidden">
            <img src={product.src} className="block h-[427px] w-full object-cover sm:w-[300px] sm:h-auto" />
            <p className='font-bold'> {product.caption} </p>
            <p> {product.price} </p>
        </div>
    ) );

    return (
        <>
        
            {cards}
        
        </>
        
    );
}