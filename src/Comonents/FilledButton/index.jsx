import style from "./index.module.css";
import {useState} from "react";
import loadingLoop from '@iconify/icons-line-md/loading-loop';
import {Icon} from '@iconify/react';

const FilledButton = () => {
    const [isLoading] = useState(false);

    return (
        <div>
            <button type="submit" className={style.btn}>
                {isLoading ? (
                    <Icon width={24} height={24} icon = {loadingLoop}/>
                ) : (
                    'Sign Up'
                )}
            </button>
        </div>
    )
}

export default FilledButton;
