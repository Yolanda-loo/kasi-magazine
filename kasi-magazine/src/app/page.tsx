import { AnimatedHeadline } from "@/app/AnimatedHeadline";
import { BentoCard } from "@/Components/BentoCard";

// ...existing code...

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 bg-[#fafafa]">
      {/* Magazine Header */}
      <nav className="flex justify-between items-center mb-16 border-b-2 border-black pb-4">
        <span className="font-mono font-bold text-lg">KASI MAGAZINE</span>
        <div className="space-x-6 font-mono text-sm hidden md:block">
          <a href="#" className="hover:underline">FINTECH</a>
          <a href="#" className="hover:underline">DAPPS</a>
          <a href="#" className="hover:underline">ABOUT</a>
        </div>
        <span className="font-mono underline">FEB 2026</span>
      </nav>

      {/* Hero Section */}
      <div className="mb-16">
        <AnimatedHeadline 
          text="THE NEW STANDARD" 
          className="text-8xl md:text-[12rem] font-black uppercase leading-[0.8] tracking-tighter" 
        />
      </div>

      {/* Interactive Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
        
        {/* KasiKapital Feature Card */}
        <BentoCard className="md:col-span-2 bg-black rounded-[2rem] p-10 text-white flex flex-col justify-end relative">
          <div className="absolute top-8 left-8 bg-amber-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
            Featured
          </div>
          <h2 className="text-5xl font-bold leading-tight">KasiKapital: Building Wealth <br/> with Code.</h2>
          <p className="mt-4 text-gray-400 font-mono italic">Written by: Future Architect</p>
        </BentoCard>

        {/* Cognita Card */}
        <BentoCard className="bg-white border-2 border-black rounded-[2rem] p-8 flex flex-col justify-between group">
          <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform">
            C
          </div>
          <div>
            <h3 className="text-2xl font-bold uppercase">Cognita dApp</h3>
            <p className="text-sm text-gray-600 mt-2">Integrating Decentralized Science into the local ecosystem.</p>
          </div>
          <div className="pt-4 border-t border-black/10 mt-4 flex justify-between items-center">
            <span className="font-bold text-sm">READ ARTICLE</span>
            <span>→</span>
          </div>
        </BentoCard>

        {/* Small Data Widget Card */}
        <BentoCard className="bg-amber-400 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center border-2 border-black">
          <h4 className="font-mono text-xs uppercase font-bold mb-2">Network Status</h4>
          <div className="text-6xl font-black">99%</div>
          <p className="text-sm font-medium mt-2">Uptime for Kasi Nodes</p>
        </BentoCard>

        {/* Portfolio Link Card */}
        <BentoCard className="md:col-span-2 bg-zinc-200 rounded-[2rem] p-10 flex items-center justify-between group">
          <div>
            <h2 className="text-4xl font-bold">The Future Architect</h2>
            <p className="text-gray-600">View the WeThinkCode_ Project Portfolio</p>
          </div>
          <div className="h-20 w-20 bg-black rounded-full flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform">
             ↗
          </div>
        </BentoCard>

      </div>
    </main>
  );
}