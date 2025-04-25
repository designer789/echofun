"use client";
import Image from 'next/image';
import Link from 'next/link';
import { AuroraBackground } from './aurora-background';

export function Hero() {
  return (
    <AuroraBackground id="hero" className="min-h-screen py-20 md:py-28 relative">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-end justify-center">
        <Image
          src="/p2.png"
          alt=""
          width={1200}
          height={1200}
          className="w-[80%] h-auto object-contain opacity-30 mb-0"
          priority
          aria-hidden="true"
        />
      </div>
      
      <section className="font-inter z-10 relative flex flex-col items-center justify-center h-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tighter mb-6 text-white">
              Launch Loud, Win Proud.
            </h1>
            
            <p className="text-base md:text-lg font-semibold tracking-tighter leading-tight text-gray-10 mb-8 max-w-2xl">
              echo.fun is a daily single-launch crypto arena where users predict, participate, and profit. 
              One token launches per day. If it wins, it goes live with auto liquidity. 
              If it fails, everyone gets refunded.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <button className="px-8 py-3 rounded-xl bg-violet-9 hover:bg-violet-8 text-white font-medium transition-all duration-300 hover:shadow-[0_0_0_5px_rgba(103,60,221,0.4)]">
                Enter Today&apos;s Arena
              </button>
              <Link 
                href="https://echo-fun.gitbook.io/docs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-xl bg-gray-5 hover:bg-gray-6 text-white font-medium transition-all duration-300 hover:shadow-[0_0_0_5px_rgba(46,41,86,0.4)]"
              >
                Learn More
              </Link>
            </div>
            
            <div className="mt-8 w-full max-w-4xl">
              <Image 
                src="/hero.png" 
                alt="Echo.fun platform interface" 
                width={1200} 
                height={800} 
                className="w-full h-auto rounded-xl shadow-lg" 
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
} 