import React from "react"
import { Link } from "gatsby"
import hStyle from "./header.module.scss"
import { Menu } from "glamorous"
import Timer from "./timer"



const NavMenu = () => {

  return (
      
      <nav className={hStyle.nav}>
        <div
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/"
        ><Timer/>
        </div>

        {/* <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/details"
        >
          Wedding Details
        </Link>

        <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/travel"
        >
          Accomodations
        </Link>

        <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/registry"
        >
          Registry
        </Link>

        <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/contact"
        >
          Contact
        </Link> */}
      </nav>

  )
}

export default NavMenu
