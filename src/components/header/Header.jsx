import { useState, useEffect } from 'react';
import { FaBars, FaXmark, FaRegEnvelope } from "react-icons/fa6";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const [show, setShow] = useState(true);
  const [scroll, setScroll] = useState({
    y: 0,
    lastY: 0
  });

  const handleMenu = () => {
    setMenu(!menu);
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

          <nav className={`c-nav ${!menu ? "is-active" : ""}`}>
            <ul className='c-nav__links'>
              <li className='c-nav__links__item'>
                <a href='#' className='c-nav__links__item__anchor'>
                  About Me
                </a>
              </li>
              <li className='c-nav__links__item'>
                <a href='#' className='c-nav__links__item__anchor'>
                  Skills
                </a>
              </li>
              <li className='c-nav__links__item'>
                <a href='#' className='c-nav__links__item__anchor'>
                  Projects
                </a>
              </li>
              <li className='c-nav__links__item'>
                <a href='#' className='c-nav__links__item__anchor'>
                  FAQ
                </a>
              </li>
            </ul>
            <a href='#' className='c-button__primary'>
              Contact me
              <FaRegEnvelope className="c-button__primary__icon" />
            </a>
          </nav>

          <button onClick={handleMenu} className="c-header__inner__menu">
            { menu 
              ?  <FaBars className="c-header__inner__menu__icon" />
              :  <FaXmark className="c-header__inner__menu__icon" />
            }
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
