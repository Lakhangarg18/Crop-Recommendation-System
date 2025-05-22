import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Example from "./Hero";
import Footer from "./Footer";

function Layout() {
    return (
        <div className="flex flex-col">
        <Navbar />

        <Outlet />
        <Footer/>
        </div>
    );
    }

    export default Layout;
