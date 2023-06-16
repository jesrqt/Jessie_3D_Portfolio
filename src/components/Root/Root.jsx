import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../NavBar/NavBar'
import { Footer } from '../Footer/Footer'
import { Fragment } from 'react'

export const Root = () => {
  return (
    <Fragment>
        <NavBar />
        <Outlet />
        <Footer />
    </Fragment>
  )
}
