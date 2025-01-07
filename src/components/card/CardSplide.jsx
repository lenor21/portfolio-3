import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FaGithub, FaLink } from 'react-icons/fa6';

const CardSplide = (props) => {
  return (
    <SplideSlide className='p-home__projects__inner__items__splide__slide'>
      <div className='c-card-splide'>
        {props.new && <div className='c-card-splide__new'>New!</div>}
        <div className='c-card-splide__img-cont'>
          <img
            className='c-card-splide__img-cont__img'
            src={`/images/common/pc/${props.image}`}
            alt='Image 1'
            loading='lazy'
          />
        </div>
        <div className='c-card-splide__details'>
          <p className='c-card-splide__details__ttl'>{props.title}</p>
          <p className='c-card-splide__details__desc'>{props.description}</p>
          <div className='c-card-splide__details__btns'>
            <a
              href={props.link}
              target='_blank'
              className={`c-card-splide__details__btns__btn c-button__secondary ${
                props.link === '' ? 'is-disabled' : ''
              }`}
              rel='noreferrer'>
              <FaLink className='c-button__secondary__icon' />
              {props.link === '' ? 'Not yet deployed' : 'Visit here'}
            </a>
            <a
              href={props.repository}
              target='_blank'
              className='c-card-splide__details__btns__btn c-button__primary'
              rel='noreferrer'>
              <FaGithub className='c-button__primary__icon' />
              Github Repository
            </a>
          </div>
        </div>
      </div>
    </SplideSlide>
  );
};

export default CardSplide;
