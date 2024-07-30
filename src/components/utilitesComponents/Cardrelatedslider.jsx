import React from 'react'
import { Link, useParams } from 'react-router-dom'
import heart from "../../assets/images/heart.svg";
import download from "../../assets/images/download.svg";
import save from "../../assets/images/save.svg";
import news from "../../assets/images/news.jpg";

export default function Cardrelatedslider(props) {
  let {type}=useParams()

  return (
    <>
      <div className="col-12">
        <div className="card-related">
          <div className="image">
            <Link to={`/${type}/${props.x.title}`}>
                <img src={props.x.urlToImage ? props.x.urlToImage:news}
           alt={props.x.title}
          onError={(i)=>{i.target.src=news}}
                  />
            </Link>
          </div>
          <div className="dec">
              <h3>{props.x.title}</h3>
              <p className='d-block d-lg-none'>{props.x.description}</p>
              <div className="reacts">
                <div>
                  <img src={heart} alt="icon" />
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
