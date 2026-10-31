import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DEMO_SOCIETIES, DEMO_COMPANIES } from '../data/seedData';
import { X, Sparkles, LogIn, UserPlus, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AuthModal() {
  const {
    isAuthModalOpen,
    setIsAuthModalOpen,
    authMode,
    setAuthMode,
    signUpUser,
    loginUser,
    switchPersona,
  } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [society, setSociety] = useState('Sobha Carnation');
  const [company, setCompany] = useState('Flipkart Tech');
  const [flatNumber, setFlatNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (authMode === 'signup') {
      if (!name.trim()) {
        setErrorMsg('Please enter your full name.');
        return;
      }
      if (!email.trim() || !email.includes('@')) {
        setErrorMsg('Please enter a valid email address.');
        return;
      }
      if (!password || password.length < 4) {
        setErrorMsg('Please provide a password of at least 4 characters.');
        return;
      }

      const res = signUpUser({
        name,
        email,
        password,
        society,
        company,
        flatNumber,
      });

      if (!res.success) {
        setErrorMsg(res.error || 'Failed to create account.');
      }
    } else {
      if (!email.trim()) {
        setErrorMsg('Please enter your email.');
        return;
      }
      if (!password) {
        setErrorMsg('Please enter your password.');
        return;
      }

      const res = loginUser({ email, password });
      if (!res.success) {
        setErrorMsg(res.error || 'Login failed. Check your email or use a Demo Account below.');
      }
    }
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsAuthModalOpen(false);
          setErrorMsg('');
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#23150d]/60 dark:bg-[#160e09]/85 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-[#faf6ee] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] shadow-2xl p-6 sm:p-7 text-left">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            setIsAuthModalOpen(false);
            setErrorMsg('');
          }}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#6b584a] dark:text-[#b4a494] hover:text-[#23150d] dark:hover:text-[#faf6ee] hover:bg-[#f1e9dc] dark:hover:bg-[#221610] transition-colors"
          aria-label="Close authentication modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0052cc] dark:bg-[#2684ff]"></span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#0052cc] dark:text-[#2684ff] font-black">
              Mohalla Mandi Bangalore
            </span>
          </div>
          <h3 className="text-xl font-extrabold font-heading text-[#23150d] dark:text-[#faf6ee]">
            {authMode === 'signup' ? 'Create Resident Account' : 'Log In to Society Portal'}
          </h3>
          <p className="text-xs text-[#5c4738] dark:text-[#ddd0be] mt-1 font-medium">
            {authMode === 'signup'
              ? 'Join free. New residents start with 30 Mohalla Mudra credits.'
              : 'Access your society events, wallet, and company league.'}
          </p>
        </div>

        {/* Bonus Callout for Signup */}
        {authMode === 'signup' && (
          <div className="mb-4 p-3 rounded-xl bg-[#deebff] dark:bg-[#0747a6]/30 border border-[#b3d4ff] dark:border-[#0052cc]/40 flex items-center gap-2.5 text-xs text-[#23150d] dark:text-[#deebff] shadow-sm font-medium">
            <Sparkles className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff] shrink-0" />
            <span>
              <strong className="text-[#0052cc] dark:text-[#2684ff]">Alliance One 2026 Bonus:</strong> 30 Mohalla Mudra credited immediately to spend at local shops!
            </span>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-[#ffebe6] dark:bg-[#3d1814] border border-[#ff8f73]/50 flex items-center gap-2 text-xs text-[#bf2600] dark:text-[#ffbdad] font-bold">
            <AlertCircle className="w-4 h-4 text-[#de350b] shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {authMode === 'signup' && (
            <div>
              <label className="block text-xs font-bold text-[#23150d] dark:text-[#faf6ee] mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Tanvi Deshmukh"
                className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] placeholder:text-[#8a7667] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none font-medium"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[#23150d] dark:text-[#faf6ee] mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. tanvi@flipkart.com"
              className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] placeholder:text-[#8a7667] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#23150d] dark:text-[#faf6ee] mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] placeholder:text-[#8a7667] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none font-medium"
              required
            />
          </div>

          {authMode === 'signup' && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#23150d] dark:text-[#faf6ee] mb-1">
                    Apartment Society
                  </label>
                  <select
                    value={society}
                    onChange={(e) => setSociety(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none font-medium"
                  >
                    {DEMO_SOCIETIES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#23150d] dark:text-[#faf6ee] mb-1">
                    Flat / Unit
                  </label>
                  <input
                    type="text"
                    value={flatNumber}
                    onChange={(e) => setFlatNumber(e.target.value)}
                    placeholder="e.g. B-404"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] placeholder:text-[#8a7667] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#23150d] dark:text-[#faf6ee] mb-1">
                  Company / Employer (for Inter-Company League)
                </label>
                <select
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-2.5 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none font-medium"
                >
                  {DEMO_COMPANIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl bg-[#0052cc] hover:bg-[#0747a6] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
          >
            {authMode === 'signup' ? (
              <>
                <UserPlus className="w-4 h-4" />
                <span>Sign up and claim 30 MM</span>
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                <span>Log in to Mohalla Mandi</span>
              </>
            )}
          </button>
        </form>

        {/* Toggle Login / Signup Mode */}
        <div className="mt-4 pt-3 border-t border-[#ddd0be] dark:border-[#38251a] text-center">
          {authMode === 'signup' ? (
            <p className="text-xs text-[#5c4738] dark:text-[#ddd0be] font-medium">
              Already registered?{' '}
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setErrorMsg('');
                }}
                className="text-[#0052cc] dark:text-[#2684ff] hover:underline font-black"
              >
                Log in here
              </button>
            </p>
          ) : (
            <p className="text-xs text-[#5c4738] dark:text-[#ddd0be] font-medium">
              New resident?{' '}
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signup');
                  setErrorMsg('');
                }}
                className="text-[#0052cc] dark:text-[#2684ff] hover:underline font-black"
              >
                Sign up free (+30 MM)
              </button>
            </p>
          )}
        </div>

        {/* Quick Demo Sign-in Strip for Evaluators */}
        <div className="mt-4 pt-3 border-t border-[#ddd0be] dark:border-[#38251a]">
          <p className="text-[10px] uppercase font-mono text-[#6b584a] dark:text-[#b4a494] mb-2 font-black">
            One-Click Evaluator Fast Login
          </p>
          <div className="grid grid-cols-2 gap-2 text-left">
            <button
              type="button"
              onClick={() => {
                switchPersona('resident');
                setIsAuthModalOpen(false);
              }}
              className="p-2.5 rounded-lg bg-[#f1e9dc] dark:bg-[#221610] hover:bg-[#ede4d6] dark:hover:bg-[#2e1d13] border border-[#ddd0be] dark:border-[#38251a] text-[11px] text-[#23150d] dark:text-[#ddd0be] transition-colors"
            >
              <div className="font-extrabold text-[#0052cc] dark:text-[#2684ff]">Ananya (Resident)</div>
              <div className="text-[10px] text-[#6b584a] dark:text-[#b4a494] font-bold">Flipkart · 65 MM</div>
            </button>
            <button
              type="button"
              onClick={() => {
                switchPersona('company_admin');
                setIsAuthModalOpen(false);
              }}
              className="p-2.5 rounded-lg bg-[#f1e9dc] dark:bg-[#221610] hover:bg-[#ede4d6] dark:hover:bg-[#2e1d13] border border-[#ddd0be] dark:border-[#38251a] text-[11px] text-[#23150d] dark:text-[#ddd0be] transition-colors"
            >
              <div className="font-extrabold text-[#0052cc] dark:text-[#2684ff]">Vikram (Company)</div>
              <div className="text-[10px] text-[#6b584a] dark:text-[#b4a494] font-bold">Infosys BPM Lead</div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
