import React, { useEffect, useState } from 'react';

export default function ProductCard(props){


    const cards = props.categories.map( (category) => (
        <div className="relative h-[500px] w-[324px] overflow-hidden">
            <img src={category.src} className="block sm:w-full sm:h-auto" />
            <div className="absolute bottom-10 left-10 flex flex-col justify-center align-baseline items-center text-center">
                <button className="bg-white text-black text-center px-12 py-2 font-semibold "> {category.caption} </button>
            </div>
        </div>
    ) );

    return (
        <>
        <div className="flex flex-col sm:flex-row items-center gap-8">
            {cards}
        </div>
        </>
        
    );
}