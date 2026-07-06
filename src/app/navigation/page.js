"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter,usePathname } from "next/navigation";
import { X, MapPin, Navigation, Clock, Building2, AlertCircle, User, Activity, HeartPulse,Home, ShieldAlert,Calendar, Bell, Truck, Settings, HelpCircle, LogOut } from "lucide-react";

// Map component dynamic loading
const LiveMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[460px] bg-slate-100 flex items-center justify-center text-sm text-slate-500 font-medium">
      📍 Loading Live Tracker Routing Interface...
    </div>
  ),
});

export default function NavigationPage() {
  const router = useRouter();
  const pathname = usePathname();
  // Coordinates setups
  const driverCoords = [28.5921, 77.0469];   // Dwarka Sector 12 (Blue Marker)
  const patientCoords = [28.6120, 77.0320];  // Patient Location (Red Marker)

  const [activeModalData, setActiveModalData] = useState(null);
const [liveRequests] = useState([]); // Fixed: Defined variable
  const [showNotifications, setShowNotifications] = useState(false); // Fixed: Defined variable
  const [showProfileMenu, setShowProfileMenu] = useState(false); // Fixed: Defined variable
  const cardDetails = {
    location: {
      title: "Current Location Details",
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      subtitle: "Dwarka Sector 12, New Delhi",
      description: "Ambulance tracker telemetry is functional. GPS coverage is high with 98% accuracy metrics.",
      stats: [
        { label: "Zone Sector", value: "Dwarka Sector 12 Hub" },
        { label: "GPS State", value: "Active / Synced" }
      ]
    },
    distance: {
      title: "Distance Metrics",
      icon: <Navigation className="w-5 h-5 text-emerald-600" />,
      subtitle: "2.8 KM to Target Patient",
      description: "Shortest transit calculation bypasses heavy congestion zones on Sector 11 corridors.",
      stats: [
        { label: "Direct Track", value: "2.8 KM" },
        { label: "Traffic Phase", value: "Moderate Flow" }
      ]
    },
    eta: {
      title: "ETA Allocation",
      icon: <Clock className="w-5 h-5 text-amber-600" />,
      subtitle: "08 Minutes Remaining",
      description: "Computed live based on current dispatch speeds and traffic signal constraints.",
      stats: [
        { label: "Target Time", value: "08 Min" },
        { label: "Calculated Buffer", value: "1.2 Min" }
      ]
    },
    hospital: {
      title: "Hospital Registry",
      icon: <Building2 className="w-5 h-5 text-red-600" />,
      subtitle: "AIIMS Delhi Trauma Center",
      description: "Emergency room alert sent successfully. Pre-allocation of standard trauma bed is initiated.",
      stats: [
        { label: "Facility Alert", value: "Acknowledged" },
        { label: "ER Queue Status", value: "Available" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fe] flex relative select-none">
      
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
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-red-400 hover:bg-red-900/20 border border-red-900/20 transition-all"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      {/* MAIN LAYOUT WRAPPER */}
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">Live Navigation</h1>
            <p className="text-xs text-slate-500">Real-time emergency track route management.</p>
          </div>
       
        </div>

        {/* CLICKABLE INFO TOP BLOCKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div onClick={() => setActiveModalData(cardDetails.location)} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-blue-400 hover:shadow-md transition-all active:scale-[0.99]">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">📍 Current Location</p>
            <p className="text-sm font-black text-slate-800 mt-1">Dwarka Sector 12</p>
            <span className="text-[10px] text-blue-500 font-semibold mt-1 inline-block">Click to view logs →</span>
          </div>

          <div onClick={() => setActiveModalData(cardDetails.distance)} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-emerald-400 hover:shadow-md transition-all active:scale-[0.99]">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">🚙 Distance to Patient</p>
            <p className="text-sm font-black text-slate-800 mt-1">2.8 KM</p>
            <span className="text-[10px] text-emerald-500 font-semibold mt-1 inline-block">Click to view route →</span>
          </div>

          <div onClick={() => setActiveModalData(cardDetails.eta)} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-amber-400 hover:shadow-md transition-all active:scale-[0.99]">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">⏱️ ETA (Minutes)</p>
            <p className="text-sm font-black text-slate-800 mt-1">08 Minutes</p>
            <span className="text-[10px] text-amber-500 font-semibold mt-1 inline-block">Click to view timeline →</span>
          </div>

          <div onClick={() => setActiveModalData(cardDetails.hospital)} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-red-400 hover:shadow-md transition-all active:scale-[0.99]">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">🏥 Destination Hospital</p>
            <p className="text-sm font-black text-slate-800 mt-1">AIIMS Delhi</p>
            <span className="text-[10px] text-red-500 font-semibold mt-1 inline-block">Click to view ER status →</span>
          </div>
        </div>

        {/* MAP PANEL AND PATIENT/MANEUVER SIDEBAR */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
          <div className="lg:col-span-3 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="w-full h-full min-h-[460px] rounded-2xl overflow-hidden relative border border-slate-200">
              <LiveMap center={driverCoords} patientCenter={patientCoords} zoom={13} showRoute={true} />
            </div>
          </div>

          {/* LIGHT CLEAN THEME PANEL - WITH EXTENDED PATIENT DETAILS */}
          <div className="space-y-4 flex flex-col justify-start">
            
            {/* Maneuver Card */}
            <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 text-blue-600">
                <AlertCircle className="w-4 h-4" />
                <p className="text-[10px] font-bold uppercase tracking-wider">Next Maneuver</p>
              </div>
              <h4 className="text-sm font-black text-slate-800 mt-1.5">In 200 Meters</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Turn right onto Sector 11 Main Road layout point.</p>
            </div>

            {/* Enhanced Patient Details Card */}
            <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm space-y-3.5">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Patient Case</p>
                <div className="flex items-center justify-between mt-1">
                  <h4 className="text-base font-black text-slate-800">Ravi Sharma</h4>
                  <span className="bg-red-50 text-red-600 text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                    High Priority
                  </span>
                </div>
              </div>

              {/* Patient Meta Grid */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-50 text-xs">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>42 Yrs / Male</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600 justify-end">
                  <Navigation className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="font-bold text-slate-800">2.8 KM away</span>
                </div>
              </div>

              {/* Patient Live Vitals / Condition Logs */}
              <div className="bg-slate-50 p-2.5 rounded-xl space-y-1.5 border border-slate-100/60">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-red-600">
                  <HeartPulse className="w-3.5 h-3.5 animate-pulse" />
                  <span>Condition: Severe Breathlessness</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium pl-5">
                  <Activity className="w-3 h-3 text-slate-400" />
                  <span>SPO2: 88% | Pulse: 112 bpm</span>
                </div>
              </div>

              <div className="text-[10px] text-slate-400 text-center font-medium pt-1">
                ⚠️ Double check emergency response kits before arrival.
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* FIXED HIGH Z-INDEX CLEAN OVERLAY (Dismiss Button Removed) */}
      {activeModalData && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 transition-all z-[9999]">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-100 p-6 relative animate-in fade-in zoom-in-95 duration-150">
            
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                  {activeModalData.icon}
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 tracking-tight">{activeModalData.title}</h3>
                  <p className="text-xs font-bold text-slate-500">{activeModalData.subtitle}</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveModalData(null)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all border border-transparent hover:border-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {activeModalData.description}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 gap-2">
              {activeModalData.stats.map((stat, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-400 uppercase text-[9px]">{stat.label}</span>
                  <span className="font-black text-slate-700">{stat.value}</span>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
}