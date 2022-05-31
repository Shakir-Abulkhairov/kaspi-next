import cn from 'classnames';
import { Container } from 'react-bootstrap';
import AccordionFAQ from '../components/accordion/AccordionFAQ';
import Image from 'next/image';
import style from '../styles/KaspiGuide.module.css';
function KaspiGuide({ ques }) {
  return (
    <>
      <div className={style.wrapper}>
        <Container>
          <h2 className='title'>Kaspi Гид</h2>
          <div className='subtitle'>расскажем все о наших продуктах и сервисах</div>
          <div className={cn(style.img, 'mt-5')}>
            <img src='https://kaspi.kz/guide/images/kaspigit/guides.png' />
          </div>
          <h2 className='title'>Топ {ques.length} вопросов</h2>
          <div className='subtitle'>по всем продуктам Kaspi</div>
          <div className='accordion'>
            <AccordionFAQ ques={ques} />
          </div>
        </Container>
      </div>
    </>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch('http://localhost:3000/api/kaspi-gid-api/question');
    const body = await response.json();
    if (!body) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        ques: body
      }
    }
  } catch (e) {
    return {
      props: {
        ques: null
      }
    }
  }
}
export default KaspiGuide