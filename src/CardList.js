import React from 'react'
import Card from './Card'
import './css/CardList.css'


function CardList({ Robots }) {

    const card = Robots.map((robot, i) => <Card key={Robots[i].id} name={Robots[i].name} email={Robots[i].email} id={Robots[i].id}></Card>)
    return (
        <div className='cardlist'>
            {card}
        </div>
    )
}

export default CardList;