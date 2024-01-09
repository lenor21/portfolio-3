import { FaArrowRightLong } from "react-icons/fa6";

const Form = () => {
  return (
    <form className="c-form">
        <div className="c-form__wrap">
            <div className="c-form__item">
                <label className="c-form__item__label">First name</label>
                <input type="text" className="c-form__item__input" placeholder="Enter your first name" />
            </div>
            <div className="c-form__item">
                <label className="c-form__item__label">Last name</label>
                <input type="text" className="c-form__item__input" placeholder="Enter your last name" />
            </div>
            <div className="c-form__item">
                <label className="c-form__item__label">Company</label>
                <input type="text" className="c-form__item__input" placeholder="Enter your company name" />
            </div>
            <div className="c-form__item">
                <label className="c-form__item__label">Position</label>
                <input type="text" className="c-form__item__input" placeholder="Enter your position" />
            </div>
            <div className="c-form__item">
                <label className="c-form__item__label">Email</label>
                <input type="mail" className="c-form__item__input" placeholder="Enter your email" />
            </div>
            <div className="c-form__item">
                <label className="c-form__item__label">Message</label>
                <textarea className="c-form__item__textarea" placeholder="Enter your message"></textarea>
            </div>
        </div>
        
        <div className="c-form__btn-cont">
            <button className="c-button__submit" type="submit">Submit <FaArrowRightLong className="c-button__submit__icon" /></button>
        </div>
    </form>
  );
};

export default Form;