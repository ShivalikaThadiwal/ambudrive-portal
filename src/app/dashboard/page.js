"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import { 
  Home, ShieldAlert, Navigation, Calendar, Bell, User, 
  Truck, Settings,HelpCircle, LogOut, ChevronDown, X, ShieldCheck
} from "lucide-react";


export default function FullyInteractiveDashboard() {
  const router = useRouter();
  
  // States
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(null);

  // Pool of multiple live active requests
  const [liveRequests, setLiveRequests] = useState([
    {
      id: "REQ-901",
      patientName: "Ravi Sharma",
      phone: "+91 9876543210",
      pickup: "Connaught Place, New Delhi",
      landmark: "Near Starbucks Coffee",
      dropoff: "AIIMS Hospital",
      dropAddress: "Ansari Nagar, New Delhi",
      eta: "08 min",
      distance: "3.4 km",
      priority: "High Priority",
      badgeColor: "bg-red-50 text-red-600 border-red-100"
    },
    {
      id: "REQ-902",
      patientName: "Priya Patel",
      phone: "+91 9123456789",
      pickup: "Karol Bagh Metro Station",
      landmark: "Gate No. 3, Pusa Road",
      dropoff: "RML Hospital",
      dropAddress: "Connaught Place, New Delhi",
      eta: "11 min",
      distance: "4.8 km",
      priority: "Critical Distress",
      badgeColor: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      id: "REQ-903",
      patientName: "Amit Kumar",
      phone: "+91 9988776655",
      pickup: "Saket G-Block Market",
      landmark: "Opposite Select CityWalk Mall",
      dropoff: "Max Hospital Saket",
      dropAddress: "Press Enclave Marg, Saket",
      eta: "06 min",
      distance: "2.1 km",
      priority: "Cardiac Alert",
      badgeColor: "bg-purple-50 text-purple-600 border-purple-100"
    }
  ]);

  // Handler to drop/reject a single request and see remaining items
  const handleRejectRequest = (idToReject) => {
    setLiveRequests(prev => prev.filter(req => req.id !== idToReject));
  };

  // Detailed Modal Data for Top 4 Metric Cards
  const metricsDetailsData = {
    active: {
      title: "Active Emergency Requests",
      items: liveRequests.length > 0 
        ? liveRequests.map(r => `🚨 [${r.id}] ${r.patientName} - ${r.pickup} (${r.priority})`)
        : ["No active emergency requests in the server pool right now."]
    },
    trips: {
      title: "Today's Assigned Trips (5 Trips Scheduled)",
      items: [
        "🚙 Run 1: AIIMS Hub ➔ Safdarjung Enclave (Completed)",
        "🚙 Run 2: Max Saket ➔ Malviya Nagar (Completed)",
        "🚙 Run 3: RML Hospital ➔ Connaught Place (Completed)",
        "🚙 Run 4: Fortis ➔ Vasant Kunj (Completed)",
        "🚙 Run 5: Connaught Place ➔ AIIMS Hospital (Active - Live Now)"
      ]
    },
    completed: {
      title: "Completed Runs Database (4 Trips Finished)",
      items: [
        "✅ Verified: Patient transferred safely to AIIMS Emergency Bay-A (10:30 AM)",
        "✅ Verified: Cardiac backup case reached Max Hospital Saket (09:15 AM)",
        "✅ Verified: Routine triage drop at Safdarjung Trauma Centre (07:45 AM)",
        "✅ Verified: Emergency oxygen cylinder refill transit completed (06:00 AM)"
      ]
    },
    eta: {
      title: "ETA Grid Analytics Matrix",
      items: [
        "⏱️ Target Pickup ETA: 08 Mins via Janpath Speed Corridor",
        "⏱️ Hospital Delivery ETA: 14 Mins from Patient Location",
        "⏱️ Current Average Grid Sync Latency: 45 Seconds (Optimal Route)"
      ]
    }
  };

  const notificationItems = [
    { id: 1, msg: "🚨 High priority triage loop updated at Connaught Place" },
    { id: 2, msg: "🔋 Ambulance telemetry: Battery diagnostics check complete" }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex select-none text-slate-800 relative font-sans">
      
      {/* GLOBAL DETAILED METRICS MODAL POPUP */}
      {selectedMetric && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
              <h4 className="font-black text-sm uppercase tracking-wider text-blue-600">
                {metricsDetailsData[selectedMetric].title}
              </h4>
              <button onClick={() => setSelectedMetric(null)} className="p-1 hover:bg-slate-100 rounded-lg text-slate-400">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {metricsDetailsData[selectedMetric].items.map((item, index) => (
                <div key={index} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs font-semibold text-slate-700 leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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

         {/* Navigation links */}
<nav className="space-y-1">
  <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-all">
    <div className="flex items-center gap-3"><Home className="w-4 h-4" /> Dashboard</div>
  </button>
  
  <button onClick={() => router.push("/requests")} className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold hover:bg-slate-800/50 transition-all">
    <div className="flex items-center gap-3"><ShieldAlert className="w-4 h-4" /> Emergency Requests</div>
  </button>
  
  <button onClick={() => router.push("/navigation")} className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold hover:bg-slate-800/50 transition-all">
    <div className="flex items-center gap-3"><Navigation className="w-4 h-4" /> Live Navigation</div>
  </button>
  
  <button onClick={() => router.push("/trips")} className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold hover:bg-slate-800/50 transition-all">
    <div className="flex items-center gap-3"><Calendar className="w-4 h-4" /> Trip History</div>
  </button>

  <button onClick={() => router.push("/notifications")} className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold hover:bg-slate-800/50 transition-all">
    <div className="flex items-center gap-3"><Bell className="w-4 h-4" /> Notifications</div>
  </button>
  
  <button onClick={() => router.push("/profile")} className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold hover:bg-slate-800/50 transition-all">
    <div className="flex items-center gap-3"><User className="w-4 h-4" /> Profile</div>
  </button>
  
  <button onClick={() => router.push("/vehicle")} className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold hover:bg-slate-800/50 transition-all">
    <div className="flex items-center gap-3"><Truck className="w-4 h-4" /> Vehicle Status</div>
  </button>
  
  <button onClick={() => router.push("/settings")} className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold hover:bg-slate-800/50 transition-all">
    <div className="flex items-center gap-3"><Settings className="w-4 h-4" /> Settings</div>
  </button>
    {/* NEW SUPPORT CENTER BUTTON */}
  <button onClick={() => router.push("/support")} className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold hover:bg-slate-800/50 transition-all">
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
      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-red-400 hover:bg-red-900/20 border border-red-900/20"
    >
      <LogOut className="w-4 h-4" /> Logout
    </button>
        </div>
      </aside>

      {/* DASHBOARD MAIN BODY */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* HEADER AREA */}
        <header className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between shrink-0 relative">
          <div>
            <h1 className="text-base font-black text-slate-900 flex items-center gap-1.5">Good Morning, Driver 👋</h1>
            <p className="text-[11px] font-medium text-slate-400">Stay safe and save lives</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications Feed */}
            <div 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-100 cursor-pointer transition-all"
            >
              <Bell className="w-4 h-4 text-slate-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />

              {showNotifications && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-3 z-50 top-8 animate-in fade-in slide-in-from-top-2 duration-200">
                  <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-wider px-1">Recent Logs</h5>
                  {notificationItems.map(item => (
                    <div key={item.id} className="p-2 hover:bg-slate-50 rounded-lg border border-slate-100 text-[11px] font-medium text-slate-700">
                      {item.msg}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Profile Dropdown Trigger */}
            <div 
              className="flex items-center gap-2 border-l border-slate-100 pl-4 relative cursor-pointer select-none"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-xs overflow-hidden">
                👨‍✈️
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-black text-slate-800 leading-tight">Rahul Kumar</p>
                <p className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" /> Online
                </p>
              </div>
              <ChevronDown className="w-3 h-3 text-slate-400 hidden sm:block" />

              {/* ENHANCED PROFILE DROPDOWN MENU WITH FULL DETAILS AS PER IMAGE_916404.PNG STYLE */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 top-8 text-xs font-semibold space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  
                  {/* Name and Basic Identity */}
                  <div className="border-b border-slate-100 pb-2">
                    <p className="text-slate-400 text-[9px] font-black uppercase tracking-wider">Driver Profile</p>
                    <p className="text-sm font-black text-slate-800 leading-snug">Rahul Kumar</p>
                    <p className="text-[10px] text-slate-500 font-medium">Age: 32 Yrs | Gender: Male</p>
                  </div>

                  {/* License & Vehicle Credentials */}
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100/70 space-y-1 text-[11px]">
                    <p className="flex justify-between">
                      <span className="text-slate-400 font-bold">Vehicle No:</span>
                      <span className="text-slate-800 font-black">DL 1A 1234</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-400 font-bold">License No:</span>
                      <span className="text-slate-800 font-black">DL-14201800987</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-400 font-bold">Driver ID:</span>
                      <span className="text-slate-800 font-black">DRV-1024</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-400 font-bold">Rating:</span>
                      <span className="text-amber-600 font-black">★ 4.9 (High Performer)</span>
                    </p>
                  </div>

                  {/* Assigned Sector Area from image_916404.png */}
                  <div>
                    <p className="text-slate-400 text-[9px] font-black uppercase tracking-wider">Assigned Sector</p>
                    <p className="text-slate-800 font-black text-xs">New Delhi Zone Corridors</p>
                  </div>

                  {/* Navigation Logs Items */}
                  <div className="space-y-1 pt-1 border-t border-slate-100">
                    <button className="w-full text-left p-2 hover:bg-slate-50 rounded-xl text-slate-600 flex items-center justify-between">
                      
                    </button>
                  
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* METRICS & LAYOUT WORKSPACE */}
        <div className="p-6 space-y-6">
          
          {/* TOP 4 KEY METRIC CARDS ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div onClick={() => setSelectedMetric("active")} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-28 relative overflow-hidden cursor-pointer hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 text-red-500 rounded-xl">🚨</div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Requests</p>
                  <p className="text-xl font-black text-slate-800 mt-0.5">{liveRequests.length}</p>
                </div>
              </div>
              <p className="text-[10px] text-blue-600 font-bold hover:underline">Click to see all cases →</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500" />
            </div>

            <div onClick={() => setSelectedMetric("trips")} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-28 relative overflow-hidden cursor-pointer hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-500 rounded-xl">🚙</div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Today's Trips</p>
                  <p className="text-xl font-black text-slate-800 mt-0.5">5</p>
                </div>
              </div>
              <p className="text-[10px] text-blue-600 font-bold hover:underline">Click to view schedules →</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500" />
            </div>

            <div onClick={() => setSelectedMetric("completed")} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-28 relative overflow-hidden cursor-pointer hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 text-emerald-500 rounded-xl">✅</div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Completed</p>
                  <p className="text-xl font-black text-slate-800 mt-0.5">4</p>
                </div>
              </div>
              <p className="text-[10px] text-blue-600 font-bold hover:underline">Click to audit runs →</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500" />
            </div>

            <div onClick={() => setSelectedMetric("eta")} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-28 relative overflow-hidden cursor-pointer hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 text-amber-500 rounded-xl">⏱️</div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ETA (Next)</p>
                  <p className="text-xl font-black text-slate-800 mt-0.5">08 min</p>
                </div>
              </div>
              <p className="text-[10px] text-blue-600 font-bold hover:underline">Click to see metrics →</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500" />
            </div>
          </div>

          {/* MIDDLE WORKSPACE PANELS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
           {/* CURRENT EMERGENCY CONTAINER */}
<div className="lg:col-span-5 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-4">
  {liveRequests.length > 0 ? (
    (() => {
      const currentReq = liveRequests[0];
      return (
        <>
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black uppercase text-slate-400 tracking-wider">
              Emergency Request
            </h3>
            <span className={`border text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest animate-pulse ${currentReq.badgeColor}`}>
              {currentReq.priority}
            </span>
          </div>

          {/* Patient Info */}
          <div className="flex items-center gap-3 bg-slate-50/50 p-3 rounded-xl border border-slate-100/40">
            <div className="w-10 h-10 bg-blue-50 text-base rounded-full flex items-center justify-center">👤</div>
            <div>
              <h4 className="text-sm font-black text-slate-800">{currentReq.patientName} Case</h4>
              <p className="text-[11px] text-slate-400 font-semibold">{currentReq.phone}</p>
            </div>
          </div>

          <div className="space-y-3.5 text-xs">
            {/* Pickup */}
            <div className="flex items-start gap-2.5">
              <span className="text-sm mt-0.5">📍</span>
              <div>
                <p className="font-black text-slate-800">{currentReq.pickup}</p>
                <p className="text-[10px] text-slate-400 font-medium">{currentReq.landmark}</p>
              </div>
            </div>

            {/* Hospital Dropoff with Call Button */}
            <div className="flex items-center justify-between gap-2.5">
              <div className="flex items-start gap-2.5 flex-1">
                <span className="text-sm mt-0.5">🏥</span>
                <div>
                  <p className="font-black text-slate-800">{currentReq.dropoff}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{currentReq.dropAddress}</p>
                </div>
              </div>
              {/* Call Hospital Feature */}
              <a 
                href={`tel:${currentReq.hospitalPhone}`} 
                className="flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-[10px] font-bold hover:bg-blue-100 transition-all border border-blue-100"
              >
                📞 Call
              </a>
            </div>
          </div>

          {/* ETA & Distance */}
          <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl flex items-center justify-between text-center">
            <div className="flex-1">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Estimated Time</span>
              <span className="text-xs font-black text-slate-800 flex items-center justify-center gap-1 mt-0.5">⏱️ {currentReq.eta}</span>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="flex-1">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Distance</span>
              <span className="text-xs font-black text-slate-800 block mt-0.5">{currentReq.distance}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button 
              onClick={() => router.push("/navigation")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/10 transition-all active:scale-95"
            >
              ✓ Accept Request
            </button>
            <button 
              onClick={() => handleRejectRequest(currentReq.id)}
              className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-red-500/10 transition-all active:scale-95"
            >
              ✕ Reject (Next)
            </button>
          </div>
        </>
      );
    })()
  ) : (
    <div className="text-center py-16 flex flex-col items-center justify-center space-y-3">
      {/* ... Queue Cleared UI ... */}
    </div>
  )}
</div>
            {/* Live Navigation Map Layout */}
            <div className="lg:col-span-7 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase text-slate-400 tracking-wider">Live Navigation</h3>
                <button onClick={() => router.push("/navigation")} className="text-blue-600 text-[11px] font-black tracking-tight hover:underline">View Full Map →</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
                <div 
                  onClick={() => router.push("/navigation")}
                  className="sm:col-span-7 bg-[#eef2f6] h-48 rounded-2xl relative overflow-hidden p-4 flex items-center justify-center border border-slate-200/70 shadow-inner cursor-pointer hover:border-blue-400/60 hover:shadow-md transition-all duration-200 group"
                  title="Click to view original interactive map"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:18px_18px] opacity-60" />
                  
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/3 left-0 right-0 h-3 bg-white" />
                    <div className="absolute top-2/3 left-0 right-0 h-4 bg-white" />
                    <div className="absolute left-1/4 top-0 bottom-0 w-3 bg-white" />
                    <div className="absolute left-2/3 top-0 bottom-0 w-4 bg-white" />
                  </div>
                  
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path 
                      d="M 35,125 Q 90,65 140,105 T 225,45" 
                      fill="none" 
                      stroke="#2563eb" 
                      strokeWidth="3" 
                      className="stroke-linecap-round"
                      strokeDasharray="5"
                    />
                  </svg>

                  <div className="absolute bottom-5 left-5 flex flex-col items-center">
                    <span className="text-xl animate-bounce">🚑</span>
                    <span className="bg-slate-800 text-white font-black text-[7px] px-1 py-0.5 rounded shadow-sm mt-0.5 border border-slate-700">Your Unit</span>
                  </div>

                  <div className="absolute bottom-12 left-32 flex flex-col items-center">
                    <span className="text-xl">📍</span>
                    <span className="bg-red-600 text-white font-black text-[7px] px-1 py-0.5 rounded shadow-sm mt-0.5">Patient Spot</span>
                  </div>

                  <div className="absolute top-4 right-6 flex flex-col items-center">
                    <span className="text-xl">🏥</span>
                    <span className="bg-emerald-600 text-white font-black text-[7px] px-1 py-0.5 rounded shadow-sm mt-0.5">AIIMS Hospital</span>
                  </div>

                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-white/90 backdrop-blur-sm text-blue-600 font-bold text-[10px] px-2 py-1 rounded-lg shadow-sm border border-blue-100">
                      🔗 Click to expand map
                    </span>
                  </div>
                </div>

                <div className="sm:col-span-5 flex flex-col justify-center space-y-3.5 pl-2 border-l border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs shrink-0 font-bold">🚑</div>
                    <div>
                      <p className="text-[11px] font-black text-slate-800 leading-tight">Your Location</p>
                      <p className="text-[10px] text-slate-400 font-semibold">Ambulance Hub Zone</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-red-100 text-red-500 rounded-full flex items-center justify-center text-xs shrink-0 font-bold">👤</div>
                    <div>
                      <p className="text-[11px] font-black text-slate-800 leading-tight">Patient Location</p>
                      <p className="text-[10px] text-slate-400 font-semibold">
                        {liveRequests.length > 0 ? liveRequests[0].pickup.split(',')[0] : "None Pending"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs shrink-0 font-bold">🏥</div>
                    <div>
                      <p className="text-[11px] font-black text-slate-800 leading-tight">Hospital Destination</p>
                      <p className="text-[10px] text-slate-400 font-semibold">
                        {liveRequests.length > 0 ? liveRequests[0].dropoff : "None Pending"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <span>🚦</span> Traffic Level: <strong className="text-amber-600 font-black">Moderate</strong> via Main corridor
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM LAYOUT GRID MODULES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Driver Performance */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-black uppercase text-slate-400 tracking-wider">Driver Performance</h3>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">This Week</span>
              </div>
              
              <div className="flex items-center gap-6 py-2">
                <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-blue-600 stroke-linecap-round"
                      strokeDasharray="92, 100"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-black text-slate-800 leading-none">92%</span>
                    <span className="text-[7px] font-extrabold text-emerald-500 uppercase tracking-tight mt-0.5">Excellent</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] font-medium w-full">
                  <div><p className="text-slate-400">Total Trips</p><p className="font-black text-slate-800 text-xs">18</p></div>
                  <div><p className="text-slate-400">Completed</p><p className="font-black text-slate-800 text-xs">16</p></div>
                </div>
              </div>
            </div>

            {/* Vehicle Status */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3">
              <h3 className="text-xs font-black uppercase text-slate-400 tracking-wider">Vehicle Status</h3>
              
              <div className="space-y-2 text-xs font-medium">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-500">⛽ Fuel Level</span>
                    <span className="font-black text-slate-800">68%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: '68%' }} />
                  </div>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">🔋 Device Battery (Phone)</span>
                  <span className="text-emerald-600 text-[11px] font-black bg-emerald-50 px-2 py-0.5 rounded">87% Connected</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">⚙ Tire Pressure</span>
                  <span className="text-emerald-600 text-[11px] font-black bg-emerald-50 px-2 py-0.5 rounded">Good</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">🔧 Engine Status</span>
                  <span className="text-emerald-600 text-[11px] font-black bg-emerald-50 px-2 py-0.5 rounded">Good</span>
                </div>
              </div>
            </div>

            {/* Recent Trips Panel */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase text-slate-400 tracking-wider">Recent Trips</h3>
                <button onClick={() => router.push("/trips")} className="text-blue-600 text-[10px] font-black hover:underline">View All</button>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between items-center bg-slate-50/50 p-2 rounded-xl border border-slate-100/40">
                  <div>
                    <p className="font-black text-slate-800">AIIMS Hospital</p>
                    <p className="text-[10px] text-slate-400 font-medium">Safdarjung Enclave</p>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-600 font-black text-[10px] block">Completed</span>
                    <span className="text-[9px] text-slate-400 font-bold">10:30 AM</span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-slate-50/50 p-2 rounded-xl border border-slate-100/40">
                  <div>
                    <p className="font-black text-slate-800">Max Hospital</p>
                    <p className="text-[10px] text-slate-400 font-medium">Saket, New Delhi</p>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-600 font-black text-[10px] block">Completed</span>
                    <span className="text-[9px] text-slate-400 font-bold">09:15 AM</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}





