import React, { useEffect, useState } from "react";
import "./styles/tailwind.css";
import Intro from "./components/intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// make sure to add images for your portfolio
function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: light)')
    
    .matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    }, [])
  
    const handleThemeSwitch = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');

    };

    useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [theme]);

    const sun = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    );
  
    const moon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    );
    var toTopButton = document.getElementById("to-top-button");

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            toTopButton.classList.remove("hidden");
        } else {
            toTopButton.classList.add("hidden");
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function goToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  return (
    <>
    <button
    type="button"
    onClick={handleThemeSwitch}
    className="fixed p-2 z-10 top-4 right-20 bg-violet-300 rounded-md text-lg dark:bg-orange-300"
    >
      {theme === 'dark' ? sun : moon}
    </button>
    <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
      <div className="max-w-5xl w-11/12 mx-auto">
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
        <button id="to-top-button" onclick="goToTop()" title="Go To Top"
        class="hidden fixed z-90 bottom-8 right-8 border-0 w-12 h-12 rounded-full drop-shadow-md text-white text-3xl font-bold bg-violet-300 dark:bg-orange-300" onClick={goToTop}>&uarr;</button>s
      </div>
    </div>
    </>
  );
}

export default App;
