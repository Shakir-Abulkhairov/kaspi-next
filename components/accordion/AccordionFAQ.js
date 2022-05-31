import { Accordion } from 'react-bootstrap'

function AccordionFAQ({ ques }) {
  // const { question, answer, id } = ques;


  return (
    <>
      <Accordion alwaysOpen >
        {ques.map((question) => {
          console.log(question)
          return (
            <Accordion.Item eventKey={[`${question.id}`]}>
              <Accordion.Header>{question.question}</Accordion.Header>
              <Accordion.Body>
                {question.answer}
              </Accordion.Body>
            </Accordion.Item>
          )
        })
        }
      </Accordion >
    </>
  )



}

export default AccordionFAQ;