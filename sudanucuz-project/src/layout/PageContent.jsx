import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PageContent({children}){
    return (
        <>
            <Header/>

            <main> {children} </main>

            <Footer/>
        </>
    );
}