import { AnimatedHeadline } from "./AnimatedHeadline";

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 bg-[#fafafa]">
      {/* The Navbar area */}
      <nav className="flex justify-between items-center mb-16 border-b border-black pb-4">
        <span className="font-mono font-bold">VOL. 01</span>
        <span className="font-mono">FEB 2026</span>
      </nav>

      {/* Using your Animated Component */}
      <div className="mb-12">
        <AnimatedHeadline 
          text="KASI MAGAZINE" 
          className="text-9xl font-black uppercase leading-none" 
        />
        <p className="text-xl mt-4 max-w-xl text-gray-600">
          Bridging the gap between the streets and the cloud. 
          The future of Kasi tech starts here.
        </p>
      </div>

      {/* Bento Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
        <div className="md:col-span-2 bg-black rounded-3xl p-10 text-white flex flex-col justify-end">
          <span className="text-amber-400 font-mono mb-2">#Feature</span>
          <h2 className="text-4xl font-bold">KasiKapital: Building Wealth with Code</h2>
        </div>
        
        <div className="bg-white border-2 border-black rounded-3xl p-8 flex flex-col justify-between">
          <h3 className="text-2xl font-bold italic">Cognita dApp</h3>
          <p className="text-sm">The decentralized science revolution, explained.</p>
          <button className="bg-black text-white w-full py-3 rounded-full font-bold mt-4">
            Read More
          </button>
        </div>
      </div>
    </main>
  );
}