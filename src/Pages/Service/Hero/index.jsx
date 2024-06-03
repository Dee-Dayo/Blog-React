import style from "./index.module.css"
import man from "../../../assets/man.png"
import React from "react";
import FilledButton from "../../../Comonents/FilledButton";

const Hero = () =>{
    return (
        <div className={style.heroSection}>
            <div>
                <h1>Welcome to <span style={{color: "#5cb30b", display: "block"}}>Dee Logistics</span></h1>
                <p style={{margin: "20px 0px"}}>At Dee Logistics, we understand that in today's fast-paced world, efficient logistics
                    solutions are crucial for the success of any business. With our comprehensive range
                    of logistics services, we offer tailored solutions to meet your unique transportation
                    and supply chain needs.</p>
                <FilledButton name={"Register"}/>
            </div>
            <img src={man} alt="service image" style={{maxWidth: "50%"}}/>
        </div>
    )
}
export default Hero;