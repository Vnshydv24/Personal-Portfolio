import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Typed from 'typed.js';


const Header = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['An Undergrad Student', '&amp; Enthusiatic Learner'],
      typeSpeed: 80,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <header>
      <div className="container header__container">
        
        <h5> Hello I'm </h5>
        <h1> Vansh Yadav </h1>
        <span ref={el} />
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src = {ME} alt="" /> 
        </div>

        <a href = "#contact" className='scroll_down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header