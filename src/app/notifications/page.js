"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Bell, ShieldAlert, CheckCircle2, Clock, Info, Trash2, Home, Navigation, Calendar, User, Truck, Settings, HelpCircle, LogOut } from "lucide-react";

export default function NotificationPage() {
  const router = useRouter();
  const pathname = usePathname(); // Dynamic path check ke liye
  
  const [notifications, setNotifications] = useState([
    { id: 1, type: "critical", title: "New Emergency Dispatch Triggered", message: "Patient Ravi Sharma requires immediate pickup at Dwarka Sector 12. Trauma response equipment advised.", time: "2 Mins Ago", unread: true },
    { id: 2, type: "success", title: "ER Bed Pre-Allocation Confirmed", message: "AIIMS Delhi Emergency Wing has approved Bed Ticket #AMBU-901 for incoming trauma route.", time: "15 Mins Ago", unread: true },
    { id: 3, type: "info", title: "Route Deviation Alert", message: "Heavy traffic detected on Sector 11 main corridor. Rerouting algorithms synced with live tracker.", time: "1 Hour Ago", unread: false },
  ]);

 const markAllAsRead = () => {
    setNotifications((prev) => 
      prev.map((n) => ({ ...n, unread: false }))
    );
  };
  const deleteNotification = (id) => setNotifications(notifications.filter(n => n.id !== id));
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">Notification Logs</h1>
            <p className="text-xs text-slate-500">Real-time status alerts and dispatcher priority updates.</p>
          </div>
          <button 
            onClick={markAllAsRead}
            className="bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold px-4 py-2 rounded-xl border border-slate-200 transition-all shadow-sm"
          >
            Mark all as read
          </button>
        </div>

        {/* NOTIFICATION FEED */}
        <div className="space-y-3 max-w-4xl">
          {notifications.map((n) => (
            <div 
              key={n.id} 
              className={`bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-start justify-between gap-4 transition-all ${
                n.unread ? "border-l-4 border-l-blue-500 pl-3.5" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-xl mt-0.5 ${
                  n.type === "critical" ? "bg-red-50 text-red-600" :
                  n.type === "success" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
                }`}>
                  {n.type === "critical" && <ShieldAlert className="w-4 h-4" />}
                  {n.type === "success" && <CheckCircle2 className="w-4 h-4" />}
                  {n.type === "info" && <Info className="w-4 h-4" />}
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-black text-slate-800">{n.title}</h4>
                    {n.unread && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-2xl">{n.message}</p>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold pt-1">
                    <Clock className="w-3 h-3" />
                    <span>{n.time}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => deleteNotification(n.id)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}

          {notifications.length === 0 && (
            <div className="text-center p-12 bg-white rounded-2xl border border-slate-100 text-xs font-medium text-slate-400">
              🔔 Your notification tray is clean.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}