import Modal from "../components/Modal";
import { useState } from "react";

import "./Morepage.scss";
import ContactUsModal from "../components/ContactUsModal";

const Profitpage = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <main className="main">
      <section className="pages__section">
        <div className="pages__background profit__background"></div>
        <div className="container">
          <article className="pages__article">
            <div className="title-top d-fl">
              <span>Дата публикации: 01/06/2017</span>
              <span>5 000+ заявок</span>
            </div>
            <h1>
              Как получить <span>прибыль</span> с отработанного масла?
            </h1>
            <p className="content-top">
              Посмотрите правде в глаза - Всему хорошему рано или поздно
              приходит конец. Моторное, индустриальное, и трансформаторное масло
              - не исключение, отслужив свое, оно должно быть утилизировано за
              счет предприятия. Отработанное масло представляет колоссальную
              опасность для Вашего здоровья. Теперь это кладезь модифицированных
              веществ и отложений - остается только слить масло и заменить на
              новое. <br />
              <br />
              Пожалуй, Вам знакома ситуация, когда Ваше предприятие
              переполняется емкостями с отработанным маслом и в Вашем помещении
              становится тесно. Назревает вопрос ''как напоследок извлечь выгоду
              из отработки?''. Разумеется, Вы можете самостоятельно заняться
              утилизацией - в ущерб Вашему времени, или того ужаснее – слить
              масло в почву или водоем и заслуженно заработать штраф за
              нарушение экологических норм.
              <br />
              <br /> Но есть другой путь. Вы можете обратиться в
              сертифицированный пункт приема переработки и пополнить Ваш карман.
              Подождите, это еще не все. <br />
              <br />
              Мысленно перенеситесь в завтрашний день. Вы нашли сервис, куда без
              хлопот можете сдать моторное масло и превратить его в солидную
              сумму денег, сократив потери свободного времени. Сейчас вы
              узнаете, как подобный плод фантазии может превратиться в
              реальность. Более 5 лет деятельность ‘’Экологии сервис’’
              направлена на совершенствование качества услуг по вывозу и
              утилизации отработанных масел.
            </p>
            <div className="content-center d-fl-col">
              <div className="society d-fl-col">
                <a href="/" className="society__block">
                  <svg>
                    <use xlinkHref="/sprite.svg#mail-page"></use>
                  </svg>
                </a>
                <a href="/" className="society__block">
                  <svg>
                    <use xlinkHref="/sprite.svg#phone-page"></use>
                  </svg>
                </a>
                <a href="/" className="society__block">
                  <svg>
                    <use xlinkHref="/sprite.svg#vk-page"></use>
                  </svg>
                </a>
              </div>

              <h3>"Экология Сервис" – Ваш дополнительный источник доходов</h3>
              <button
                className="btn pages__btn"
                onClick={() => setModalActive(true)}
              >
                Продать
              </button>
              <a className="pages__email" href="/">
                ecos172@yandex.ru
              </a>
            </div>
            <p className="content-bottom">
              365 дней в году 24/7 профессионалы своего дела проинформируют вас
              о цене покупки отработки. Вы сами назначаете удобную дату и время.
              К вам приезжает опытный мастер, за плечами которого тонны слитого
              отработанного масла. Вы принимаете чистую работу, опустошенные
              резервуары и заслуженную плату.
            </p>
          </article>
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

          <ContactUsModal>

          </ContactUsModal>
        </div>
      </Modal>
    </main>
  );
};

export { Profitpage };
