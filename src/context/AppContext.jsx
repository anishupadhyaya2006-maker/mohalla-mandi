import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  DEMO_SOCIETIES,
  DEMO_COMPANIES,
  APARTMENT_WINDOWS,
  INITIAL_EVENTS,
  INITIAL_SHOPS,
  INITIAL_LEAGUE,
  INITIAL_WALLET_TRANSACTIONS,
  INITIAL_RWA_CALENDAR,
  INITIAL_PILOT_METRICS,
  INITIAL_DEMO_USERS,
} from '../data/seedData';

const AppContext = createContext();

const STORAGE_KEYS = {
  THEME: 'mm_theme_v2',
  CURRENT_USER: 'mm_current_user_v1',
  ALL_USERS: 'mm_all_users_v1',
  EVENTS: 'mm_events_v1',
  SHOPS: 'mm_shops_v1',
  TRANSACTIONS: 'mm_transactions_v1',
  LEAGUE: 'mm_league_v1',
  RWA_CALENDAR: 'mm_rwa_calendar_v1',
  WINDOWS: 'mm_windows_v1',
  PILOT: 'mm_pilot_v1',
  SHOP_REDEMPTIONS: 'mm_shop_redemptions_v1',
};

// Safe localStorage helper with try/catch
function getStorage(key, fallback) {
  try {
    const item = window.localStorage.getItem(key);
    if (!item) return fallback;
    return JSON.parse(item);
  } catch (error) {
    console.warn(`LocalStorage read error for key "${key}":`, error);
    return fallback;
  }
}

function setStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`LocalStorage write error for key "${key}":`, error);
  }
}

export function AppProvider({ children }) {
  // Theme state: day (default light theme in khadi beige & biscuit cream) or night
  const [theme, setTheme] = useState(() => {
    const saved = getStorage(STORAGE_KEYS.THEME, null);
    if (saved === 'day' || saved === 'night') return saved;
    return 'day';
  });

  // Users & Active User
  const [users, setUsers] = useState(() => getStorage(STORAGE_KEYS.ALL_USERS, INITIAL_DEMO_USERS));
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = getStorage(STORAGE_KEYS.CURRENT_USER, null);
    if (saved) return saved;
    return INITIAL_DEMO_USERS[0]; // Ananya Iyer (Resident)
  });

  // Current society
  const [currentSociety, setCurrentSociety] = useState('Sobha Carnation');

  // Navigation view: 'landing', 'resident', 'company_admin', 'shop_owner', 'rwa', 'pilot'
  const [activeView, setActiveView] = useState('landing');
  // Resident tab: 'events', 'wallet', 'league', 'rewards'
  const [residentTab, setResidentTab] = useState('events');

  // Core Data
  const [events, setEvents] = useState(() => getStorage(STORAGE_KEYS.EVENTS, INITIAL_EVENTS));
  const [shops, setShops] = useState(() => getStorage(STORAGE_KEYS.SHOPS, INITIAL_SHOPS));
  const [transactions, setTransactions] = useState(() => getStorage(STORAGE_KEYS.TRANSACTIONS, INITIAL_WALLET_TRANSACTIONS));
  const [league, setLeague] = useState(() => getStorage(STORAGE_KEYS.LEAGUE, INITIAL_LEAGUE));
  const [rwaCalendar, setRwaCalendar] = useState(() => getStorage(STORAGE_KEYS.RWA_CALENDAR, INITIAL_RWA_CALENDAR));
  const [windows, setWindows] = useState(() => getStorage(STORAGE_KEYS.WINDOWS, APARTMENT_WINDOWS));
  const [pilotMetrics, setPilotMetrics] = useState(() => getStorage(STORAGE_KEYS.PILOT, INITIAL_PILOT_METRICS));
  
  // Real-time shop redemptions stream for shop owner view
  const [shopRedemptions, setShopRedemptions] = useState(() => getStorage(STORAGE_KEYS.SHOP_REDEMPTIONS, [
    {
      id: 'red-101',
      shopId: 'shop-2',
      customerName: 'Ananya Iyer',
      itemName: '1 Degree Filter Kaapi + Bun Maska',
      credits: 15,
      timestamp: 'Today, 8:40 AM',
      type: 'repeat',
      society: 'Sobha Carnation, Flat 402'
    },
    {
      id: 'red-102',
      shopId: 'shop-1',
      customerName: 'Rohan Sharma',
      itemName: '₹100 Off Cold-Pressed Sesame Oil',
      credits: 25,
      timestamp: 'Today, 11:20 AM',
      type: 'new',
      society: 'Sobha Carnation, Flat 101'
    },
    {
      id: 'red-103',
      shopId: 'shop-4',
      customerName: 'Kavita Sundaram',
      itemName: 'Fresh Sugarcane with Ginger-Mint',
      credits: 12,
      timestamp: 'Today, 1:15 PM',
      type: 'repeat',
      society: 'Sobha Carnation, Flat 103'
    }
  ]));

  // Toast notifications
  const [toast, setToast] = useState(null);

  // Auth modal
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  // Redirection / Success modal for redeemed vouchers
  const [activeVoucher, setActiveVoucher] = useState(null);

  // Sync theme to DOM
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'night') {
      root.classList.add('dark', 'theme-night');
      root.classList.remove('theme-day');
    } else {
      root.classList.remove('dark', 'theme-night');
      root.classList.add('theme-day');
    }
    setStorage(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  // Persist state changes with try/catch
  useEffect(() => setStorage(STORAGE_KEYS.CURRENT_USER, currentUser), [currentUser]);
  useEffect(() => setStorage(STORAGE_KEYS.ALL_USERS, users), [users]);
  useEffect(() => setStorage(STORAGE_KEYS.EVENTS, events), [events]);
  useEffect(() => setStorage(STORAGE_KEYS.SHOPS, shops), [shops]);
  useEffect(() => setStorage(STORAGE_KEYS.TRANSACTIONS, transactions), [transactions]);
  useEffect(() => setStorage(STORAGE_KEYS.LEAGUE, league), [league]);
  useEffect(() => setStorage(STORAGE_KEYS.RWA_CALENDAR, rwaCalendar), [rwaCalendar]);
  useEffect(() => setStorage(STORAGE_KEYS.WINDOWS, windows), [windows]);
  useEffect(() => setStorage(STORAGE_KEYS.PILOT, pilotMetrics), [pilotMetrics]);
  useEffect(() => setStorage(STORAGE_KEYS.SHOP_REDEMPTIONS, shopRedemptions), [shopRedemptions]);

  // Toast trigger
  const showToast = (message, type = 'success') => {
    setToast({ id: Date.now(), message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Subtle confetti trigger for joining and redeeming
  const triggerCelebration = () => {
    try {
      if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#dfaa43', '#c85d2e', '#ecc26b', '#f5dc9e', '#dc7545']
        });
      }
    } catch {
      // Ignore if confetti fails
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme(prev => (prev === 'night' ? 'day' : 'night'));
  };

  // Fast switch demo personas
  const switchPersona = (role) => {
    const targetUser = users.find(u => u.role === role) || users[0];
    setCurrentUser(targetUser);
    setActiveView(role);
    showToast(`Switched view to ${targetUser.name} (${role.replace('_', ' ').toUpperCase()})`, 'info');
  };

  // Sign up new user
  const signUpUser = ({ name, email, password, society, company, flatNumber }) => {
    if (!name || !email || !password) {
      showToast('Please provide your name, email, and password.', 'error');
      return { success: false, error: 'All fields are required' };
    }

    // Check if user already exists
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      showToast('An account with this email already exists. Please log in.', 'error');
      return { success: false, error: 'User already exists' };
    }

    // New users start with 30 Mohalla Mudra!
    const newUser = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
      role: 'resident',
      society: society || currentSociety,
      company: company || 'Community Resident',
      unit: flatNumber ? `Flat ${flatNumber}` : 'Resident Block',
      credits: 30, // Starting grant
      avatar: name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'MM'
    };

    const welcomeTx = {
      id: `tx-${Date.now()}`,
      type: 'earned',
      title: 'Welcome Grant: Joined Mohalla Mandi',
      amount: 30,
      date: 'Just now',
      partner: 'Alliance One 2026 Welcome Pool',
      badge: 'Welcome Bonus'
    };

    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    setTransactions(prev => [welcomeTx, ...prev]);
    setActiveView('resident');
    setResidentTab('events');
    setIsAuthModalOpen(false);
    triggerCelebration();
    showToast(`Welcome ${newUser.name}! 30 Mohalla Mudra has been credited to your wallet.`, 'success');

    return { success: true };
  };

  // Log in existing user
  const loginUser = ({ email, password }) => {
    const found = users.find(u => u.email.toLowerCase() === email.trim().toLowerCase());
    if (!found) {
      showToast('No user found with this email. Try Demo Sign In or sign up.', 'error');
      return { success: false, error: 'User not found' };
    }

    if (found.password && found.password !== password) {
      showToast('Invalid password for this demo account.', 'error');
      return { success: false, error: 'Invalid password' };
    }

    setCurrentUser(found);
    setActiveView(found.role);
    setIsAuthModalOpen(false);
    showToast(`Welcome back, ${found.name}!`, 'success');
    return { success: true };
  };

  // Sign out
  const signOut = () => {
    setCurrentUser(INITIAL_DEMO_USERS[0]);
    setActiveView('landing');
    showToast('Signed out. Reset to Demo Resident.', 'info');
  };

  // Event actions: Join
  const joinEvent = (eventId) => {
    const targetEvent = events.find(e => e.id === eventId);
    if (!targetEvent) return;

    if (targetEvent.isJoined) {
      // Leave event
      const updatedEvents = events.map(e => {
        if (e.id === eventId) {
          return {
            ...e,
            isJoined: false,
            enrolledCount: Math.max(0, e.enrolledCount - 1)
          };
        }
        return e;
      });
      setEvents(updatedEvents);

      // Deduct event credits from user
      const refundTx = {
        id: `tx-${Date.now()}`,
        type: 'spent',
        title: `Left event: ${targetEvent.title}`,
        amount: -targetEvent.creditsReward,
        date: 'Just now',
        partner: targetEvent.sponsoredBy,
        badge: 'Event Leave'
      };

      setCurrentUser(prev => ({
        ...prev,
        credits: Math.max(0, prev.credits - targetEvent.creditsReward)
      }));
      setTransactions(prev => [refundTx, ...prev]);
      showToast(`Left "${targetEvent.title}". Credits adjusted.`, 'info');
      return;
    }

    // Join event
    const updatedEvents = events.map(e => {
      if (e.id === eventId) {
        return {
          ...e,
          isJoined: true,
          enrolledCount: e.enrolledCount + 1
        };
      }
      return e;
    });
    setEvents(updatedEvents);

    // Award credits
    const earnTx = {
      id: `tx-${Date.now()}`,
      type: 'earned',
      title: `Joined: ${targetEvent.title}`,
      amount: targetEvent.creditsReward,
      date: 'Just now',
      partner: targetEvent.sponsoredBy,
      badge: 'Event Participation'
    };

    setCurrentUser(prev => ({
      ...prev,
      credits: prev.credits + targetEvent.creditsReward
    }));
    setTransactions(prev => [earnTx, ...prev]);

    // Also update company league if user has a company
    if (currentUser?.company) {
      setLeague(prev => prev.map(item => {
        if (item.company.toLowerCase().includes(currentUser.company.toLowerCase()) || 
            currentUser.company.toLowerCase().includes(item.company.toLowerCase())) {
          return { ...item, points: item.points + targetEvent.creditsReward };
        }
        return item;
      }));
    }

    triggerCelebration();
    showToast(`You're in! +${targetEvent.creditsReward} Mohalla Mudra added to your wallet.`, 'success');
  };

  // Wallet actions: Redeem shop offer
  const redeemShopOffer = (shopId) => {
    const shop = shops.find(s => s.id === shopId);
    if (!shop) return { success: false, error: 'Shop not found' };

    if (currentUser.credits < shop.redeemCost) {
      const needed = shop.redeemCost - currentUser.credits;
      showToast(`Insufficient balance. You need ${needed} more Mohalla Mudra to redeem.`, 'error');
      return { success: false, error: 'Insufficient credits', needed };
    }

    // Deduct credits
    const newBalance = currentUser.credits - shop.redeemCost;
    setCurrentUser(prev => ({ ...prev, credits: newBalance }));

    // Generate coupon
    const voucherCode = `MM-${shop.name.substring(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const voucher = {
      code: voucherCode,
      shopName: shop.name,
      offerTitle: shop.offerTitle,
      offerDetail: shop.offerDetail,
      cost: shop.redeemCost,
      remainingBalance: newBalance,
      validUntil: 'Valid for next 48 hours at society store',
      redeemedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      customerName: currentUser.name,
      society: currentUser.society || currentSociety
    };

    // Record wallet transaction
    const spendTx = {
      id: `tx-${Date.now()}`,
      type: 'spent',
      title: `Redeemed: ${shop.offerTitle}`,
      amount: -shop.redeemCost,
      date: 'Just now',
      partner: shop.name,
      badge: 'Local Shop Voucher',
      voucherCode
    };
    setTransactions(prev => [spendTx, ...prev]);

    // Update shop stats
    setShops(prev => prev.map(s => {
      if (s.id === shopId) {
        return { ...s, todayRedemptionsCount: (s.todayRedemptionsCount || 0) + 1 };
      }
      return s;
    }));

    // Record in shop owner live stream
    const shopLog = {
      id: `red-${Date.now()}`,
      shopId: shop.id,
      customerName: currentUser.name,
      itemName: shop.offerTitle,
      credits: shop.redeemCost,
      timestamp: 'Just now',
      type: Math.random() > 0.4 ? 'repeat' : 'new',
      society: `${currentUser.society}, ${currentUser.unit || 'Tower A'}`
    };
    setShopRedemptions(prev => [shopLog, ...prev]);

    // Update pilot aggregate metrics
    setPilotMetrics(prev => ({
      ...prev,
      totalCreditsCirculated: prev.totalCreditsCirculated + shop.redeemCost,
      hyperlocalSpendINR: prev.hyperlocalSpendINR + (shop.redeemCost * 10)
    }));

    setActiveVoucher(voucher);
    triggerCelebration();
    showToast(`Redeemed! ${shop.offerTitle} voucher generated.`, 'success');

    return { success: true, voucher };
  };

  // Rewards: Batched delivery slot
  const logBatchedDelivery = () => {
    const rewardAmount = 15;
    setCurrentUser(prev => ({ ...prev, credits: prev.credits + rewardAmount }));

    const tx = {
      id: `tx-${Date.now()}`,
      type: 'earned',
      title: 'Committed to 6 PM Society Gate Batched Delivery',
      amount: rewardAmount,
      date: 'Just now',
      partner: 'Society Green Gate Hub',
      badge: 'Eco Habit'
    };
    setTransactions(prev => [tx, ...prev]);

    // Update pilot stats
    setPilotMetrics(prev => ({
      ...prev,
      vanTripsPreventedDaily: prev.vanTripsPreventedDaily + 1
    }));

    triggerCelebration();
    showToast(`Batched delivery slot confirmed! +${rewardAmount} Mohalla Mudra earned.`, 'success');
  };

  // Rewards: Packaging return
  const logPackageReturn = (count = 5) => {
    const rewardAmount = 10;
    setCurrentUser(prev => ({ ...prev, credits: prev.credits + rewardAmount }));

    const tx = {
      id: `tx-${Date.now()}`,
      type: 'earned',
      title: `Returned ${count} delivery boxes to RWA reuse bin`,
      amount: rewardAmount,
      date: 'Just now',
      partner: 'RWA Circular Economy Kiosk',
      badge: 'Packaging Reuse'
    };
    setTransactions(prev => [tx, ...prev]);

    // Update pilot stats
    setPilotMetrics(prev => ({
      ...prev,
      cardboardBoxesReused: prev.cardboardBoxesReused + count
    }));

    triggerCelebration();
    showToast(`Cardboard return logged! +${rewardAmount} Mohalla Mudra earned.`, 'success');
  };

  // Company Admin: Create new event
  const createCompanyEvent = (eventData) => {
    const newEvent = {
      id: `evt-${Date.now()}`,
      title: eventData.title,
      venue: eventData.venue || 'Clubhouse Multipurpose Hall',
      society: currentSociety,
      date: eventData.date || 'Next Weekend',
      time: eventData.time || '10:00 AM – 12:00 PM',
      category: eventData.category || 'Skill Workshop',
      creditsReward: Number(eventData.creditsReward) || 25,
      sponsoredBy: eventData.company || currentUser.company || 'Corporate League Partner',
      instructor: eventData.instructor || 'Lead Volunteer',
      maxSeats: Number(eventData.maxSeats) || 20,
      enrolledCount: 1,
      description: eventData.description || 'Community gathering and workshop.',
      requirements: eventData.requirements || 'All materials provided.',
      isJoined: false,
      isDemo: true,
    };

    setEvents(prev => [newEvent, ...prev]);

    // Also add to RWA calendar
    const newCal = {
      id: `cal-${Date.now()}`,
      venue: newEvent.venue,
      timeSlot: `${newEvent.date} ${newEvent.time}`,
      event: `${newEvent.title} (${newEvent.sponsoredBy})`,
      organizer: newEvent.sponsoredBy,
      feeEarned: '₹3,000',
      status: 'Confirmed',
      approvedBy: 'RWA Auto-Approval'
    };
    setRwaCalendar(prev => [newCal, ...prev]);

    showToast(`Event "${newEvent.title}" published! Available for residents to join.`, 'success');
    return newEvent;
  };

  // Shop Owner: Add new offer
  const addShopOffer = (offerData) => {
    const newOffer = {
      id: `shop-${Date.now()}`,
      name: offerData.shopName || 'Society Corner Store',
      category: offerData.category || 'Local Goods & Bites',
      distance: 'Society Market Bay',
      owner: currentUser.name || 'Local Partner',
      creditsAccepted: true,
      rating: '4.8 (New Society Offer)',
      offerTitle: offerData.offerTitle,
      offerDetail: offerData.offerDetail,
      redeemCost: Number(offerData.redeemCost) || 20,
      todayRedemptionsCount: 0,
      isDemo: true,
    };

    setShops(prev => [newOffer, ...prev]);
    showToast(`New offer "${newOffer.offerTitle}" added to Mohalla Mandi!`, 'success');
  };

  // Interactive apartment window toggle
  const toggleWindow = (id) => {
    setWindows(prev => prev.map(w => {
      if (w.id === id) {
        return { ...w, lit: !w.lit };
      }
      return w;
    }));
  };

  const toggleAllWindows = () => {
    const allLit = windows.every(w => w.lit);
    setWindows(prev => prev.map(w => ({ ...w, lit: !allLit })));
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        currentUser,
        setCurrentUser,
        users,
        currentSociety,
        setCurrentSociety,
        activeView,
        setActiveView,
        residentTab,
        setResidentTab,
        events,
        shops,
        transactions,
        league,
        rwaCalendar,
        windows,
        pilotMetrics,
        shopRedemptions,
        toast,
        showToast,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authMode,
        setAuthMode,
        activeVoucher,
        setActiveVoucher,
        switchPersona,
        signUpUser,
        loginUser,
        signOut,
        joinEvent,
        redeemShopOffer,
        logBatchedDelivery,
        logPackageReturn,
        createCompanyEvent,
        addShopOffer,
        toggleWindow,
        toggleAllWindows,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
