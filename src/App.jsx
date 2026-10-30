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
    <div className="min-h-screen flex flex-col bg-[#16110d] text-[#f7f2ea] transition-colors">
      
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

      {/* Floating Toast Notification - Earthy beige & terracotta styling */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-20 right-4 z-50 max-w-sm rounded-2xl bg-[#241a13] border border-[#483a2e] shadow-2xl p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300 text-left"
        >
          {toast.type === 'success' && (
            <div className="w-8 h-8 rounded-full bg-[#cb922d]/20 text-[#dfaa43] border border-[#cb922d]/40 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#dfaa43]" />
            </div>
          )}
          {toast.type === 'error' && (
            <div className="w-8 h-8 rounded-full bg-[#8c3b17]/25 text-[#dc7545] border border-[#8c3b17]/50 flex items-center justify-center shrink-0">
              <AlertCircle className="w-4 h-4 text-[#dc7545]" />
            </div>
          )}
          {toast.type === 'info' && (
            <div className="w-8 h-8 rounded-full bg-[#483a2e] text-[#e2d6c6] border border-[#625040] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#ecc26b]" />
            </div>
          )}

          <div className="text-xs text-[#f7f2ea] font-medium leading-snug">
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
