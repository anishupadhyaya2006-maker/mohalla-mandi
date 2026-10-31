# Mohalla Mitra (ಮೊಹಲ್ಲಾ ಮಿತ್ರ)
### Neighbourhood Community Economy Platform for Bengaluru Apartment Societies
**Startup Prototype · Alliance One 2026: Chaturanga Competition**

---

## Concept
In Bengaluru, over 12,000 apartment complexes feature high-grade clubhouses, badminton courts, and windy terraces that sit completely empty 85% of weekday hours. Meanwhile, tech employees experience isolation, and local neighbourhood kiranas and filter kaapi counters lose footfall to 10-minute grocery delivery apps.

**Mohalla Mitra** turns idle society spaces into venues for yoga, pottery, sports, and skill-repair workshops, run together with IT companies and startups through inter-company leagues. 
- **Earn:** Residents join free and earn **Mohalla Mudra (MM)** credits for attending events, consolidating parcel drops to a batched delivery slot, and returning cardboard packaging.
- **Spend:** Participants spend Mohalla Mudra at local shops, cafés, cobblers, and tailors within 500m of the gate.
- **Economic Loop:** IT companies sponsor leagues for employee wellness & CSR; local shops sponsor credits in exchange for direct footfall; RWAs monetize idle spaces into maintenance corpus revenue (₹28,500/mo).

---

## Tech Stack
- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 + Custom Design Tokens (Night theme default, warm amber lit-window accent, jade green credits)
- **Icons:** `lucide-react` (zero emojis used as icons)
- **Delight & Feedback:** `canvas-confetti` for tactile action feedback
- **Typography:** Google Fonts — *Bricolage Grotesque* for headings, *Figtree* for body
- **Data Persistence:** `localStorage` state management layer with `try/catch` safety
- **Accessibility:** Visible focus rings, high contrast ratios, reduced motion support

---

## How to Run Locally

```bash
# 1. Navigate to the project directory
cd "C:\Users\Lenovo\.gemini\antigravity-ide\scratch\mohalla-mandi"

# 2. Install dependencies (if not already installed)
npm install

# 3. Start development server
npm run dev

# 4. Open in your browser
# URL: http://localhost:5173/
```

To build for production:
```bash
npm run build
npm run preview
```

---

## What is Mocked vs Functional

| Feature | Implementation | Details |
|---|---|---|
| **Data Storage** | LocalStorage | Persists users, credits balance, registered events, newly added offers, and transaction history in browser localStorage with `try/catch` fallback. |
| **Authentication** | Mock Auth Layer | Validates email, password length, society, and company. New signups receive an instant **30 Mohalla Mudra** welcome bonus. |
| **Transactions & Wallet** | Real-time Client State | Balance dynamically checks if credits are sufficient before allowing redemption. Shows exact MM needed if balance is too low. Generates unique coupon codes (`MM-KAA-XXXX`). |
| **Inter-Company League** | Dynamic Standings | Dynamically highlights the logged-in user's company (e.g. Flipkart Tech, Infosys) in the leaderboard. |
| **Attendance Report** | Real CSV Generator | The "Download attendance report (CSV)" button in Company Admin dynamically compiles a `.csv` file and triggers a browser download. |
| **Demo Data Disclosure** | Prominently Tagged | Every metric, event, shop review, and company point score is explicitly labelled as **Demo Data** across all views. |

---

## 6-Step Live Pitch Walkthrough

A built-in **"Live Demo Pitch Walkthrough"** widget is pinned to the bottom-right corner of the screen:

1. **Explore the Hero:** Click on windows on the apartment block illustration to toggle lights and discover neighbour stories (*"Every lit window is a neighbour you haven't met"*).
2. **Join an Event:** In the *Resident View* → *Events* tab, click **"Join event"** on *Sunrise Terrace Hatha Yoga*. Watch your wallet balance increase (+20 MM) and see the event switch to the confirmed **"You're in"** state.
3. **Spend at Local Shop:** Switch to *Wallet & Local Shops*. Click **"Redeem"** at *By2 Filter Kaapi Corner* (15 MM). A high-fidelity coupon voucher appears with QR code and unique code.
4. **Shop Owner Perspective:** Switch to **Shop Owner** in the top navbar. See today's redeemed credits, customer loyalty graph (new vs repeat), and publish a new offer.
5. **Company Admin Perspective:** Switch to **Company Admin**. Publish a corporate league fixture, check in participants, and click **"Download attendance report (CSV)"**.
6. **RWA & Pilot Analytics:** Switch to **RWA View** to inspect space utilization (74%) and venue fee earned (₹28,500), then check **Pilot Dashboard** for the 5 competition impact metrics.

---

## Project Structure

```
mohalla-mandi/
├── src/
│   ├── data/
│   │   └── seedData.js             # Initial societies, events, shops, league, and metrics
│   ├── context/
│   │   └── AppContext.jsx          # LocalStorage state, safe try/catch, actions, toast notifications
│   ├── components/
│   │   ├── Navbar.jsx              # Logo, society picker, view switcher, wallet pill, day/night toggle
│   │   ├── DemoBanner.jsx          # Alliance One 2026 Chaturanga competition disclosure
│   │   ├── ApartmentHero.jsx       # Interactive apartment block with 16 clickable glowing windows
│   │   ├── LandingPage.jsx         # The Loop (Gather, Earn, Spend), Who pays & who plays
│   │   ├── AuthModal.jsx           # Sign Up & Log In with validation + 30 MM welcome grant
│   │   ├── VoucherModal.jsx        # Receipt coupon modal with QR mockup
│   │   ├── QuickDemoBar.jsx        # Pinned 6-step demo pitch guide for judges
│   │   ├── resident/
│   │   │   ├── ResidentDashboard.jsx # Resident tabs container
│   │   │   ├── EventsTab.jsx        # Event categories, search, capacity bar, "You're in" state
│   │   │   ├── WalletTab.jsx        # Jade balance, 6 local shops, dynamic threshold, ledger
│   │   │   ├── LeagueTab.jsx        # Company leaderboard with user company highlight
│   │   │   └── RewardsTab.jsx       # Batched daily delivery and packaging return loggers
│   │   ├── company/
│   │   │   └── CompanyAdminView.jsx # Create event, see registrations, download attendance CSV
│   │   ├── shop/
│   │   │   └── ShopOwnerView.jsx    # Credits redeemed today, new vs repeat stats, add offer
│   │   ├── rwa/
│   │   │   └── RwaView.jsx          # Venue booking calendar, space utilization, fee earned
│   │   └── pilot/
│   │       └── PilotDashboard.jsx   # 5 pilot impact metrics clearly marked as demo data
│   ├── App.jsx                     # Top-level view coordinator & toast container
│   ├── index.css                   # Tailwind v4 theme styles, Bricolage & Figtree fonts, window animations
│   └── main.jsx                    # React 19 entry point
├── index.html                      # SEO metadata, Google Fonts preconnect, SVG favicon
├── package.json
└── vite.config.js                  # Vite configuration with @tailwindcss/vite
```
