import React from 'react'
import './Nav.css'
import {TiHomeOutline} from 'react-icons/ti'
import {TiUser} from 'react-icons/ti'
import {TiBook} from 'react-icons/ti'
import {MdOutlineDesignServices} from 'react-icons/md'
import {TiContacts} from 'react-icons/ti'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]=useState('#')
  return (
    <nav>
      <a href="/" onClick={() => setActiveNav('/')} className={activeNav==='/'?'active':''}><TiHomeOutline/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about'?'active':''}><TiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><TiBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav==='#services'?'active':''}><MdOutlineDesignServices/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><TiContacts/></a>
      
    </nav>
  )
}

export default Nav