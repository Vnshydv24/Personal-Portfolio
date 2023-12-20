import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {ImTwitter} from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer_logo'> Vansh Yadav </a>
      <br />
      <ul className='permalinks'>
        {/* eslint-disable-next-line */}
        <li> <a href="#"> Home </a> </li>
        <li> <a href="#about"> About </a> </li>
        <li> <a href="#experience"> Skills </a> </li>
        <li> <a href="#portfolio"> Portfolio </a> </li>
        <li> <a href="#contact"> Contact </a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"> <FaFacebookF className='footer__logo'/> </a>
        <a href="https://instagram.com"> <FiInstagram className='footer__logo'/> </a>
        <a href="https://twitter.com"> <ImTwitter className='footer__logo'/> </a>
      </div>

      <div className="footer__copyright">
        <snall>
          &copy; 2023 Vansh Yadav. All Rights Reserved.
        </snall>
      </div>
    </footer>
  )
}

export default Footer