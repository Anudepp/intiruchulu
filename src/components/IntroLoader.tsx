export default function IntroLoader() {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#1f1a17] flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-amber-500/20 blur-3xl rounded-full animate-pulse" />

      {/* Floating Grain */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />

      {/* Content */}
      <div className="relative flex flex-col items-center">

        {/* Logo Circle */}
        <div className="relative mb-6">

          {/* Rotating Border */}
          <div className="absolute inset-0 rounded-full border border-amber-400/30 animate-spin-slow" />

          {/* Inner Circle */}
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#4a2c22] to-[#2d1b16] flex items-center justify-center shadow-[0_0_60px_rgba(245,158,11,0.25)] border border-amber-500/20">

            <span className="text-4xl font-black text-amber-300 font-telugu">
              ఇరు
            </span>

          </div>
        </div>

        {/* Brand */}
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#f8f5ef]">
          ఇంటి రుచులు
        </h1>

        <p className="mt-2 text-sm md:text-base tracking-[0.35em] uppercase text-amber-400/80 font-semibold">
          Homemade Telugu Flavors
        </p>

        {/* Premium Loading Line */}
        <div className="mt-10 w-52 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-loader" />
        </div>

      </div>
    </div>
  );
}