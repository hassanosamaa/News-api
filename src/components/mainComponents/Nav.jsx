import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import logo from "../../assets/images/logo.png"
export default function Nav() {

  let {type}=useParams('health')
  return (
    

    <>
    
    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <h1>
        <NavLink className="navbar-brand" to={`${type}`} >
            <img src={logo} alt="" />
        </NavLink>
    </h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
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
          <NavLink to={'general'} className="nav-link " aria-current="page" href="#">general</NavLink>
        </li>
        
       
       
      </ul>
      
      
    </div>
  </div>
</nav>
    </>
  )
  }

