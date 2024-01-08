

const Footer = () => {
  return (
    <div className="c-footer">
        <div className="container">
            <div className="c-footer__inner">
                <div className="c-footer__inner__left">
                    <div className="c-footer__inner__left__logo">
                        <a href="#" className="c-footer__inner__left__logo__link">
                            <div className='c-footer__inner__left__logo__link__icon-cont'>
                                <img className='c-footer__inner__left__logo__link__icon-cont__icon' src='/images/common/pc/logo.svg' alt='logo' />
                            </div>
                            <p className='c-footer__inner__left__logo__link__txt'>
                                <span className='c-footer__inner__left__logo__link__txt__span'>Ronel</span>
                                <span className='c-footer__inner__left__logo__link__txt__span'>De Jesus</span>
                            </p>
                        </a>
                    </div>
                    <div className="c-footer__inner__left__map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2231.187905105615!2d120.72778237191544!3d14.936490339871147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sph!4v1704719310431!5m2!1sen!2sph" 
                            width="250" 
                            height="250" 
                            style={{ border: "0" }}
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div className="c-footer__inner__right">
                    world
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;