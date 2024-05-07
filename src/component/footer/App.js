import React from 'react'
import { SlSocialTwitter } from "react-icons/sl";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
const Footer = () => {
    
    
    return (
        <>
            <div className='text-white bg-black flex gap-40'>
                <div className='m-8'>
                    <h1 className='font-semibold text-orange-600 text-xl mb-2'>Privacy</h1>
                    <ul>
                        <li>Terms and Condition</li>
                        <li>Privacy Policy</li>
                        <li>Condition</li>
                    </ul>

                </div>
                <div className='m-8'>
                    <h1 className='font-semibold text-orange-600 text-xl mb-2'>Services</h1>
                    <ul>
                        <li>Shop</li>
                        <li>Other ahead</li>
                        <li>Menu</li>
                    </ul>
                </div>
                <div className='m-8'>
                    <h1 className='font-semibold text-orange-600 text-xl mb-2'>About Us</h1>
                    <ul >
                        <li>Find a Location</li>
                        <li>About Us</li>
                        <li>Our Story</li>
                    </ul>
                </div>
                <div className='m-8'>
                    <h1 className='font-semibold text-orange-600 text-xl mb-2'>Inmormation</h1>
                    <ul >
                        <li>Plans and  Pricing</li>
                        <li>Sell your products</li>
                        <li>Jobs</li>
                    </ul>
                </div>
                <div className='m-8'>
                    <h1 className='font-semibold text-orange-600 text-xl mb-2'>Social Media</h1>
                    <ul className='flex gap-6 hover:cursor-pointer mt-4'>
                        <li><SlSocialTwitter /></li>
                        <li><LuFacebook /></li>
                        <li><FaInstagram /></li>
                        <li><AiFillYoutube /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Footer