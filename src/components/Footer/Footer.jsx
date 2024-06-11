import React from 'react'
import css from "./Footer.module.css"
import Logo from '../../assets/logo.png'
import {InboxIcon, PhoneIcon, LocationMarkerIcon,LoginIcon,UserIcon,LinkIncon, UserAddIcon, LinkIcon} from "@heroicons/react/outline"
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.eFooter}>
        <div className={css.logo}>
            <img src={Logo} alt=""/>
            <span>BharatLife</span>
        </div>
        <div className={css.block}>
            <div className={css.detail}>
                <span>Contact US</span>
                 <span className={css.pngLine}>
                    <LocationMarkerIcon className={css.icon}/>
                    <span>United States</span>
                 </span>
                
                 
                 <span className={css.pngLine}>
                    <InboxIcon className={css.icon}/>
                    <a href="mailto:jayanthgummitha@gmail.com">jayanthgummitha
                        @gmail.com</a>
                 </span>
            </div>
        </div>
        <div className={css.block}>
            <div className={css.detail}>
                <span>Account</span>
                 <span className={css.pngLine}>
                    <LoginIcon className='css.icon'/>
                    <span>Sign In</span>
                 </span>
            </div>
        </div>
        <div className={css.block}>
            <div className={css.detail}>
                <span>Company</span>
                 <span className={css.pngLine}>
                    <UserAddIcon className='css.icon'/>
                    <span>About us</span>
                 </span>
            </div>
        </div>
        <div className={css.block}>
            <div className={css.detail}>
                <span>Resources</span>
                 <span className={css.pngLine}>
                    <LinkIcon className='css.icon'/>
                    <span>Safety Privacy & Terms</span>
                 </span>
            </div>
        </div>
        
        </div>
        <div className={css.copyRight}>
            <span>Cpoyright   ©2024 by BharatLife, Inc </span>
            <span>All rights reserved. </span>
        </div>
    </div>
  )
}

export default Footer