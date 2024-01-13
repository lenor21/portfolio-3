import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Accordion = (props) => {
    useEffect(() => {
        AOS.init({
            offset: 320,
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <details 
            className="c-accordion"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <summary className="c-accordion__summary">{props.question}</summary>
            <p className="c-accordion__content">{props.answer}</p>
        </details>
    );
};

export default Accordion;