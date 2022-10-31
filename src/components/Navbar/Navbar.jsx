import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={`${s.link} ${s.active}`}><a href="src/components/Navbar/Navbar">Profile</a></div>
            <div className={s.link}><a href="src/components/Navbar/Navbar">Messages</a></div>
            <div className={s.link}><a href="src/components/Navbar/Navbar">News</a></div>
            <div className={s.link}><a href="src/components/Navbar/Navbar">Music</a></div>
            <div className={s.link}><a href="src/components/Navbar/Navbar">Settings</a></div>
        </nav>


    );
}


export default Navbar;