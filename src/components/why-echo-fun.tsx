"use client";
import React from "react";
import Image from 'next/image';

// Reusable features data
const features = [
  {
    title: "Fully Fair, Fully On-Chain",
    description: "No insider allocation, no hidden VC bags, no whitelist wars.",
    image: "/f1.png"
  },
  {
    title: "DeFi Native + Degen Friendly",
    description: "Combines memecoin culture with serious protocol design.",
    image: "/f2.png"
  },
  {
    title: "Liquid from Day One",
    description: "All successful launches are auto-listed on DEX with LP support.",
    image: "/f3.png"
  },
  {
    title: "Risk-Managed Participation",
    description: "Failed launches = full refund. Play only when you're confident.",
    image: "/f4.png"
  }
];

export function WhyEchoFun() {
  return (
    <section 
      id="why-echo-fun" 
      className="py-28 font-inter relative overflow-hidden transition-colors duration-500"
      style={{ minHeight: '50vh' }} // Ensure section has enough height to trigger scroll effects
    >
      {/* Subtle gradient background */}
      <div className="absolute -top-1/2 -left-1/4 w-3/4 h-3/4 bg-violet-a3 blur-[150px] rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
            Why echo.fun
          </h2>
          <div className="h-1 w-64 bg-gradient-to-r from-transparent via-violet-9 to-transparent rounded-full mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="relative flex h-full">
              {/* Animated border wrapper */}
              <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-b from-gray-10 to-gray-5 p-[1px] flex-1 flex">
                {/* Animated highlight */}
                <div className="pointer-events-none absolute z-[1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-40 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-[rotate_8s_linear_infinite]"></div>
                
                {/* Content */}
                <div 
                  className="relative z-[2] flex flex-col w-full flex-1 rounded-[calc(0.75rem-1px)] shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]"
                  style={{
                    backgroundImage: `
                      radial-gradient(at 88% 40%, var(--gray-1) 0px, transparent 85%), 
                      radial-gradient(at 49% 30%, var(--gray-1) 0px, transparent 85%), 
                      radial-gradient(at 14% 26%, var(--gray-1) 0px, transparent 85%), 
                      radial-gradient(at 0% 64%, var(--violet-9) 0px, transparent 85%), 
                      radial-gradient(at 41% 94%, var(--violet-8) 0px, transparent 85%), 
                      radial-gradient(at 100% 99%, var(--violet-11) 0px, transparent 85%)
                    `
                  }}
                >
                  {/* Larger image placeholder with 4:3 ratio */}
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-2/50">
                    <div className="w-full h-full flex items-center justify-center">
                      {feature.image ? (
                        <Image 
                          src={feature.image} 
                          alt={feature.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-5">
                          {/* Placeholder for other cards */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Content container with better spacing */}
                  <div className="flex flex-col flex-1 justify-between space-y-4 px-6 py-6">
                    <h3 className="text-xl font-bold tracking-tight text-white leading-tight">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-11 leading-relaxed text-base font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 