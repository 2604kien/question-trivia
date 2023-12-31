import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Menu/Navbar";
import Categories from "../Menu/Cateogries";
export default function Layout(){
    return(
        <>
            <Navbar/>
            <div style={{
               display:"grid",
               gridTemplateColumns:"30% 70%",
                height:"100vh"
            }}>
                <Categories/>
                <Outlet/>
            </div>
        </>
    )
}