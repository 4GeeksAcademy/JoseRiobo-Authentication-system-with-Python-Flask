import { useEffect, useState } from "react"
import { useNavigate, Outlet } from "react-router-dom"


export const PrivateArea = () => {
    const [isLogged, setIsLogged] = useState(null);
    const navigate = useNavigate();

    const endSession = () => {
        localStorage.removeItem("token");
        navigate("/signin")
    }
    const token = localStorage.getItem("token")



    useEffect(() => {
        const checkIfLogged = async () => {

            if (!token) {
                setIsLogged(false)
                navigate("/signin")
                return 
            }
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/privatearea`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    method: "GET"
                })
                if (response.ok) {
                    setIsLogged(true)
                }
                else {
                    setIsLogged(false)
                    localStorage.removeItem("token")
                    navigate("/signin")
                }
            } catch (error) {
                console.log(error);

            }
        }
        checkIfLogged();
    }, [token])

    return (
        <>
            <div className="myPrivateA d-flex justify-content-center" >
                <div > Hello, this is your private area</div>
                <div> <button onClick={() => endSession()}>Click here to end your session</button> </div>
            </div>
        </>
    )
}