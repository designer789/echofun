"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "What is echo.fun?",
    answer: "echo.fun is a gamified, daily-launch LaunchPad + DEX protocol where only one token gets the chance to launch each day. Users can participate, predict the winner, and earn rewards — all in a fair, on-chain way."
  },
  {
    question: "How does the daily launch work?",
    answer: "Each day, multiple projects enter the launch pool, but only the one that hits its Base target first will launch. That token gets instant DEX listing with auto liquidity. Others fail, and all funds are refunded."
  },
  {
    question: "What happens if the token I joined doesn't launch?",
    answer: "No worries — if your token doesn't hit the funding goal, 100% of your contribution is refunded automatically. No partial losses, no strings attached."
  },
  {
    question: "What's the role of $ECHO?",
    answer: "$ECHO is the native utility token used for prediction, chat access, future staking, and reward systems. Predicting winners with $ECHO can earn you more $ECHO and leaderboard perks."
  },
  {
    question: "How does the prediction system work?",
    answer: "Before each launch, you can stake $ECHO to predict which project will win. If you're right, you share in the prediction reward pool funded by entry gas fees and the platform treasury."
  },
  {
    question: "Is there any risk of rug pulls or unfair launches?",
    answer: "No. All launches are contract-driven, fully on-chain, and automated. Funds for failed launches are refunded, and successful ones are matched with LP. No centralized control, no backdoor allocations."
  },
  {
    question: "How often can I participate?",
    answer: "Every. Single. Day. One new token launches every 24 hours — the game never stops."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 font-inter relative overflow-hidden">
      {/* Animated gradient backgrounds */}
      <div className="absolute -bottom-1/2 -right-1/4 w-3/4 h-3/4 bg-violet-a3 blur-[150px] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 bg-violet-a4 blur-[120px] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
            FAQ
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-transparent via-violet-9 to-transparent rounded-full mt-2 animate-pulse"></div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-5">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "relative bg-gradient-to-r p-[1px] rounded-xl overflow-hidden transition-all duration-300",
                openIndex === index 
                  ? "from-violet-9/40 via-violet-8/20 to-violet-9/40" 
                  : "from-gray-5/30 via-gray-4/10 to-gray-5/30"
              )}
            >
              {/* Spotlight effect */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-500",
                openIndex === index ? "opacity-40" : ""
              )} 
              style={{ 
                background: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(149, 132, 255, 0.15) 0%, transparent 100%)",
              }}
              />
              
              <div className={cn(
                "relative backdrop-blur-sm overflow-hidden rounded-xl transition-colors duration-300",
                openIndex === index ? "opacity-90" : "opacity-80" 
              )}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center group"
                  onMouseMove={(e) => {
                    const target = e.currentTarget.parentElement?.parentElement;
                    if (!target) return;
                    
                    const rect = target.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    
                    target.style.setProperty('--x', `${x}%`);
                    target.style.setProperty('--y', `${y}%`);
                  }}
                >
                  <div className="flex items-center">
                    <div className={cn(
                      "w-7 h-7 flex items-center justify-center rounded-full mr-4 transition-all duration-300",
                      openIndex === index 
                        ? "bg-violet-9 text-white" 
                        : "text-gray-11 hover:text-white"
                    )}>
                      <i className={cn(
                        "fa-solid fa-plus text-xs transition-transform duration-300",
                        openIndex === index ? "rotate-45" : ""
                      )}></i>
                    </div>
                    <h3 className={cn(
                      "text-lg font-semibold pr-8 transition-colors duration-300",
                      openIndex === index ? "text-white" : "text-gray-12 group-hover:text-white"
                    )}>
                      {item.question}
                    </h3>
                  </div>
                  <div className={cn(
                    "text-gray-11 flex-shrink-0 opacity-60",
                    openIndex === index ? "opacity-0" : ""
                  )}>
                    <i className="fa-solid fa-chevron-down transform transition-transform duration-300"></i>
                  </div>
                </button>
                
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300 px-6 pl-[4.25rem]",
                    openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                  )}
                >
                  <div className={cn(
                    "transform transition-all duration-300",
                    openIndex === index ? "translate-y-0" : "-translate-y-4"
                  )}>
                    <p className="text-gray-11 leading-relaxed">
                      {item.answer}
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