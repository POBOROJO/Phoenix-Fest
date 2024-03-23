import React, { useState } from "react";
import { auth } from "../configs/firebase";
import { signOut } from "firebase/auth";

const Home = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(auth?.currentUser);

	const logout = async () => {
		await signOut(auth);
		setIsLoggedIn(false);
	};
	return (
		<div className="main">
			<h1>Home</h1>
			{isLoggedIn ? (
				<h1>Hello, {auth?.currentUser?.email}</h1>
			) : (
				<h1>Not Logged In</h1>
			)}
			<button onClick={() => logout()}>Logout</button>
		</div>
	);
};

export default Home;
