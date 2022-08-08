import Modal from "../components/Modal";
import { useState } from "react";

import "./Morepage.scss";
import ContactUsModal from "../components/ContactUsModal";

const Usedpage = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <main className="main">
      <section className="pages__section">
        <div className="pages__background used__background"></div>
        <div className="container">
          <article className="pages__article">
            <div className="title-top d-fl">
              <span>Дата публикации: 01/06/2017</span>
              <span>5 000+ заявок</span>
            </div>
            <h1>
              О вреде <span>отработанного</span> масла
            </h1>
            <p className="content-top">
              Отработанные масла считаются вредным отходом 3-го класса
              опасности. <br />
              <br />
              Вы удивитесь, когда узнаете, что попадание всего лишь 4 л
              отработанных масел в водоем вызывает образование масляного пятна
              на поверхности воды площадью не менее 35 км2, а если отработка
              попадет в грунтовые воды, каждый литр машинного масла сделает
              непригодными для питья миллионы литров воды.
              <br />
              <br /> Как утилизировать отработанное моторное масло, не уничтожая
              природу родного края? Ответ рядом. Ваш двигатель не представляет
              свою жизнь без моторного масла, без него он попросту износится и
              сломается. А замена моторного масла выгоднее замены двигателя,
              согласитесь. В вашем ''железном коне'' во время работы между
              деталями механизмов возникает сила трения и меняет химический
              состав элементов масла. Вначале оно поддерживает жизнь двигателю,
              но с течением времени отработанное масло наносит ей значительный
              урон. Свежая порция моторного топлива - новая жизнь двигателя.
              <br />
              <br />
              Вернемся к вопросу и сразу даем вам подсказку - утилизировать
              отработанное масло без вреда для природы – доступно и прибыльно.
              ‘’Экология сервис’’ утилизацией
              моторных/индустриальных/трансформаторных масел. При утилизации
              абсолютно исключено вредное воздействие на природу. Более 80
              компаний Тюмени, Тюменской области, ХМАО и ЯНАО доверяют
              отработанное моторное масло исключительно нам. Отработка
              выкачивается специальным насосом. Гарантия чистоты и порядка -
              100%. А теперь к приятному, Вам положено денежное вознаграждение.
              Избавляясь от отработанного масла правильным путем, вы сохраняете
              чистоту природы и шагаете рука об руку с ‘’Экология сервис’’.
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

              <h3>Позаботимся о здоровом будущем поколении вместе</h3>
              <button
                className="btn pages__btn"
                onClick={() => setModalActive(true)}
              >
                Заказать
              </button>
              <a className="pages__email" href="/">
                ecos172@yandex.ru
              </a>
            </div>
            <p className="content-bottom">
              Теперь, в Ваших руках мощное оружие – знания. Вы знаете о
              последствиях неправильно утилизированного отработанного масла и
              способе их устранения.
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

export { Usedpage };
