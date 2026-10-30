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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#140e0a]/85 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-[#211a14] border border-[#483a2e] shadow-2xl p-6 sm:p-7 text-left">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            setIsAuthModalOpen(false);
            setErrorMsg('');
          }}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#a6917b] hover:text-[#f7f2ea] hover:bg-[#2e2319] transition-colors"
          aria-label="Close authentication modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#dfaa43]"></span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#ecc26b]">
              Mohalla Mandi Bangalore
            </span>
          </div>
          <h3 className="text-xl font-bold font-heading text-[#f7f2ea]">
            {authMode === 'signup' ? 'Create Resident Account' : 'Log In to Society Portal'}
          </h3>
          <p className="text-xs text-[#a6917b] mt-1">
            {authMode === 'signup'
              ? 'Join free. New residents start with 30 Mohalla Mudra credits.'
              : 'Access your society events, wallet, and company league.'}
          </p>
        </div>

        {/* Bonus Callout for Signup (Ochre / Brass) */}
        {authMode === 'signup' && (
          <div className="mb-4 p-3 rounded-xl bg-[#38281b] border border-[#c58c2b]/40 flex items-center gap-2.5 text-xs text-[#f5dc9e]">
            <Sparkles className="w-4 h-4 text-[#dfaa43] shrink-0" />
            <span>
              <strong>Alliance One 2026 Bonus:</strong> 30 Mohalla Mudra credited immediately to spend at local shops!
            </span>
          </div>
        )}

        {/* Error Alert (Warm Burnt Sienna, not red) */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-[#3d2316] border border-[#c85d2e]/50 flex items-center gap-2 text-xs text-[#f3ba9e]">
            <AlertCircle className="w-4 h-4 text-[#dc7545] shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {authMode === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-[#ded3c4] mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Tanvi Deshmukh"
                className="w-full px-3 py-2 text-xs rounded-lg bg-[#1a120c] border border-[#3c2f24] text-[#f7f2ea] placeholder:text-[#8e7a68] focus-visible:ring-2 focus-visible:ring-[#dfaa43] focus-visible:outline-none"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-[#ded3c4] mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. tanvi@flipkart.com"
              className="w-full px-3 py-2 text-xs rounded-lg bg-[#1a120c] border border-[#3c2f24] text-[#f7f2ea] placeholder:text-[#8e7a68] focus-visible:ring-2 focus-visible:ring-[#dfaa43] focus-visible:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#ded3c4] mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 text-xs rounded-lg bg-[#1a120c] border border-[#3c2f24] text-[#f7f2ea] placeholder:text-[#8e7a68] focus-visible:ring-2 focus-visible:ring-[#dfaa43] focus-visible:outline-none"
              required
            />
          </div>

          {authMode === 'signup' && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#ded3c4] mb-1">
                    Apartment Society
                  </label>
                  <select
                    value={society}
                    onChange={(e) => setSociety(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs rounded-lg bg-[#1a120c] border border-[#3c2f24] text-[#f7f2ea] focus-visible:ring-2 focus-visible:ring-[#dfaa43] focus-visible:outline-none"
                  >
                    {DEMO_SOCIETIES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#ded3c4] mb-1">
                    Flat / Unit
                  </label>
                  <input
                    type="text"
                    value={flatNumber}
                    onChange={(e) => setFlatNumber(e.target.value)}
                    placeholder="e.g. B-404"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#1a120c] border border-[#3c2f24] text-[#f7f2ea] placeholder:text-[#8e7a68] focus-visible:ring-2 focus-visible:ring-[#dfaa43] focus-visible:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#ded3c4] mb-1">
                  Company / Employer (for Inter-Company League)
                </label>
                <select
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-2.5 py-2 text-xs rounded-lg bg-[#1a120c] border border-[#3c2f24] text-[#f7f2ea] focus-visible:ring-2 focus-visible:ring-[#dfaa43] focus-visible:outline-none"
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
            className="w-full py-2.5 px-4 rounded-xl bg-[#c85d2e] hover:bg-[#dc7545] text-[#fbf8f3] font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
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
        <div className="mt-4 pt-3 border-t border-[#36291e] text-center">
          {authMode === 'signup' ? (
            <p className="text-xs text-[#a6917b]">
              Already registered?{' '}
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setErrorMsg('');
                }}
                className="text-[#ecc26b] hover:underline font-semibold"
              >
                Log in here
              </button>
            </p>
          ) : (
            <p className="text-xs text-[#a6917b]">
              New resident?{' '}
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signup');
                  setErrorMsg('');
                }}
                className="text-[#ecc26b] hover:underline font-semibold"
              >
                Sign up free (+30 MM)
              </button>
            </p>
          )}
        </div>

        {/* Quick Demo Sign-in Strip for Evaluators */}
        <div className="mt-4 pt-3 border-t border-[#36291e]">
          <p className="text-[10px] uppercase font-mono text-[#8e7a68] mb-2">
            One-Click Evaluator Fast Login
          </p>
          <div className="grid grid-cols-2 gap-2 text-left">
            <button
              type="button"
              onClick={() => {
                switchPersona('resident');
                setIsAuthModalOpen(false);
              }}
              className="p-2 rounded-lg bg-[#1a120c] hover:bg-[#2e2319] border border-[#3c2f24] text-[11px] text-[#cfbea5] transition-colors"
            >
              <div className="font-semibold text-[#f5dc9e]">Ananya (Resident)</div>
              <div className="text-[10px] text-[#8e7a68]">Flipkart · 65 MM</div>
            </button>
            <button
              type="button"
              onClick={() => {
                switchPersona('company_admin');
                setIsAuthModalOpen(false);
              }}
              className="p-2 rounded-lg bg-[#1a120c] hover:bg-[#2e2319] border border-[#3c2f24] text-[11px] text-[#cfbea5] transition-colors"
            >
              <div className="font-semibold text-[#f3ba9e]">Vikram (Company)</div>
              <div className="text-[10px] text-[#8e7a68]">Infosys BPM Lead</div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
