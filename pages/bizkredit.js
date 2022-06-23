import AccordionFAQ from '../components/accordion/AccordionFAQ';
import style from '../styles/BizKredit/BizKredit.module.css';
function Bizkredit({ ques }) {
    return (
        <>
            <div className={style.wrapper}>
                <div className='container'>
                    <div className={style.bizBlock}>
                        <img src='https://kaspi.kz/img/biz-kredit-main.svg' className={style.img} />
                        <p className={style.text}>
                            Без залога и документов.
                            Онлайн за 1 минуту
                        </p>
                        <a href="#" className={style.link}>
                            Узнать подробнее
                        </a>
                        <div className='accordion'>
                            <h2 className='title'>Популярные вопросы</h2>
                            <AccordionFAQ ques={ques} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export async function getStaticProps() {
    try {
        const response = await fetch('http://localhost:3000/api/bizkreditApi/bizkreditQues');
        const body = await response.json();

        if (!body) {
            return {
                notFound: true,
            }
        }
        return {
            props: {
                ques: body,

            }
        }
    } catch (e) {
        return {
            props: {
                ques: null,

            }
        }
    }
}
export default Bizkredit