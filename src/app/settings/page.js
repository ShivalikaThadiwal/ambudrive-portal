// "use client";
// import React, { useState } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import { Sliders, Eye, Lock, BellRing, Bell, ShieldAlert, CheckCircle2, Clock, Info, Trash2, Home, Navigation, Calendar, User, Truck, Settings, HelpCircle, LogOut } from "lucide-react";

// export default function SettingsPage() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [soundAlerts, setSoundAlerts] = useState(true);
// const [liveRequests] = useState([]); // Fixed: Defined variable
//   const [showNotifications, setShowNotifications] = useState(false); // Fixed: Defined variable
//   const [showProfileMenu, setShowProfileMenu] = useState(false); // Fixed: Defined variable
//   return (
//     <div className="min-h-screen bg-[#f4f7fe] flex select-none">
//       {/* SIDEBAR PANEL */}
//             <aside className="w-64 bg-[#0c162d] text-slate-400 p-5 hidden md:flex flex-col justify-between shrink-0">
//               <div className="space-y-7">
//                 {/* Logo */}
//                 <div className="flex items-center gap-3 px-2">
//                   <span className="text-2xl">🚑</span>
//                   <div>
//                     <h2 className="text-base font-black text-white leading-tight tracking-wide">AmbuDrive</h2>
//                     <p className="text-[10px] text-slate-500 font-bold uppercase">Driver Portal</p>
//                   </div>
//                 </div>
      
//                 {/* Navigation links with Dynamic Highlight */}
//                <nav className="space-y-1">
//   <button onClick={() => router.push("/dashboard")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/dashboard" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
//     <div className="flex items-center gap-3"><Home className="w-4 h-4" /> Dashboard</div>
//   </button>
  
//   <button onClick={() => router.push("/requests")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/requests" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
//     <div className="flex items-center gap-3"><ShieldAlert className="w-4 h-4" /> Emergency Requests</div>

//   </button>
  
//   <button onClick={() => router.push("/navigation")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/navigation" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
//     <div className="flex items-center gap-3"><Navigation className="w-4 h-4" /> Live Navigation</div>
//   </button>
  
//   <button onClick={() => router.push("/trips")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/trips" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
//     <div className="flex items-center gap-3"><Calendar className="w-4 h-4" /> Trip History</div>
//   </button>

//   {/* Notification Highlight Logic */}
//   <button onClick={() => router.push("/notifications")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/notifications" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
//     <div className="flex items-center gap-3"><Bell className="w-4 h-4" /> Notifications</div>
    
//   </button>
  
//   <button onClick={() => router.push("/profile")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/profile" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
//     <div className="flex items-center gap-3"><User className="w-4 h-4" /> Profile</div>
//   </button>
  
//   <button onClick={() => router.push("/vehicle")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/vehicle" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
//     <div className="flex items-center gap-3"><Truck className="w-4 h-4" /> Vehicle Status</div>
//   </button>
  
//   <button onClick={() => router.push("/settings")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/settings" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
//     <div className="flex items-center gap-3"><Settings className="w-4 h-4" /> Settings</div>
//   </button>

//   <button onClick={() => router.push("/support")} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${pathname === "/support" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "hover:bg-slate-800/50"}`}>
//     <div className="flex items-center gap-3"><HelpCircle className="w-4 h-4" /> Support Center</div>
//   </button>
// </nav>
//               </div>
      
//               {/* Footer Meta */}
//               <div className="bg-[#14213d] p-3 rounded-xl border border-slate-800/60 space-y-2">
//                 <div className="flex items-center gap-1.5">
//                   <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
//                   <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Online</span>
//                 </div>
//                 <div className="text-[11px] text-slate-300 font-medium space-y-0.5">
//                   <p><span className="text-slate-500 font-bold">Driver ID:</span> DRV1024</p>
//                   <p><span className="text-slate-500 font-bold">Ambulance:</span> DL 1A 1234</p>
//                 </div>
//                 <button 
//                   onClick={() => router.push("/login")} 
//                   className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-red-400 hover:bg-red-900/20 border border-red-900/20 transition-all"
//                 >
//                   <LogOut className="w-4 h-4" /> Logout
//                 </button>
//               </div>
//             </aside>
//       {/* MAIN CONTENT */}
//       <main className="flex-1 p-6 space-y-6 overflow-y-auto">
//         <div>
//           <h1 className="text-xl font-black text-slate-900 tracking-tight">System Settings</h1>
//           <p className="text-xs text-slate-500">Configure application triggers, multi-tier sound alerts, and visibility protocols.</p>
//         </div>

//         <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100 max-w-2xl">
//           <div className="p-5 flex items-center justify-between">
//             <div className="space-y-0.5">
//               <h3 className="text-xs font-black text-slate-800">Critical Siren Ringers</h3>
//               <p className="text-[11px] text-slate-400 font-medium">Play distinct warning loops for highest category dispatches.</p>
//             </div>
//             <input 
//               type="checkbox" 
//               checked={soundAlerts} 
//               onChange={() => setSoundAlerts(!soundAlerts)}
//               className="w-9 h-5 bg-slate-200 checked:bg-blue-600 rounded-full appearance-none cursor-pointer relative before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 checked:before:translate-x-4 before:transition-all"
//             />
//           </div>

//           <div className="p-5 flex items-center justify-between">
//             <div className="space-y-0.5">
//               <h3 className="text-xs font-black text-slate-800">Dark Mode Protocol</h3>
//               <p className="text-[11px] text-slate-400 font-medium">Automatic interface switching for late night medical runs.</p>
//             </div>
//             <span className="text-[10px] font-black uppercase text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">System Synced</span>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Sliders, Bell, ShieldAlert, Navigation, Calendar, User, Truck, Settings, HelpCircle, LogOut, Home, Wifi, MapPin, Wrench } from "lucide-react";

export default function SettingsPage() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Settings States
  const [soundAlerts, setSoundAlerts] = useState(true);
  const [dispatchRadius, setDispatchRadius] = useState("10");
  const [offlineSync, setOfflineSync] = useState(true);
  const [maintenanceReminders, setMaintenanceReminders] = useState(true);

  return (
    <div className="min-h-screen bg-[#f4f7fe] flex select-none">
      {/* Sidebar (Same as before) */}
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
      <main className="flex-1 p-8 space-y-8 overflow-y-auto">
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">System Settings</h1>
          <p className="text-xs text-slate-500">Configure application triggers, multi-tier sound alerts, and visibility protocols.</p>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          
          {/* Dispatch & Connectivity */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-6">
            <h3 className="text-xs font-black text-slate-900 uppercase flex items-center gap-2"><MapPin className="w-4 h-4"/> Operational Coverage</h3>
            
            <div className="space-y-3">
              <label className="text-[11px] font-bold text-slate-600">Dispatch Radius (km)</label>
              <input 
                type="range" min="5" max="50" value={dispatchRadius} 
                onChange={(e) => setDispatchRadius(e.target.value)}
                className="w-full accent-blue-600"
              />
              <p className="text-xs font-black text-blue-600">{dispatchRadius} km radius active</p>
            </div>

            <ToggleRow title="Offline Data Sync" desc="Keep logs updated when network is unstable" state={offlineSync} setState={setOfflineSync} />
          </div>

          {/* Alerts & Maintenance */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-6">
            <h3 className="text-xs font-black text-slate-900 uppercase flex items-center gap-2"><Bell className="w-4 h-4"/> Alert Preferences</h3>
            
            <ToggleRow title="Critical Siren Loops" desc="Distinct warning for high-tier dispatches" state={soundAlerts} setState={setSoundAlerts} />
            <ToggleRow title="Maintenance Reminders" desc="Get notified for upcoming vehicle services" state={maintenanceReminders} setState={setMaintenanceReminders} />
          </div>

        </div>

        {/* System Protocols Section */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 max-w-4xl">
            <h3 className="text-xs font-black text-slate-900 uppercase mb-4 flex items-center gap-2"><Sliders className="w-4 h-4"/> System Protocols</h3>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="space-y-0.5">
                    <h4 className="text-xs font-black text-slate-800">Dark Mode Protocol</h4>
                    <p className="text-[11px] text-slate-400">Automatic interface switching for night shifts.</p>
                </div>
                <span className="text-[10px] font-black text-slate-400 bg-white px-3 py-1.5 rounded-lg border border-slate-200">SYSTEM SYNCED</span>
            </div>
        </div>
      </main>
    </div>
  );
}

// Helper Component for Clean Toggles
function ToggleRow({ title, desc, state, setState }) {
    return (
        <div className="flex items-center justify-between">
            <div className="space-y-0.5">
                <h4 className="text-xs font-black text-slate-800">{title}</h4>
                <p className="text-[11px] text-slate-400 font-medium">{desc}</p>
            </div>
            <button onClick={() => setState(!state)} className={`w-10 h-5 rounded-full transition-all relative ${state ? 'bg-blue-600' : 'bg-slate-200'}`}>
                <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${state ? 'left-5.5' : 'left-0.5'}`} />
            </button>
        </div>
    );
}