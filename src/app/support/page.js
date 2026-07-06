"use client";
import React from 'react';
import { MessageCircle, Phone, Mail, ChevronRight, ArrowLeft, Home, Navigation, Calendar, User, Truck, Settings, HelpCircle, LogOut, ShieldAlert, Bell } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export default function SupportPage() {
  const router = useRouter();
  const pathname = usePathname();

  const handleAction = (actionType) => {
    switch(actionType) {
      case 'chat': window.open('https://wa.me/your-number', '_blank'); break;
      case 'call': window.location.href = 'tel:108'; break;
      case 'email': window.location.href = 'mailto:support@ems.com'; break;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#f4f7fe] select-none">
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
      <main className="flex-1 h-full overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <button onClick={() => router.back()} className="flex items-center text-slate-400 hover:text-slate-800 text-sm font-bold transition-all">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Dashboard
          </button>

          <div>
            <h1 className="text-3xl font-black text-slate-800">Support Center</h1>
            <p className="text-slate-400 mt-1">Get immediate assistance for your operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div onClick={() => handleAction('chat')} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 cursor-pointer hover:border-blue-300 transition-all">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-500"><MessageCircle /></div>
              <div><p className="font-bold text-slate-800">Live Chat</p><p className="text-xs text-slate-400">Talk to dispatch</p></div>
            </div>
            <div onClick={() => handleAction('call')} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 cursor-pointer hover:border-red-300 transition-all">
              <div className="p-3 bg-red-50 rounded-xl text-red-500"><Phone /></div>
              <div><p className="font-bold text-slate-800">Emergency</p><p className="text-xs text-slate-400">Call 108 Now</p></div>
            </div>
            <div onClick={() => handleAction('email')} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 cursor-pointer hover:border-emerald-300 transition-all">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-500"><Mail /></div>
              <div><p className="font-bold text-slate-800">Email Us</p><p className="text-xs text-slate-400">support@ems.com</p></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-lg font-black text-slate-800 mb-6">Knowledge Base</h2>
            <div className="space-y-3">
              {[
                { title: "Updating Emergency Profile", detail: "Edit your license, vehicle info, and personal docs." },
                { title: "Billing & Payouts", detail: "Check your weekly trip earnings and pending payments." },
                { title: "Navigation Errors", detail: "Report GPS drift or incorrect hospital map markers." },
                { title: "Vehicle Maintenance", detail: "Submit a request for fuel, tire, or engine checks." }
              ].map((topic, i) => (
                <div key={i} onClick={() => alert("Opening guide for: " + topic.title)} className="group flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:bg-blue-50 cursor-pointer transition-all">
                  <div>
                    <p className="text-sm font-black text-slate-800">{topic.title}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{topic.detail}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}