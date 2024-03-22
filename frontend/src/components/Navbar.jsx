import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">Home</Link>
			<Link to="/signup">Signup</Link>
			<Link to="transport-detector">Transport Detector</Link>
			{/* <Link to="/login">Login</Link> */}
		</nav>
	);
};
export default Navbar;
