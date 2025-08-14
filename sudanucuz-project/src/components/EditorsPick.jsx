import React, { useState } from 'react';
import CategoryCard from './CategoryCard';

export default function EditorsPick(){
    const categories = [
        {
            src: 'https://images.pexels.com/photos/7506913/pexels-photo-7506913.jpeg?_gl=1*18ifgsv*_ga*NTYzMzc5ODY0LjE3NTIwODE2NjM.*_ga_8JE65Q40S6*czE3NTQ3NDcyMjIkbzMkZzEkdDE3NTQ3NDc0NjMkajQ1JGwwJGgw',
            caption: 'WOMEN',
            key: 1,
        },
        {
            src: 'https://images.pexels.com/photos/33341622/pexels-photo-33341622.jpeg?_gl=1*1j9jto1*_ga*NTYzMzc5ODY0LjE3NTIwODE2NjM.*_ga_8JE65Q40S6*czE3NTQ3NDcyMjIkbzMkZzEkdDE3NTQ3NDcyNTAkajMyJGwwJGgw',
            caption: 'MEN',
            key: 2,
        },
        {
            src: 'https://images.pexels.com/photos/11340280/pexels-photo-11340280.png?_gl=1*sgjgft*_ga*NTYzMzc5ODY0LjE3NTIwODE2NjM.*_ga_8JE65Q40S6*czE3NTQ3NDcyMjIkbzMkZzEkdDE3NTQ3NTAzNjEkajE5JGwwJGgw',
            caption: 'ACCESSORIES',
            key: 3,
        },
        {
            src: 'https://images.pexels.com/photos/20433631/pexels-photo-20433631.jpeg?_gl=1*44fqvy*_ga*NTYzMzc5ODY0LjE3NTIwODE2NjM.*_ga_8JE65Q40S6*czE3NTQ3NDcyMjIkbzMkZzEkdDE3NTQ3NDg1NDYkajEwJGwwJGgw',
            caption: 'KIDS',
            key: 4,
        },
    ];


    return (
        <>
        
            <div className='flex flex-col justify-between items-center text-center py-12'>
                <h1 className='font-bold text-xl leading-8 '> EDITORS'S PICK</h1>
                <p className='font-light text-[#737373] text-[14px] leading-0 px-40 pb-12'>Problems trying to resolve the conflict between</p>

                <CategoryCard categories={categories} />

            </div>
        
        </>
    );
}