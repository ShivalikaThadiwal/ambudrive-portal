"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Truck, Fuel, Activity, Gauge, ChevronDown, ChevronUp, CheckCircle,CircleDot, Battery, Zap, Home, ShieldAlert, Navigation, Calendar, Bell, User, Settings, HelpCircle, LogOut } from "lucide-react";

export default function VehicleStatusPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [expandedId, setExpandedId] = useState(null);

  const vehicleData = [
    { id: "ambulance", title: "Ambulance Details", main: "DL 1A 1234", icon: Truck, color: "blue", subDetails: ["Model: Force Traveller ALS", "Last Serviced: 15 June 2026", "Status: Active"] },
    { id: "fuel", title: "Fuel Tank Volume", main: "84% (Diesel)", icon: Fuel, color: "emerald", subDetails: ["Range: 450 km", "Consumption: 12 km/L", "Last Refuel: 04 July 2026"] },
    { id: "oxygen", title: "Oxygen Cylinder", main: "92% Pressure", icon: Activity, color: "purple", subDetails: ["Capacity: 2000L", "Alert Threshold: < 20%", "Certified: ISO-9001"] },
    { id: "engine", title: "Engine Health", main: "Optimal (98%)", icon: Gauge, color: "amber", subDetails: ["Temperature: 85°C", "Oil Level: Normal", "Next Check: 10 Aug 2026"] },
  { 
    id: "brakes", 
    title: "Brake System", 
    main: "Responsive", 
    icon: ShieldAlert, // Brakes ke liye icon
    color: "red", 
    subDetails: ["Pad Wear: 25%", "Fluid Level: Optimal", "ABS Status: Active"] 
  },
  { 
    id: "lights", 
    title: "Emergency Lights", 
    main: "All Functional", 
    icon: Zap, // Lights ke liye icon
    color: "orange", 
    subDetails: ["Siren: Operational", "Beacon: Active", "Internal Lights: Functional"] 
  },    { 
    id: "tyres", 
    title: "Tyre Pressure", 
    main: "32 PSI (Avg)", 
    icon: CircleDot, // Tyre ke liye icon
    color: "rose", 
    subDetails: ["Front-Left: 32 PSI", "Front-Right: 32 PSI", "Rear: 32 PSI"] 
  },
  { 
    id: "battery", 
    title: "Battery Health", 
    main: "12.6V (Healthy)", 
    icon: Battery, // Battery ke liye icon
    color: "indigo", 
    subDetails: ["Voltage: Stable", "Last Charge: 05 July 2026", "Life: 85% Remaining"] 
  }
  ];

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
      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        <div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">Vehicle Status</h1>
          <p className="text-xs text-slate-500">Live operational monitoring logs for assigned emergency vehicle ambulance.</p>
        </div>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {vehicleData.map((item) => {
    // Ye line crucial hai: icon variable ko component ki tarah treat karna
    const Icon = item.icon; 
    const isExpanded = expandedId === item.id;
     return (
      <div key={item.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <button 
          onClick={() => setExpandedId(isExpanded ? null : item.id)}
          className="w-full p-5 flex items-center justify-between hover:bg-slate-50 transition-all"
        >
          <div className="flex items-center gap-4">
            {/* Yahan Icon ko dynamically render kiya ja raha hai */}
            <div className={`p-3 bg-${item.color}-50 text-${item.color}-600 rounded-xl`}>
              <Icon className="w-5 h-5" /> 
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.title}</p>
              <p className="text-sm font-black text-slate-900">{item.main}</p>
            </div>
          </div>
          {isExpanded ? <ChevronUp className="text-slate-400 w-4 h-4" /> : <ChevronDown className="text-slate-400 w-4 h-4" />}
        </button>
                
                {isExpanded && (
                  <div className="px-5 pb-5 pt-0 border-t border-slate-50 bg-slate-50/50">
                    <ul className="space-y-2 pt-4">
                      {item.subDetails.map((detail, idx) => (
                        <li key={idx} className="text-xs font-bold text-slate-600 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-emerald-500" /> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}