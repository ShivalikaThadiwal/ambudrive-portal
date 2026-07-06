"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Calendar, Search, ArrowLeftRight, User, Truck, Eye, Bell, ShieldAlert, Home, Navigation, 
   Settings,HelpCircle, LogOut, } from "lucide-react";

export default function TripHistoryPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState("");
  const [liveRequests] = useState([]); // Fixed: Defined variable
    const [showNotifications, setShowNotifications] = useState(false); // Fixed: Defined variable
    const [showProfileMenu, setShowProfileMenu] = useState(false); // Fixed: Defined variable
  const tripsData = [
    {
      id: "TRP1250",
      dateTime: "03 Jul 2026, 10:30 AM",
      patient: "Ravi Sharma",
      route: { from: "CP", to: "AIIMS" },
      driver: "Rahul Kumar",
      ambulance: "DL 1A 1234",
      distance: "3.4 km",
      status: "Completed",
    },
    {
      id: "TRP1249",
      dateTime: "03 Jul 2026, 09:15 AM",
      patient: "Mohit Gupta",
      route: { from: "Karol Bagh", to: "Max" },
      driver: "Rahul Kumar",
      ambulance: "DL 1A 1234",
      distance: "4.2 km",
      status: "Completed",
    },
    {
      id: "TRP1248",
      dateTime: "02 Jul 2026, 02:30 AM",
      patient: "Sanjay Verma",
      route: { from: "Lajpat Nagar", to: "Fortis" },
      driver: "Rahul Kumar",
      ambulance: "DL 1A 1234",
      distance: "5.3 km",
      status: "Completed",
    },
    {
      id: "TRP1247",
      dateTime: "01 Jul 2026, 06:45 PM",
      patient: "Neha Singh",
      route: { from: "CP", to: "RML Hospital" },
      driver: "Rahul Kumar",
      ambulance: "DL 1A 1234",
      distance: "2.8 km",
      status: "Cancelled",
    }
  ];

  const filteredTrips = tripsData.filter(trip => 
    trip.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      {/* MAIN CONTAINER */}
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">Trip History (With Driver & Ambulance Details)</h1>
            <p className="text-xs text-slate-500">Overview of archived logs, transit loops, and emergency dispatch status.</p>
          </div>
          
          {/* Quick Search */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input 
              type="text" 
              placeholder="Search Trip ID or Patient..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all shadow-sm text-slate-700"
            />
          </div>
        </div>

        {/* TRIP DATA TABLE */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                  <th className="py-4 px-5">Trip ID</th>
                  <th className="py-4 px-5">Date & Time</th>
                  <th className="py-4 px-5">Patient</th>
                  <th className="py-4 px-5">From → To</th>
                  <th className="py-4 px-5">Driver</th>
                  <th className="py-4 px-5">Ambulance</th>
                  <th className="py-4 px-5">Distance</th>
                  <th className="py-4 px-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-xs font-medium text-slate-700">
                {filteredTrips.map((trip) => (
                  <tr key={trip.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-5 font-black text-slate-900">{trip.id}</td>
                    <td className="py-4 px-5 text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {trip.dateTime}
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-800 font-semibold">{trip.patient}</td>
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-2 text-slate-600">
                        <span className="font-bold text-slate-800">{trip.route.from}</span>
                        <ArrowLeftRight className="w-3 h-3 text-slate-400" />
                        <span className="font-bold text-blue-600">{trip.route.to}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        {trip.driver}
                      </div>
                    </td>
                    <td className="py-4 px-5">
                      <span className="font-mono text-slate-600 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md text-[11px]">
                        {trip.ambulance}
                      </span>
                    </td>
                    <td className="py-4 px-5 font-bold text-slate-900">{trip.distance}</td>
                    <td className="py-4 px-5">
                      <span className={`inline-block text-[10px] font-black px-2.5 py-1 rounded-md ${
                        trip.status === "Completed" 
                          ? "bg-emerald-50 text-emerald-600" 
                          : "bg-red-50 text-red-600"
                      }`}>
                        {trip.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}