import "./App.css";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SharedLayout from "./pages/SharedLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<HomePage />} />
					<Route path="signup" element={<SignUpPage />} />
					<Route path="login" element={<LoginPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
