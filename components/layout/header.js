import classes from "../../styles/components/layout/header.module.scss";
import Link from "next/link";
import Nav from "../../components/nav"

const Header = () => {
  return (
    <>
      <nav className={classes.header}>
        <div className={` container ${classes.header__content} `}>
          <div className={classes.left_nav}>
            <Nav/>
          </div>

          <Link href="/" className={classes.logo}>
            <img src="/../images/kurage.svg" alt="" />
          </Link>
          <div className={classes.right_nav}>
            <p className={classes.request}>Project Request</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
