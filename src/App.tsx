import { useState } from 'react';
import { Moon, Sun, ArrowRight, Building2 } from 'lucide-react';
import logo from '../src/assets/logo.png';
import sign from  '../src/assets/signature.png'
import pine from '../src/assets/pinelogo.png'
import findr from '../src/assets/findrlogo.png'
import { ScrollProgress } from './components/eldoraui/scrollprogress';
import MorphingText from './components/eldoraui/morphingtext';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      <ScrollProgress />
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-grid-pattern"></div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src= {logo} alt="Zuri logo" className='w-1/2 p-2 sm:w-1/2 ' />
        </div>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 pt-20 pb-12">
        <div className="max-w-4xl">
          {/* <h1 className={`hero-font text-3xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <MorphingText />
            The Future of Innovation, <br /> Engineered.
          </h1> */}
          <h1 className={`hero-font text-3xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
           <MorphingText texts={["The Future of Innovation", "Engineered."]} /> 
            </h1>
          <p className={`hero-text text-l md:text-1xl mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          At Zuri.corp, we aspire to establish a paradigm where innovation takes root <br /> 
          within Africa. Our core objective is to tackle the pressing problems inherent to <br />
          our region, to devise comprehensive solutions that resonate with the unique <br />
          complexities of our local environment while crafting compelling experiences, <br />
          zuri.corp serves as the launchpad for mission-driven startups built to make a <br />
          lasting impact.
          </p>
          {showMore && (
            <p className={`hero-text text-l md:text-1xl mb-4 animate-fade-in ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              While crafting compelling experiences, zuri.corp serves as the launchpad for mission-driven startups built to make a lasting impact across the African continent and beyond.
            </p>
          )}
         
          <div className="flex flex-col space-y-6">
            <button
              onClick={() => setShowMore(!showMore)}
              className={`flex items-center space-x-2 text-lg hero-font ${
                isDarkMode ? 'text-lime-400 hover:text-lime-300' : 'text-lime-600 hover:text-lime-700'
              }`}
            >
              <span>{showMore ? 'Show less' : 'more'}</span>
            </button>
            <img src={sign} className ={` w-1/2 py-2 ${isDarkMode ? '' : 'bg-gray-300'} `}/>
            <button className="bg-lime-400 text-gray-900 px-8 py-3 rounded-full hover:bg-lime-300 transition-colors w-fit">
              Here's what we are building
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
        <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} shadow-xl backdrop-blur-sm`}>
                <div className="flex items-center gap-4 mb-4">
                <img src={pine} className='w-12 h-12' />
                <h3 className={`text-2xl font-bold hero-text  ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Pine</h3>
              </div>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hero-font font-light`}>
              A digital startup ecosystem built 
              for the remote generation.We bring together ambitious founders, builders, and investors
              from around the world into one powerful online platform.
              </p>
              <button className="flex items-center space-x-2 text-lime-400 hover:text-lime-300">
                <span>Go to Pine</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-blue-600/90' : 'bg-blue-500/90'} shadow-xl backdrop-blur-sm`}>
            <div className='flex items-center gap-4 mb-4'>
            <img src={findr} className='w-12 h-12' /><h3 className="text-2xl font-bold text-white hero-text">Findr</h3>
            </div>
            <p className="mb-6 text-gray-100 hero-font font-light">
            A next generation navigation app that redefines urban exploration. Findr offers hyper-localized insights, real time updates and personalized recommendations, transforming the way people navigate cities.
            </p>
            <button className="flex items-center space-x-2 text-white hover:text-gray-200">
              <span>Go to Findr</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-8">
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>About us</a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Services</a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Careers</a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Products</a>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
              <button className="px-6 py-2 bg-lime-400 text-gray-900 rounded-lg hover:bg-lime-300 transition-colors">
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