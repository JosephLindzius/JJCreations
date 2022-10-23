import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

export default function Layout(): JSX.Element {
    return(
      <>
        <Navigation/>
        <Outlet />
      </>
    )

}