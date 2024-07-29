import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import heart from "../../assets/images/heart.svg";
import download from "../../assets/images/download.svg";
import save from "../../assets/images/save.svg";
import news from "../../assets/images/news.jpg";

export default function Cardhome(props) {
 
 const {title,urlToImage,description}=props.dataapi;
 let{type}=useParams(null)

  

  return (
    <>
    <div className="col-6">
      <div className="card text-start">
       <Link to={!type?`/health/${title}`:title}>
          <img src={urlToImage ? urlToImage:news}
           alt={title}
          onError={(i)=>{i.target.src=news}} />
       </Link>
       <div className='container-card'>
          <h2>{title}</h2>
          <p>{description}</p>
         
          <div className="info">
            <span>2 hours ago</span>
            <span className='author'>By {props.dataapi.author ? props.dataapi.author.split("").slice(0,5).join(""): 'there is no author'} | 4min read</span>
          </div>

          <div className="reacts">
            <div>
              <img src={heart} alt="" />
              <span>28</span>
            </div>
            <div>
              <img src={download} alt="" />
              <span>72</span>
            </div>
            <img src={save} alt="" />
          </div>

       </div>
       
      </div>
    </div>
     
    </>
  )
}
