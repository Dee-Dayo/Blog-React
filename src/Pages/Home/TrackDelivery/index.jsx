import style from "./index.module.css"
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const TrackDelivery = () =>{

    const handleTracking = async (values, {resetForm}) => {

        try {
            const response = await axios.get(`http://localhost:8080/api/DeeLogistics/${values.orderId}`);
            console.log(response);

            if (response.data.success) {
                toast.success("Chill, i'm working on it",{
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                resetForm();
            }
        } catch (error) {
            toast.error(error.response.data.logisticsSystemResponse, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    return (
        <>
            <Formik initialValues={{orderId: ''}}
                    onSubmit={handleTracking}
            >
                {({handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                        <div className={style.trackDelivery}>
                            <p className={style.track}>Track Delivery</p>
                            <label>
                                <Field
                                    name="orderId"
                                    placeholder="Delivery order number"
                                    className="input"
                                />
                                <button type="submit" className={style.btn}>Search</button>
                            </label>
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastContainer/>

            <div className={style.size}>
                <p className={style.p}>Any Size With Affordable Prize</p>
                <p style={{color: "#4d4d4d"}}>At <span style={{fontWeight: "bolder"}}> DEE LOGISTICS, </span>customer
                    satisfaction
                    is our top priority. That's why we go above
                    and beyond to exceed your expectations and deliver results that you can count on.
                    With our commitment to excellence and dedication to service, you can rest assured that your
                    deliveries are in good hands with Dee Logistics.</p>
            </div>
        </>
    )
}
export default TrackDelivery;