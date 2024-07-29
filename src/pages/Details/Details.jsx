import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Cardrelatedslider from'../../components/utilitesComponents/Cardrelatedslider'
import Cardrelatedaside from'../../components/utilitesComponents/Cardrelatedaside'
import Slider from 'react-slick';
import download from "../../assets/images/download.svg";
import dots from "../../assets/images/dots.svg";
import save from "../../assets/images/save.svg";
import emptyHeart from "../../assets/images/emptyHeart.svg";
import massage from "../../assets/images/massage.svg";
import x from "../../assets/images/x.svg";
import email from "../../assets/images/email.svg";
import author from "../../assets/images/author.png";
import news from "../../assets/images/news.jpg";
export default function Details() {


  var settings={
     dots:false,
     infinite:true,
     speed:500,
     slidesToShow:5,
     slidesToScroll:1,
   

    }
    let {type,title}=useParams()
    let [dataapi,setData]=useState([])
    let [dataRelated,setDataRelated]=useState([])

   async function getData(type,title){
        let {data}=await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${type}/us.json`);
        let card=data.articles.filter((ele)=>ele.title==title);
        let cardRelaed=data.articles.filter((ele)=> ele.title !== title);
        setData(card);
        setDataRelated(cardRelaed);

        
       
    }
    useEffect(()=>{
        getData(type,title)
    },[title])
  return (
    <>


      <section className="details">
        <div className="title">
          <div className="container">
            <div className="row  justify-content-center">
              <div className="col-8">
                  <h1>{dataapi[0]?.title}</h1>
              </div>
            </div>
          </div>
        </div>

        <article>
          <div className="container">
            <div className="row   align-items-center">
              <div className="col-1  ">
                  <div className="side-left">
                     <span>
                          See more like this?
                     </span>
                  </div>
              </div>
              <div className="col-10  ">
                <div className="content-main">

                  <div className="imag">
                    <img src={dataapi[0]?.urlToImage?dataapi[0]?.urlToImage:news}
                    onError={(i)=>{i.target.src=news}} alt="" />
                 
                  </div>

                  <div className="body-content">
                    <div className="row row--content ">
                      <div className="col-9">
                          <div className="content text-start">
                              <div className="info">
                                  <span>12 hours ago</span>
                                  <span className='author'>By {dataapi[0]?.author}  | 4min read</span>
                              </div>
                              <p>{dataapi[0]?.description}</p>
                              <p>ll of you must be reading newspapers. Why is it called a newspaper ?
Because it contains news. Have you ever thought about how we get news?
There are various sources of news . You can hear it on the radio, view it on a
television channel, read it in a newspaper or surf it on internet in a computer.
News is something that you come across everyday in your life.
What makes news? John Bogart has given this comment that became
synonymous with news . When a dog bites a man, that is not news, because
it happens so often. But if a man bites a dog, that is news. Though this may
seem true, sometimes, when a dog bites a man that can also become news.
                                  Suppose a dog bites a famous filmstar, it definitely makes big news.</p>

                              <div className="spail-para">
                                   {dataapi[0]?.title}
                              </div>

                              <p>ll of you must be reading newspapers. Why is it called a newspaper ?
                                    Because it contains news. Have you ever thought about how we get news?
                                    There are various sources of news . You can hear it on the radio, view it on a
                                    television channel, read it in a newspaper or surf it on internet in a computer.
                                    News is something that you come across everyday in your life.
                                    What makes news? John Bogart has given this comment that became
                                    synonymous with news . When a dog bites a man, that is not news, because
                                    it happens so often. But if a man bites a dog, that is news. Though this may
                                    seem true, sometimes, when a dog bites a man that can also become news.
                                  Suppose a dog bites a famous filmstar, it definitely makes big news.</p>
                             
                              <div className="sign">
                                  <div className="card-top">
                                    <h3>Sign up for The NBC News Newsletter</h3>
                                    <h4>By Caroline Casey</h4>
                                    <p>A weekly, ad-free newsletter that helps 786,000+ readers stay in the know, be productive, and think more critically about the world. <span>
                                      <Link className='Link'>Take a look</Link>
                                      </span></p>
                                    <button>
                                      <img src={email} alt="" />
                                      Get this Newsletter
                                    </button>
                                  </div>
                                  <div className="card-bottom">
                                    <div className="news">
                                      <button>NBCBLK</button>
                                      <button>Trending</button>
                                      <button>Lewis</button>
                                      <button>Freebie</button>
                                    </div>
                                    <div className="react">
                                      <div className="left-part">
                                          <div>
                                              <img src={emptyHeart} alt="" />
                                              <span>28</span>
                                            </div>
                                            <div>
                                              <img src={massage} alt="" />
                                              <span>21 responses</span>
                                            </div>
                                      </div>

                                      <div className="right-part">
                                          <div>
                                              <img src={download} alt="" />
                                              <span>72</span>
                                            </div>
                                            <div>
                                              <img src={save} alt="" />
                                            </div>
                                            <div>
                                              <img src={dots} alt="" />
                                            </div>

                                      </div>
                                    </div>


                                    <div className="author-card">
                                        <div className="left-part">
                                          <div className="image">
                                            <img src={author} alt="" />
                                          </div>
                                          <div className="content-dec">
                                            <h3>Author</h3>
                                            <h2>Caroline Casey</h2>
                                            <p>Caroline Casey is an award-winning social activist and founder of <span>The Valuable 500,</span> a global movement aimed at getting 500 companies to commit to disability inclusion. </p>
                                          </div>
                                        </div>
                                        <div className="right-part">
                                          <button>
                                            <img src={x} alt="" />
                                            <span>Follow</span>
                                          </button>
                                        </div>
                                    </div>
                                    
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-3 ">
                          <h3 className='recommended'>Recommended for you</h3>
                        <div className="row row--recom">
                          {dataRelated.slice(10,12).map((ele)=><Cardrelatedaside key={ele.title} x={ele}/>)}
                        </div>
                      </div>
                    
                    </div>

                  </div>

                </div>
              </div>
              
            </div>
          </div>
        </article>

       
      </section>


      <section className="related-slider">
        <div className="container">
          <div className="row">
          <Slider {...settings}>

                   {dataRelated.map((ele)=><Cardrelatedslider key={ele.title} x={ele}/>)}
          </Slider>
          </div>
        </div>
      </section>

        <div>
        </div>
        
    </>
  )
}