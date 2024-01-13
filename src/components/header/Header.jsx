import { useState, useEffect } from 'react';
import { FaRegEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const [show, setShow] = useState(true);
  const [scroll, setScroll] = useState({
    y: 0,
    lastY: 0
  });

  const handleMenu = () => {
    setMenu(prev => !prev);
  }

  useEffect(() => {
    const controlHeader = () => {
      setScroll(prev => {
        return {
          y: window.scrollY,
          lastY: prev.y
        }
      });
    }

    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    }
  }, []);

  useEffect(() => {
    if (scroll.y === 0) {
      setShow(true);
    }
    
    if (scroll.y > 100) {
      setShow(false);
    }

    if (scroll.y < scroll.lastY && scroll.y < 100) {
      setShow(true);
    }

  }, [scroll, show]);

  const variants = {
    visible: {y: 0, opacity: 1, transition: {duration: 0.2}}, 
    hidden: {y: "-100%", x: "-50%"}
  }

  return (
    <div className={`c-header ${!show ? "is-active" : ""}`}>
      <div className='container'>
        <div className='c-header__inner'>
          <h1 className='c-header__inner__logo'>
            <a href='#' className='c-header__inner__logo__anchor'>
              <div className='c-header__inner__logo__anchor__icon-cont'>
                <img className='c-header__inner__logo__anchor__icon-cont__icon' src='/images/common/pc/logo.svg' alt='logo' />
              </div>
              <p className='c-header__inner__logo__anchor__txt'>
                <span className='c-header__inner__logo__anchor__txt__span'>Ronel</span>
                <span className='c-header__inner__logo__anchor__txt__span'>De Jesus</span>
              </p>
            </a>
          </h1>

          <nav className={`c-nav u-pc-only`}>
            <ul className='c-nav__links'>
              <li className='c-nav__links__item'>
                <a href='#about' className='c-nav__links__item__anchor'>
                  About Me
                </a>
              </li>
              <li className='c-nav__links__item'>
                <a href='#skills' className='c-nav__links__item__anchor'>
                  Skills
                </a>
              </li>
              <li className='c-nav__links__item'>
                <a href='#projects' className='c-nav__links__item__anchor'>
                  Projects
                </a>
              </li>
              <li className='c-nav__links__item'>
                <a href='#faq' className='c-nav__links__item__anchor'>
                  FAQ
                </a>
              </li>
            </ul>
            <a href='#contact' className='c-button__primary'>
              Contact me
              <FaRegEnvelope className="c-button__primary__icon" />
            </a>
          </nav>

          <button onClick={handleMenu} className={`hamburger hamburger--squeeze ${!menu ? "is-active" : ""} u-sp-only`} type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <div className="container">
          
        </div>

        <motion.nav 
          className={`c-nav u-sp-only ${!menu ? "is-active" : ""}`}
          variants={variants}
          initial="hidden"
          animate={!menu ? "visible" : "hidden"}
        >
          <ul className='c-nav__links'>
            <li className='c-nav__links__item'>
              <a href='#about' className='c-nav__links__item__anchor'>
                About Me
              </a>
            </li>
            <li className='c-nav__links__item'>
              <a href='#skills' className='c-nav__links__item__anchor'>
                Skills
              </a>
            </li>
            <li className='c-nav__links__item'>
              <a href='#projects' className='c-nav__links__item__anchor'>
                Projects
              </a>
            </li>
            <li className='c-nav__links__item'>
              <a href='#faq' className='c-nav__links__item__anchor'>
                FAQ
              </a>
            </li>
          </ul>
          <a href='#contact' className='c-button__primary'>
            Contact me
            <FaRegEnvelope className="c-button__primary__icon" />
          </a>
        </motion.nav>
        
      </div>
    </div>
  );
};

export default Header;
