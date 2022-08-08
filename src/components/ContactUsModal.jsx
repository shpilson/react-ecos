import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUsModal = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_48u2ccd', 'template_i91omvq', form.current, 'eewGStA5uCmwJrG3X')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="modal-main">
                <input type="text" name="client_name" placeholder="Ваше имя"
                    class="feedback__name feedback__input" />
                <input type="text" name="client_city"
                    placeholder="Ваш город"
                    class="feedback__city feedback__input" />
                <input type="text" name="client_phone"
                    placeholder="Ваш телефон"
                    class="feedback__phone feedback__input" />
                <input type="text" name="client_address" placeholder="Точный адрес"
                    class="feedback__address feedback__input" />
                <input type="text" name="client_value" placeholder="Объём"
                    class="feedback__volume feedback__input" />
                <input class="feedback__submit feedback__input" type="submit" value="Отправить" />
            </div>
        </form>
    );
};

export default ContactUsModal;