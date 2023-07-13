import MyPhoto from '../../../images/mem.jpg'
function Student() {
    return (
      <section
        id="student"
        className="student">
        <h2 className="section__title"> Студент </h2>
        <div className="student__cutaway">
          <img
            className="student__photo"
            alt="Биктеева Мадина на очередном квизе"
            src={MyPhoto}/>
          <div className="student__card">
            <h3 className="student__title">
              Мадина Биктеева
            </h3>
            <p className="student__subtitle">
              Фронтенд-разработчик, 25 лет
            </p>
            <p className="student__info">
              Живу в Уфе. Получаю высшее образование в БГПУ, учитель истории. Люблю&nbsp;участвовать в различных квизах с лучшей командой "Леген...подожди,подожди...дарно!".
              В 2021 году записалась на&nbsp;курс&nbsp;по&nbsp;вёрстке&nbsp;сайтов и мне понравилось. В будущем хочу связать&nbsp;жизнь&nbsp;с&nbsp;фронтенд разработкой.
            </p>
            <a
              href='https://github.com/BikteevaMadina'
              target='_blank'
              rel="noopener noreferrer"
              className="student__link">
              Github
            </a>
          </div>
        </div>
      </section>
    )
  }
  
  export default Student;