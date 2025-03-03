import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; 
import { useEffect } from "react";

export const RegisterNewUser = () =>{

    const registerUser = async() =>{
        const response = await fetch("https://improved-space-telegram-6949xvjq47q9hr65p-3001.app.github.dev/api/register")
        const data = await response.json()
        console.log(data);
        
    }

    useEffect(() => {
        registerUser()
    }, [])

    return(
    
       <div className="registerForm d-flex justify-content-center">
            <form className="sign mt-5">
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"></input>
            </div>
        
           
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
     </div>

    );
};