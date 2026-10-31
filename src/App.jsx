import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import DemoBanner from './components/DemoBanner';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ResidentDashboard from './components/resident/ResidentDashboard';
import CompanyAdminView from './components/company/CompanyAdminView';
import ShopOwnerView from './components/shop/ShopOwnerView';
import RwaView from './components/rwa/RwaView';
import PilotDashboard from './components/pilot/PilotDashboard';
import AuthModal from './components/AuthModal';
import VoucherModal from './components/VoucherModal';
import QuickDemoBar from './components/QuickDemoBar';
import { Sparkles, AlertCircle, CheckCircle2, Info } from 'lucide-react';

function AppContent() {
  const { activeView, toast } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee] dark:bg-[#160e09] text-[#23150d] dark:text-[#faf6ee] transition-colors">
      
      {/* Alliance One 2026 Competition & Demo Data Banner */}
      <DemoBanner />

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main View Router */}
      <main className="flex-1 pb-20">
        {activeView === 'landing' && <LandingPage />}
        {activeView === 'resident' && <ResidentDashboard />}
        {activeView === 'company_admin' && <CompanyAdminView />}
        {activeView === 'shop_owner' && <ShopOwnerView />}
        {activeView === 'rwa' && <RwaView />}
        {activeView === 'pilot' && <PilotDashboard />}
      </main>

      {/* Interactive Global Modals */}
      <AuthModal />
      <VoucherModal />

      {/* Live Presentation 6-Step Pitch Walkthrough Drawer */}
      <QuickDemoBar />

      {/* Floating Toast Notification - Ivory, Beige & Deep Atlassian styling */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-20 right-4 z-50 max-w-sm rounded-2xl bg-white dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] shadow-xl p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300 text-left"
        >
          {toast.type === 'success' && (
            <div className="w-8 h-8 rounded-full bg-[#deebff] dark:bg-[#0c2340] text-[#0747a6] dark:text-[#2684ff] border border-[#b3d4ff] dark:border-[#0052cc]/40 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#0747a6] dark:text-[#2684ff]" />
            </div>
          )}
          {toast.type === 'error' && (
            <div className="w-8 h-8 rounded-full bg-[#faede6] dark:bg-[#381e14] text-[#b84f22] dark:text-[#ea8558] border border-[#e8c6b5] dark:border-[#522b1c] flex items-center justify-center shrink-0">
              <AlertCircle className="w-4 h-4 text-[#b84f22] dark:text-[#ea8558]" />
            </div>
          )}
          {toast.type === 'info' && (
            <div className="w-8 h-8 rounded-full bg-[#f1e9dc] dark:bg-[#2c1d15] text-[#23150d] dark:text-[#faf6ee] border border-[#ddd0be] dark:border-[#4e3526] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff]" />
            </div>
          )}

          <div className="text-xs text-[#23150d] dark:text-[#faf6ee] font-medium leading-snug">
            {toast.message}
          </div>
        </div>
      )}

    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
