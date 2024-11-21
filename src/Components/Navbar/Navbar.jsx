import React from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";


export const Navbar = () => {
  return (      
    <section className='navBarSection'>
        <div className="header">
            <div className="logoDiv">
                <a href="#" className="logo">
                    <h1><MdOutlineTravelExplore className="icon" />Dot</h1>
                </a>
            </div>      
            <div className="navBar">
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Products</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Respurces</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Cantacts</a>
                    </li>              
                    <li className="navItem">
                        <a href="#" className="navLink">Blog</a>
                    </li>      
                </ul>
                <div className="closeNavbar">
                <IoCloseCircle className='icon'/>

                </div>
            </div>

            <div className="toggleNavbar">
            <TbGridDots className="icon"/>

            </div>
        </div>
    </section>
  )
}

export default Navbar