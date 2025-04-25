"use client";
import { useLayoutEffect, useRef, useEffect } from "react";

// 定义各部分的CSS类名映射
const sectionClasses = {
  hero: "bg-hero",
  howItWorks: "bg-how-it-works",
  whyEchoFun: "bg-why-echo-fun",
  tokenomics: "bg-tokenomics",
  faq: "bg-faq",
  default: "bg-default"
};

export function GSAPLayout({ children }: { children: React.ReactNode }) {
  const bodyRef = useRef<HTMLDivElement>(null);
  
  // 在根HTML元素上添加CSS类
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      // 确保为HTML元素添加dark类以启用全部CSS变量
      document.documentElement.classList.add('dark');
      
      // 确保过渡效果平滑
      document.documentElement.style.transition = 'background-color 0.8s ease';
      document.body.style.transition = 'background-color 0.8s ease';
      
      // 设置初始背景色
      document.documentElement.classList.add(sectionClasses.default);
      document.body.classList.add(sectionClasses.default);
      
      return () => {
        document.documentElement.style.transition = '';
        document.body.style.transition = '';
      };
    }
  }, []);

  useEffect(() => {
    const setupScrollTrigger = async () => {
      // 动态导入 GSAP 和 ScrollTrigger
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      // 注册 ScrollTrigger 插件
      gsap.registerPlugin(ScrollTrigger);
      
      // 设置CSS类，用于切换背景色
      const addGlobalStyles = () => {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
          .bg-default { background-color: var(--gray-1); }
          .bg-hero { background-color: var(--gray-1); }
          .bg-how-it-works { background-color: var(--gray-2); }
          .bg-why-echo-fun { background-color: var(--gray-3); }
          .bg-tokenomics { background-color: var(--gray-2); }
          .bg-faq { background-color: var(--gray-1); }
        `;
        document.head.appendChild(styleElement);
        
        return () => {
          document.head.removeChild(styleElement);
        };
      };
      
      // 添加全局样式
      const removeStyles = addGlobalStyles();
      
      // 设置背景切换效果
      const initBackgrounds = () => {
        // 获取所有部分
        const sectionsData = [
          { id: "#hero", className: sectionClasses.hero, name: "hero" },
          { id: "#how-it-works", className: sectionClasses.howItWorks, name: "how-it-works" },
          { id: "#why-echo-fun", className: sectionClasses.whyEchoFun, name: "why-echo-fun" },
          { id: "#tokenomics", className: sectionClasses.tokenomics, name: "tokenomics" },
          { id: "#faq", className: sectionClasses.faq, name: "faq" }
        ];
        
        // 通过切换类名来应用背景色
        const applyBackgroundClass = (className: string) => {
          // 移除所有背景类
          Object.values(sectionClasses).forEach(cls => {
            document.documentElement.classList.remove(cls);
            document.body.classList.remove(cls);
          });
          
          // 应用当前背景类
          document.documentElement.classList.add(className);
          document.body.classList.add(className);
        };
        
        // 为每个部分设置背景色变化
        sectionsData.forEach((sectionData) => {
          const section = document.querySelector(sectionData.id);
          if (!section) {
            console.warn(`Section ${sectionData.id} not found`);
            return;
          }
          
          // 创建滚动触发器
          ScrollTrigger.create({
            trigger: section,
            start: "top 65%", // 当部分顶部到达视口65%位置时开始
            end: "bottom 35%", // 当部分底部到达视口35%位置时结束
            onEnter: () => {
              console.log(`Entering ${sectionData.name} - applying class ${sectionData.className}`);
              applyBackgroundClass(sectionData.className);
            },
            onLeave: () => {
              // 找到下一个部分
              const currentIndex = sectionsData.findIndex(s => s.id === sectionData.id);
              const nextIndex = currentIndex + 1;
              if (nextIndex < sectionsData.length) {
                console.log(`Leaving ${sectionData.name} - changing to next section ${sectionsData[nextIndex].name}`);
              }
            },
            onEnterBack: () => {
              console.log(`Entering back ${sectionData.name} - applying class ${sectionData.className}`);
              applyBackgroundClass(sectionData.className);
            },
            onLeaveBack: () => {
              // 找到上一个部分
              const currentIndex = sectionsData.findIndex(s => s.id === sectionData.id);
              const prevIndex = currentIndex - 1;
              if (prevIndex >= 0) {
                console.log(`Leaving back ${sectionData.name} - changing to previous section ${sectionsData[prevIndex].name}`);
              }
            },
            markers: false // 设置为true可查看触发点
          });
        });
      };
      
      // 页面加载后初始化背景设置
      if (document.readyState === 'complete') {
        initBackgrounds();
      } else {
        window.addEventListener('load', initBackgrounds);
        return () => {
          window.removeEventListener('load', initBackgrounds);
          removeStyles();
        };
      }
      
      return () => {
        removeStyles();
      };
    };
    
    setupScrollTrigger();
  }, []);
  
  return (
    <div ref={bodyRef} className="gsap-layout">
      {children}
    </div>
  );
} 