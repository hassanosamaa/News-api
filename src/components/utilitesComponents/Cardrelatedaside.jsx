import React from 'react'
import news from '../../assets/images/news.jpg'
import { Link, useParams } from 'react-router-dom'

export default function Cardrelatedaside(props) {
  let {type}=useParams()
  return (
    <>
      <div className="col-12">
        <div className="card-recommended">
        <Link to={`/${type}/${props.x.title}`}>
          <div className="image">
            <img src={props.x.urlToImage ? props.x.urlToImage :news} 
            onError={(i)=>{i.target.src=news}}
            alt="" />
          </div>
          </Link>
         <div className="para">
            <p>{props.x.title}</p>
         </div>
        </div>
      </div>
    </>
  )
}
