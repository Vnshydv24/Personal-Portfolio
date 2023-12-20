import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vansh-yadav-b210261b6/" target='_blank' rel='noopener noreferrer' ><BsLinkedin/></a>
        <a href="https://github.com/vnshydv24" target='_blank' rel='noopener noreferrer' ><BsGithub/></a>
        <a href="https://twitter.com/VANSHYA85273834" target='_blank' rel='noopener noreferrer'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials