import {Container,Accordion} from 'react-bootstrap';
import style from '../styles/BizKredit/BizKredit.module.css';
function Bizkredit() {
  return (
        <>
            <div className={style.wrapper}>
                <Container>
                   <div className={style.bizBlock}>
                        <img src='https://kaspi.kz/img/biz-kredit-main.svg' className={style.img}/>
                            <p className={style.text}>
                            Без залога и документов.
                            Онлайн за 1 минуту
                            </p>
                            <a href="#"className={style.link}>
                                Узнать подробнее
                            </a>
                            <div className={style.faq}>
                            <h2 className='title'>Популярные вопросы</h2>
                                <Accordion defaultActiveKey={['0']} alwaysOpen className={style.accor}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Как получить Бизнес Кредит в Kaspi Pay?</Accordion.Header>
                                        <Accordion.Body>
                                            Подавать заявку на Бизнес Кредит не нужно. Kaspi самостоятельно принимает решение об одобрении кредитной линии на основании соответствия партнера Kaspi.kz основным критериям.

                                            Как только мы откроем кредитную линию, вы сразу увидите доступную сумму в приложении Kaspi Pay.

                                            Индивидуальным предпринимателям

                                            В приложении Kaspi Pay во вкладке «Мой Банк» нажмите «Получить кредит» и выберите сумму в рамках кредитного лимита.

                                            В течение минуты вы узнаете о решении по кредиту. Если оно положительное, то после подписания документов с помощью электронной подписи Kaspi, средства сразу поступят на ваш текущий счет.

                                            Предлагаем посмотреть видео, как получить Бизнес Кредит в Kaspi Pay:

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            Как получить Бизнес Кредит в Kaspi Pay?
                                            Можно ли в Kaspi Pay досрочно погасить Бизнес Кредит?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                             Да. Вы можете досрочно погасить Бизнес Кредит частично или полностью в любое время без штрафов и комиссий.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                        Можно в Kaspi Pay увеличить кредитную линию по Бизнес Кредиту?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                        Размер кредитной линии устанавливается автоматически и зависит от ваших продаж с Kaspi Pay. Если продажи растут, то сумма кредитной линии будет увеличена.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                   </div>
                </Container>
            </div>
        </>
  )
}

export default Bizkredit