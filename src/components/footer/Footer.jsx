import { FaRegEnvelope, FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='c-footer'>
      <a href='#' className='c-footer__top'>
        <FaArrowUp />
      </a>

      <div className='container'>
        <div className='c-footer__inner'>
          <div className='c-footer__inner__left'>
            <div className='c-footer__inner__left__logo'>
              <a href='#' className='c-footer__inner__left__logo__link'>
                <div className='c-footer__inner__left__logo__link__icon-cont'>
                  <img className='c-footer__inner__left__logo__link__icon-cont__icon' src='/images/common/pc/logo.svg' alt='logo' />
                </div>
                <p className='c-footer__inner__left__logo__link__txt'>
                  <span className='c-footer__inner__left__logo__link__txt__span'>Ronel</span>
                  <span className='c-footer__inner__left__logo__link__txt__span'>De Jesus</span>
                </p>
              </a>
            </div>
          </div>
          <div className='c-footer__inner__right'>
            <div className='c-footer__inner__right__wrap'>
              <div className='c-footer__inner__right__links'>
                <a href='#about' className='c-footer__inner__right__links__anchor'>
                  About Me
                </a>
                <a href='#skills' className='c-footer__inner__right__links__anchor'>
                  Skills
                </a>
                <a href='#projects' className='c-footer__inner__right__links__anchor'>
                  Projects
                </a>
                <a href='#faq' className='c-footer__inner__right__links__anchor'>
                  FAQ
                </a>
                <a href='#contact' className='c-button__primary'>
                  Contact me
                  <FaRegEnvelope className='c-button__primary__icon' />
                </a>
              </div>
              <div className='c-footer__inner__right__map'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2231.187905105615!2d120.72778237191544!3d14.936490339871147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sph!4v1704719310431!5m2!1sen!2sph'
                  width='100%'
                  height='100%'
                  style={{ border: '0' }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
            <div className='c-footer__inner__right__socials'>
              <a href='https://github.com/lenor21' target='_blank' className='c-footer__inner__right__socials__anchor'>
                <FaGithub />
              </a>
              <a href='https://www.facebook.com/ronel.dejesus21/' target='_blank' className='c-footer__inner__right__socials__anchor'>
                <FaFacebook />
              </a>
              <a href='https://www.instagram.com/dejesus__ron/' target='_blank' className='c-footer__inner__right__socials__anchor'>
                <FaInstagram />
              </a>
              <a href='https://twitter.com/dejesus__ron' target='_blank' className='c-footer__inner__right__socials__anchor'>
                <FaXTwitter />
              </a>
              <a href='https://www.linkedin.com/in/ronel-de-jesus-760885222/' target='_blank' className='c-footer__inner__right__socials__anchor'>
                <FaLinkedin />
              </a>
              <a href='mailto:dejesusronel29@gmail.com' target='_blank' className='c-footer__inner__right__socials__anchor'>
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <p className='c-footer__copyright'>Copyright © 2024 Ronel De Jesus</p>
      </div>
    </div>
  );
};

export default Footer;
