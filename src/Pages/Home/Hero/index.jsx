import image from "../../../assets/homeImage.png";
import style from "./index.module.css";
import React from "react";
import FilledButton from "../../../Comonents/FilledButton";

const Hero = () => {
    return(
        <div className={style.hero}>
            <div className={style.content}>
                <h6 style={{color: "#4d4d4d", display: "block", fontSize: "40px"}}>Swift and Fast<span
                    style={{color: "#5cb30b", display: "block", fontSize: "25px", marginBottom: "50px"}}>Delivery within Lagos</span></h6>
                <p>Do you want to send anything within Lagos? We are readily available to pickup your order and
                    deliver</p>

                <div className={style.btn}>
                    <FilledButton name={"Register"}/>
                </div>
            </div>
            <img src={image} style={{width: "100vw", height: "100vh"}} alt={"hero"}/>
        </div>
    )
}

export default Hero;