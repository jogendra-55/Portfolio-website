import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {CgMail} from 'react-icons/cg'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/jogendra-55a23e/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/jogendra-55" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="mailto:jogendrabalotiya61@gmail.com" target="_blank" rel="noreferrer"><CgMail/></a>

    </div>
  )
}

export default HeaderSocials