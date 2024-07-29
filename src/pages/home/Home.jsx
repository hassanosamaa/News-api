import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom';
import axios from "axios";
import Cardhome from '../../components/utilitesComponents/Cardhome'
import Cardsliderhome from '../../components/utilitesComponents/Cardsliderhome'
import Slider from "react-slick"
import save from "../../assets/images/save.svg"
import iconLive from "../../assets/images/icon-live.svg"
import tabs from "../../assets/images/tabs.svg"
import download from "../../assets/images/download.svg"
import star from "../../assets/images/star.svg"
import emptyHeartSmall from "../../assets/images/emptyHeartSmall.svg"
import personLive from "../../assets/images/personLive.jpg"


export default function Home() {


  // {dataHeader[2]?.author.split(" ").length>3 ? dataHeader[2]?.author.split(" ").slice(0,2).join(" "):dataHeader[2]?.author}
  var settings={
     dots:true,
     infinite:true,
     speed:500,
     slidesToShow:2,
     slidesToScroll:1,
    // autoplay:true,
   

    }

    let {type}=useParams()

    let [btn,setBtn]=useState('view more')

    let [data,setData]=useState([])
    let [dataHeader,setDataHeader]=useState([])
    let [pick,setPick]=useState([])

   
    async function getData(type){
      if(!type){type='health'}
      let{data}=await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${type}/us.json`)

      // if

      setData(data.articles.slice(-5,-1))
      setDataHeader(data.articles)
      setPick(data.articles.slice(5,9))
      



      

    }
   
    function more(){
    
      if(btn=='view more'){
        setBtn("view less")
        setData(dataHeader)
      }
      else if(btn=='view less'){
        setBtn("view more")
        setData(dataHeader.slice(0,4))
      }
      

    }
    function Latest(){
      let dataHeaderLenght=dataHeader.length;
      setData(dataHeader.slice(dataHeaderLenght-4,dataHeaderLenght))
    }

    useEffect(()=>{
      getData(type)
      document.title =type?type:"News";

      


    },[type])

  return (
    <> 

    <header>
      <div className="container">
        <div className="row row-header align-items-center">
          <div className="col-7">
            <div className="image">
              <img src={dataHeader[1]?.urlToImage} alt="" />
            </div>
          </div>
          <div className="col-5">
            <div className="header-content">
              <div className='trending'>
                <span>Trending</span>
                <div className='icons'>

                  <img src={emptyHeartSmall} alt="" />
                  <img src={download} alt="" />
                  <img src={save} alt="" />

                </div>

              </div>

              <h1>{dataHeader[12]?.title}</h1>
              <p>{dataHeader[12]?.description}</p>
              <div className="info"> 
                <span>2 hours ago</span>
                <span className='author'>By {dataHeader[2]?.author ? dataHeader[2]?.author.split("").slice(0,5).join(""): 'there is no author'} | 4min read</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>

     <section className='news'>
        <div className="container">
          <div className="mini-news">
            <div className="row row-news">
              <div className="col-12">
                  <div className="breaking-news">
                      <Link className="Link-breaking">Breaking News</Link>
                      <h4>Kanye West says he's running for president in 2020.</h4>
                  </div>
              </div>
              <div className="col-8">
                <div className="tabs">
                    <div className="btns">
                      <NavLink className='btn' to={`/latest/${type}`} onClick={Latest} >Latest Stories</NavLink>
                      <NavLink className='btn' to={'/health'}>Health</NavLink>
                      <NavLink className='btn ' to={'/sports'}>Sports</NavLink>
                    </div>
                    <img src={tabs} alt="" />
                </div>
                <div className="row-left text-center">
                    <div className="row ">
                      {data.map((ele,i)=><Cardhome key={i} dataapi={ele}/>)}
                    </div>
                    <button onClick={more}>{btn}</button>
                </div>

                </div>

                <div className="col-4">
                    <div className="live">
                      <div className="live-icon">
                        <span>Live</span>
                        <img src={iconLive} alt="" />
                      </div>
                      <div className="image">
                        <img src={dataHeader[2]?.urlToImage} alt="" />
                      </div>
                      <p>{dataHeader[2]?.title}</p>
                      <span className='location'>Location News</span>
                      <div className="submit">
                        <form>
                          <label htmlFor="email">Get Location specific News</label>
                          
                          <input id="email" type="email" placeholder='Enter Your Location' />
                          <br></br>
                          <button type="submit">SUBMIT</button>
                        </form>
                      </div>
                    </div>
                </div>
            </div>

          </div>
        </div>

     </section>


    <section className='editor'>
      <div className="container">
        <div className="mini-editor">
          <div className="row">
            <div className="col-12">
              <div className="editor-wrap">
                  <h3 className='editor-picks'>Editor’s Picks</h3>
                  <img src={star} alt="" />

              </div>
            </div>
            <Slider {...settings}>

              {pick.map((ele,i)=><Cardsliderhome key={i} datag={ele} />)}
            </Slider>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
