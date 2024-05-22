import style from "./index.module.css";

const PlaceHolder = ({text}) =>{
    return(
        <div>
            <input className={style.holder} placeholder={text}/>
        </div>
    )
}
export default PlaceHolder;