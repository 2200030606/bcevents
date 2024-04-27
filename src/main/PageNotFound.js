import React from 'react'
import pagenotfound from './main_images/HTML-404-Error-Page.gif'


export default function PageNotFound() {
  return (
    <div>
        <img src={pagenotfound} style={{height:"100%",width:"100%"}} alt='pagenotfound' ></img>
    </div>
  )
}
