import { register } from 'swiper/element/bundle';
import { FaGithub, FaLink  } from "react-icons/fa6";

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
                  <a href={props.link} target="_blank" className={`c-button__secondary ${props.link === "" ? "is-disabled" : ""} c-card__link__details__btns__btn is-full`} rel="noreferrer">
                    <FaLink className="c-button__secondary__icon" />
                    {props.link === "" ? "Not yet deployed" : "Visit here"}
                  </a>
                  <a href={props.repository} target="_blank" className='c-button__primary c-card__link__details__btns__btn is-full' rel="noreferrer">
                    <FaGithub className="c-button__primary__icon" />
                    Github Repository
                  </a>
                </div>
            </div>
        </div>
    </swiper-slide>
  );
};

export default Card;