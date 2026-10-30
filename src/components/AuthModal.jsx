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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-7 text-left">
        
        {/* Close Button */}
        <button
          onClick={() => {
            setIsAuthModalOpen(false);
            setErrorMsg('');
          }}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close authentication modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300">
              Mohalla Mandi Bangalore
            </span>
          </div>
          <h3 className="text-xl font-bold font-heading text-slate-100">
            {authMode === 'signup' ? 'Create Resident Account' : 'Log In to Society Portal'}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {authMode === 'signup'
              ? 'Join free. New residents start with 30 Mohalla Mudra credits.'
              : 'Access your society events, wallet, and company league.'}
          </p>
        </div>

        {/* Bonus Callout for Signup */}
        {authMode === 'signup' && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2.5 text-xs text-emerald-300">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Alliance One 2026 Bonus:</strong> 30 Mohalla Mudra credited immediately to spend at local shops!
            </span>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 flex items-center gap-2 text-xs text-rose-300">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {authMode === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Tanvi Deshmukh"
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. tanvi@flipkart.com"
              className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
              required
            />
          </div>

          {authMode === 'signup' && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Apartment Society
                  </label>
                  <select
                    value={society}
                    onChange={(e) => setSociety(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
                  >
                    {DEMO_SOCIETIES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Flat / Unit
                  </label>
                  <input
                    type="text"
                    value={flatNumber}
                    onChange={(e) => setFlatNumber(e.target.value)}
                    placeholder="e.g. B-404"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Company / Employer (for Inter-Company League)
                </label>
                <select
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-2.5 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
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
            className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
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
        <div className="mt-4 pt-3 border-t border-slate-800 text-center">
          {authMode === 'signup' ? (
            <p className="text-xs text-slate-400">
              Already registered?{' '}
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setErrorMsg('');
                }}
                className="text-amber-300 hover:underline font-semibold"
              >
                Log in here
              </button>
            </p>
          ) : (
            <p className="text-xs text-slate-400">
              New resident?{' '}
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signup');
                  setErrorMsg('');
                }}
                className="text-amber-300 hover:underline font-semibold"
              >
                Sign up free (+30 MM)
              </button>
            </p>
          )}
        </div>

        {/* Quick Demo Sign-in Strip for Evaluators */}
        <div className="mt-4 pt-3 border-t border-slate-800">
          <p className="text-[10px] uppercase font-mono text-slate-400 mb-2">
            One-Click Evaluator Fast Login
          </p>
          <div className="grid grid-cols-2 gap-2 text-left">
            <button
              type="button"
              onClick={() => {
                switchPersona('resident');
                setIsAuthModalOpen(false);
              }}
              className="p-2 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[11px] text-slate-300 transition-colors"
            >
              <div className="font-semibold text-emerald-300">Ananya (Resident)</div>
              <div className="text-[10px] text-slate-400">Flipkart · 65 MM</div>
            </button>
            <button
              type="button"
              onClick={() => {
                switchPersona('company_admin');
                setIsAuthModalOpen(false);
              }}
              className="p-2 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[11px] text-slate-300 transition-colors"
            >
              <div className="font-semibold text-amber-300">Vikram (Company)</div>
              <div className="text-[10px] text-slate-400">Infosys BPM Lead</div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
