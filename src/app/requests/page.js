"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter,usePathname } from "next/navigation";
import { 
  Home, ShieldAlert, Navigation, Calendar, Bell, User, 
  Truck, Settings,HelpCircle, LogOut, ChevronDown, X, ShieldCheck
} from "lucide-react";

export default function EmergencyRequestsPage() {
  const router = useRouter();
    const pathname = usePathname();
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [timeLeft, setTimeLeft] = useState(478);
  const [liveRequests] = useState([]); // Fixed: Defined variable
    const [showNotifications, setShowNotifications] = useState(false); // Fixed: Defined variable
    const [showProfileMenu, setShowProfileMenu] = useState(false); // Fixed: Defined variable
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const requests = [
    { id: 1, name: "Ravi Sharma", location: "Connaught Place, New Delhi", landmark: "Near Starbucks Coffee", time: "08 min", dist: "3.4 km", priority: "High" },
    { id: 2, name: "Anjali Devi", location: "Karol Bagh, New Delhi", landmark: "Near Ganga Ram Hospital", time: "12 min", dist: "4.2 km", priority: "Medium" },
    { id: 3, name: "Amit Singh", location: "Lajpat Nagar, New Delhi", landmark: "Near Metro Station", time: "15 min", dist: "5.1 km", priority: "Low" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!selectedRequest) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [selectedRequest]);

  const filteredRequests = requests.filter((req) => {
    if (priorityFilter === "All") return true;
    return req.priority === priorityFilter;
  });

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
  };

  const getPriorityStyle = (p) => {
    if (p === "High") return "bg-red-50 text-red-600 border-red-100";
    if (p === "Medium") return "bg-amber-50 text-amber-600 border-amber-100";
    return "bg-emerald-50 text-emerald-600 border-emerald-100";
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f7fe] text-slate-800 font-sans flex flex-col md:flex-row antialiased">
      
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
      {/* MAIN */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto space-y-6">
        <header className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
          <button onClick={() => router.push("/dashboard")} className="p-2 hover:bg-slate-100 rounded-xl text-slate-600 font-bold transition text-xs flex items-center gap-1">
            ← Back to Dashboard
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className={`bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4 ${selectedRequest ? 'lg:col-span-3' : 'lg:col-span-5'}`}>
            <div className="flex justify-between items-center border-b pb-4 border-slate-100 relative">
              <div>
                <h2 className="text-base font-black text-slate-900 tracking-tight">Active Emergency Requests</h2>
                <p className="text-[11px] text-slate-500 font-medium">Showing <span className="text-blue-600 font-bold">{priorityFilter}</span> logs</p>
              </div>
              <div className="relative" ref={dropdownRef}>
                <button onClick={() => setShowFilterDropdown(!showFilterDropdown)} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex items-center gap-1.5 hover:bg-slate-100 transition">
                  Filter: {priorityFilter} <span className="text-[9px]">▼</span>
                </button>
                {showFilterDropdown && (
                  <div className="absolute right-0 mt-1 w-36 bg-white border border-slate-100 rounded-xl shadow-xl z-30 py-1 overflow-hidden">
                    {["All", "High", "Medium", "Low"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setPriorityFilter(opt); setShowFilterDropdown(false); if(selectedRequest && opt !== "All" && selectedRequest.priority !== opt) setSelectedRequest(null); }}
                        className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-slate-50 transition ${priorityFilter === opt ? 'text-blue-600 bg-blue-50/40' : 'text-slate-600'}`}
                      >
                        {opt} Priority
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              {filteredRequests.map((req) => (
                <div key={req.id} className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white border rounded-2xl hover:shadow-md transition gap-4 ${selectedRequest?.id === req.id ? 'border-blue-500 bg-blue-50/10' : 'border-slate-100'}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">📍</span>
                    <div className="space-y-1">
                      <span className={`inline-block px-2 py-0.5 text-[9px] font-bold rounded-md border uppercase tracking-wider ${getPriorityStyle(req.priority)}`}>
                        {req.priority} Priority
                      </span>
                      <h4 className="text-xs font-black text-slate-900 tracking-tight">{req.location}</h4>
                    </div>
                  </div>
                  <button onClick={() => { setSelectedRequest(req); setTimeLeft(478); }} className="px-4 py-2 bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-sm transition">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* SIDE LOG VIEW DETAILS */}
          {selectedRequest && (
            <div className="lg:col-span-2 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex flex-col space-y-5">
              <div className="flex justify-between items-center">
                <span className={`px-2.5 py-0.5 text-[9px] font-bold rounded-md border uppercase ${getPriorityStyle(selectedRequest.priority)}`}>
                  {selectedRequest.priority} Priority
                </span>
                <button onClick={() => setSelectedRequest(null)} className="text-slate-400 font-bold text-sm">✕</button>
              </div>
              <h3 className="text-sm font-black text-slate-900">{selectedRequest.location}</h3>
              <div className="bg-slate-50 border p-4 rounded-xl text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase">⏱️ Time Left</p>
                <div className="font-mono font-black text-3xl text-red-500 mt-1">{formatTime(timeLeft)}</div>
              </div>
              <button 
                onClick={() => router.push("/navigation")}
                className="w-full py-3 bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md"
              >
                ✓ Accept Request (Go to Navigation)
              </button>
            </div>
          )}
        </div>
      </main>

    </div>
  );
}