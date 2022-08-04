import Modal from "../components/Modal";
import { useState } from "react";

import "./Homepage.scss";

const Homepage = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <main className="main">
      <section className="section__start">
        <h1>покупка и утилизация отработанного масла</h1>
        <h2>
          тюмень, тюменская область, хмао, янао, екатеринбург, свердловская
          область
        </h2>
        <div className="start__plus d-fl-wrap">
          <div className="plus__block d-fl-col">
            <div className="plus__img">
              <svg>
                <use xlinkHref="/sprite.svg#plus-1"></use>
              </svg>
            </div>
            <span>7 лет в деле</span>
          </div>
          <div className="plus__block d-fl-col">
            <div className="plus__img">
              <svg>
                <use xlinkHref="/sprite.svg#plus-2"></use>
              </svg>
            </div>
            <span>работаем 24/7</span>
          </div>
          <div className="plus__block d-fl-col">
            <div className="plus__img">
              <svg>
                <use xlinkHref="/sprite.svg#plus-3"></use>
              </svg>
            </div>
            <span>{">"} 120 партнёров</span>
          </div>
        </div>

        <div className="start__btn-wrapper d-fl">
          <button
            className="btn start__btn"
            onClick={() => setModalActive(true)}
          >
            Продать масло
          </button>
        </div>
      </section>
      <section className="section__about">
        <div className="container">
          <article className="section-wrap">
            <div className="section__block">
              <div className="about__text">
                <h3 className="title__block">подробнее о нас</h3>
                <p>
                  Компания «Экология Сервис» открыла направление по утилизации
                  отработанных масел в 2011 г.
                  <br />
                  <br /> Мы являемся полноценным и надежным партнером в сфере
                  утилизации нефтепродуктов.
                  <br />
                  <br /> Сотрудничая с «Экология Сервис», вы получаете:
                  качественный и быстрый сервис, своевременную оплату и полный
                  пакет документов для отчетности перед надзорными органами.
                </p>
              </div>
            </div>
            <div className="section__block">
              <div className="about__img">
                <img
                  src="/img/photo/about.png"
                  alt="покупка и утилизация отработанного масла"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="section__request">
        <div className="container">
          <div className="request__text">
            <h3>Оставьте заявку на вывоз отработанного масла</h3>
            <span>Наш специалист свяжется с вами в течение 5 минут</span>
          </div>
          <form action="">
            <div className="form-main">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ваше имя"
                class="feedback__name feedback__input"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Ваш телефон"
                class="feedback__phone feedback__input"
              />
              <input
                type="submit"
                id="button"
                value="Отправить"
                class="feedback__submit feedback__input"
              />
            </div>
          </form>
        </div>
      </section>
      <section className="section__work">
        <div className="container">
          <h2 className="title__block">как мы работаем</h2>
          <div className="work-flex d-fl-wrap">
            <div className="work__card d-fl">
              <span>Вы оставляете заявку на сайте или по телефону</span>
            </div>
            <div className="work__card d-fl">
              <span>Мы приезжаем и откачиваем отработанное масло</span>
            </div>
            <div className="work__card d-fl">
              <span>Оплачиваем удобным Вам способом</span>
            </div>
          </div>
          <div className="d-fl-col">
            <span className="documents d-fl">
              Предоставляем полный пакет документов
            </span>
            <div className="work-grid">
              <div className="work__text">
                <p>
                  Мы понимаем, как важно для рабочего процесса вовремя
                  освободить полные емкости с отработанным маслом.
                </p>
              </div>
              <div className="work__text">
                <p>
                  Вся наша работа направлена на то, чтобы приехать максимально
                  быстро и откачать отработанное масло, оставив ваше помещение
                  чистым
                </p>
              </div>
              <div className="work__text">
                <p>
                  Именно поэтому с нами работает большинство крупных СТО и
                  производственных компаний Тюменской области.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section__feedback">
        <div className="container">
          <div className="feedback-top">
            <h2 className="title__block">обратная связь</h2>
            <h6>
              Оставьте заявку на вывоз отработанного масла и наш специалист
              свяжется с Вами в ближайшее время
            </h6>
          </div>

          <form action="">
            <div className="feedback__form">
              <input
                type="text"
                name="name2"
                id="name2"
                placeholder="Ваше имя"
                class="feedback__name feedback__input"
              />
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Ваш город"
                class="feedback__city feedback__input"
              />
              <input
                type="text"
                name="phone2"
                id="phone2"
                placeholder="Ваш телефон"
                class="feedback__phone feedback__input"
              />
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Точный адрес"
                class="feedback__address feedback__input"
              />
              <input
                type="text"
                name="volume"
                id="volume"
                placeholder="Объём"
                class="feedback__volume feedback__input"
              />
              <input
                type="submit"
                id="button2"
                value="Отправить"
                class="feedback__submit feedback__input"
              />
            </div>
          </form>
        </div>
      </section>

      <Modal active={modalActive} setActive={setModalActive}>
        <div className="d-fl-col">
          <div className="modal-top">
            <h2 className="title__block">Экология сервис</h2>
            <h6>
              Оставьте заявку на вывоз отработанного масла и наш специалист
              свяжется с Вами в ближайшее время
            </h6>
          </div>

          <form action="">
            <div className="modal-main">
              <input
                type="text"
                name="name-modal"
                id="name-modal"
                placeholder="Ваше имя"
                class="feedback__name feedback__input"
              />
              <input
                type="text"
                name="city-modal"
                id="city-modal"
                placeholder="Ваш город"
                class="feedback__city feedback__input"
              />
              <input
                type="text"
                name="phone-modal"
                id="phone-modal"
                placeholder="Ваш телефон"
                class="feedback__phone feedback__input"
              />
              <input
                type="text"
                name="address-modal"
                id="address-modal"
                placeholder="Точный адрес"
                class="feedback__address feedback__input"
              />
              <input
                type="text"
                name="volume-modal"
                id="volume-modal"
                placeholder="Объём"
                class="feedback__volume feedback__input"
              />
              <input
                type="submit"
                id="button-modal"
                value="Отправить"
                class="feedback__submit feedback__input"
              />
            </div>
          </form>
        </div>
      </Modal>
    </main>
  );
};

export { Homepage };
