import { NavLink, useParams } from "react-router-dom";
import productlist from '../data/productlist.json';
import { FaStar } from "react-icons/fa";
import SponsorLogos from "../layout/SponsorLogos";



export default function ProductDetail(props){
    const { productKey } = useParams();
    const product = productlist.products.find((p) => p.key === Number(productKey));

    if (!product) {
        return <div className="text-red-500">Product not found</div>;
    }


    return(
        <>
            <div className="flex flex-col bg-[#FAFAFA] py-8 sm:my-0 gap-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-left gap-4 w-full ">
                    <nav>                        
                        <b><NavLink to="/" exact>Home</NavLink></b> &gt; Shop
                    </nav>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-start px-8 py-8 sm:px-0">
                    <img src={product.src} className="block h-auto w-full sm:w-[300px] sm:h-auto" />
                    <div className="px-4 py-8 sm:py-0 flex flex-col items-start">
                        <h1 className="text-xl font-semibold tracking-wide pb-2">{product.caption}</h1>

                        <div className="flex space-x-1 pb-4">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                key={index}
                                size={20}
                                className={index < product.rate ? "text-yellow-400" : "text-gray-300"}
                                />
                            ))}
                            <span className="px-4">{product.reviewNumber} Reviews</span>
                        </div>
                                               

                        <p className="font-bold text-xl pb-1"> {product.price}</p>

                        <p className="pb-8 "><span className="font-semibold text-[#737373]"> Availability: </span><span className={product.availability ? "text-blue-500 font-bold":"text-gray-500"}>{product.availability?"In Stock":"Out of stock"}</span></p>

                        <p className="pb-8"> {product.description}</p>

                        <button className="bg-[#23A6F0] rounded text-white text-center px-8 py-2 font-semibold">Add to Basket</button>

                    </div>            
                 </div>
            </div>
                    
            <SponsorLogos/>


        </>
    );
}