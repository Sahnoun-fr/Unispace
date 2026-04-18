import React, { useState, useEffect } from 'react';
import { 
  School, LayoutDashboard, Heart, Calendar, TrendingUp,
  Search, Building, VolumeX, Clock, Star, LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState({ name: 'Mounia Kadi', email: 'Estin Student' });
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
    <div className="min-h-screen flex bg-[#f3f6fa] font-sans">
      
      {/* Sidebar */}
      <aside className="w-[260px] bg-white h-screen fixed left-0 top-0 flex flex-col justify-between py-8 border-r border-[#eef2f6]">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 px-8 mb-12">
            <School className="w-8 h-8 text-[#5b8def]" />
            <span className="text-[#1a365d] text-2xl font-bold tracking-wide">UniSpace</span>
          </div>

          {/* Navigation Menu */}
          <nav className="flex flex-col gap-2 relative">
            
            <div className="flex items-center gap-4 px-8 py-3 bg-[#e8f0fe] border-l-4 border-[#3b82f6] text-[#3b82f6] font-semibold cursor-pointer">
              <LayoutDashboard className="w-[22px] h-[22px]" />
              <span className="text-[15px]">Dashboard</span>
            </div>

            <div className="flex items-center gap-4 px-8 py-3 text-slate-500 hover:text-slate-700 hover:bg-slate-50 cursor-pointer transition-colors font-medium">
              <Heart className="w-[22px] h-[22px] text-slate-400" />
              <span className="text-[15px]">My favorite</span>
            </div>

            <div className="flex items-center gap-4 px-8 py-3 text-slate-500 hover:text-slate-700 hover:bg-slate-50 cursor-pointer transition-colors font-medium">
              <Calendar className="w-[22px] h-[22px] text-slate-400" />
              <span className="text-[15px]">Space Booking</span>
            </div>

            <div className="flex items-center gap-4 px-8 py-3 text-slate-500 hover:text-slate-700 hover:bg-slate-50 cursor-pointer transition-colors font-medium">
              <TrendingUp className="w-[22px] h-[22px] text-slate-400" />
              <span className="text-[15px]">Analytics</span>
            </div>

          </nav>
        </div>

        {/* User Profile */}
        <div className="px-6 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#dbe6fd] text-[#3b82f6] flex items-center justify-center font-bold tracking-wider text-sm shadow-sm border border-blue-100">
              {user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="text-[13px] font-bold text-slate-800 leading-tight">{user.name}</p>
              <p className="text-[11px] text-slate-500 font-medium">{user.email}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            title="Log out"
          >
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[260px] flex-1 p-8 h-screen overflow-y-auto">
        
        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Capacity Card */}
          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-[#ecf2ff] flex items-center justify-center text-[#5b8def]">
              <Building size={24} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-bold mb-1 uppercase tracking-wider">Library Capacity</p>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-slate-800">64 %</span>
                <span className="text-xs font-bold text-emerald-500">Moderate</span>
              </div>
            </div>
          </div>

          {/* Quiet Zones Card */}
          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-[#e6fcf5] flex items-center justify-center text-[#20c997]">
              <VolumeX size={24} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-bold mb-1 uppercase tracking-wider">Quiet Zones Available</p>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-slate-800">10</span>
                <span className="text-xs font-semibold text-slate-400">Locations</span>
              </div>
            </div>
          </div>

          {/* Peak Time Warning Card */}
          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-[#fff4e6] flex items-center justify-center text-[#ffa94d]">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-bold mb-1 uppercase tracking-wider">Peak Time Warning</p>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-slate-800">14:00</span>
                <span className="text-xs font-bold text-[#ffa94d]">Expected Surge</span>
              </div>
            </div>
          </div>

          {/* Usability Score Card */}
          <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-[#f3f0ff] flex items-center justify-center text-[#9775fa]">
              <Star size={24} />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-bold mb-1 uppercase tracking-wider">Usability Score</p>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-slate-800">78 %</span>
                <span className="text-xs font-bold text-[#9775fa]">Good conditions</span>
              </div>
            </div>
          </div>

        </div>

        {/* Map UI Container */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden relative">
          
          {/* Map Header Toolbar */}
          <div className="flex flex-col md:flex-row items-center justify-between p-6 border-b border-slate-50 gap-4">
            
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="search for locals or spaces ..." 
                className="w-full bg-transparent border border-slate-200 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 placeholder:text-slate-400 transition-all font-medium text-slate-600"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-full bg-[#f0f4ff] text-[#3b82f6] text-xs font-bold cursor-pointer transition-colors shadow-sm whitespace-nowrap">
                Silent Study
              </div>
              <div className="px-4 py-2 rounded-full bg-[#f3f4f6] text-slate-600 text-xs font-bold hover:bg-slate-200 cursor-pointer transition-colors whitespace-nowrap">
                Group Work
              </div>
              <div className="px-4 py-2 rounded-full bg-[#f3f4f6] text-slate-600 text-xs font-bold hover:bg-slate-200 cursor-pointer transition-colors whitespace-nowrap">
                Outlets
              </div>
            </div>

          </div>

          {/* Map Visuals */}
          <div className="relative bg-[#f8fafc] w-full aspect-[2/1] md:aspect-[2.5/1] min-h-[400px] border-b border-slate-100 p-8 flex items-center justify-center overflow-hidden">
            
            {/* Base architectural diagram - using pure CSS shapes */}
            <div className="absolute inset-8 border-[12px] border-[#e2e8f0] rounded-xl flex">
              
              {/* Left Wing */}
              <div className="w-[55%] h-full flex flex-col justify-between border-r-[12px] border-[#e2e8f0]">
                {/* Room 1 */}
                <div className="h-[25%] border-b-[12px] border-[#e2e8f0] relative">
                   <div className="absolute top-[30%] left-[20%] w-4 h-4 rounded-full bg-red-500 shadow-sm border-2 border-white"></div>
                </div>
                {/* Room 2 */}
                <div className="h-[25%] flex border-b-[12px] border-[#e2e8f0]">
                   <div className="w-[80%] border-r-[12px] border-[#e2e8f0] relative">
                     <div className="absolute top-[40%] left-[25%] w-4 h-4 rounded-full bg-orange-400 shadow-sm border-2 border-white"></div>
                   </div>
                   <div className="w-[20%]"></div>
                </div>
                {/* Room 3 */}
                <div className="h-[50%] relative">
                   <div className="absolute top-[40%] left-[30%] w-4 h-4 rounded-full bg-green-500 shadow-sm border-2 border-white"></div>
                </div>
              </div>

              {/* Right Wing */}
              <div className="w-[45%] h-full flex flex-col justify-end p-[12px]">
                {/* Center Block */}
                <div className="w-full h-[85%] border-[12px] border-[#e2e8f0] rounded-xl relative flex items-center justify-center">
                   <div className="absolute top-[40%] left-[45%] w-4 h-4 rounded-full bg-green-500 shadow-sm border-2 border-white"></div>
                </div>
              </div>

              {/* Far Right Area */}
               <div className="absolute right-0 top-0 h-full w-[30%] bg-[#f8fafc] flex flex-col">
                  {/* Top Block */}
                  <div className="h-[45%] border-[12px] border-t-0 border-r-0 border-[#e2e8f0] rounded-bl-xl relative flex items-center justify-center">
                     <div className="absolute top-[50%] left-[50%] w-4 h-4 rounded-full bg-green-500 shadow-sm border-2 border-white"></div>
                  </div>
                  {/* Spacing */}
                  <div className="h-[10%]"></div>
                  {/* Middle Thin Block */}
                  <div className="h-[15%] border-[12px] border-r-0 border-[#e2e8f0] rounded-l-xl"></div>
                  {/* Bottom Block */}
                  <div className="h-[15%] border-[12px] border-b-0 border-r-0 border-[#e2e8f0] mt-2 rounded-tl-xl relative bg-[#e2e8f0]/40"></div>
               </div>

            </div>

             {/* Connecting Corridors Hacks */}
             <div className="absolute left-[50%] top-[40%] w-[120px] h-[30px] border-[12px] border-b-0 border-[#e2e8f0] border-t-[#f8fafc]"></div>

            {/* Floating Legend */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm shadow-md rounded-full px-4 py-2 flex items-center gap-4 border border-slate-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                <div className="w-3 h-3 rounded-full bg-green-500"></div> Calm
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                <div className="w-3 h-3 rounded-full bg-orange-400"></div> Medium
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                <div className="w-3 h-3 rounded-full bg-red-500"></div> Crowded
              </div>
            </div>

            {/* Floating Information Bubble */}
            <div className="absolute bottom-6 right-6 lg:right-16 bg-white shadow-lg rounded-xl px-5 py-3 border border-slate-100 animate-pulse-slow">
               <span className="text-sm font-bold text-slate-700">RASA Club's Local</span>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
