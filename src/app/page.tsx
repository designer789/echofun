import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhyEchoFun } from "@/components/why-echo-fun";
import { HowItWorksSimple } from "@/components/how-it-works-simple";
import { Tokenomics } from "@/components/tokenomics";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { GSAPLayout } from "@/components/gsap-layout";

export default function Home() {
  return (
    <GSAPLayout>
      <main className="relative">
        <Header />
        <Hero />
        <HowItWorksSimple />
        <WhyEchoFun />
        <Tokenomics />
        <FAQ />
        <Footer />
      </main>
    </GSAPLayout>
  );
}
