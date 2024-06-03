import guarantee from "../../../assets/guarantee.png"
import image from "../../../assets/image2.png"
import style from "./index.module.css"

const Guarantee = () => {
    return (
        <div className={style.section}>
            <div className={style.div}>
                <img src={guarantee} alt="guarantee logo"/>
                <p className={style.p}>Guarantee safe, fast <br/>and convenient</p>
            </div>
            <img className={style.image} src={image} alt="guarant pic"/>
        </div>
    )
}

export default Guarantee;