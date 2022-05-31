import {Container} from 'react-bootstrap';
import style from '../../styles/KaspiPay/KaspiPay.module.css';
import {KaspiTerminal,KaspiPartner} from './';


function KaspiPay() {
  return (
      <>
          <div className={style.wrapper}>
              <Container>
                  <KaspiTerminal/>
                  <KaspiPartner/>
            </Container>
            </div>
        </>
  )
}

export default KaspiPay