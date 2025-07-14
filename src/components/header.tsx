"use client"

import { Moon, Sun } from "lucide-react"
import { ScrollProgress } from "./eldoraui/scrollprogress"
import logo from "../assets/logo.png"
import { useThemeContext } from "../context/ThemeContext"
import { Link } from "react-router"

export default function Header() {
  const { isDarkMode, setIsDarkMode } = useThemeContext()

  return (
    <div>
      <ScrollProgress className={isDarkMode ? "bg-gray-50" : "bg-black"} />

      {/* Navigation */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-6 ${isDarkMode ? "bg-gray-800/80" : "bg-gray-900/80"} backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 shadow-lg`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo || "/placeholder.svg"}
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
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>
    </div>
  )
}
