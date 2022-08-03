import React from "react";
import { useCreateAuthDispatchContext } from "./contextAPI/authContext";
import { useNavigate } from "react-router-dom"

function SignIn() {

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigate = useNavigate();

    const handleAuthChange = useCreateAuthDispatchContext();

    const handleClick = () => {
        if (userName !== "Sohail" && password !== "Umar") {
            return;
        }
        handleAuthChange(true);
        navigate("/cart")
    }


    return (
        <>
            <div className="signin">
                <input type="text" placeholder="Enter Username or Email" onChange={(e) => {
                    setUserName(e.target.value);
                }} />
                <input type="password" placeholder="Enter Password" onChange={(e) => {
                    setPassword(e.target.value);
                }} />
                <button type="button" onClick={handleClick} >SignIn</button>
            </div>
        </>
    );
}

export default SignIn;