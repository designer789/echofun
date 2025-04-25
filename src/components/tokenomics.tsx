import React from "react";

const tokenAllocations = [
  { category: "Fair Launch", percentage: 70 },
  { category: "Community Fund & Prediction Rewards", percentage: 10 },
  { category: "DEX Liquidity", percentage: 5 },
  { category: "Ecosystem Growth & Partnerships", percentage: 10 },
  { category: "Team & Contributors", percentage: 5 }
];

const tokenUtilities = [
  "Gas fee payment for launch participation",
  "Prediction rewards and leaderboard incentives",
  "Access to gated chat and special community events",
  "Future staking & LP farming perks"
];

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 font-inter relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute -top-1/3 -left-1/4 w-2/3 h-2/3 bg-violet-a3 blur-[150px] rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
            Tokenomics
          </h2>
          <div className="h-1 w-64 bg-gradient-to-r from-transparent via-violet-9 to-transparent rounded-full mt-2 mb-4"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-3">
              Token Name: <span className="text-violet-9">$ECHO</span>
            </h3>
            <p className="text-xl text-gray-11">
              Total Supply: 1,000,000,000 $ECHO
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Token Allocation */}
            <div className="rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Token Allocation</h3>
              <div className="space-y-4">
                {tokenAllocations.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-11">{item.category}</span>
                      <span className="text-white font-medium">{item.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-3 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-violet-9 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Token Utility */}
            <div className="rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Utility</h3>
              <ul className="space-y-4">
                {tokenUtilities.map((utility, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-violet-9/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <i className="fa-solid fa-check text-violet-9 text-xs"></i>
                    </div>
                    <p className="text-gray-11">{utility}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 