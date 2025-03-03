import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Welcome to the future!</h1>
			<p>Please sign in or create a new account</p>
			<div className="userButton d-flex justify-content-center gap-3">
				<Link to="/signin"> 
					<button className="signIn btn btn-secondary">Sign in</button>
				</Link>
				<Link to="/register"> 
					<button className="register btn btn-secondary"> Register</button>
				</Link>
			</div>
		</div>
	);
}; 