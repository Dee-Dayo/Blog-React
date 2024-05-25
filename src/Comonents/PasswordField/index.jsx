import style from "./index.module.css"
import styles from "../PageTemplate/index.module.css"
import {useState} from "react";
import {ErrorMessage, Field} from "formik";
import {Icon} from "@iconify/react";
import eyeIcon from '@iconify/icons-mdi/eye';
import eyeOffIcon from '@iconify/icons-mdi/eye-off';

const PasswordField = ({ name, placeholder, errors, touched }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.holder}>
            <Field
                type={showPassword ? 'text' : 'password'}
                name={name}
                placeholder={placeholder}
                className={style.input}
                style={{ borderColor: errors && touched ? 'darkred' : 'inherit' }}
            />
            <button type="button" onClick={toggleShowPassword} className={style.toggleButton}>
                <Icon icon={showPassword ? eyeOffIcon : eyeIcon} />
            </button>
            <ErrorMessage name={name} component="div" className={style.error} />
        </div>
    );
};

export default PasswordField;