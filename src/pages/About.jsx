import React from 'react';
import { ChevronDown, School, Users, Info, BookOpen } from 'lucide-react';

export default function About() {
  // Cleaned up the data structure for better UI rendering
  const teamMembers = [
    {
      id: 1,
      name: "Kadi Mounia",
      role: "Cheffe du groupe",
      task: "Back-End & Design",
    },
    {
      id: 2,
      name: "Ferroukhi Mouhamed Sahnoun",
      role: "Développeur",
      task: "Front-End",
    },
    {
      id: 3,
      name: "Azrine Adem",
      role: "Développeur",
      task: "Front-End",
    },
    {
      id: 4,
      name: "Azil Malak",
      role: "Développeur",
      task: "Back-End",
    },
    {
      id: 5,
      name: "Bendana Nourhane Malak",
      role: "Développeur",
      task: "Back-End & Design",
    }
  ];

  return (
    <div className="w-full bg-[#D1D8E2] min-h-screen p-4 md:p-8 font-sans selection:bg-[#5D7B9D] selection:text-white">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-[#F0F4F8] rounded-[2.5rem] overflow-hidden shadow-2xl relative">

        {/* --- Navigation Bar --- */}
        <nav className="flex items-center justify-between px-8 py-6 absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black/40 to-transparent">
          <div className="flex items-center gap-3 text-white drop-shadow-md cursor-pointer hover:scale-105 transition-transform">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <School className="w-7 h-7" />
            </div>
            <span className="text-2xl font-bold tracking-tight">UniSpace</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-white/90 font-medium text-sm drop-shadow-md">
            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors group">
              Home <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <div className="flex items-center gap-1 text-white border-b-2 border-white pb-1 cursor-pointer font-bold">
              About
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors group">
              Service <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors group">
              Contact <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </div>
          </div>

          <button className="bg-white text-[#334E68] px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-[#5D7B9D] hover:text-white transition-all active:scale-95 duration-300">
            Sign-Up
          </button>
        </nav>

        {/* --- Hero Section --- */}
        <div className="relative h-[650px] flex items-center justify-center text-center px-6 overflow-hidden">
          {/* THE BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
            style={{ backgroundImage: "url('/top.png')" }}
          >
            {/* GRADIENT OVERLAY (Better text readability than a flat color) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a365d]/60 via-[#4A6B8A]/40 to-[#F0F4F8]"></div>
          </div>

          <div className="relative z-10 max-w-4xl mt-16">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
              CONNECTING CAMPUS COMMUNITY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A0B5C9]">
                TO IDEAS SPACES.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium mt-8 tracking-wide drop-shadow-lg opacity-90">
              Empowering students and faculty to optimize their campus experience.
            </p>
          </div>
        </div>

        {/* --- Content Sections --- */}
        <div className="p-8 md:p-14 space-y-12 bg-[#F0F4F8] relative z-10 -mt-10 rounded-t-[3rem]">

          {/* Platform Description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 hover:shadow-md transition-shadow duration-300 rounded-[2rem]">
            <div className="md:col-span-8 bg-white rounded-[2rem] p-10 md:p-12 shadow-sm border border-slate-100 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <Info className="text-[#5D7B9D] w-8 h-8" />
                <h2 className="text-3xl font-bold text-[#334E68]">About The Platform</h2>
              </div>
              <p className="text-[#627D98] leading-relaxed text-lg">
                Our platform was designed to simplify the way students use the university library.
                Instead of spending time searching for an available seat, students can quickly check availability,
                explore the library map, and reserve a space in just a few clicks.
                The platform helps students save time, reduce stress, and focus on what truly matters.
              </p>
            </div>

            <div className="md:col-span-4 bg-gradient-to-br from-[#5D7B9D] to-[#3A536F] rounded-[2rem] flex flex-col items-center justify-center text-white p-10 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="text-7xl lg:text-8xl font-black leading-none tracking-tighter drop-shadow-md">80%</span>
              <span className="text-sm font-bold mt-4 tracking-[0.2em] uppercase opacity-90 text-center">
                User Satisfaction
              </span>
            </div>
          </div>

          {/* Library Image and Text */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <div className="md:col-span-5 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white h-[400px] relative group">
              <img
                src="/library.png"
                alt="Library View"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#334E68]/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            <div className="md:col-span-7 bg-white rounded-[2rem] p-10 md:p-12 shadow-sm border border-slate-100 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-[#5D7B9D] w-8 h-8" />
                <h2 className="text-3xl font-bold text-[#334E68]">About The Library</h2>
              </div>
              <p className="text-[#627D98] leading-relaxed text-xl font-medium italic border-l-4 border-[#5D7B9D] pl-6 mb-6">
                "The university Library is 24/7 a vital space for students seeking a productive environment."
              </p>
              <p className="text-[#627D98] leading-relaxed text-lg">
                Our platform was created to solve finding issues by allowing students to easily find, reserve, and manage study spaces in real time, making the library experience more efficient and innovative.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-slate-100">
            <div className="flex flex-col items-center mb-16">
              <Users className="text-[#5D7B9D] w-10 h-10 mb-4" />
              <h2 className="text-3xl font-bold text-[#334E68] text-center uppercase tracking-[0.4em]">
                The Team
              </h2>
              <div className="w-24 h-1 bg-[#5D7B9D] mt-6 rounded-full opacity-50"></div>
            </div>

            {/* Flexbox used here to center the last row beautifully */}
            <div className="flex flex-wrap justify-center gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-[#F8FAFC] hover:bg-gradient-to-br hover:from-[#5D7B9D] hover:to-[#4A6B8A] hover:text-white text-[#334E68] p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 hover:border-transparent flex flex-col justify-between hover:-translate-y-2"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#E2E8F0] group-hover:bg-white/20 rounded-full flex items-center justify-center mb-6 transition-colors">
                      <span className="font-bold text-lg">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-white transition-colors">
                      {member.name}
                    </h3>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200 group-hover:border-white/20">
                    <p className="uppercase tracking-widest text-xs font-bold opacity-70 mb-1">{member.role}</p>
                    <p className="font-medium opacity-90">{member.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* --- Footer --- */}
        <footer className="py-10 text-center bg-white text-[#627D98] text-xs font-bold uppercase tracking-[0.4em]">
          <span className="opacity-70">UniSpace ESTIN</span>
          <span className="mx-3 opacity-30">|</span>
          <span className="opacity-70">2024</span>
        </footer>
      </div>
    </div>
  );
}