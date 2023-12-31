import { FaRegEnvelope, FaDownload  } from "react-icons/fa6";
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import { register } from 'swiper/element/bundle';
import Projects from '../../assets/data/Projects';
import Card from '../../components/card/Card';
import Faq from '../../assets/data/Faq';
import Accordion from '../../components/accordion/Accordion';
import Form from '../../components/form/Form';

register();

const Home = () => {
  const el1 = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();

  const cards = Projects.map((item) => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

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
            
            <h2 className="c-heading">
              <p className="c-heading__txt">ABOUT ME</p>
            </h2>

            <div className="p-home__about__inner__details">
              <div className="p-home__about__inner__details__slide">
                <swiper-container
                  slides-per-view="1"
                  mousewheel-force-to-axis="true"
                  loop="true"
                  css-mode="true"
                  autoplay="true"
                  className="p-home__about__inner__details__slide__container"
                >
                  <swiper-slide className="p-home__about__inner__details__slide__container__img-cont">
                    <img className="p-home__about__inner__details__slide__container__img-cont__img" src="/images/pages/home/pc/img-about-01.jpg" />
                  </swiper-slide>
                  <swiper-slide className="p-home__about__inner__details__slide__container__img-cont">
                    <img className="p-home__about__inner__details__slide__container__img-cont__img" src="/images/pages/home/pc/img-about-02.jpeg" />
                  </swiper-slide>
                  <swiper-slide className="p-home__about__inner__details__slide__container__img-cont">
                    <img className="p-home__about__inner__details__slide__container__img-cont__img" src="/images/pages/home/pc/img-about-03.jpeg" />
                  </swiper-slide>
                  ...
                </swiper-container>
              </div>
              <div className="p-home__about__inner__details__info">

                <div className="p-home__about__inner__details__info__wrap">
                  <p className="p-home__about__inner__details__info__item">
                    <span className="p-home__about__inner__details__info__item__ttl">Full Name</span>
                    <span className="p-home__about__inner__details__info__item__txt">Ronel Talavera De Jesus</span>
                  </p>

                  <p className="p-home__about__inner__details__info__item">
                    <span className="p-home__about__inner__details__info__item__ttl">Degree</span>
                    <span className="p-home__about__inner__details__info__item__txt">BS Computer Engineering</span>
                  </p>

                  <p className="p-home__about__inner__details__info__item">
                    <span className="p-home__about__inner__details__info__item__ttl">School</span>
                    <span className="p-home__about__inner__details__info__item__txt">Don Honorio Ventura State University</span>
                  </p>

                  <p className="p-home__about__inner__details__info__item">
                    <span className="p-home__about__inner__details__info__item__ttl">Location</span>
                    <span className="p-home__about__inner__details__info__item__txt">Macabebe, Pampanga, Philippines</span>
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="p-home__skills">
        <div className="container">
          <div className="p-home__skills__inner">

            <h2 className="c-heading">
              <p className="c-heading__txt">SKILLS</p>
            </h2>

            <div className="p-home__skills__inner__content">

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                </div>
              </div>

              <div className="p-home__skills__inner__content__items">
                <div className="p-home__skills__inner__content__items__img-cont">
                  <img className="p-home__skills__inner__content__items__img-cont__img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="p-home__projects">
        <div className="container">
          <div className="p-home__projects__inner">

            <h2 className="c-heading">
              <p className="c-heading__txt">PROJECTS</p>
            </h2>

            <div className="p-home__projects__inner__items">
              <swiper-container
                slides-per-view="3"
                space-between="30"
                loop="true"
                navigation="true" 
                pagination="true" 
                className="p-home__projects__inner__items__slide"
              >
                {cards}
              </swiper-container>
            </div>

          </div>
        </div>
      </section>

      <section className="p-home__faq">
        <div className="container">
          <div className="p-home__faq__inner">

            <h2 className="c-heading">
              <p className="c-heading__txt">FAQ</p>
            </h2>

            <div className="p-home__faq__inner__accordion">
              {
                Faq.map((item) => {
                  return (
                    <Accordion key={item} {...item}  />
                  )
                })
              }
            </div>

          </div>
        </div>
      </section>

      <section className="p-home__contact">
        <div className="container">
          <div className="p-home__contact__inner">

            <h2 className="c-heading">
              <p className="c-heading__txt">CONTACT</p>
            </h2>

            <Form />

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
