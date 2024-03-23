import React, { useState } from "react";

const TransportDetector = () => {
	const [image, setImage] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(image);
	};

	return (
		<div className="main">
			<h1>Transport Detector</h1>
			<form className="signup-form">
				<input
					type="file"
					onChange={(e) => setImage(e.target.files[0])}
				/>

				<button className="submit-btn" onClick={handleSubmit}>
					Upload
				</button>
			</form>
		</div>
	);
};

export default TransportDetector;
