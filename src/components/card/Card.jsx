import { register } from 'swiper/element/bundle';

register();

const Card = (props) => {
  return (
    <swiper-slide className="c-card">
        <a href="#" className="c-card__link">
            <div className="c-card__link__img-cont">
                <img className="c-card__link__img-cont__img" src="/images/common/pc/react-weather-app.png" />
            </div>
            <div className="c-card__link__details">
                <p className="c-card__link__details__ttl">{props.title}</p>
                <p className="c-card__link__details__desc">{props.description}</p>
            </div>
        </a>
    </swiper-slide>
  );
};

export default Card;