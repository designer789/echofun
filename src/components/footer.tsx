"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useCallback } from 'react';

// Custom smooth scroll link component (same as in header)
const SmoothScrollLink = ({ 
  href, 
  children, 
  className 
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
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
    }
  }, [href]);
  
  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 font-inter relative overflow-visible border-t border-gray-3">
      
      
      {/* Background image */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-auto pointer-events-none" style={{ overflow: 'visible' }}>
        <Image
          src="/bg1.png"
          alt=""
          width={1920}
          height={1080}
          className="w-full h-auto max-w-none object-contain opacity-80"
          aria-hidden="true"
          priority
          style={{ 
            position: 'absolute',
            bottom: '0',
            left: '0',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/favicon.png" 
                alt="echo.fun logo" 
                width={48} 
                height={48} 
                className="w-12 h-auto"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                echo.fun
              </span>
            </div>
            <p className="text-gray-11 text-sm">
              A daily single-launch crypto arena
            </p>
          </div>
          
          {/* Navigation */}
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-medium mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <SmoothScrollLink 
                      href="/#hero" 
                      className="text-gray-11 hover:text-white transition-colors text-sm"
                    >
                      Home
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink 
                      href="/#how-it-works" 
                      className="text-gray-11 hover:text-white transition-colors text-sm"
                    >
                      How It Works
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink 
                      href="/#why-echo-fun" 
                      className="text-gray-11 hover:text-white transition-colors text-sm"
                    >
                      Why Echo.fun
                    </SmoothScrollLink>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <SmoothScrollLink 
                      href="/#tokenomics" 
                      className="text-gray-11 hover:text-white transition-colors text-sm"
                    >
                      Tokenomics
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink 
                      href="/#faq" 
                      className="text-gray-11 hover:text-white transition-colors text-sm"
                    >
                      FAQ
                    </SmoothScrollLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-medium mb-4">Connect</h3>
            <div className="flex gap-4">
              <Link 
                href="https://x.com/echo_fun_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-5 hover:bg-violet-9 text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_0_5px_rgba(103,60,221,0.4)]"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9558 9.61788L8.38336 3H3.19922L10.0167 13.0074L3.19922 21H4.75293L10.7453 14.0113L15.5058 21H20.6899L13.6819 10.6218H13.6823ZM11.5354 13.0956L10.8426 12.0991L5.55293 4.30808H7.78758L12.0392 10.5233L12.7319 11.5201L18.2408 19.7496H16.0061L11.5353 13.096L11.5354 13.0956Z" />
                </svg>
              </Link>
              <Link 
                href="https://t.me/echo_fun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-5 hover:bg-violet-9 text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_0_5px_rgba(103,60,221,0.4)]"
                aria-label="Telegram"
              >
                <i className="fa-brands fa-telegram"></i>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-3 mt-8 text-center">
          <p className="text-gray-10 text-sm">
            &copy; {currentYear} echo.fun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 