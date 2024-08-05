import React from 'react'
import news from '../../assets/images/news.jpg'
import { Link, useParams } from 'react-router-dom'

export default function Cardrelatedaside(props) {
  let {type}=useParams()
  let{title,urlToImage}=props.x
  return (
    <>
      <div className="col-12 col-md-6 col-lg-12">
        <div className="card-recommended">
        <Link to={`/${type}/${title}`}>
          <div className="image">
            <img src={urlToImage ? urlToImage :news} 
            onError={(i)=>{i.target.src=news}}
            alt="news" />
          </div>
          </Link>
         <div className="para">
            <p>{title}</p>
         </div>
        </div>
      </div>
    </>
  )
}
