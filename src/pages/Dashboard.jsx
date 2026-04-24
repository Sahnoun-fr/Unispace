import React, { useState, useEffect } from 'react';
import { 
  School, LayoutDashboard, Calendar, Map,
  Search, Building, VolumeX, Clock, Star, LogOut, Settings
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState({ name: 'Mounia Kadi', email: 'Estin Student' });
  const [showSettings, setShowSettings] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      // Fallback email to role string if not explicitly an email with @
      setUser({
        name: parsedUser.name || 'User',
        email: parsedUser.email?.includes('estin.dz') ? 'Estin Student' : (parsedUser.email || 'Student')
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex bg-[#0A0909] font-sans text-slate-200 relative overflow-hidden">
      
      {/* Background glowing orbs for dynamic feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Sidebar */}
      <aside className="w-[260px] bg-white/[0.02] backdrop-blur-xl h-screen fixed left-0 top-0 flex flex-col justify-between py-8 border-r border-white/10 z-10 shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 px-8 mb-12">
            <div className="p-2 bg-blue-500/20 rounded-xl border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <School className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-white text-2xl font-bold tracking-wide">UniSpace</span>
          </div>

          {/* Navigation Menu */}
          <nav className="flex flex-col gap-2 relative px-4">
            
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold cursor-pointer shadow-[0_4px_12px_rgba(59,130,246,0.1)] transition-all">
              <LayoutDashboard className="w-[20px] h-[20px]" />
              <span className="text-[15px]">Dashboard</span>
            </div>



            <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/5 cursor-pointer transition-colors font-medium">
              <Calendar className="w-[20px] h-[20px]" />
              <span className="text-[15px]">Space Booking</span>
            </div>

            <div 
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/5 cursor-pointer transition-colors font-medium"
              onClick={() => navigate('/history')}
            >
              <Clock className="w-[20px] h-[20px]" />
              <span className="text-[15px]">My booking history</span>
            </div>

            <div className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/5 cursor-pointer transition-colors font-medium">
              <Map className="w-[20px] h-[20px]" />
              <span className="text-[15px]">Interactive Map</span>
            </div>

          </nav>
        </div>

        {/* User Profile */}
        <div className="px-6 flex items-center justify-between mt-auto relative">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300 flex items-center justify-center font-bold tracking-wider text-sm shadow-[0_0_15px_rgba(59,130,246,0.2)] border border-blue-500/30">
              {user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
            </div>
            <div className="max-w-[100px]">
              <p className="text-[13px] font-bold text-slate-200 leading-tight truncate">{user.name}</p>
              <p className="text-[11px] text-slate-500 font-medium truncate">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-0.5">
            <div className="relative">
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className={`p-2 rounded-lg transition-colors ${showSettings ? 'text-blue-400 bg-blue-500/10' : 'text-slate-400 hover:text-blue-400 hover:bg-blue-500/10'}`}
                title="Settings"
              >
                <Settings size={18} />
              </button>
              
              {showSettings && (
                <div className="absolute bottom-full right-0 mb-2 w-32 bg-[#1a1c23] border border-white/10 rounded-xl shadow-xl py-1.5 z-50 overflow-hidden backdrop-blur-xl">
                  <button className="w-full text-left px-4 py-2 text-[13px] text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                    My Profile
                  </button>
                  <button className="w-full text-left px-4 py-2 text-[13px] text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                    Settings
                  </button>
                </div>
              )}
            </div>
            <button 
              onClick={handleLogout}
              className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
              title="Log out"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[260px] flex-1 p-8 h-screen overflow-y-auto relative z-10 scrollbar-hide">
        
        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Capacity Card */}
          <div className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-5 flex items-center gap-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/5 hover:-translate-y-1 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] hover:border-blue-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
              <Building size={26} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-medium mb-1 uppercase tracking-widest">Library Capacity</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">64 %</span>
                <span className="text-xs font-semibold text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">Moderate</span>
              </div>
            </div>
          </div>

          {/* Quiet Zones Card */}
          <div className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-5 flex items-center gap-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/5 hover:-translate-y-1 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgba(32,201,151,0.1)] hover:border-emerald-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:shadow-[0_0_15px_rgba(32,201,151,0.4)] transition-all">
              <VolumeX size={26} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-medium mb-1 uppercase tracking-widest">Quiet Zones</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">10</span>
                <span className="text-xs font-medium text-slate-400">Locations</span>
              </div>
            </div>
          </div>

          {/* Peak Time Warning Card */}
          <div className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-5 flex items-center gap-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/5 hover:-translate-y-1 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgba(255,169,77,0.1)] hover:border-orange-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20 group-hover:shadow-[0_0_15px_rgba(255,169,77,0.4)] transition-all">
              <Clock size={26} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-medium mb-1 uppercase tracking-widest">Peak Time Warning</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">14:00</span>
                <span className="text-xs font-semibold text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]">Surge</span>
              </div>
            </div>
          </div>

          {/* Usability Score Card */}
          <div className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-5 flex items-center gap-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/5 hover:-translate-y-1 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgba(168,85,247,0.1)] hover:border-purple-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
              <Star size={26} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-medium mb-1 uppercase tracking-widest">Usability Score</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">78 %</span>
                <span className="text-xs font-semibold text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">Good</span>
              </div>
            </div>
          </div>

        </div>

        {/* Map UI Container */}
        <div className="bg-white/[0.02] backdrop-blur-xl rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 overflow-hidden relative group/map">
          
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

          {/* Map Header Toolbar */}
          <div className="flex flex-col md:flex-row items-center justify-between p-6 border-b border-white/10 gap-4 relative z-10">
            
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search for locals or spaces..." 
                className="w-full bg-black/40 border border-white/10 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 placeholder:text-slate-500 transition-all font-medium text-slate-200 shadow-inner"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-5 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold cursor-pointer transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/30 whitespace-nowrap">
                Silent Study
              </div>
              <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium hover:bg-white/10 hover:text-white cursor-pointer transition-all whitespace-nowrap">
                Group Work
              </div>
              <div className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium hover:bg-white/10 hover:text-white cursor-pointer transition-all whitespace-nowrap">
                Outlets
              </div>
            </div>

          </div>

          {/* Map Visuals */}
          <div className="relative w-full aspect-[2/1] md:aspect-[2.5/1] min-h-[400px] border-b border-white/5 p-8 flex items-center justify-center overflow-hidden bg-black/20">
            
            {/* Subtle grid background for architectural feel */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />

            {/* Base architectural diagram - using pure CSS shapes updated for dark theme */}
            <div className="absolute inset-8 border-[10px] border-slate-800/80 rounded-2xl flex shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
              
              {/* Left Wing */}
              <div className="w-[55%] h-full flex flex-col justify-between border-r-[10px] border-slate-800/80">
                {/* Room 1 */}
                <div className="h-[25%] border-b-[10px] border-slate-800/80 relative bg-white/[0.01] hover:bg-white/[0.03] transition-colors cursor-pointer group/room">
                   <div className="absolute top-[30%] left-[20%] w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] border border-red-400 group-hover/room:scale-125 transition-transform"></div>
                </div>
                {/* Room 2 */}
                <div className="h-[25%] flex border-b-[10px] border-slate-800/80">
                   <div className="w-[80%] border-r-[10px] border-slate-800/80 relative bg-white/[0.01] hover:bg-white/[0.03] transition-colors cursor-pointer group/room">
                     <div className="absolute top-[40%] left-[25%] w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.8)] border border-orange-300 group-hover/room:scale-125 transition-transform"></div>
                   </div>
                   <div className="w-[20%] bg-white/[0.01]"></div>
                </div>
                {/* Room 3 */}
                <div className="h-[50%] relative bg-white/[0.01] hover:bg-white/[0.03] transition-colors cursor-pointer group/room">
                   <div className="absolute top-[40%] left-[30%] w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] border border-emerald-300 group-hover/room:scale-125 transition-transform animate-pulse"></div>
                </div>
              </div>

              {/* Right Wing */}
              <div className="w-[45%] h-full flex flex-col justify-end p-[10px]">
                {/* Center Block */}
                <div className="w-full h-[85%] border-[10px] border-slate-800/80 rounded-xl relative flex items-center justify-center bg-white/[0.01] hover:bg-white/[0.03] transition-colors cursor-pointer group/room">
                   <div className="absolute top-[40%] left-[45%] w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] border border-emerald-300 group-hover/room:scale-125 transition-transform"></div>
                </div>
              </div>

              {/* Far Right Area */}
               <div className="absolute right-0 top-0 h-full w-[30%] bg-transparent flex flex-col">
                  {/* Top Block */}
                  <div className="h-[45%] border-[10px] border-t-0 border-r-0 border-slate-800/80 rounded-bl-xl relative flex items-center justify-center bg-white/[0.01] hover:bg-white/[0.03] transition-colors cursor-pointer group/room">
                     <div className="absolute top-[50%] left-[50%] w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] border border-emerald-300 group-hover/room:scale-125 transition-transform"></div>
                  </div>
                  {/* Spacing */}
                  <div className="h-[10%]"></div>
                  {/* Middle Thin Block */}
                  <div className="h-[15%] border-[10px] border-r-0 border-slate-800/80 rounded-l-xl bg-white/[0.01]"></div>
                  {/* Bottom Block */}
                  <div className="h-[15%] border-[10px] border-b-0 border-r-0 border-slate-800/80 mt-2 rounded-tl-xl relative bg-slate-800/40"></div>
               </div>

            </div>

             {/* Connecting Corridors Hacks */}
             <div className="absolute left-[50%] top-[40%] w-[120px] h-[30px] border-[10px] border-b-0 border-slate-800/80 border-t-transparent"></div>

            {/* Floating Legend */}
            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full px-5 py-2.5 flex items-center gap-5 border border-white/10 z-20">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div> Calm
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]"></div> Medium
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div> Crowded
              </div>
            </div>

            {/* Floating Information Bubble */}
            <div className="absolute bottom-8 right-8 lg:right-20 bg-blue-500/10 backdrop-blur-md shadow-[0_8px_32px_rgba(59,130,246,0.2)] rounded-xl px-5 py-3 border border-blue-500/30 animate-pulse-slow z-20 transform transition-all duration-700 hover:scale-105 cursor-pointer">
               <div className="flex flex-col">
                  <span className="text-sm font-bold text-white drop-shadow-md">RASA Club's Local</span>
                  <span className="text-[10px] text-blue-200 mt-0.5">Currently active</span>
               </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}

