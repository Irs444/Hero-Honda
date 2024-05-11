import React from 'react'
import MainNavbar from './navbar'

const layout = ({children}) => {
  return (
    <div>
        <MainNavbar/>
        {children}
    </div>
  )
}

export default layout