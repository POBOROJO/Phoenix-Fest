import React from "react";

import mobileCanva from "../assets/images/mobile-canva.png";

const Landing = () => {
	return (
		<div className="main-grid">
			<article className="card" id="card-1">
				<h1 className="title">Welcome to EcoFront</h1>
				{/* <p>
					EcoFront is a platform where you can buy and sell
					eco-friendly products.
				</p> */}

				<p>
					EcoFront is an app dedicated to promoting eco-friendly
					habits and activities. Our mission is to incentivize users
					to adopt sustainable practices in their daily lives by
					rewarding them for completing eco-friendly tasks,
				</p>

				<div>
					<p>Contact Us Email: contact@ecofront.com</p>
					<p>Phone: 123-456-7890</p>
				</div>
			</article>
			<article className="card" id="card-2">
				<img src={mobileCanva} alt="ecofront" />
			</article>
		</div>
	);
};

export default Landing;
