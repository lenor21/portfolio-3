import { FaArrowRightLong } from "react-icons/fa6";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2s1k1ct', 'template_qiem2kw', form.current, 'veaapaiNp3JHEkkjm')
        .then((result) => {
            toast.success("Success");
            console.log(result.text);
        }, (error) => {
            toast.success("Error");
            console.log(error.text);
        });
    };

  return (
    <form className="c-form" ref={form} onSubmit={sendEmail}>
        <div className="c-form__wrap">
            <div className="c-form__item">
                <label className="c-form__item__label">Full name</label>
                <input 
                    type="text" 
                    className="c-form__item__input" 
                    placeholder="Enter your full name" 
                    name="full_name"
                    required 
                />
            </div>
            <div className="c-form__item">
                <label className="c-form__item__label">Company</label>
                <input 
                    type="text" 
                    className="c-form__item__input" 
                    placeholder="Enter your company name"
                    name="company"
                />
            </div>
            <div className="c-form__item">
                <label className="c-form__item__label">Position</label>
                <input 
                    type="text" 
                    className="c-form__item__input" 
                    placeholder="Enter your position"
                    name="position"
                />
            </div>
            <div className="c-form__item">
                <label className="c-form__item__label">Phone number</label>
                <input 
                    type="tel" 
                    className="c-form__item__input" 
                    placeholder="Enter your phone number" 
                    name="tel"
                    required 
                />
            </div>
            <div className="c-form__item">
                <label className="c-form__item__label">Email</label>
                <input 
                    type="mail" 
                    className="c-form__item__input" 
                    placeholder="Enter your email" 
                    name="email"
                    required 
                />
            </div>
            <div className="c-form__item">
                <label className="c-form__item__label">Message</label>
                <textarea 
                    className="c-form__item__textarea" 
                    placeholder="Enter your message" 
                    name="message"
                    required
                ></textarea>
            </div>
        </div>
        
        <div className="c-form__btn-cont">
            <button className="c-button__submit" type="submit" value="Send">
                Submit 
                <FaArrowRightLong className="c-button__submit__icon" />
            </button>
        </div>

        <ToastContainer />
    </form>
  );
};

export default Form;