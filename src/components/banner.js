import React from "react"
import { Link } from "gatsby"
import hStyle from "./header.module.scss"
import { Menu } from "glamorous"
const Banner = () => {

  return (
    <> <br/>
      <div className={hStyle.names}>
        <div className={hStyle.names2}> Holly and Nicolas </div>
      <nav className={hStyle.banner}>
          <div> <nav >
        <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/"
        >
          Home   &nbsp; | &nbsp; 
        </Link>
        <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/ourstory"
        >
          Our Story   &nbsp; | &nbsp; 
        </Link>
        <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/details"
        >
          Details &nbsp;| &nbsp;
        </Link>

        <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/travel"
        >
          Accomodations &nbsp;| &nbsp;
        </Link>

        <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/registry"
        >
          Registry &nbsp;| &nbsp;
        </Link>

        <Link
          className={hStyle.navItem}
          activeClassName={hStyle.activeNavItem}
          to="/contact"
        >
          RSVP
        </Link>
      </nav>
       </div>
      </nav>
      </div>
      </>
  )
}

export default Banner