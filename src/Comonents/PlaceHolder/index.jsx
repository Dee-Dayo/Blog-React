import style from "./index.module.css";
import React from "react";

const PlaceHolder = ({text, name, values, handleChange, handleBlur, errors, touched}) =>{
    return(
        <div>
            <input
                type="text"
                className={style.holder}
                placeholder={text}
                name ={name}
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {/*{errors.fullName && touched.fullName &&*/}
            {/*                            <div className={style.error}>{errors.fullName}</div>}*/}
        </div>
    )
}
export default PlaceHolder;