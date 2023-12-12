const Header = () => {
  return (
    <div className='c-header'>
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

          <nav className='c-nav'>
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
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
