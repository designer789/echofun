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
                href="https://t.me/echo_fun_Official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-5 hover:bg-violet-9 text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_0_5px_rgba(103,60,221,0.4)]"
                aria-label="Telegram"
              >
                <i className="fa-brands fa-telegram"></i>
              </Link>
              <Link 
                href="https://www.dextools.io/app/base/pair-explorer/0x32c3e8009cb02733cc10f7c98d542d773305e98f" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-5 hover:bg-violet-9 text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_0_5px_rgba(103,60,221,0.4)]"
                aria-label="DEXTools"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 269 304" fill="currentColor">
                 <path d="M222.031 86.2827L177.466 63.4978C189.417 58.1627 199.719 53.5787 210.012 48.9659C220.015 44.7864 222.966 40.2988 233.008 47.2132C239.905 51.672 267.734 61.9762 267.869 69.1025C267.657 82.7291 267.213 96.3558 266.431 109.963C266.325 111.735 264.203 114.085 262.419 114.952C228.658 131.438 194.482 147.135 160.219 162.592C122.715 181.313 83.5328 197.26 46.7235 216.983L90.3043 238.949C76.9928 246.961 63.1314 251.902 49.1061 258.209C45.566 259.692 42.0741 259.172 38.1771 256.928C27.1131 250.63 15.5957 245.074 4.06868 239.594C1.23274 238.246 0.210259 236.705 0.306719 233.884C0.798668 220.257 1.11699 206.63 1.86938 193.023C1.9562 191.318 3.85646 189.017 5.50594 188.208C23.126 179.611 40.8105 171.166 58.5592 162.871C113.233 137.293 167.685 112.602 222.031 86.2827Z" />
                 <path d="M268.033 129.686C268.033 164.653 267.975 199.35 268.101 234.288C268.101 238.294 267.059 240.249 262.95 241.886C250.41 246.894 238.246 252.749 225.899 258.2C221.153 260.289 216.909 258.325 212.742 256.274C180.785 240.105 150.274 224.966 118.211 208.325C128.686 203.992 158.792 186.176 167.685 189.065C185.26 197.78 202.671 206.804 220.999 216.193V157.603C220.999 148.83 220.999 148.878 228.909 145.45C242.201 140.452 254.017 132.642 268.033 129.686Z" />
                 <path d="M150.351 95.1232C135.882 102.76 122.137 106.853 107.995 113.854C103.414 116.521 100.607 113.979 97.6067 112.621C80.5525 104.368 64.9452 95.6721 47.6209 87.2072C45.4023 97.8004 51.3539 154.618 44.0519 155.311C29.4284 160.772 15.8468 170.18 0.577119 173.089C-0.136688 138.141 0.577114 103.203 0.239502 68.2455C0.239502 64.4801 1.42597 62.6408 5.06253 61.1577C18.6731 55.5337 32.0715 49.4379 45.6241 43.6405C46.7653 43.2406 48.0175 43.2993 49.116 43.8043C83.3016 60.6473 116.243 77.6927 150.351 95.1232Z" />
                 <path d="M79.4534 28.5597C155.898 -10.4038 114.497 -6.42654 189.303 28.3767C177.12 38.1609 164.831 45.711 152.04 54.3781C151.133 54.6813 150.16 54.7331 149.226 54.5279C148.291 54.3227 147.43 53.8682 146.735 53.2128C131.021 40.0388 123.825 56.1885 116.012 53.8581C103.742 45.3354 91.0479 38.0069 79.4534 28.5597Z" />
                 <path d="M188.752 276.921C118.269 313.255 149.888 312.677 79.2118 276.776C91.4623 267.608 103.539 259.817 116.127 251.381C116.986 250.813 118.799 250.418 119.359 250.861C129.255 259.191 139.017 259.471 148.943 250.91C149.512 250.418 151.345 250.765 152.184 251.333C164.357 259.952 177.341 267.271 188.752 276.921Z" />
                </svg>
              </Link>
              <Link 
                href="https://dexscreener.com/base/0x32c3e8009cb02733cc10f7c98d542d773305e98f" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-5 hover:bg-violet-9 text-white flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_0_5px_rgba(103,60,221,0.4)]"
                aria-label="DEX Screener"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 289 345" fill="currentColor">
                 <path d="M221.732 295.762C211.815 286.486 202.254 277.556 192.085 268.019C176.252 293.577 160.646 318.763 144.674 344.565L97.2806 268.028C87.1982 277.452 77.5421 286.468 67.5989 295.771L39.4047 250.168L0.536621 281.301C4.52956 271.894 8.5573 263.207 11.9413 254.269C23.4069 223.924 27.713 192.349 27.6956 160.071C27.6956 146.199 27.5825 132.38 27.8348 118.534C28.2001 99.2696 33.6372 81.3578 43.8239 63.2639C44.3792 64.45 45.0249 65.5919 45.7552 66.6798C50.5919 72.6012 55.4026 78.5487 60.4133 84.3228C61.9357 86.0568 62.2837 87.4093 61.2833 89.6548C59.4738 93.7122 57.5948 97.8998 56.7858 102.217C52.8189 123.389 65.8939 141.231 88.4335 145.653C91.9132 146.347 95.5495 146.572 99.3424 147.049C98.9944 152.312 98.8726 157.453 98.1593 162.568C97.9853 163.834 96.0367 165.091 94.6796 165.906C84.197 172.044 73.6536 178.044 63.1449 184.112C62.4944 184.556 61.8699 185.037 61.2746 185.552C65.9287 188.213 70.0347 191.239 74.6192 193.068C97.9679 202.362 111.304 220.586 119.194 243.18C127.467 266.857 134.774 290.864 142.49 314.715C143.025 316.778 143.908 318.737 145.1 320.506C146.91 314.437 148.737 308.368 150.529 302.299C157.27 279.48 163.577 256.505 173.764 234.883C176.605 228.896 179.8 223.083 183.333 217.474C187.615 210.393 193.734 204.594 201.045 200.689C209.979 195.981 218.704 190.875 228.317 185.5C224.533 183.228 221.314 181.234 218.043 179.344C210.04 174.714 201.932 170.249 194.051 165.412C192.453 164.19 191.383 162.407 191.058 160.426C190.336 156.092 190.232 151.583 189.901 147.5C195.86 146.243 201.802 145.566 207.343 143.728C229.848 136.298 239.53 113.913 229.326 92.5765C227.177 88.0769 227.499 85.4152 231.066 81.8433C236.285 76.5373 240.748 70.4165 246.263 63.7494C249.195 70.3644 252.205 76.4853 254.65 82.823C260.034 96.6947 261.609 111.251 261.705 126.103C261.852 147.717 261.809 169.391 263.297 190.936C265.376 221.15 273.692 249.89 287.237 277.105C287.844 278.178 288.128 279.403 288.055 280.633L249.943 250.142L221.732 295.762Z" fill="currentColor"></path>
                 <path d="M33.3933 19.6113C38.1779 23.5821 42.6754 27.5876 47.4774 31.1769C49.7391 32.9108 52.5577 33.8645 55.1936 35.0263C58.5949 36.5175 61.283 35.7632 64.1103 33.0669C85.7501 12.3521 114.588 0.77719 144.593 0.762648C174.598 0.748106 203.447 12.2951 225.107 32.9889C228.108 35.8326 231.101 36.8036 234.371 34.9049C240.052 31.5844 245.463 27.787 250.9 24.0329C252.527 22.9059 253.797 21.2759 256.119 20.2876C253.579 25.1774 251.326 30.2405 248.447 34.9222C237.646 52.2386 223.753 67.4363 207.456 79.7625C195.016 89.2993 181.471 97.4229 168.423 106.197C165.865 107.931 163.655 107.723 160.915 106.084C150.024 99.573 138.95 99.6251 128.128 106.301C127.15 107.016 125.977 107.417 124.765 107.451C123.553 107.485 122.359 107.151 121.342 106.492C89.2597 88.7618 61.4396 66.2463 41.2052 35.3037C38.5954 31.3416 36.7077 26.9373 34.5416 22.7065C34.0896 21.7016 33.7059 20.6676 33.3933 19.6113Z" fill="currentColor"></path>
                 <path d="M144.683 259.367C142.352 252.275 140.386 246.136 138.307 240.042C134.053 227.592 129.607 215.09 121.1 204.885C115.723 198.426 108.921 193.181 102.683 187.424C101.866 186.661 100.943 186.037 99.5342 184.988C104.127 182.387 108.233 179.786 112.583 177.532C116.245 175.633 117.463 172.876 117.585 168.81C117.67 161.333 118.271 153.871 119.386 146.477C120.986 137.053 126.049 129.371 133.827 123.623C140.525 118.673 148.894 118.786 155.575 123.71C165.779 131.201 170.024 141.778 171.233 153.82C171.738 158.838 171.912 163.883 171.755 168.923C171.642 173.059 173.182 175.712 176.818 177.593C181.115 179.838 185.239 182.405 190.058 185.196C161.481 201.764 154.139 230.661 144.683 259.367Z" fill="currentColor"></path>
                 <path d="M113.757 123.51C103.988 129.796 88.5296 128.834 80.3958 121.499C74.1498 115.898 73.0798 107.792 77.4555 100.692L113.757 123.51Z" fill="currentColor"></path>
                 <path d="M175.487 123.58L211.78 100.735C217.608 108.694 214.181 119.904 203.95 124.906C195.617 129.016 184.021 128.522 175.487 123.58Z" fill="currentColor"></path>
                </svg>
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


