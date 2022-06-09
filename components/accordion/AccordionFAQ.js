import { useState } from 'react';
import AccordionList from "./AccordionList";
function AccordionFAQ({ ques }) {

  const [toggle, setToggle] = useState(null);
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false
    }
    setToggle(id)

  }
  return (
    <div className="container">
      <div className='mt-5' >
        <div>
          <AccordionList ques={ques} handleToggle={handleToggle} toggle={toggle} />
        </div>
      </div>
    </div>


  )

}

export default AccordionFAQ;