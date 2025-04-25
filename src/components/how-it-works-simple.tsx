"use client";
import React, { useEffect, useRef, useState } from "react";

// Steps data with Font Awesome icons
const steps = [
  {
    title: "One Token Per Day",
    description: "echo.fun features a single token launch every day, concentrating attention, liquidity, and speculation into one high-impact event.",
    iconClass: "fa-regular fa-clock"
  },
  {
    title: "Time-Based Entry Fees",
    description: "Users enter in three phases — the earlier you join, the lower your gas fee. Fees go to the liquidity pool and daily prediction rewards.",
    iconClass: "fa-solid fa-coins"
  },
  {
    title: "Launch or Refund",
    description: "If the token hits its funding target, it launches instantly with auto liquidity. If not, all funds are fully refunded.",
    iconClass: "fa-solid fa-rocket"
  },
  {
    title: "Automatic DEX Listing",
    description: "Successful launches inject 12% of raised Base into a DEX liquidity pool, with 88% distributed to participants.",
    iconClass: "fa-solid fa-chart-line"
  },
  {
    title: "Predict and Win with $ECHO",
    description: "Stake $ECHO to predict the day&apos;s winning token. Correct predictors earn rewards, and leaderboard rankings unlock exclusive perks.",
    iconClass: "fa-solid fa-trophy"
  }
];

// Animation Hook for Scroll Reveal
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  return { ref, isVisible };
}

export function HowItWorksSimple() {
  const titleReveal = useScrollReveal();
  const firstRowReveal = useScrollReveal();
  const secondRowReveal = useScrollReveal();
  const mobileReveal = useScrollReveal();
  
  return (
    <section id="how-it-works" className="py-16 md:py-24 font-inter relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute -bottom-1/3 -right-1/4 w-2/3 h-2/3 bg-violet-a3 blur-[150px] rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={titleReveal.ref} 
          className={`flex flex-col items-center text-center mb-10 md:mb-16 transition-all duration-700 ${
            titleReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-white">
            How It Works
          </h2>
          
          <div className="h-1 w-48 md:w-64 bg-gradient-to-r from-transparent via-violet-9 to-transparent rounded-full mt-2 mb-4"></div>
        </div>
        
        {/* Desktop layout - Hidden on mobile */}
        <div className="hidden md:block">
          <div 
            ref={firstRowReveal.ref}
            className="grid grid-cols-6 gap-6 max-w-6xl mx-auto"
          >
            {/* First row */}
            <div 
              className={`col-span-2 transition-all duration-700 delay-[0ms] ${
                firstRowReveal.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <StepCard step={steps[0]} number={1} />
            </div>
            <div 
              className={`col-span-2 transition-all duration-700 delay-[200ms] ${
                firstRowReveal.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <StepCard step={steps[1]} number={2} />
            </div>
            <div 
              className={`col-span-2 transition-all duration-700 delay-[400ms] ${
                firstRowReveal.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <StepCard step={steps[2]} number={3} />
            </div>
          </div>
          
          {/* Second row */}
          <div 
            ref={secondRowReveal.ref}
            className="grid grid-cols-6 gap-6 max-w-6xl mx-auto mt-6"
          >
            <div className="col-span-1"></div> {/* Empty column for spacing */}
            <div 
              className={`col-span-2 transition-all duration-700 delay-[200ms] ${
                secondRowReveal.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <StepCard step={steps[3]} number={4} />
            </div>
            <div 
              className={`col-span-2 transition-all duration-700 delay-[400ms] ${
                secondRowReveal.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <StepCard step={steps[4]} number={5} />
            </div>
            <div className="col-span-1"></div> {/* Empty column for spacing */}
          </div>
        </div>
        
        {/* Mobile layout - Hidden on desktop */}
        <div 
          ref={mobileReveal.ref} 
          className="md:hidden flex flex-col space-y-8 px-2"
        >
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`p-4 transition-all duration-700 ${
                mobileReveal.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <MobileStepCard step={step} number={index + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Card component for each step (desktop version)
function StepCard({ step, number }: { step: typeof steps[0], number: number }) {
  return (
    <div className="rounded-xl p-6 h-full">
      <div className="flex flex-col items-start">
        <div className="w-12 h-12 rounded-full bg-violet-a2 flex items-center justify-center mb-4">
          <i className={`${step.iconClass} text-violet-9 text-2xl`}></i>
        </div>
        <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
        <p className="text-gray-11 text-base leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}

// Mobile optimized card component - simplified
function MobileStepCard({ step, number }: { step: typeof steps[0], number: number }) {
  return (
    <div className="flex flex-col">
      <div className="w-12 h-12 rounded-full bg-violet-a2 flex items-center justify-center mb-4">
        <i className={`${step.iconClass} text-violet-9 text-2xl`}></i>
      </div>
      <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
      <p className="text-gray-11 text-base leading-relaxed">{step.description}</p>
    </div>
  );
} 