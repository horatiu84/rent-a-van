import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
        <h2>This is the Layout page</h2>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout