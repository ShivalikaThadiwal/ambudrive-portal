"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Bell, Home, Navigation, Calendar, User, Truck, Settings, HelpCircle, LogOut,Star, ShieldAlert } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const pathname = usePathname();
  const [liveRequests] = useState([]); // Fixed: Defined variable
    const [showNotifications, setShowNotifications] = useState(false); // Fixed: Defined variable
    const [showProfileMenu, setShowProfileMenu] = useState(false); // Fixed: Defined variable

  return (
    <div className="min-h-screen bg-[#f4f7fe] flex select-none">
       {/* SIDEBAR PANEL */}
            <aside className="w-64 bg-[#0c162d] text-slate-400 p-5 hidden md:flex flex-col justify-between shrink-0">
              <div className="space-y-7">
                {/* Logo */}
                <div className="flex items-center gap-3 px-2">
                  <span className="text-2xl">🚑</span>
                  <div>
                    <h2 className="text-base font-black text-white leading-tight tracking-wide">AmbuDrive</h2>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Driver Portal</p>
                  </div>
                </div>
      
                {/* Navigation links with Dynamic Highlight */}
               <nav className="space-y-1">
  <button onClick={() => router.push("/dashboard")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/dashboard" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
    <div className="flex items-center gap-3"><Home className="w-4 h-4" /> Dashboard</div>
  </button>
  
  <button onClick={() => router.push("/requests")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/requests" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
    <div className="flex items-center gap-3"><ShieldAlert className="w-4 h-4" /> Emergency Requests</div>
  </button>
  
  <button onClick={() => router.push("/navigation")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/navigation" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
    <div className="flex items-center gap-3"><Navigation className="w-4 h-4" /> Live Navigation</div>
  </button>
  
  <button onClick={() => router.push("/trips")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/trips" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
    <div className="flex items-center gap-3"><Calendar className="w-4 h-4" /> Trip History</div>
  </button>

  {/* Notification Highlight Logic */}
  <button onClick={() => router.push("/notifications")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/notifications" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
    <div className="flex items-center gap-3"><Bell className="w-4 h-4" /> Notifications</div>
    <span className="bg-blue-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">2</span>
  </button>
  
  <button onClick={() => router.push("/profile")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/profile" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
    <div className="flex items-center gap-3"><User className="w-4 h-4" /> Profile</div>
  </button>
  
  <button onClick={() => router.push("/vehicle")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/vehicle" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
    <div className="flex items-center gap-3"><Truck className="w-4 h-4" /> Vehicle Status</div>
  </button>
  
  <button onClick={() => router.push("/settings")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/settings" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
    <div className="flex items-center gap-3"><Settings className="w-4 h-4" /> Settings</div>
  </button>

  <button onClick={() => router.push("/support")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/support" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
    <div className="flex items-center gap-3"><HelpCircle className="w-4 h-4" /> Support Center</div>
  </button>
</nav>
              </div>
      
              {/* Footer Meta */}
              <div className="bg-[#14213d] p-3 rounded-xl border border-slate-800/60 space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Online</span>
                </div>
                <div className="text-[11px] text-slate-300 font-medium space-y-0.5">
                  <p><span className="text-slate-500 font-bold">Driver ID:</span> DRV1024</p>
                  <p><span className="text-slate-500 font-bold">Ambulance:</span> DL 1A 1234</p>
                </div>
                <button 
                  onClick={() => router.push("/login")} 
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-red-400 hover:bg-red-900/20 border border-red-900/20 transition-all"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            </aside>

    {/* MAIN CONTENT */}
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">Driver Profile</h1>
          <p className="text-xs text-slate-500">Manage your verified operator credentials, emergency response tiers, and badges.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Profile & Ratings */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center space-y-4 lg:col-span-1">
            <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold border-2 border-blue-200">
              RK
            </div>
            <div>
              <h2 className="text-base font-black text-slate-900">Rahul Kumar</h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">Advanced Trauma EMT Driver</p>
              
              <div className="flex items-center justify-center gap-1 mt-2 text-amber-500 font-black text-sm">
                <span className="text-slate-800">4.8</span> <Star size={14} fill="currentColor" /> 
                <span className="text-slate-400 font-bold text-[10px]">(128 Trips)</span>
              </div>
            </div>

            <div className="pt-2 flex justify-center gap-2">
              <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-2.5 py-1 rounded-md">Active Duty</span>
              <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-2.5 py-1 rounded-md">Tier-1 Responder</span>
            </div>
          </div>

          {/* RIGHT: Verified System Diagnostics */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4 lg:col-span-2">
            <h3 className="text-xs font-black uppercase text-slate-400 tracking-wider">Verified System Diagnostics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">License Reference</span>
                <p className="text-xs font-black text-slate-800">DL-14X20269874</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Operator Base</span>
                <p className="text-xs font-black text-slate-800">AIIMS Delhi Hub Alpha</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Blood Group</span>
                <p className="text-xs font-black text-slate-800">B +ve</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Experience</span>
                <p className="text-xs font-black text-slate-800">3.5 Years</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Contact Phone</span>
                <p className="text-xs font-black text-slate-800">+91 9876543210</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Dispatched Email</span>
                <p className="text-xs font-black text-slate-800">rahul.kumar@ambudrive.in</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}