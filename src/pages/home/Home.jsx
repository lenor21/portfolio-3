import { FaRegEnvelope, FaDownload  } from "react-icons/fa6";
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Home = () => {
  const el1 = useRef(null);

  useEffect(() => {
    const typed1 = new Typed(el1.current, {
      strings: ["HELLO WORLD,^1000 WELCOME TO MY SITE"],
      startDelay: 300,
      typeSpeed: 100,
    });
  
    return () => {
      typed1.destroy();
    }
  }, []);
  

  return (
    <div className='p-home'>

      <section className='p-home__hero'>
        <div className='container'>
          <div className='p-home__hero__inner'>
            <div className='p-home__hero__inner__details'>
              <p className='p-home__hero__inner__details__sml'><span ref={el1} /></p>
              <h1 className='p-home__hero__inner__details__head'>
                I’m <span className="p-home__hero__inner__details__head__gradient">Ronel De Jesus</span> <br /> A Software & Web <span className="p-home__hero__inner__details__head__border">DEVELOPER</span>
              </h1>
              <div className='p-home__hero__inner__details__btn-cont'>
                <a href='#' className='c-button__secondary is-full'>
                  Download CV
                  <FaDownload className="c-button__secondary__icon" />
                </a>
                <a href='#' className='c-button__primary is-full'>
                  Contact Me
                  <FaRegEnvelope className="c-button__primary__icon" />
                </a>
              </div>
            </div>
            <div className='p-home__hero__inner__img-cont'>
              <img src='/images/pages/home/pc/hero.svg' alt='hero-img' className='p-home__hero__inner__img-cont__img' />
            </div>
          </div>
        </div>
      </section>

      <section className="p-home__about">
        <div className="container">
          <div className="p-home__about__inner">
            hello
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
