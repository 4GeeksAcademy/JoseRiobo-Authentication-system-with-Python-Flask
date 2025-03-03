import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"


export const PrivateArea = () =>{
    
    
    const endSession = () => {
        localStorage.removeItem("token");
        setIsLogged(false)
        
    } 

   
  
    return(
        <>
            <div className="myPrivateA d-flex justify-content-center" >
                <div > Hello, this is your private area</div>
                <div> <button onClick={() => endSession()}>Click here to end your session</button> </div>
            </div>
        </>
    )
}