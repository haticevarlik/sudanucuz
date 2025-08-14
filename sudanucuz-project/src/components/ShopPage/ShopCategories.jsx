import React, { useEffect, useState } from 'react';

export default function ShopCategories(props){

    const categories = [
        {
            src: 'https://images.pexels.com/photos/33347484/pexels-photo-33347484.jpeg?_gl=1*lqrea*_ga*NTYzMzc5ODY0LjE3NTIwODE2NjM.*_ga_8JE65Q40S6*czE3NTQ3NTk3NTYkbzQkZzEkdDE3NTQ3NTk5NDckajIkbDAkaDA.',
            caption: 'DRESSES',
            count: 5,
            key: 1,
        },
        {
            src: 'https://images.pexels.com/photos/33340052/pexels-photo-33340052.jpeg?_gl=1*guhn6m*_ga*NTYzMzc5ODY0LjE3NTIwODE2NjM.*_ga_8JE65Q40S6*czE3NTQ3NTk3NTYkbzQkZzEkdDE3NTQ3NTk5NzckajM2JGwwJGgw',
            caption: 'JACKETS',
            count: 7,
            key: 2,
        },
        {
            src: 'https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?_gl=1*1wndkfu*_ga*NTYzMzc5ODY0LjE3NTIwODE2NjM.*_ga_8JE65Q40S6*czE3NTQ3NTk3NTYkbzQkZzEkdDE3NTQ3NjAxMTAkajUkbDAkaDA.',
            caption: 'SKIRTS',
            count: 3,
            key: 3,
        },
        {
            src: 'https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?_gl=1*15rc8pt*_ga*NTYzMzc5ODY0LjE3NTIwODE2NjM.*_ga_8JE65Q40S6*czE3NTQ3NTk3NTYkbzQkZzEkdDE3NTQ3NjAxNTEkajM4JGwwJGgw',
            caption: 'SHOES',
            count:8,
            key: 4,
        },
        {
            src: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?_gl=1*1cemaje*_ga*NTYzMzc5ODY0LjE3NTIwODE2NjM.*_ga_8JE65Q40S6*czE3NTQ3NTk3NTYkbzQkZzEkdDE3NTQ3NjAxNzIkajE3JGwwJGgw',
            caption: 'BAGS',
            count:10,
            key: 5,
        },
    ];

    const cards = categories.map( (category) => (
        <div className="relative h-[300px] w-[332px] sm:w-[205px] sm:w-[223px] overflow-hidden">
            <img src={category.src} className="block h-full w-full object-cover object-center" />
            <div className="absolute inset-0 flex flex-col justify-center align-baseline items-center text-center bg-sky-500/50 ">
                <p className="text-white text-center text-xl px-12 py-2 font-bold "> {category.caption} </p>
                <p className="text-white text-center text-xl px-12 py-2 font-semibold "> {category.count} Items </p>
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