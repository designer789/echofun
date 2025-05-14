"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useState, useEffect } from 'react';

// Custom smooth scroll link component
const SmoothScrollLink = ({ 
  href, 
  children, 
  className,
  onClick
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}) => {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Extract the target ID from the href
    const targetId = href.replace(/.*\#/, "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Scroll smoothly to the element
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL without page reload
      window.history.pushState({}, '', href);
      
      // Call additional onClick handler if provided
      if (onClick) {
        onClick();
      }
    }
  }, [href, onClick]);
  
  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <>
      <header className={`py-4 font-inter fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-1/90 backdrop-blur-lg shadow-lg' : ''}`}>
        <div className="w-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/favicon.png" 
              alt="echo.fun logo" 
              width={48} 
              height={48} 
              className="w-10 md:w-12 h-auto"
            />
            <SmoothScrollLink 
              href="/#hero" 
              className="text-lg md:text-xl font-bold tracking-tight text-white"
            >
              echo.fun
            </SmoothScrollLink>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <SmoothScrollLink 
              href="/#hero" 
              className="tracking-tight text-gray-10 hover:text-white transition-colors"
            >
              Home
            </SmoothScrollLink>
            <SmoothScrollLink 
              href="/#how-it-works" 
              className="tracking-tight text-gray-10 hover:text-white transition-colors"
            >
              How It Works
            </SmoothScrollLink>
            <SmoothScrollLink 
              href="/#why-echo-fun" 
              className="tracking-tight text-gray-10 hover:text-white transition-colors"
            >
              Why Echo.fun
            </SmoothScrollLink>
            <SmoothScrollLink 
              href="/#tokenomics" 
              className="tracking-tight text-gray-10 hover:text-white transition-colors"
            >
              Tokenomics
            </SmoothScrollLink>
            <SmoothScrollLink 
              href="/#faq" 
              className="tracking-tight text-gray-10 hover:text-white transition-colors"
            >
              FAQ
            </SmoothScrollLink>
          </nav>
          
          {/* Social Icons and Mobile Menu Button */}
          <div className="flex items-center gap-3 relative z-50">
            <div className="hidden sm:flex items-center gap-3">
              <Link 
                href="https://x.com/echo_fun_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-gray-5 hover:bg-violet-9 text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_0_5px_rgba(103,60,221,0.4)]"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9558 9.61788L8.38336 3H3.19922L10.0167 13.0074L3.19922 21H4.75293L10.7453 14.0113L15.5058 21H20.6899L13.6819 10.6218H13.6823ZM11.5354 13.0956L10.8426 12.0991L5.55293 4.30808H7.78758L12.0392 10.5233L12.7319 11.5201L18.2408 19.7496H16.0061L11.5353 13.096L11.5354 13.0956Z" />
                </svg>
              </Link>
              <Link 
                href="https://t.me/echo_fun_Official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-gray-5 hover:bg-violet-9 text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_0_5px_rgba(103,60,221,0.4)]"
                aria-label="Telegram"
              >
                <i className="fa-brands fa-telegram text-sm md:text-base"></i>
              </Link>
            </div>
            
            {/* Mobile Menu Button - Keep it above the mobile menu overlay */}
            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-violet-9 hover:bg-violet-8 text-white transition-colors"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu - Separate from header to avoid z-index conflicts */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-1/95 backdrop-blur-xl z-40 overflow-auto" style={{ top: '64px' }}>
          <div className="py-8 px-6">
            <nav className="flex flex-col gap-5 mb-8">
              <SmoothScrollLink 
                href="/#hero" 
                className="text-2xl font-medium tracking-tight text-white py-3 px-2 border-b border-gray-3"
                onClick={closeMenu}
              >
                Home
              </SmoothScrollLink>
              <SmoothScrollLink 
                href="/#how-it-works" 
                className="text-2xl font-medium tracking-tight text-white py-3 px-2 border-b border-gray-3"
                onClick={closeMenu}
              >
                How It Works
              </SmoothScrollLink>
              <SmoothScrollLink 
                href="/#why-echo-fun" 
                className="text-2xl font-medium tracking-tight text-white py-3 px-2 border-b border-gray-3"
                onClick={closeMenu}
              >
                Why Echo.fun
              </SmoothScrollLink>
              <SmoothScrollLink 
                href="/#tokenomics" 
                className="text-2xl font-medium tracking-tight text-white py-3 px-2 border-b border-gray-3"
                onClick={closeMenu}
              >
                Tokenomics
              </SmoothScrollLink>
              <SmoothScrollLink 
                href="/#faq" 
                className="text-2xl font-medium tracking-tight text-white py-3 px-2 border-b border-gray-3"
                onClick={closeMenu}
              >
                FAQ
              </SmoothScrollLink>
            </nav>
            
            {/* Mobile Social Links */}
            <div className="flex justify-center gap-5 mt-8">
              <Link 
                href="https://x.com/echo_fun_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-gray-5 hover:bg-violet-9 text-white flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9558 9.61788L8.38336 3H3.19922L10.0167 13.0074L3.19922 21H4.75293L10.7453 14.0113L15.5058 21H20.6899L13.6819 10.6218H13.6823ZM11.5354 13.0956L10.8426 12.0991L5.55293 4.30808H7.78758L12.0392 10.5233L12.7319 11.5201L18.2408 19.7496H16.0061L11.5353 13.096L11.5354 13.0956Z" />
                </svg>
              </Link>
              <Link 
                href="https://t.me/echo_fun_Official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-gray-5 hover:bg-violet-9 text-white flex items-center justify-center transition-all duration-300"
                aria-label="Telegram"
              >
                <i className="fa-brands fa-telegram text-lg"></i>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 
