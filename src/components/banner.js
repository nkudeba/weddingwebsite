import React from "react"
import { Link } from "gatsby"
import hStyle from "./header.module.scss"
import { Menu } from "glamorous"
const Banner = () => {

  return (
      
      <nav className={hStyle.banner}>
          <div>
 <b>Note: </b> <br /> We are monitoring the Covid 19 pandemic and hoping everyone stays safe. The date may change accordingly.
       </div>
      </nav>

  )
}

export default Banner