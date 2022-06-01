
function AccordionFAQ({ ques }) {
  // const { question, answer, id } = ques;


  return (
    <>
      <div className="accordion" id="accordionPanelsStayOpenExample" >
        {ques.map((question) => {
          return (
            <div className="accordion-item" key={question.id}>
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  {question.question}
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  {question.answer}
                </div>
              </div>
            </div>
          )
        })
        }
      </div >
    </>
  )



}

export default AccordionFAQ;