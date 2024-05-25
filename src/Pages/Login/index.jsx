import PageTemplate from "../../Comonents/PageTemplate";
import image from "../../../src/assets/login.png";

const Login = () => {
    return(
        <>
            <PageTemplate image={image} headerName={"Welcome Back!"}
                          message={"Log in to your DashBoard"} buttonMessage={"Login"}
                          holder1={"Phone Number:"} holder2={"Password:"}/>
        </>
    )
}
export default Login;