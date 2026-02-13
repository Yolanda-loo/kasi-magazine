export default function Home() {
  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto bg-[#f8f9fa]">
      {/* Header */}
      <header className="mb-12 border-b-4 border-black pb-4">
        <h1 className="text-8xl font-black tracking-tighter uppercase">Kasi Magazine</h1>
        <p className="font-mono text-sm mt-2">EDITION 01 // FEB 2026 // PREMIER TECH HUB</p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
        {/* Main Feature */}
        <div className="md:col-span-2 md:row-span-2 bg-black text-white p-8 flex flex-col justify-end group cursor-pointer overflow-hidden relative">
          <h2 className="text-4xl font-bold z-10">KasiKapital: Redefining Fintech in 2026</h2>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
        </div>

        {/* Dynamic Widget (Your Data Engineering Skills) */}
        <div className="bg-amber-400 p-6 flex flex-col justify-between border-2 border-black">
          <span className="font-mono font-bold">LIVE METRICS</span>
          <div className="text-5xl font-black">10.4%</div>
          <p className="text-xs">Growth in Decentralized Science (Cognita dApp)</p>
        </div>

        {/* Secondary Story */}
        <div className="md:col-span-1 bg-white border-2 border-black p-6 hover:bg-gray-50 transition-colors">
          <h3 className="text-xl font-bold uppercase">The Future Architect Portfolio</h3>
          <p className="text-sm mt-2 text-gray-600 italic">Exploring the WeThinkCode_ Journey.</p>
        </div>
        
        {/* Bottom Wide Bar */}
        <div className="md:col-span-2 bg-blue-600 text-white p-6 flex items-center justify-between">
           <h3 className="text-2xl font-bold">JOIN THE KASI NETWORK</h3>
           <button className="bg-white text-black px-6 py-2 font-bold uppercase text-sm">Subscribe</button>
        </div>
      </div>
    </main>
  );
}