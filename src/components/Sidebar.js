"use client";
import { useRouter } from "next/navigation";
import { Home, ShieldAlert, Navigation, Calendar, Bell, User, Truck, Settings, HelpCircle, LogOut } from "lucide-react";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 bg-[#0c162d] text-slate-400 p-5 flex flex-col justify-between shrink-0 h-screen">
      <div className="space-y-7">
        <div className="flex items-center gap-3 px-2">
            <span className="text-2xl">🚑</span>
            <div>
              <h2 className="text-base font-black text-white leading-tight tracking-wide">AmbuDrive</h2>
              <p className="text-[10px] text-slate-500 font-bold uppercase">Driver Portal</p>
            </div>
        </div>

        <nav className="space-y-1">
            <button onClick={() => router.push("/dashboard")} className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold hover:bg-slate-800/50 transition-all">
                <div className="flex items-center gap-3"><Home className="w-4 h-4" /> Dashboard</div>
            </button>
            <button onClick={() => router.push("/notifications")} className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold hover:bg-slate-800/50 transition-all">
                <div className="flex items-center gap-3"><Bell className="w-4 h-4" /> Notifications</div>
            </button>
            <button onClick={() => router.push("/profile")} className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold hover:bg-slate-800/50 transition-all">
                <div className="flex items-center gap-3"><User className="w-4 h-4" /> Profile</div>
            </button>
            <button onClick={() => router.push("/support")} className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold hover:bg-slate-800/50 transition-all">
                <div className="flex items-center gap-3"><HelpCircle className="w-4 h-4" /> Support Center</div>
            </button>
        </nav>
      </div>

      <div className="bg-[#14213d] p-3 rounded-xl border border-slate-800/60 space-y-2">
         <button onClick={() => router.push("/login")} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-red-400 hover:bg-red-900/20 border border-red-900/20">
            <LogOut className="w-4 h-4" /> Logout
         </button>
      </div>
    </aside>
  );
}
