import React from 'react';
import style from './SliderCard.module.scss';

const Card = (props) => (
    <div className={style.card}>
      <div className={style.cardContent}>
        <h2 className={style.cardName}>{ props.title }</h2>
        <p>{ props.content }</p>
      </div>
      <img src={ props.imgUrl } 
        alt={ props.alt || 'Image' } />
    </div>
  );
  
  const CardContainer = (props) => (
    <div className={style.cardsContainer}>
      {
        props.cards.map((card,id) => (
          <Card title={ card.title }
            key={id}
            content={ card.content }
            imgUrl={ card.imgUrl } />
        ))
      }
    </div>
  );
  
  
  

const  App = () => {

  const cardsData = [
      { id: 1, title: 'Магазин', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/200' },
      { id: 2, title: 'Travel', content: 'Bruce Wayne', imgUrl: 'https://unsplash.it/201/200' },
      { id: 3, title: 'Переводы', content: 'Peter Parker', imgUrl: 'https://unsplash.it/200/201' },
      { id: 4, title: 'Акции', content: 'Tony Stark', imgUrl: 'https://unsplash.it/201/201' },
      { id: 5, title: 'Мой Банк', content: 'Reed Richards', imgUrl: 'https://unsplash.it/202/200' },
      { id: 6, title: 'Госуслуги', content: 'Wade Wilson', imgUrl: 'https://unsplash.it/200/199' },
      { id: 7, title: 'Платежи', content: 'Peter Quill', imgUrl: 'https://unsplash.it/199/199' },
      { id: 8, title: 'Гид', content: 'Steven Rogers', imgUrl: 'https://unsplash.it/199/200' },
  ]

  return (
      <div className="container">
          <CardContainer cards={cardsData} />
      </div>
  );

}
export default App;