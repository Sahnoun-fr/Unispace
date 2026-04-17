import { School } from 'lucide-react';

const UniSpacePortal = () => {
  return (
    <div className="min-h-screen bg-[#D1D5DB] flex items-center justify-center p-4 font-sans">
      {/* Main Container */}
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] shadow-2xl flex flex-col min-h-[600px]">
        
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dea03f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')`, // Replace with your actual ESTIN building image
          }}
        >
          {/* Blue Gradient Overlay - Matches the image style */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#5D7B9D]/90 via-[#4A6B8A]/80 to-[#2D4A63]/90"></div>
        </div>

        {/* --- Header Area --- */}
        <header className="relative z-10 w-full px-8 py-6 flex items-center bg-white/10 backdrop-blur-sm border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-1 border-2 border-white rounded-lg">
              <School className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">UniSpace</h1>
          </div>
        </header>

        {/* --- Main Content Area --- */}
        <main className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6 pb-12">
          <div className="space-y-2 mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-wide uppercase">
              WELCOME To <br />
              <span className="inline-block mt-2">UniSpace !</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-light mt-6">
              Are you an admin or a user ?
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl justify-center">
            <button className="flex-1 bg-[#DDE2E8]/90 hover:bg-white backdrop-blur-md text-[#334E68] text-2xl font-bold py-6 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-white/10 uppercase tracking-widest">
              Admin
            </button>
            <button className="flex-1 bg-[#DDE2E8]/90 hover:bg-white backdrop-blur-md text-[#334E68] text-2xl font-bold py-6 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-white/10 uppercase tracking-widest">
              User
            </button>
          </div>
        </main>

        {/* --- Footer Area --- */}
        <footer className="relative z-10 w-full bg-[#E5ECF3] px-10 py-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Feedback */}
            <div>
              <h4 className="text-[#334E68] font-bold text-sm tracking-tighter uppercase">Feedback</h4>
              <button className="text-[#627D98] text-sm hover:text-indigo-600 transition-colors">Report an issue</button>
            </div>

            {/* Help Center */}
            <div>
              <h4 className="text-[#334E68] font-bold text-sm tracking-tighter uppercase">Help Center</h4>
              <button className="text-[#627D98] text-sm hover:text-indigo-600 transition-colors">FAQs</button>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[#334E68] font-bold text-sm tracking-tighter uppercase">Legal</h4>
              <div className="flex gap-1 text-[#627D98] text-sm">
                <button className="hover:text-indigo-600">Terms</button>
                <span>|</span>
                <button className="hover:text-indigo-600">Privacy Policy</button>
              </div>
            </div>

            {/* Connect */}
            <div className="flex items-center md:justify-end">
              <h4 className="text-[#334E68] font-bold text-sm tracking-tighter uppercase">Connect</h4>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default UniSpacePortal;
