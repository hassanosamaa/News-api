import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import heartEmpty from "../../assets/images/emptyHeart.svg";
import heart from "../../assets/images/heart.svg";
import download from "../../assets/images/download.svg";
import save from "../../assets/images/save.svg";
import news from "../../assets/images/news.jpg";

export default function Cardrelatedslider(props) {
  let {type}=useParams()
  let[icon,setIcon]=useState(true)

    function change(){
      setIcon(!icon)
    }
    let {title,urlToImage,description}=props.x;

  return (
    <>
      <div className="col-12">
        <div className="card-related">
          <div className="image">
            <Link to={`/${type}/${title}`}>
                <img src={urlToImage ? urlToImage:news}
           alt={title}
          onError={(i)=>{i.target.src=news}}
                  />
            </Link>
          </div>
          <div className="dec">
              <h3>{title}</h3>
              <p className='d-block d-lg-none'>{description}</p>
              <div className="reacts">
                <div>
                  <img  onClick={change} src={icon ? heartEmpty : heart} alt="icon" />
                  <span>28</span>
                </div>
                <div>
                  <img src={download} alt="icon" />
                  <span>72</span>
                </div>
                <img src={save} alt="icon" />
          </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
