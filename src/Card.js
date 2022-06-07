import React from 'react'
import './css/Card.css'

function Card({ name, email, id }) {
    return (
        <div className='card'>
            <img alt='robotpic' src={`https://robohash.org/${id}`} />
            <div className='text'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;