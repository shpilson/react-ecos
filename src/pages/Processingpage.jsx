import "./Morepage.scss";

const Processingpage = () => {
  return (
    <main className="main">
      <section className="pages__section">
        <div className="pages__background processing__background"></div>
        <div className="container">
          <article className="pages__article">
            <div className="title-top d-fl">
              <span>Дата публикации: 01/06/2017</span>
              <span>5 000+ заявок</span>
            </div>
            <h1>
              Что мы делаем с <span>отработанным</span> маслом?
            </h1>
            <p className="content-top">
              Перейдем сразу же к сути. Отработка – масло, потерявшее
              первоначальную вязкость, смешанное с мех. примесями. Любое
              отработанное масло необходимо утилизировать. Вопрос о важности
              правильной утилизации достоин особого внимания. После того как Вы
              приняли правильное решение обратиться в специализированный пункт,
              возникает вопрос ‘’Куда лучше сдать отработку? Тюмень – город
              большой, а качественных сервисов мало’’.
              <br />
              <br />
              Смело заявляем ‘’Экология Сервис’ – Ваш надежный гарант качества.
              <br />
              <br /> 7 лет компания придерживается особого порядка утилизации,
              оперируя оборудованием по последнему слову техники:
              <br />
              <br />
              - К вам приезжают обученные профессионалы, дают оценку
              отработанному маслу. Это важный момент, поскольку стоимость
              отработанного моторного масла зависит от степени обводненности
              масла и количества посторонних примесей. Для того, чтобы получить
              наибольшую цену за масло, мы рекомендуем не сливать и не
              выкидывать в емкость для накопления ничего, кроме самого
              отработанного масла.
              <br />
              <br />
              - Далее, бригада выкачивает отработку из Ваших резервуаров в
              специализированную емкость для последующей транспортировки
              <br />
              <br />
              -Затем масло перевозится до полигона, где в дальнейшем
              утилизируется
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

              <h3>
                "Экология Сервис" – гарант безопасной утилизации отработанных
                масел
              </h3>
              <a className="btn pages__btn" href="/">
                Заказать
              </a>
              <a className="pages__email" href="/">
                ecos172@yandex.ru
              </a>
            </div>
            <p className="content-bottom">
              Если Вы читаете эти строки – Вы уже без сомнений наш любимый
              клиент. Давайте начнем наше сотрудничество прямо сейчас.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export { Processingpage };
