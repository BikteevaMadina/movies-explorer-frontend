
function Project() {
  return (
    <section
      id="project"
      className="project">
      <h2 className="section__project_title">О проекте</h2>
      <ul className="project__list">
        <li>
          <h3 className="project__title">
            Дипломный проект включал&nbsp;5 этапов
          </h3>
          <p className="project__info">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
          </p>
        </li>
        <li>
          <h3 className="project__title">
            На&nbsp;выполнение диплома ушло&nbsp;5 недель
          </h3>
          <p className="project__info">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать,&nbsp;чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="project__steps">
        <p className="project__time project__time_accent">
          1 неделя
        </p>
        <p className="project__time">
          4 недели
        </p>
        <p className="project__time_management">Back-end</p>
        <p className="project__time_management">Front-end</p>
      </div>
    </section>
  )
}

export default Project;