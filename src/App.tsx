import { Route, Routes } from "react-router";
import Home from "./components/home";
import AboutUs from "./components/about-us";
import Careers from "./components/careers";
import Products from "./components/products";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about-us" element={<AboutUs />} />
			<Route path="/careers" element={<Careers />} />
			<Route path="/products" element={<Products />} />
		</Routes>
	);
}
