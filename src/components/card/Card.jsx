import { register } from 'swiper/element/bundle';
import { FaRegEnvelope, FaDownload  } from "react-icons/fa6";

register();

const Card = (props) => {
  return (
    <swiper-slide>
        <div className="c-card__link">
            <div className="c-card__link__img-cont">
                <img className="c-card__link__img-cont__img" src={`/images/common/pc/${props.image}`} />
            </div>
            <div className="c-card__link__details">
                <p className="c-card__link__details__ttl">{props.title}</p>
                <p className="c-card__link__details__desc">{props.description}</p>
                <div className="c-card__link__details__btns">
                  <a href='#' className='c-button__secondary c-card__link__details__btns__btn is-full'>
                    Download CV
                    <FaDownload className="c-button__secondary__icon" />
                  </a>
                  <a href='#' className='c-button__primary c-card__link__details__btns__btn is-full'>
                    Contact Me
                    <FaRegEnvelope className="c-button__primary__icon" />
                  </a>
                </div>
            </div>
        </div>
    </swiper-slide>
  );
};

export default Card;