import React from 'react'
import { BiCamera } from "react-icons/bi";
import { FaTwitter , FaInstagram , FaFacebook, FaLinkedin} from "react-icons/fa";

const Nav = () => {
  return (
    <>
    <div className="d-flex p-3 align-items-center justify-content-between ">
        <div className="logo">
            <div className="d-flex align-items-center gap-2">
            <BiCamera size={40} color='#0F5D3A' />
            <h3>PhotoFolio</h3>
            </div>
        </div>
        <div className="menu">
            <ul className='text-uppercase d-flex list-unstyled gap-3 p-0 m-0'>
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="social-icons">
         <div className="d-flex gap-1">
            <FaTwitter size={25} />
            <FaFacebook size={25}/>
            <FaLinkedin size={25}/>
            <FaInstagram size={25}/>
         </div>
        </div>
    </div>
    </>
  )
}

export default Nav