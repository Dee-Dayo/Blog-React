import deeLogo from "../../assets/deeLogo.png"
import insta from "../../assets/insta.png"
import web from "../../assets/web.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import send from "../../assets/send.png"
import style from "./index.module.css"

const Footer = () => {
    return (
        <>
            <div className={style.footer}>
                <div>
                    <div>
                        <img src={deeLogo} alt="logo"/>
                        <h3>Dee Logistics</h3>
                    </div>
                    <p>Copyright © 2024 Dee Logistics <span style={{display: "block"}}>All rights reserved</span></p>
                    <div>
                        <img src={insta} alt="icon"/>
                        <img src={web} alt="icon"/>
                        <img src={twitter} alt="icon"/>
                        <img src={youtube} alt="icon"/>
                    </div>
                </div>

                <div className={style.footerSider}>
                    <div>
                        <h4>Company</h4>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                    <div>
                        <h4>Support</h4>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div>
                        <h4>Stay up to date</h4>
                        <label>
                            <input placeholder="Your email address" className={style.input}/>
                            <img src={send} className={style.image} alt="send icon"/>
                        </label>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer;