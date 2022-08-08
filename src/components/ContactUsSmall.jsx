import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUsSmall = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_48u2ccd",
        "template_i91omvq",
        form.current,
        "eewGStA5uCmwJrG3X"
      )
      .then(
        () => {
          Swal.fire({
            title: "Заявка отправлена!",
            text: "Скоро мы свяжемся с Вами",
            icon: "success",
            background: "white",
            allowEnterKey: false,
            confirmButtonColor: "#f8b700",
            timer: 3000,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-main">
        <input
          type="text"
          name="client_name"
          placeholder="Ваше имя"
          class="feedback__name feedback__input"
          required=" "
        />

        <input
          type="text"
          name="client_phone"
          placeholder="Ваш телефон"
          class="feedback__phone feedback__input"
          required=" "
        />

        <input
          class="feedback__submit feedback__input"
          type="submit"
          value="Отправить"
        />
      </div>
    </form>
  );
};

export default ContactUsSmall;
