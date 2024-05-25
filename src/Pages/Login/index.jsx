import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Field, Form, Formik } from 'formik';
import { Icon } from '@iconify/react';
import loadingLoop from '@iconify/icons-line-md/loading-loop';
import 'react-toastify/dist/ReactToastify.css';
import PageTemplate from '../../Comonents/PageTemplate';
import image from '../../../src/assets/login.png';
import style from '../../Comonents/PageTemplate/index.module.css';
import forgot from '../../../src/assets/forget.png'
import React, {useState} from "react";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);


    const validationSchema = Yup.object().shape({
        phoneNumber: Yup.string()
            .matches(/^[0-9]{11}$/, 'Phone number must be 11 digits')
            .required('Phone number is required'),
        password: Yup.string()
            .length(4, 'Password must be exactly 4 characters long')
            .required('Password is required')
    });

    const handleLogin = async (values, { resetForm }) => {
        setIsLoading(true);
        try {
            const payload = {
                phoneNumber: values.phoneNumber,
                password: values.password,
            };
            const response = await axios.patch("http://localhost:8080/api/DeeLogistics/login-user", payload);
            if (response.data.success) {
                toast.success(`Welcome back!`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                resetForm();
            } else {
                toast.error(response.data.message || 'Login failed. Please try again.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            const errorMessage = error.response.data.logisticsSystemResponse
            toast.error(errorMessage, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <PageTemplate
            image={image}
            title="Welcome Back!"
            description="Log in to your Dashboard"
        >
            <Formik
                initialValues={{phoneNumber: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {({values, errors, touched, handleChange, handleBlur}) => (
                    <Form>
                        <div>
                            <Field
                                className={style.holder}
                                type="text"
                                name="phoneNumber"
                                placeholder="Enter phone number"
                                value={values.phoneNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{borderColor: errors.phoneNumber && touched.phoneNumber ? 'darkred' : 'inherit',}}
                            />
                            {errors.phoneNumber && touched.phoneNumber &&
                                <div className={style.error}>{errors.phoneNumber}</div>}
                        </div>

                        <div>
                            <Field
                                className={style.holder}
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{borderColor: errors.password && touched.password ? 'darkred' : 'inherit',}}
                            />
                            {errors.password && touched.password &&
                                <div className={style.error}>{errors.password}</div>}
                        </div>

                        <div className={style.loginAboveButton}>
                            <label className={style.remember}>
                                <input type='checkbox' defaultChecked/>
                                Remember me
                            </label>
                            <label className={style.remember}>
                                <img src={forgot} alt="forgot icon"/>
                                Forgot Password
                            </label>
                        </div>

                        <div className={style.button}>
                            <button type="submit" className={style.btn}>
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <Icon width={24} height={24} icon={loadingLoop}/>
                                    </div>
                                ) : (
                                    'Login'
                                )}
                            </button>
                        </div>

                        <div className={style.aboveButton}>
                            <p>Don't have an account?</p>
                            <p><a href="/signup">Sign Up</a></p>
                        </div>

                    </Form>
                )}
            </Formik>
            <ToastContainer/>
        </PageTemplate>
    );
};

export default Login;
