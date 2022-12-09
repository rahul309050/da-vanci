import React from "react";
import { useState } from "react";
import classes from "../styles/components/nav.module.scss";
import Link from "next/link";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={classes.nav}>
      <div className={classes.navcontainer}>
        <div className={classes.navbar}>
          <div
            className={classes.menu_toggle}
            onClick={() => setNavOpen(!navOpen)}
          >
            <img src="/../images/humburger.svg" alt="" />
          </div>
        </div>

        <div
          className={classes.nav_overlay}
          style={{
            top: navOpen ? "120px" : "-100%",
            // transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className={` container ${classes.nav_links}  `}>
            <li className={classes.nav_item}>
              <div
              className={classes.title}
                onClick={() => setNavOpen(navOpen)}
                style={{
                  top: navOpen ? "-300px" : "270px",
                  transitionDelay: navOpen ? "0.3s" : "0s",

                  opacity: navOpen ? "1" : "0",
                }}
              >
                kurage
                <div className={classes.content}  >
                  <a href="/" >HOME</a>
                  <a>ABOUT</a>
                  <a>JOURNAL</a>
                  <a>CONTACT</a>
                </div>
              </div>
            </li>
            <li className={classes.nav_item}>
            <div
              className={classes.title}
                onClick={() => setNavOpen(navOpen)}
                style={{
                  top: navOpen ? "-300px" : "270px",
                  transitionDelay: navOpen ? "0.45s" : "0s",
                  opacity: navOpen ? "1" : "0",
                }}
              >
                SHOP
                <div className={classes.content}>
                  <a>ALL</a>
                  <a>LOOKBOOK</a>
                  <a>COLLECTIONS</a>
                  <a>FEATURED</a>
                </div>
              </div>
            </li>
 
            <li className={classes.nav_item}>
            <div
              className={classes.title}
                onClick={() => setNavOpen(navOpen)}
                style={{
                  top: navOpen ? "-300px" : "270px",
                  transitionDelay: navOpen ? "0.55s" : "0s",
                  opacity: navOpen ? "1" : "0",
                }}
              >
                COLLECTIONS
                <div className={classes.content}>
                  <a>DECORS</a>
                  <a>FURNITURES</a>
                  <a>CERAMIC</a>
                  <a>LAMPS</a>
                </div>
              </div>
            </li>
          </ul>
        
      <div className={classes.right}>
        <img src="./images/navImage.jpg" alt=""        onClick={() => setNavOpen(navOpen)}
                style={{
                  scale: navOpen ? "1" : "2",
                  // transitionDelay: navOpen ? "0.3s" : "0s",

                  // opacity: navOpen ? "1" : "0",
                }}/>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
