import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from "../src/components/mainComponents/Nav"
import Footer from "../src/components/mainComponents/Footer"

export default function Layout() {
  return (
    <>
      <Nav/>
      <Outlet></Outlet>
      <Footer/>
    </>
  )
}
