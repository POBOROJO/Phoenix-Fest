import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase";
import React, { useState } from "react";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	const signUp = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="main">
			<h1>Create Account</h1>
			<form onSubmit={handleSubmit} className="signup-form">
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
				<button onClick={signUp} className="submit-btn">
					Signup
				</button>
			</form>

			{/* <p>Already have an account? <Link to="/login" className='login-btn' >Login</Link></p> */}
		</div>
	);
};

export default Signup;
