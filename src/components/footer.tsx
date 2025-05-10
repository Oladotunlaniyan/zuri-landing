import { Link } from "react-router";
import logo from "../assets/logo.png";

export default function Footer() {
	return (
		<footer className="py-8 text-white bg-gray-900">
			<div className="container mx-auto">
				<div className="grid items-center justify-between grid-cols-1 gap-8 md:grid-cols-2">
					{/* Links Section */}
					<div className="flex flex-wrap justify-center gap-6 md:justify-start">
						<div className="flex flex-col items-center justify-center gap-6 md:flex-row">
							<img
								src={logo}
								alt="Zuri logo"
								className="relative w-40 hover:scale-105"
							/>
							<div className="flex flex-col items-center gap-4 md:flex-row">
								<Link
									to="/about-us"
									className="z-10 text-gray-400 transition-colors duration-300 cursor-pointer hover:text-white min-w-fit"
								>
									About us
								</Link>
								<Link
									to="/careers"
									className="z-10 text-gray-400 transition-colors duration-300 cursor-pointer hover:text-white min-w-fit"
								>
									Careers
								</Link>
								<Link
									to="/products"
									className="z-10 text-gray-400 transition-colors duration-300 cursor-pointer hover:text-white min-w-fit"
								>
									zuri.corp products
								</Link>
							</div>
						</div>
					</div>

					{/* Subscription Section */}
					<div className="z-10 flex flex-col items-center justify-center gap-4 p-3 sm:flex-row md:justify-end">
						<input
							type="email"
							placeholder="Enter email address"
							className="w-full px-4 py-2 text-gray-800 bg-white rounded-lg sm:w-64 focus:outline-none"
						/>
						<button className="w-full px-6 py-2 text-gray-900 transition-colors duration-300 rounded-lg bg-lime-400 hover:bg-lime-300 sm:w-auto">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}
