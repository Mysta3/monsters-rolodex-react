import Card from '../card/card.component';

import { Monster } from '../../App';

import './cardList.styles.css';

type CardListProps = {
  monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => (
  <div className='card-list'>
    {monsters.map((monster) =>  {
      return <Card key={monster.id} monster={monster} />
    })};
    </div>
);


export default CardList;