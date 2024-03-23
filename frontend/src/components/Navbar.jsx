import { Link } from "react-router-dom";
import logo from "../assets/images/ecofront-logo.png";
const Navbar = () => {
	return (
		<nav className="navbar">
			<h2 className="logo">
				<img src={logo} alt="ecofront" />
				<Link to="/">EcoFront</Link>
			</h2>
			<Link to="/home">Home</Link>
			<Link to="/signup">Signup</Link>
			{/* <Link to="transport-detector">Transport Detector</Link> */}
			{/* <Link to="/login">Login</Link> */}
		</nav>
	);
};
export default Navbar;
