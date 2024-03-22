import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../configs/firebase";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [age, setAge] = useState(0);
	const [address, setAddress] = useState("");

	const navigate = useNavigate();

	const signUp = async (e) => {
		e.preventDefault();
		const user = {
			name,
			email,
			age,
			address,
			coins: 0,
		};

		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			await setDoc(doc(db, "customer", userCredential.user.uid), user);
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="main">
			<h1>Create Account</h1>
			<form className="signup-form">
				<input
					type="text"
					placeholder="Enter your name"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
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
				<input
					type="number"
					placeholder="Enter your age"
					required
					value={age}
					onChange={(e) => setAge(e.target.value)}
				/>
				<input
					type="textarea"
					placeholder="Enter your address"
					required
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
				<button onClick={signUp} className="submit-btn">
					Signup
				</button>
			</form>

			<p>
				Already have an account?{" "}
				<Link to="/login" className="login-btn">
					Login
				</Link>
			</p>
		</div>
	);
};

export default Signup;
