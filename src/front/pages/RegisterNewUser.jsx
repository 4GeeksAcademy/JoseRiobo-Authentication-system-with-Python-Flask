import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterNewUser = () => {

    const navigate = useNavigate()

    const [data, setData] = useState({
        "email": "",
        "password": "",
    })

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }
    
    const registerUser = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/register`, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",

                    }
                })
                if (!response.ok){
                    alert("Missing fields or incorrect input")
                    return
                }
                const responseData = await response.json()
                
                navigate("/signin")
    
            } catch (error) {
                console.log(error);
                
    
            }
                
    }
        

        return (

            <div className="registerForm d-flex justify-content-center">
                <form className="sign mt-5">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" name="email" value={data.email} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" name="password" value={data.password} onChange={handleChange} class="form-control" id="exampleInputPassword1"></input>
                    </div>


                    <button type="submit" onClick={(e)=> registerUser(e)} class="btn btn-primary">Submit</button>
                </form>
            </div>

        );
    };