import { Moon, Sun } from "lucide-react";
import { ScrollProgress } from "./eldoraui/scrollprogress";
import logo from "../assets/logo.png";
import { useThemeContext } from "../context/ThemeContext";
import { Link } from "react-router";

export default function Header() {
	const { isDarkMode, setIsDarkMode } = useThemeContext();

	// I am not using the useEffect because if a user changes
	// the theme on a page, this useEffect reloads and changes to the default theme of the machine
	// useEffect(() => {
	// 	const prefersDark = window.matchMedia(
	// 		"(prefers-color-scheme: dark)"
	// 	).matches;
	// 	setIsDarkMode(prefersDark);
	// }, [setIsDarkMode]);
	return (
		<div>
			<ScrollProgress className={isDarkMode ? "bg-gray-50" : "bg-black"} />

			{/* Background Grid Effect with animation */}
			<div
				className={`fixed inset-0 bg-grid-pattern opacity-40 transition-opacity duration-500 ${
					isDarkMode ? "opacity-70" : "opacity-50"
				}`}
			></div>

			{/* Navigation */}
			<nav className="relative z-10 flex items-center justify-between px-4 py-6 sm:px-6 backdrop-blur-sm">
				<div className="flex items-center">
					<Link to="/">
						<img
							src={logo}
							alt="Zuri logo"
							className="w-40 transition-transform duration-300 h-9 hover:scale-105"
						/>
					</Link>
				</div>

				<button
					onClick={() => setIsDarkMode(!isDarkMode)}
					className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
						isDarkMode
							? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
							: "bg-gray-100 text-gray-600 hover:bg-gray-200"
					}`}
					aria-label={
						isDarkMode ? "Switch to light mode" : "Switch to dark mode"
					}
				>
					{isDarkMode ? (
						<Sun className="w-6 h-6" />
					) : (
						<Moon className="w-5 h-5" />
					)}
				</button>
			</nav>
		</div>
	);
}
