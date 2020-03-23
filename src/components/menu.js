import React from "react"
import { Link } from "gatsby"
import hStyle from "./header.module.scss"
import { Menu } from "glamorous"
const NavMenu = () => {

  return (
      
      <nav className={hStyle.nav}>
        <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/"
        >
          Home
        </Link>

        <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/schedules"
        >
          Schedule
        </Link>

        <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/travel"
        >
          Travel & Accomodations
        </Link>

        <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/venue"
        >
          Venue
        </Link>

        <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/contact"
        >
          Contact
        </Link>
      </nav>

  )
}

export default NavMenu
