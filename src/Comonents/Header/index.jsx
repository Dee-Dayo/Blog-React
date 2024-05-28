import style from "./index.module.css";
import logo from "../../assets/deeLogo.png";
import React from "react";

const Header = () => {
    return (
        <div className={style.nav}>
            <div className={style.image}>
                <img src={logo} alt="logo"/>
            </div>

            <div className={style.midSection}>
                <p>Home</p>
                <p>About Us</p>
                {/*<a href="service.html" target="_parent" className="nav-link">*/}
                    <p>Our Service</p>
                {/*</a>*/}
            </div>

            <div className={style.btn}>
                <p className={style.loginBtn}><a href="/login">Login</a></p>
                <p className={style.signupBtn}><a href="/signup">Sign Up</a></p>
            </div>
        </div>
    )
}

export default Header;