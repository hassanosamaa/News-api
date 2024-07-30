import React from 'react'
import news from '../../assets/images/news.jpg'
import { Link } from 'react-router-dom'

export default function Cardsliderhome(props) {
  return (
    <div className="col-12">
      <div className='cardSliderHome d-lg-flex '>
        
      <Link to={props.datag.title}>
        <div className="image">
            <img src={props.datag.urlToImage ? props.datag.urlToImage : news }
              onError={(i)=>{i.target.src=news}}
             alt="news" />
        </div>
        </Link>

        <div className="description">
            <h2>{props.datag.title}</h2>
            <p className='d-none d-lg-flex'>{props.datag.description}</p>
        </div>
      </div>

    </div>
  )
}
