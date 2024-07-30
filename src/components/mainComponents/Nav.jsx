import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
import user from '../../assets/images/user.svg'
import search from '../../assets/images/search.svg'
import bar from '../../assets/images/bar.svg'
import arrow from '../../assets/images/arrow.svg'
export default function Nav() {

  let {type}=useParams('health')
  return (
    

    <>
    
    <nav className="navbar navbar-expand-xl">
  <div className="container ">
    <h1 className='m-0 navbar-brand-logo'>
        <NavLink className="navbar-brand m-0 p-0" to={`${type}`} >
            <img src={logo} alt="logo" />
        </NavLink>
    </h1>


    <div className='bar-icons d-xl-none '>
        <div className="icons-nav">
          <img src={user} alt="" />
          <img src={search} alt="" />
          <img src={bar} alt="" className='d-none d-xl-block' />
        </div>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src={bar} alt="" />
        </button>
    </div>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto ">
        <li className="nav-item">
          <NavLink  to={'health'} className="nav-link " aria-current="page" href="#">health</NavLink>
        </li>
       
        <li className="nav-item">
            
          <NavLink to={'science'} className="nav-link " aria-current="page" href="#">science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'business'} className="nav-link " aria-current="page" href="#">Business</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to={'sports'} className="nav-link " aria-current="page" href="#">Sports</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to={'technology'} className="nav-link " aria-current="page" href="#">technology</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to={'entertainment'} className="nav-link " aria-current="page" href="#">entertainment</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to={'general'} className="nav-link " aria-current="page" href="#">general
            <img className='arrows' src={arrow} alt="arrows" />
          </NavLink>
        </li>
        
       
       
      </ul>
      
      
    </div>

    <div className='bar-icons d-none d-xl-block  '>
        <div className="icons-nav">
          <Link><img src={user} alt="icon" /></Link>
          <Link><img src={search} alt="icon" /></Link>
          <Link><img src={bar} alt="icon" className='d-none d-xl-block' /></Link>
          
       
        </div>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            
            <Link><img src={bar} alt="bar-icon" /></Link>
        </button>
    </div>

    
  </div>
</nav>
    </>
  )
  }

