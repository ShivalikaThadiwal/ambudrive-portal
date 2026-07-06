"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState("phone"); // 'phone' or 'email'
  const [phoneNumber, setPhoneNumber] = useState("9876543210");
  const [emailAddress, setEmailAddress] = useState("driver@ambudrive.com");
  const [password, setPassword] = useState(""); // Blank rakha hai taaki start mein kuch na dikhe
  const [passwordStrength, setPasswordStrength] = useState("");

  // Handle Form Submission
  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  // Password Strength Logic
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    
    if (value.length === 0) {
      setPasswordStrength("");
    } else if (value.length > 8) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Weak");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row overflow-hidden font-sans select-none">
      
      {/* LEFT SIDE: Splash/Welcome Hero Panel */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-[#0c1a30] via-[#081225] to-[#040817] relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-900/40">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />
        
        <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-[10px] font-mono text-emerald-400 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          SYSTEM ACTIVE
        </div>

        <div className="text-center z-10 max-w-sm flex flex-col items-center">
          <div className="w-28 h-28 bg-blue-600/5 border border-blue-500/25 rounded-3xl shadow-[0_0_50px_rgba(37,99,235,0.2)] mb-6 flex items-center justify-center text-5xl select-none transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            🚑
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white mb-2">AmbuDrive</h1>
          <p className="text-lg font-bold text-blue-400 mb-2 tracking-wide">Driver Management Portal</p>
          <p className="text-xs text-slate-400 font-medium leading-relaxed px-4">Smart Emergency Response Platform. Stay safe and save lives.</p>
        </div>
      </div>

      {/* RIGHT SIDE: Authentication Terminal */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-start md:justify-center items-center p-6 pt-16 md:pt-20 bg-white text-slate-900 overflow-y-auto">
        <div className="w-full max-w-md px-4 mt-2 md:mt-0">
          
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2">Welcome Back 👋</h2>
            <p className="text-xs text-slate-500 font-medium mt-1">Login to continue your journey.</p>
          </div>

          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl mb-6 border border-slate-200">
            <button type="button" onClick={() => setAuthMode("phone")} className={`py-2.5 text-xs font-bold rounded-lg transition-all duration-200 ${authMode === "phone" ? "bg-blue-600 text-white shadow-md" : "text-slate-500 hover:text-slate-800"}`}>📞 Phone</button>
            <button type="button" onClick={() => setAuthMode("email")} className={`py-2.5 text-xs font-bold rounded-lg transition-all duration-200 ${authMode === "email" ? "bg-blue-600 text-white shadow-md" : "text-slate-500 hover:text-slate-800"}`}>✉️ Email</button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {authMode === "phone" ? (
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Mobile Number</label>
                <div className="flex gap-2">
                  <div className="w-16 px-2 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-center text-slate-600 flex items-center justify-center">+91</div>
                  <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="9876543210" className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition" />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email Address</label>
                <input type="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder="driver@ambudrive.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition" />
              </div>
            )}

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Password</label>
                {password && (
                  <span className={`text-[10px] font-bold tracking-wide ${passwordStrength === "Strong" ? "text-emerald-500" : "text-red-500"}`}>
                    {passwordStrength}
                  </span>
                )}
              </div>
              <div className="relative">
                <input type="password" value={password} onChange={handlePasswordChange} placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition pr-10" />
              </div>
            </div>

            <div className="flex justify-between items-center text-xs pt-1">
              <label className="flex items-center gap-2 text-slate-500 font-medium cursor-pointer select-none"><input type="checkbox" className="w-4 h-4 rounded border-slate-300 bg-slate-50 text-blue-600 focus:ring-0" /> Remember Me</label>
              <a href="#" className="text-blue-600 font-bold hover:underline">Forgot Password?</a>
            </div>

            <div className="flex justify-center pt-2">
              <button type="submit" className="w-5/6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl transition shadow-md shadow-blue-500/10">Login →</button>
            </div>
          </form>

          <div className="relative my-5 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
          
          </div>
        </div>
        <p className="text-center text-[10px] text-slate-400 mt-6 font-mono tracking-tight">© 2026 Ambulance Dispatch System. All Rights Reserved.</p>
      </div>
    </div>
  );
}