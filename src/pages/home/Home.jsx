const Home = () => {
  return (
    <div className='p-home'>
      <section className='p-home__hero'>
        <div className='container'>
          <div className='p-home__hero__inner'>
            <div className='p-home__hero__inner__details'>
              <p className='p-home__hero__inner__details__sml'>HELLO WORLD, WELCOME TO MY SITE</p>
              <h1 className='p-home__hero__inner__details__head'>
                I’m Ronel De Jesus <br /> A Software & Web Developer
              </h1>
              <div className='p-home__hero__inner__details__btn-cont'>
                <a href='#' className='c-button'>
                  Download CV
                </a>
                <a href='#' className='c-button'>
                  Contact Me
                </a>
              </div>
            </div>
            <div className='p-home__hero__inner__img-cont'>
              <img src='../public/images/pages/home/pc/hero.svg' alt='hero-img' className='p-home__hero__inner__img-cont__img' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
