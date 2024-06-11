import React, { useState } from 'react'
import CSS from './Header.module.css'
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from "react-icons/cg"
import {GoThreeBars} from "react-icons/go"

const Header = () => {
    const [ShowMenu,setShowMenu]=useState(true);
    const toggleMenu = () =>{
        setShowMenu((ShowMenu)=>!ShowMenu)
    }
  return (
    <div className={CSS.container}>
        <div className={CSS.logo}>
            <img src={Logo} alt=""/>
            <span>BharatLife</span>
        </div>
        <div className={CSS.right}>
            <div className={CSS.bars} onClick={toggleMenu}>
                  <GoThreeBars/>
            </div>
                <ul className={CSS.menu}  style={{display: ShowMenu? 'inherit': 'none'}}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
            
            <input type="text" className={CSS.search} placeholder='Search'/>
            <CgShoppingBag className={CSS.cart}/>
        </div>

    </div>
  )
}

export default Header