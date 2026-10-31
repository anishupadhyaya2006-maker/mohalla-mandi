import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Briefcase,
  Plus,
  Users,
  Download,
  Calendar,
  MapPin,
  Clock,
  Coins,
  CheckCircle2,
  Sparkles,
  Check
} from 'lucide-react';

export default function CompanyAdminView() {
  const { createCompanyEvent, events, currentUser, currentSociety, showToast } = useApp();

  const [isCreatingEvent, setIsCreatingEvent] = useState(false);
  const [title, setTitle] = useState('');
  const [venue, setVenue] = useState('Clubhouse Multipurpose Hall');
  const [category, setCategory] = useState('Sports League');
  const [date, setDate] = useState('Saturday, Nov 8');
  const [time, setTime] = useState('4:00 PM – 6:30 PM');
  const [maxSeats, setMaxSeats] = useState(24);
  const [creditsReward, setCreditsReward] = useState(30);
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState(currentUser?.name || 'Lead Coordinator');

  // Registrations state for check-in demo
  const [roster, setRoster] = useState([
    { id: 'reg-1', name: 'Ananya Iyer', unit: 'Tower B - Flat 402', company: 'Flipkart Tech', status: 'Checked in', eventTitle: 'Bellandur Tech Derby: Box Cricket' },
    { id: 'reg-2', name: 'Rohan Sharma', unit: 'Tower A - Flat 101', company: 'Flipkart Tech', status: 'Confirmed', eventTitle: 'Bellandur Tech Derby: Box Cricket' },
    { id: 'reg-3', name: 'Priya Hegde', unit: 'Tower B - Flat 201', company: 'Infosys BPM', status: 'Checked in', eventTitle: 'Bellandur Tech Derby: Box Cricket' },
    { id: 'reg-4', name: 'Karthik Narayanan', unit: 'Tower A - Flat 304', company: 'Swiggy Labs', status: 'Confirmed', eventTitle: 'Bellandur Tech Derby: Box Cricket' },
    { id: 'reg-5', name: 'Deepak Verma', unit: 'Tower B - Flat 104', company: 'Razorpay', status: 'Confirmed', eventTitle: 'Bellandur Tech Derby: Box Cricket' },
    { id: 'reg-6', name: 'Sunita Rao', unit: 'Tower A - Flat 202', company: 'Titan Hub', status: 'Checked in', eventTitle: 'Sunrise Terrace Hatha Yoga' },
    { id: 'reg-7', name: 'Dr. Meenakshi', unit: 'Tower B - Flat 302', company: 'Self-employed', status: 'Checked in', eventTitle: 'Sunrise Terrace Hatha Yoga' },
    { id: 'reg-8', name: 'Naveen Sundaram', unit: 'Tower A - Flat 403', company: 'Wipro Digital', status: 'Confirmed', eventTitle: 'Sunday Fix-It Café' },
  ]);

  const toggleCheckIn = (id) => {
    setRoster(prev => prev.map(p => {
      if (p.id === id) {
        const newStatus = p.status === 'Checked in' ? 'Confirmed' : 'Checked in';
        return { ...p, status: newStatus };
      }
      return p;
    }));
    showToast('Participant attendance status updated.', 'info');
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      showToast('Please provide an event or league title.', 'error');
      return;
    }

    createCompanyEvent({
      title,
      venue,
      category,
      date,
      time,
      maxSeats,
      creditsReward,
      description,
      instructor,
      company: currentUser?.company || 'Infosys BPM & Tech'
    });

    setIsCreatingEvent(false);
    setTitle('');
    setDescription('');
  };

  // CSV Attendance Download
  const downloadAttendanceCSV = () => {
    const headers = ['Registration ID', 'Participant Name', 'Society Unit', 'Company', 'Event Title', 'Attendance Status', 'Mudra Credits', 'Timestamp'];
    const rows = roster.map(r => [
      r.id,
      `"${r.name}"`,
      `"${r.unit}"`,
      `"${r.company}"`,
      `"${r.eventTitle}"`,
      r.status,
      '30 MM',
      '2026-11-01 16:30'
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `mohalla-mandi-attendance-${currentSociety.replace(/\s+/g, '-').toLowerCase()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Attendance report CSV downloaded successfully.', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-left animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-[#f1e9dc] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0052cc] dark:text-[#2684ff] font-bold flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
              Corporate League & CSR Portal
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#deebff] dark:bg-[#0747a6]/30 text-[#0747a6] dark:text-[#deebff] border border-[#b3d4ff] dark:border-[#0052cc]/40 font-semibold">
              Demo Portal
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#23150d] dark:text-[#faf6ee]">
            Company Admin Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#5c4738] dark:text-[#ddd0be] max-w-xl mt-1">
            Logged in as <strong className="text-[#0052cc] dark:text-[#2684ff] font-semibold">{currentUser?.name}</strong> ({currentUser?.company || 'Infosys BPM & Tech'}). Create events, monitor resident turnout, and export attendance.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={downloadAttendanceCSV}
            className="px-4 py-2.5 rounded-xl bg-[#faf6ee] dark:bg-[#160e09] hover:bg-[#ede4d6] dark:hover:bg-[#2b2118] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#ddd0be] text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff]" />
            <span>Download attendance report (CSV)</span>
          </button>

          <button
            onClick={() => setIsCreatingEvent(!isCreatingEvent)}
            className="px-4 py-2.5 rounded-xl bg-[#0052cc] hover:bg-[#0747a6] text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>{isCreatingEvent ? 'Cancel' : 'Create event or league'}</span>
          </button>
        </div>
      </div>

      {/* CREATE EVENT COLLAPSIBLE FORM */}
      {isCreatingEvent && (
        <div className="p-6 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] animate-in fade-in duration-200 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold font-heading text-[#23150d] dark:text-[#faf6ee]">
                Publish New Event or Corporate League
              </h2>
              <p className="text-xs text-[#6b584a] dark:text-[#b4a494]">
                Instantly books the venue with the RWA and publishes to residents in {currentSociety}.
              </p>
            </div>
            <span className="text-xs font-mono text-[#0747a6] dark:text-[#deebff] px-2.5 py-0.5 rounded-full bg-[#deebff] dark:bg-[#0747a6]/30 border border-[#b3d4ff] dark:border-[#0052cc]/30 font-semibold">
              Company Sponsored
            </span>
          </div>

          <form onSubmit={handleCreateSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#23150d] dark:text-[#faf6ee] mb-1">
                  Event / League Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Bellandur Sunset Badminton Championship"
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] placeholder:text-[#8a7667] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#23150d] dark:text-[#faf6ee] mb-1">
                  Society Venue
                </label>
                <select
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  className="w-full px-2.5 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none"
                >
                  <option value="Clubhouse Multipurpose Hall">Clubhouse Multipurpose Hall</option>
                  <option value="Society Sports Turf & Court">Society Sports Turf & Court</option>
                  <option value="Terrace Garden (Tower B)">Terrace Garden (Tower B)</option>
                  <option value="Indoor Badminton Court 1 & 2">Indoor Badminton Court 1 & 2</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#23150d] dark:text-[#faf6ee] mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-2.5 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none"
                >
                  <option value="Sports League">Sports League</option>
                  <option value="Wellness">Wellness & Yoga</option>
                  <option value="Skill Workshop">Skill Workshop & Repair</option>
                  <option value="Arts & Culture">Arts & Culture</option>
                  <option value="Community Storytelling">Community Storytelling</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#23150d] dark:text-[#faf6ee] mb-1">
                  Date & Time Slot
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Date (e.g. Sat, Nov 8)"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none"
                  />
                  <input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Time (e.g. 4:00 PM)"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#23150d] dark:text-[#faf6ee] mb-1">
                  Max Participant Capacity
                </label>
                <input
                  type="number"
                  min="5"
                  max="100"
                  value={maxSeats}
                  onChange={(e) => setMaxSeats(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#23150d] dark:text-[#faf6ee] mb-1">
                  Mohalla Mudra Reward for Attending (MM)
                </label>
                <input
                  type="number"
                  min="10"
                  max="100"
                  value={creditsReward}
                  onChange={(e) => setCreditsReward(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#23150d] dark:text-[#faf6ee] mb-1">
                Event Description & Objective
              </label>
              <textarea
                rows="2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the format, rules, and who should bring what..."
                className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] placeholder:text-[#8a7667] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none"
              ></textarea>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsCreatingEvent(false)}
                className="px-4 py-2 rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#ddd0be] text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-[#0052cc] hover:bg-[#0747a6] text-white font-bold text-xs shadow-md"
              >
                Publish event
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ROSTER AND ATTENDANCE TABLE */}
      <div className="rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] overflow-hidden shadow-sm">
        <div className="p-4 border-b border-[#ddd0be] dark:border-[#38251a] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-bold font-heading text-[#23150d] dark:text-[#faf6ee]">
              Resident Registrations & Check-In Roster
            </h2>
            <p className="text-xs text-[#6b584a] dark:text-[#b4a494]">
              Live registration stream across your company’s sponsored society events.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#f1e9dc] dark:bg-[#160e09] text-[#23150d] dark:text-[#ddd0be] font-medium border border-[#ddd0be] dark:border-[#38251a]">
            {roster.length} Registered Residents
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#23150d] dark:text-[#ddd0be]">
            <thead className="bg-[#f1e9dc] dark:bg-[#160e09] text-[11px] uppercase font-mono text-[#23150d] dark:text-[#b4a494] border-b border-[#ddd0be] dark:border-[#38251a]">
              <tr>
                <th className="py-3 px-4 font-extrabold">Resident</th>
                <th className="py-3 px-4 font-extrabold">Society Unit</th>
                <th className="py-3 px-4 font-extrabold">Employer</th>
                <th className="py-3 px-4 font-extrabold">Enrolled Event</th>
                <th className="py-3 px-4 font-extrabold">Status</th>
                <th className="py-3 px-4 text-right font-extrabold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ddd0be] dark:divide-[#38251a]">
              {roster.map((p) => {
                const isCheckedIn = p.status === 'Checked in';
                return (
                  <tr key={p.id} className="hover:bg-[#f1e9dc]/60 dark:hover:bg-[#2a1b13] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#23150d] dark:text-[#faf6ee]">
                      {p.name}
                    </td>
                    <td className="py-3.5 px-4 text-[#6b584a] dark:text-[#b4a494] font-mono font-semibold">
                      {p.unit}
                    </td>
                    <td className="py-3.5 px-4 text-[#23150d] dark:text-[#ddd0be] font-medium">
                      {p.company}
                    </td>
                    <td className="py-3.5 px-4 text-[#23150d] dark:text-[#ddd0be] font-bold">
                      {p.eventTitle}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-1 rounded-full ${
                          isCheckedIn
                            ? 'bg-[#deebff] dark:bg-[#0747a6]/30 text-[#0052cc] dark:text-[#2684ff] border border-[#b3d4ff] dark:border-[#0052cc]/40 font-bold'
                            : 'bg-[#f1e9dc] dark:bg-[#160e09] text-[#6b584a] dark:text-[#b4a494] border border-[#ddd0be] dark:border-[#38251a] font-semibold'
                        }`}
                      >
                        {isCheckedIn && <Check className="w-3 h-3 text-[#0052cc] dark:text-[#2684ff]" />}
                        {p.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => toggleCheckIn(p.id)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                          isCheckedIn
                            ? 'bg-[#f1e9dc] dark:bg-[#160e09] text-[#23150d] dark:text-[#ddd0be] hover:text-[#0052cc] border border-[#ddd0be] dark:border-[#38251a]'
                            : 'bg-[#0052cc] hover:bg-[#0747a6] text-white shadow-xs'
                        }`}
                      >
                        {isCheckedIn ? 'Undo check-in' : 'Check in'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
