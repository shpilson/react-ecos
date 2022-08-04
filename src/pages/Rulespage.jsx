import Modal from "../components/Modal";
import { useState } from "react";

import "./Morepage.scss";

const Rulespage = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <main className="main">
      <section className="pages__section">
        <div className="pages__background rules__background"></div>
        <div className="container">
          <article className="pages__article">
            <div className="title-top d-fl">
              <span>Дата публикации: 01/06/2017</span>
              <span>5 000+ заявок</span>
            </div>
            <h1>
              Правила хранения <span>отработанных</span> масел
            </h1>
            <p className="content-top">
              Инструкция по сбору, хранению, учёту, сдаче и перевозке
              отработанного масла (ГСМ) и маслосодержащих отходов (ветошь
              промасленная, опилки промасленные, фильтра отработанные
              промасленные).
            </p>
            <div className="content__list">
              <ul>
                <li>
                  <span>1. Общие положения</span>
                  <ul>
                    <li>
                      1.1. Отработанное масло (моторное, индустриальное,
                      трансмиссионное), фильтра отработанные промасленные
                      относится к отходам III класса (умеренно опасные)
                      опасности. Ветошь промасленная, опилки промасленные
                      относятся к отходам IV класса опасности (малоопасные).
                    </li>
                    <li>
                      1.2. Отработанные нефтепродукты являются опасными
                      загрязнителями практически всех компонентов природной
                      среды – поверхностных и подземных вод,
                      почвенно-растительного покрова, атмосферного воздуха.
                      Значительный ущерб окружающей среде наносится во время
                      неправильного сбора и хранения отработанного масла и
                      нефтесодержащих отходов.
                    </li>
                    <li>
                      1.3. Отработанное масло, фильтра отработанные, ветошь
                      промасленная, опилки промасленные являются пожара и
                      взрывоопасными отходами, а также легко воспламеняющимися.
                    </li>
                  </ul>
                </li>
                <li>
                  <span>
                    2.2. Условия хранения отработанного масла и маслосодержащих
                    отходов. отработанное масло
                  </span>
                  <ul>
                    <li>
                      2.1. Первичный сбор отработанного масла должен
                      осуществляться РАЗДЕЛЬНО от других отходов в специально
                      предназначенные герметически закрываемые ёмкости.
                    </li>
                    <li>
                      2.2. Ёмкости для сбора и временного хранения отработанных
                      масел могут находиться как в производственной зоне так и
                      вне её. Ёмкости обязательно должны иметь маркировку.
                    </li>
                    <li>
                      2.3. В случае если ёмкости устанавливаются на прилегающей
                      территории, площадка для накопления отработанных масел
                      должна иметь твёрдое покрытие и навес, исключающий
                      попадание воды и посторонних предметов.
                    </li>
                    <li>
                      2.4. Ёмкости с отработанным маслом должны быть оборудованы
                      металлическими поддонами. Поддон должен обеспечивать
                      удержание масла в случае перелива не менее 5 % объёма.
                    </li>
                    <li>
                      2.5.Полы в помещениях и под навесами должны быть покрыты
                      влагонепроницаемыми и маслонепроницаемыми материалами и
                      оборудованы сточными канавками.
                    </li>
                    <li>
                      2.6. Помещение для хранения отработанного масла должно
                      быть оборудовано вытяжной вентиляцией.
                    </li>
                    <li>
                      2.7. Площадки и навесы, где хранятся ёмкости с
                      отработанными маслами, должны быть ограждены.
                    </li>
                    <li>
                      2.8. При хранении ёмкостей с отработанными маслами
                      необходимо следить за их герметичностью, не допускать
                      случаев загрязнения отработанными маслами компонентов
                      окружающей среды (пробки бочек необходимо плотно
                      затягивать).
                    </li>
                    <li>
                      2.9. В местах хранения должны быть вывешены инструкции о
                      порядке обращения с отработанными маслами и по
                      противопожарному режиму.
                    </li>
                    <li>
                      2.10. Для ликвидации возможных разливов масла, в помещении
                      для хранения и на площадках, должен иметься ящик с песком
                      и лопата.
                    </li>
                    <li>
                      2.11. При обнаружении разлива отработанного масла
                      необходимо:
                      <ul>
                        <li>прекратить доступ людей к месту разлива;</li>
                        <li>
                          место разлива масла обильно засыпать имеющимися в
                          запасе песком, опилками;
                        </li>
                        <li>
                          собрать песок с помощью лопаты в предназначенную для
                          этого герметичную ёмкость (для дальнейшего
                          обезвреживания данный песок, опилки передаются в
                          специализированные организации, имеющие лицензию на
                          деятельность по сбору, использованию, обезвреживанию,
                          транспортировке, размещению опасных отходов);
                        </li>
                        <li>
                          в случае разлива в помещении тщательно вымыть
                          загрязненный участок мыльной водой;
                        </li>
                      </ul>
                    </li>
                    <li>
                      2.12. При работе на эстакаде, обязательно подставлять
                      поддон под ремонтирующуюся машину, на случай разлива масла
                      или специального его слива. После работы масло с поддона
                      слить в специальную емкость, предназначенную для хранения
                      отработанного масла.
                    </li>
                    <li>
                      2.13. При обращении с отработанными маслами ЗАПРЕЩАЕТСЯ:
                      <ul className="content-list--type">
                        <li>
                          устанавливать ёмкости с отработанными маслами вблизи
                          нагретых поверхностей;
                        </li>
                        <li>
                          хранить ёмкости с отработанным маслом совместно с
                          другими материалами и веществами;
                        </li>
                        <li>
                          сливать масла в канализацию на почву, водные объекты;
                        </li>
                        <li>
                          привлекать для работ с отработанными маслами лиц, не
                          прошедших предварительный инструктаж, и лиц моложе 18
                          лет;
                        </li>
                        <li>
                          сжигать отработанное масло и ГСМ на территории
                          организации;
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="content-center content-center--list d-fl-col">
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

              <h3>"Экология Сервис" – Заботится о вашем здоровье</h3>
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
            <div className="content__list">
              <ul>
                <li>
                  <span>3. Учёт отработанного масла и ГСМ</span>
                  <ul>
                    <li>
                      3.1. Учёт наличия и движения отработанного масла
                      организуется на всех предприятиях (организациях,
                      учреждениях) независимо от форм собственности и
                      ведомственной принадлежности.
                    </li>
                    <li>
                      3.2. Учёт ведётся в специальном журнале, где в
                      обязательном порядке отмечается движение нового (не
                      отработанного) масла и ГСМ и отработанного масла и ГСМ.
                    </li>
                    <li>
                      3.3. Страницы журнала должны быть пронумерованы,
                      прошнурованы и скреплены.
                    </li>
                    <li>
                      3.4. Журнал учёта должен заполняться ответственным лицом
                      (на промышленной базе, на участке строительства). Вносятся
                      данные о поступлении нового масла и ГСМ и образовавшемся
                      отработанном и его движении. Обязательно указывается
                      количество, дата приёмки и лицо которое сдаёт масло и ГСМ.
                    </li>
                    <li>
                      3.5. Не позднее 10 числа месяца, следующего за отчётным
                      периодом лицо, заполняющее журнал должно предоставить
                      инженеру – экологу в отдел Охраны Труда организации
                      справку о количестве сданного масла и ГСМ в
                      специализированные предприятия.
                    </li>
                  </ul>
                </li>
                <li>
                  <span>
                    4. Порядок сдачи, транспортировки и перевозки отработанного
                    масла и ГСМ и маслосодержащих отходов
                  </span>
                  <ul>
                    <li>
                      4.1. Отработанное масло и ГСМ, маслосодержащие отходы
                      сдаются на утилизацию в специализированные организации,
                      имеющие лицензию на деятельность по сбору, использованию,
                      обезвреживанию, транспортировке, размещению опасных
                      отходов.
                    </li>
                    <li>
                      4.2. Отработанное масло и ГСМ сдаются на утилизацию либо в
                      бочках организации, либо организация, которая его
                      принимает, откачивает отработанное масло и ГСМ с ёмкостей
                      для его хранения собственными силами.
                    </li>
                    <li>
                      4.3. Маслосодержащие отходы перед сдачей должны быть
                      взвешены.
                    </li>
                    <li>
                      4.4. Если транспортировка отработанного масла и ГСМ
                      проводиться силами организации, нужно соблюдать следующие
                      требования:
                      <ul className="content-list--type">
                        <li>
                          соблюдать условие герметичности тары. Пробки бочек
                          плотно затягивать , чтобы предотвратить течь или
                          деформацию бочки;
                        </li>
                        <li>
                          следить, чтобы во время перевозки в бочке оставлялось
                          достаточное пространство с учётом коэффициента
                          расширения жидкости;
                        </li>
                        <li>
                          бочки с отработкой следует ставить так, чтоб они не
                          испытывали никакого механического воздействия
                          (исключить возможность падения, деформации), плотно
                          друг – другу;
                        </li>
                        <li>
                          промасленную ветошь, опилки и песок укладывать так,
                          чтоб избежать возможность выпадения из кузова машины
                          при перевозке.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          possimus distinctio, ut eveniet adipisci, accusamus aliquid dicta id
          impedit et rerum dolores. Nihil porro beatae dignissimos tempore
          repellendus, magnam saepe. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minus possimus distinctio, ut eveniet adipisci,
          accusamus aliquid dicta id impedit et rerum dolores. Nihil porro
          beatae dignissimos tempore repellendus, magnam saepe. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Minus possimus
          distinctio, ut eveniet adipisci, accusamus aliquid dicta id impedit et
          rerum dolores. Nihil porro beatae dignissimos tempore repellendus,
          magnam saepe.
        </p>
      </Modal>
    </main>
  );
};

export { Rulespage };
