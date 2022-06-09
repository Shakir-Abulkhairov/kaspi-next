import cn from 'classnames';
import style from './Accordion.module.css'
function AccordionList({ ques, handleToggle, toggle }) {
  return (

    ques.map((value) => {
      const { id, question, answer } = value;
      return (
        <div className="card" key={id}>
          <div className={cn("card-header", style.accordion__block)} onClick={() => handleToggle(id)} style={{ cursor: "pointer" }}>
            <b>{question} </b>
            <span className={style.accordion__icon}> {(id === toggle) ? '✖️' : '➕'}</span>
          </div>
          {(id === toggle) ? <div className="card-body">{answer}</div> : ''}

        </div>

      )
    })
  )
}
export default AccordionList;