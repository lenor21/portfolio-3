import { FaRegEnvelope, FaDownload  } from "react-icons/fa6";
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

const Home = () => {
  const el1 = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log("hello");
      mainControls.start("visible");
    }
  }, [isInView]);

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
  
  const variants = {
    visible: {opacity: 1, transition: {duration: 2, delay: 0.5}}, 
    hidden: {opacity: 0}
  }

  return (
    <div className='p-home' ref={ref}>

      <section className='p-home__hero'>
        <div className='container'>
          <div className='p-home__hero__inner'>
            <div className='p-home__hero__inner__details'>
              <p className='p-home__hero__inner__details__sml'><span ref={el1} /></p>
              <motion.h1 
                className='p-home__hero__inner__details__head'
                variants={variants}
                initial="hidden"
                animate={mainControls}
              >
                I’m <span className="p-home__hero__inner__details__head__gradient">Ronel De Jesus</span> <br /> A Software & Web <span className="p-home__hero__inner__details__head__border">DEVELOPER</span>
              </motion.h1>
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
            <motion.h1
              variants={variants}
              initial="hidden"
              animate={mainControls}
            >
              Hello
            </motion.h1>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
