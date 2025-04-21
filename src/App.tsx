import { useState, useEffect } from 'react';
import { Moon, Sun, ArrowRight } from 'lucide-react';
import logo from '../src/assets/logo.png';
import sign from '../src/assets/signature.png';
import pine from '../src/assets/pinelogo.png';
import findr from '../src/assets/findrlogo.png';
import { ScrollProgress } from './components/eldoraui/scrollprogress';
import MorphingText from './components/eldoraui/morphingtext';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    products: false,
    cards: false
  });

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      const productsSection = document.getElementById('products-section');
      const cardsSection = document.getElementById('cards-section');

      if (heroSection && isElementInViewport(heroSection)) {
        setIsVisible(prev => ({ ...prev, hero: true }));
      }
      if (productsSection && isElementInViewport(productsSection)) {
        setIsVisible(prev => ({ ...prev, products: true }));
      }
      if (cardsSection && isElementInViewport(cardsSection)) {
        setIsVisible(prev => ({ ...prev, cards: true }));
      }
    };

   
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
      );
    }

    // Initial check on mount
    setTimeout(() => {
      handleScroll();
    }, 300);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Theme toggle with system preference detection
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      <ScrollProgress className={isDarkMode ? "bg-gray-50" : "bg-black"} />
      
      {/* Background Grid Effect with animation */}
      <div className={`fixed inset-0 bg-grid-pattern opacity-20 transition-opacity duration-500 ${isDarkMode ? 'opacity-30' : 'opacity-10'}`}></div>

      {/* Navigation */}
      <nav className="relative z-10 px-4 sm:px-6 py-4 flex justify-between items-center backdrop-blur-sm">
        <div className="flex items-center">
          <img src={logo} alt="Zuri logo" className="w-44 sm:w-52 p-2 sm:p-3 transition-transform duration-300 hover:scale-105" />
        </div>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
            isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 pt-10 sm:pt-20 pb-12">
        <div 
          id="hero-section"
          className={`max-w-4xl transition-all duration-1000 transform ${
            isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className={`hero-font text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <MorphingText texts={["The Future of Innovation", "Engineered."]} interval={3000} />
          </h1>
          <p className={`hero-text text-base md:text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            At Zuri.corp, we aspire to establish a paradigm where innovation takes root
            within Africa. Our core objective is to tackle the pressing problems inherent to
            our region, to devise comprehensive solutions that resonate with the unique
            complexities of our local environment.
          </p>
          {showMore && (
            <p className={`hero-text text-base md:text-lg mb-4 animate-fadeIn ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              While crafting compelling experiences, zuri.corp serves as the launchpad for mission-driven startups built to make a lasting impact across the African continent and beyond.
            </p>
          )}
         
          <div className="flex flex-col space-y-6">
            <button
              onClick={() => setShowMore(!showMore)}
              className={`flex items-center space-x-2 text-lg hero-font transition-colors duration-300 ${
                isDarkMode ? 'text-lime-400 hover:text-lime-300' : 'text-lime-600 hover:text-lime-700'
              }`}
            >
              <span>{showMore ? 'Show less' : 'more'}</span>
            </button>
            <img 
              src={sign} 
              alt="Signature" 
              className={`w-full sm:w-2/3 md:w-1/2 py-2 transition-all duration-300 ${
                isDarkMode ? 'filter-none' : 'bg-gray-300'
              }`}
            />
          </div>
        </div>
        
        {/* Products Section */}
        <div id="products-section" className="mt-20 sm:mt-32">
          <div className={`building-section text-center py-6 sm:py-10 transition-all duration-1000 transform ${
            isVisible.products ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className={`hero-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Here's what we are building
            </h2>
          </div>
          
          <div id="cards-section" className="m-3 sm:m-5 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div 
              className={`p-6 sm:p-8 rounded-2xl transition-all duration-500 transform ${
                isVisible.cards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${isDarkMode ? 'bg-gray-800/80 hover:bg-gray-800' : 'bg-white/80 hover:bg-white'} shadow-xl backdrop-blur-sm hover:shadow-2xl`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={pine} className="w-10 sm:w-12 h-10 sm:h-12 transition-transform duration-300 hover:scale-110" alt="Pine Logo" />
                <h3 className={`text-xl sm:text-2xl font-bold hero-text ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Pine</h3>
              </div>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hero-font font-light text-sm sm:text-base`}>
                A digital startup ecosystem built 
                for the remote generation. We bring together ambitious founders, builders, and investors
                from around the world into one powerful online platform.
              </p>
              <button className="flex items-center space-x-2 text-lime-400 hover:text-lime-300 transition-colors duration-300 group">
                <span>Go to Pine</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            <div 
              className={`p-6 sm:p-8 rounded-2xl transition-all duration-500 transform ${
                isVisible.cards ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-10 opacity-0'
              } ${isDarkMode ? 'bg-blue-600/90 hover:bg-blue-600' : 'bg-blue-500/90 hover:bg-blue-500'} shadow-xl backdrop-blur-sm hover:shadow-2xl`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={findr} className="w-10 sm:w-12 h-10 sm:h-12 transition-transform duration-300 hover:scale-110" alt="Findr Logo" />
                <h3 className="text-xl sm:text-2xl font-bold text-white hero-text">Findr</h3>
              </div>
              <p className="mb-6 text-gray-100 hero-font font-light text-sm sm:text-base">
                A next generation navigation app that redefines urban exploration. Findr offers hyper-localized insights, real time updates and personalized recommendations, transforming the way people navigate cities.
              </p>
              <button className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-300 group">
                <span>Go to Findr</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:gap-8">
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}>About us</a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}>Services</a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}>Careers</a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}>Products</a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className={`px-4 py-2 rounded-lg w-full sm:w-auto ${
                  isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all duration-300`}
              />
              <button className="px-6 py-2 bg-lime-400 text-gray-900 rounded-lg hover:bg-lime-300 transition-colors duration-300 w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;