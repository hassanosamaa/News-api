import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import heart from "../../assets/images/heart.svg";
import heartEmpty from "../../assets/images/emptyHeartSmall.svg";
import download from "../../assets/images/download.svg";
import saveEmpty from "../../assets/images/save.svg";
import saveFill from "../../assets/images/saveFill.svg";
import news from "../../assets/images/news.jpg";

export default function Cardhome(props) {
 
 const {title,urlToImage,description}=props.dataapi;
 let{type}=useParams(null)
 let[iconHeart,setIconHeart]=useState(true)

  function changeHeart(){
    setIconHeart(!iconHeart)
  }

  let[iconSave,setIconSave]=useState(true)

  function changeSave(){
    setIconSave(!iconSave)
  }

  return (
    <>
    <div className="col-md-6">
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


       </div>
          <div className="reacts">
            <div>
              <img onClick={changeHeart} src={iconHeart ? heartEmpty : heart} alt="icon" />
              <span>28</span>
            </div>
            <div>
              <img src={download}  alt="icon" />
              <span>72</span>
            </div>
            <img  onClick={changeSave} src={iconSave ? saveEmpty : saveFill} alt="icon" />
          </div>
       
      </div>
    </div>
     
    </>
  )
}
