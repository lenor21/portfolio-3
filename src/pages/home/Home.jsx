import { FaRegEnvelope, FaDownload } from 'react-icons/fa6';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { register } from 'swiper/element/bundle';
import Projects from '../../assets/data/Projects';
import Card from '../../components/card/Card';
import CardSplide from '../../components/card/CardSplide';
import { Splide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Faq from '../../assets/data/Faq';
import Accordion from '../../components/accordion/Accordion';
import Form from '../../components/form/Form';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from '../../assets/data/cv/resume.pdf';

register();

const Home = () => {
  const el1 = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  // const cards = Projects.map((item) => {
  //   return <Card key={item.id} {...item} />;
  // });

  const cards = Projects.map((item) => {
    return <CardSplide key={item.id} {...item} />;
  });

  useEffect(() => {
    if (isInView) {
      console.log('hello');
      mainControls.start('visible');
    }
  }, [isInView]);

  useEffect(() => {
    const typed1 = new Typed(el1.current, {
      strings: ['HELLO WORLD,^1000 WELCOME TO MY SITE'],
      startDelay: 300,
      typeSpeed: 100,
    });

    return () => {
      typed1.destroy();
    };
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 220,
      once: false,
      mirror: false,
    });
  }, []);

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: '-220%',
      opacity: 0.5,
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 20,
      },
    },
  };

  return (
    <div className='p-home'>
      <section className='p-home__hero'>
        <div className='container'>
          <div className='p-home__hero__inner'>
            <div className='p-home__hero__inner__details'>
              <p className='p-home__hero__inner__details__sml'>
                <span ref={el1} />
              </p>
              <h1
                className='p-home__hero__inner__details__head'
                data-aos='fade-right'
                data-aos-delay='10000'
                data-aos-duration='1000'>
                I’m{' '}
                <span className='p-home__hero__inner__details__head__gradient'>
                  Ronel De Jesus
                </span>{' '}
                <br /> A Software & Web{' '}
                <span className='p-home__hero__inner__details__head__border'>
                  DEVELOPER
                </span>
              </h1>
              <div className='p-home__hero__inner__details__btn-cont'>
                <a
                  href={resume}
                  download='ronel-dejesus'
                  className='c-button__secondary is-full'
                  data-aos='fade-up'
                  data-aos-delay='100'
                  data-aos-duration='1000'>
                  Download CV
                  <FaDownload className='c-button__secondary__icon' />
                </a>
                <a
                  href='#contact'
                  className='c-button__primary is-full'
                  data-aos='fade-up'
                  data-aos-delay='1000'
                  data-aos-duration='1000'>
                  Contact Me
                  <FaRegEnvelope className='c-button__primary__icon' />
                </a>
              </div>
            </div>
            <div
              className='p-home__hero__inner__img-cont'
              data-aos='fade-left'
              data-aos-delay='1000'
              data-aos-duration='1000'>
              <img
                src='/images/pages/home/pc/hero.svg'
                alt='hero-img'
                className='p-home__hero__inner__img-cont__img'
              />
            </div>
          </div>
        </div>
      </section>

      <section id='about' className='p-home__about'>
        <div className='container'>
          <div className='p-home__about__inner'>
            <h2
              className='c-heading'
              data-aos='fade-up'
              data-aos-duration='1000'>
              <p className='c-heading__txt'>ABOUT ME</p>
            </h2>

            <div className='p-home__about__inner__details'>
              <div
                className='p-home__about__inner__details__slide'
                data-aos='fade-right'
                data-aos-duration='1000'>
                <swiper-container
                  slides-per-view='1'
                  mousewheel-force-to-axis='true'
                  loop='true'
                  css-mode='true'
                  autoplay='true'
                  className='p-home__about__inner__details__slide__container'>
                  <swiper-slide className='p-home__about__inner__details__slide__container__img-cont'>
                    <img
                      className='p-home__about__inner__details__slide__container__img-cont__img'
                      src='/images/pages/home/pc/img-about-01.jpg'
                    />
                  </swiper-slide>
                  <swiper-slide className='p-home__about__inner__details__slide__container__img-cont'>
                    <img
                      className='p-home__about__inner__details__slide__container__img-cont__img'
                      src='/images/pages/home/pc/img-about-02.jpeg'
                    />
                  </swiper-slide>
                  <swiper-slide className='p-home__about__inner__details__slide__container__img-cont'>
                    <img
                      className='p-home__about__inner__details__slide__container__img-cont__img'
                      src='/images/pages/home/pc/img-about-03.jpeg'
                    />
                  </swiper-slide>
                  ...
                </swiper-container>
              </div>
              <div
                className='p-home__about__inner__details__info'
                data-aos='fade-left'
                data-aos-duration='1000'>
                <div className='p-home__about__inner__details__info__wrap'>
                  <p className='p-home__about__inner__details__info__item'>
                    <span className='p-home__about__inner__details__info__item__ttl'>
                      Full Name
                    </span>
                    <span className='p-home__about__inner__details__info__item__txt'>
                      Ronel Talavera De Jesus
                    </span>
                  </p>

                  <p className='p-home__about__inner__details__info__item'>
                    <span className='p-home__about__inner__details__info__item__ttl'>
                      Degree
                    </span>
                    <span className='p-home__about__inner__details__info__item__txt'>
                      BS Computer Engineering
                    </span>
                  </p>

                  <p className='p-home__about__inner__details__info__item'>
                    <span className='p-home__about__inner__details__info__item__ttl'>
                      School
                    </span>
                    <span className='p-home__about__inner__details__info__item__txt'>
                      Don Honorio Ventura State University
                    </span>
                  </p>

                  <p className='p-home__about__inner__details__info__item'>
                    <span className='p-home__about__inner__details__info__item__ttl'>
                      Location
                    </span>
                    <span className='p-home__about__inner__details__info__item__txt'>
                      Macabebe, Pampanga, Philippines
                    </span>
                  </p>

                  <p className='p-home__about__inner__details__info__item'>
                    <span className='p-home__about__inner__details__info__item__ttl'>
                      Language
                    </span>
                    <span className='p-home__about__inner__details__info__item__txt'>
                      English, Filipino, Kapampangan
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className='p-home__about__sliding'
          variants={sliderVariants}
          initial='initial'
          animate='animate'>
          ABOUT ME
        </motion.div>
      </section>

      <section id='skills' className='p-home__skills'>
        <div className='container'>
          <div className='p-home__skills__inner'>
            <h2
              className='c-heading'
              data-aos='fade-right'
              data-aos-duration='1000'>
              <p className='c-heading__txt'>SKILLS</p>
            </h2>

            <div className='p-home__skills__inner__content'>
              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='50'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  HTML
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='150'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  CSS
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='250'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  JAVASCRIPT
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='350'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  PHP
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='50'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  SASS
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='150'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  TAILWIND CSS
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='250'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  BOOTSTRAP
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='350'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  REACT JS
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='50'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  EXPRESS JS
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='150'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  NODE JS
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='250'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  MONGODB
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='350'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  MYSQL
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='50'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  GIT
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='150'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  NEXT JS
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='250'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  REDUX
                </div>
              </div>

              <div
                className='p-home__skills__inner__content__items'
                data-aos='fade-up'
                data-aos-delay='350'
                data-aos-duration='1000'>
                <div className='p-home__skills__inner__content__items__img-cont'>
                  <img
                    className='p-home__skills__inner__content__items__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'
                  />
                </div>
                <div className='p-home__skills__inner__content__items__hover'>
                  WORDPRESS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='projects' className='p-home__projects'>
        <div className='container'>
          <div className='p-home__projects__inner'>
            <h2
              className='c-heading'
              data-aos='fade-right'
              data-aos-duration='1000'>
              <p className='c-heading__txt'>PROJECTS</p>
            </h2>

            {/* <div
              className='p-home__projects__inner__items'
              data-aos='fade-up'
              data-aos-duration='1000'>
              <swiper-container
                slides-per-view={window.innerWidth > 768 ? '3' : '1'}
                space-between='30'
                loop='true'
                navigation='true'
                className='p-home__projects__inner__items__slide'>
                {cards}
              </swiper-container>
            </div> */}

            <div
              className='p-home__projects__inner__items'
              data-aos='fade-up'
              data-aos-duration='1000'>
              <Splide
                hasTrack={false}
                options={{
                  type: 'slide',
                  height: 'auto',
                  gap: '3rem',
                  autoWidth: true,
                  autoHeight: true,
                  pagination: true,
                  breakpoints: {
                    750: {
                      width: '100%',
                      fixedWidth: '10rem',
                      autoWidth: true,
                      pagination: true,
                    },
                  },
                  classes: {
                    arrows: 'splide__arrows c-card-splide__arrows',
                    arrow: 'splide__arrow c-card-splide__arrow is-arrow',
                    prev: 'splide__arrow--prev c-card-splide__prev',
                    next: 'splide__arrow--next c-card-splide__next',
                    pagination: 'splide__pagination c-card-splide__pagination', // container
                    page: 'splide__pagination__page c-card-splide__page', // each button
                  },
                }}>
                <SplideTrack>{cards}</SplideTrack>
              </Splide>
            </div>

            <div className='p-home__projects__inner__links'>
              <a
                href='https://github.com/lenor21'
                target='_blank'
                className='p-home__projects__inner__links__link'
                rel='noreferrer'
                data-aos='fade-up'
                data-aos-duration='1000'>
                <div className='p-home__projects__inner__links__link__img-cont'>
                  <img
                    className='p-home__projects__inner__links__link__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg'
                  />
                </div>
                <p className='p-home__projects__inner__links__link__txt'>
                  View all my repositories
                </p>
              </a>
              <a
                href='https://codepen.io/Ronel-De-jesus/pens/'
                target='_blank'
                className='p-home__projects__inner__links__link'
                rel='noreferrer'
                data-aos='fade-up'
                data-aos-duration='1000'>
                <div className='p-home__projects__inner__links__link__img-cont'>
                  <img
                    className='p-home__projects__inner__links__link__img-cont__img'
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codepen/codepen-original.svg'
                  />
                </div>
                <p className='p-home__projects__inner__links__link__txt'>
                  View all my works on Codepen
                </p>
              </a>
            </div>
          </div>
        </div>
        <motion.div
          className='p-home__projects__sliding'
          variants={sliderVariants}
          initial='initial'
          animate='animate'>
          VIEW MY PROJECTS
        </motion.div>
      </section>

      <section id='faq' className='p-home__faq'>
        <div className='container'>
          <div className='p-home__faq__inner'>
            <h2
              className='c-heading'
              data-aos='fade-right'
              data-aos-duration='1000'>
              <p className='c-heading__txt'>FAQ</p>
            </h2>

            <div className='p-home__faq__inner__accordion'>
              {Faq.map((item) => {
                return <Accordion key={item} {...item} />;
              })}
            </div>
          </div>
        </div>
      </section>

      <section id='contact' className='p-home__contact'>
        <div className='container'>
          <div className='p-home__contact__inner'>
            <h2
              className='c-heading'
              data-aos='fade-up'
              data-aos-duration='1000'>
              <p className='c-heading__txt'>CONTACT</p>
            </h2>

            <div
              className='p-home__contact__inner__tel'
              data-aos='fade-right'
              data-aos-duration='1000'>
              <a
                href='tel:09357249128'
                className='p-home__contact__inner__tel__info'>
                <span className='p-home__contact__inner__tel__info__txt is-pc'>
                  CONTACT ME
                </span>
                <span className='p-home__contact__inner__tel__info__txt is-sp'>
                  TAP TO CALL ME
                </span>
                <span className='p-home__contact__inner__tel__info__num'>
                  +639357249128
                </span>
              </a>
            </div>

            <Form />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
