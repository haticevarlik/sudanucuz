import React, {useState} from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import ShopCategories from "../components/ShopPage/ShopCategories";
import ProductCard from "../components/ShopPage/ProductCard";
import { FaThLarge, FaThList } from "react-icons/fa";
import productlist from '../data/productlist.json';

export default function ShopPage(){
    const products = productlist.products;
    console.log(products);
    return (
        <>
        <div className="flex flex-col items-center bg-[#FAFAFA] py-8 gap-4 sm:px-6">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-4 w-full ">
                <p className="font-bold text-xl "> Shop </p>
                <nav>
                    
                <p> <b><NavLink to="/" exact>Home</NavLink></b> &gt; Shop</p>
                </nav>
            </div>            
            <ShopCategories/>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between py-4 items-center gap-4">
            <p>Showing all 12 results</p>
            <div className="flex flex-row items-center gap-2">
                <p>Views:</p>
                <button className="p-2 border rounded ${view === 'grid' ? 'bg-gray-100' : ''}"><FaThLarge /></button>
                <button className="p-2 border rounded ${view === 'list' ? 'bg-gray-100' : ''}"><FaThList /></button>
            </div>
            <div className="flex flex-row items-center gap-2">
                <select className="border rounded px-3 py-1 text-sm">
                    <option value="popularity">Popularity</option>
                    <option value="priceLowHigh">Price: Low to High</option>
                    <option value="priceHighLow">Price: High to Low</option>
                </select>
                <button className="bg-blue-500 text-white px-4 py-1 rounded">Filter</button>
            </div>                     
        </div>
        <div className="grid grid-col-1 justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            <ProductCard products={products}/>
        </div>
        
        
        </>
    );
}