import React from 'react';
import Card from './Card';

function List(prop) {
  return (
      <div>
      <header className='List-header'>
          <h2>{prop.header}</h2>
      </header>
      <div className='Cards-list'>
          {prop.cards.map((card) =>
            <Card
                key={card.id}
                title={card.title}
                content={card.content}
            />
            )};
      </div>
      </div>
  );
}

export default List;
