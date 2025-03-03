import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; 


export const SignIn = () =>{
    const navigate = useNavigate()
    const handleSubmit = () =>{
         navigate("/privatearea")
         localStorage.setItem("token", "userToken")
    }
    
   
    return(
    
       <div className="signInForm d-flex justify-content-center">
            <form className="sign mt-5">
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"></input>
            </div>
            
            <button type="submit" class="btn btn-primary" onClick={() => handleSubmit()}>Submit</button>
        </form>
     </div>

    );
};