import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../configs/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const login = async (e) => {
		e.preventDefault();
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log(userCredential);
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="main">
			<h1>Login</h1>
			{/* <form onSubmit={handleSubmit} className="signup-form"> */}
			<form className="signup-form">
				<input
					type="email"
					placeholder="Enter your email"
					required
					value={email} // these are useState variables
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Enter your password"
					required
					value={password} // these are useState variables
					onChange={(e) => setPassword(e.target.value)}
				/>
				{/* <button onClick={signUp} className="submit-btn"> */}
				<button onClick={login} className="submit-btn">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
