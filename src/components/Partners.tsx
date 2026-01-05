
const Partners = () => {
    // Ideally we would use actual SVGs here, but for this demo I'll use text styled to look like the brands
    // or generic icons if possible. The image shows grayscale text logos.
    
    // I am using simple SVGs to represent the logos to match the request "There are icons next to them"
    // These are simplified representations.

  return (
    <div className="flex justify-center px-4 mb-20">
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm flex flex-wrap md:flex-nowrap items-center w-full max-w-6xl mx-auto overflow-hidden">
        
        {/* Zapier */}
        <div className="flex-1 flex items-center justify-center py-8 px-4 border-b md:border-b-0 md:border-r border-gray-100">
            <div className="flex items-center gap-1.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                {/* Zapier Icon (simplified) */}
                <span className="font-bold text-2xl tracking-tight">zapier</span>
                <span className="text-[#FF4F00] text-xs align-top -mt-2">*</span> 
                {/* Actually Zapier logo has a specific icon, but text is dominant. Let's try to mimic the image exactly. 
                   The image shows logos. I will use SVG paths for better accruacy.
                */}
            </div>
        </div>

        {/* Spotify */}
        <div className="flex-1 flex items-center justify-center py-8 px-4 border-b md:border-b-0 md:border-r border-gray-100">
             <div className="flex items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#1DB954]"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.32 9.84-.6 13.561 1.56.42.18.6.72.18 1.26zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                <span className="font-bold text-xl tracking-tight">Spotify</span>
             </div>
        </div>

        {/* Zoom */}
        <div className="flex-1 flex items-center justify-center py-8 px-4 border-b md:border-b-0 md:border-r border-gray-100">
             <div className="flex items-center gap-1 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                {/* Zoom uses a custom typeface mostly, let's substitute with a recognizable icon + text */}
                <span className="font-bold text-2xl tracking-tighter text-[#2D8CFF]">zoom</span>
             </div>
        </div>

        {/* Amazon */}
        <div className="flex-1 flex items-center justify-center py-8 px-4 border-b md:border-b-0 md:border-r border-gray-100">
             <div className="flex flex-col items-start grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all relative">
                 <span className="font-bold text-xl tracking-tight leading-none mb-1">amazon</span>
                 <svg width="24" height="8" viewBox="0 0 50 15" fill="none" className="absolute -bottom-1 left-0 w-full text-[#FF9900]" stroke="currentColor" strokeWidth="3">
                    <path d="M5 5 Q 25 20 45 5" fill="none" />
                 </svg>
             </div>
        </div>

        {/* Adobe */}
        <div className="flex-1 flex items-center justify-center py-8 px-4 border-b md:border-b-0 md:border-r border-gray-100">
             <div className="flex items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="bg-[#FF0000] text-white p-1 font-bold text-xs w-6 h-6 flex items-center justify-center">A</div>
                <span className="font-bold text-xl tracking-tight text-[#FF0000]">Adobe</span>
             </div>
        </div>

        {/* Notion */}
        <div className="flex-1 flex items-center justify-center py-8 px-4 border-b md:border-b-0 md:border-r border-gray-100">
             <div className="flex items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l10.74-.653c.653-.047 1.073.326.98.98L17.208 19.6c-.14.933-.7 1.306-1.353.98l-1.96-1.12-7.838 4.293c-.933.467-1.493-.093-1.353-1.026l1.213-14.79c.047-.746-.56-1.026-1.446-1.166L2.64 6.26l1.82-2.053zm3.732 3.499l-.886 11.244 5.925-3.08-5.04-8.164zm1.539-.7l5.366 8.538 2.053-10.778-7.42 2.24z"/></svg>
                <span className="font-bold text-xl tracking-tight">Notion</span>
             </div>
        </div>

        {/* Netflix */}
        <div className="flex-1 flex items-center justify-center py-8 px-4">
             <div className="flex items-center gap-1 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <span className="font-bold text-xl tracking-tighter text-[#E50914] uppercase">Netflix</span>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
