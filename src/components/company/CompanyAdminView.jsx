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
      <div className="p-6 rounded-3xl bg-[#fbf4e8] dark:bg-[#241a13] border border-[#d6be96] dark:border-[#c58c2b]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8a5e18] dark:text-[#ecc26b] font-bold flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43]" />
              Corporate League & CSR Portal
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#f5dc9e] border border-[#d8c39e] dark:border-[#c58c2b]/40 font-semibold">
              Demo Portal
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#211710] dark:text-[#f7f2ea]">
            Company Admin Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#574332] dark:text-[#cfbea5] max-w-xl mt-1">
            Logged in as <strong className="text-[#c85d2e] dark:text-[#ecc26b] font-semibold">{currentUser?.name}</strong> ({currentUser?.company || 'Infosys BPM & Tech'}). Create events, monitor resident turnout, and export attendance.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={downloadAttendanceCSV}
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#1c140d] hover:bg-[#f6efe3] dark:hover:bg-[#2b2118] border border-[#ded1be] dark:border-[#3c2f24] text-[#211710] dark:text-[#ded3c4] text-xs font-medium flex items-center gap-2 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4 text-[#b57a1b] dark:text-[#dfaa43]" />
            <span>Download attendance report (CSV)</span>
          </button>

          <button
            onClick={() => setIsCreatingEvent(!isCreatingEvent)}
            className="px-4 py-2.5 rounded-xl bg-[#c85d2e] hover:bg-[#b84f22] text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>{isCreatingEvent ? 'Cancel' : 'Create event or league'}</span>
          </button>
        </div>
      </div>

      {/* CREATE EVENT COLLAPSIBLE FORM */}
      {isCreatingEvent && (
        <div className="p-6 rounded-2xl bg-white dark:bg-[#241a13] border border-[#d6be96] dark:border-[#c58c2b]/40 animate-in fade-in duration-200 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold font-heading text-[#211710] dark:text-[#f7f2ea]">
                Publish New Event or Corporate League
              </h2>
              <p className="text-xs text-[#725e4c] dark:text-[#a6917b]">
                Instantly books the venue with the RWA and publishes to residents in {currentSociety}.
              </p>
            </div>
            <span className="text-xs font-mono text-[#8a5e18] dark:text-[#ecc26b] px-2 py-0.5 rounded bg-[#ede1cd] dark:bg-[#38281b] border border-[#d8c39e] dark:border-[#c58c2b]/30 font-semibold">
              Company Sponsored
            </span>
          </div>

          <form onSubmit={handleCreateSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#211710] dark:text-[#ded3c4] mb-1">
                  Event / League Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Bellandur Sunset Badminton Championship"
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#f8f3eb] dark:bg-[#1a120c] border border-[#ded1be] dark:border-[#3c2f24] text-[#211710] dark:text-[#f7f2ea] placeholder:text-[#826e5a] focus-visible:ring-2 focus-visible:ring-[#c85d2e] focus-visible:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#211710] dark:text-[#ded3c4] mb-1">
                  Society Venue
                </label>
                <select
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  className="w-full px-2.5 py-2 text-xs rounded-lg bg-[#f8f3eb] dark:bg-[#1a120c] border border-[#ded1be] dark:border-[#3c2f24] text-[#211710] dark:text-[#f7f2ea] focus-visible:ring-2 focus-visible:ring-[#c85d2e] focus-visible:outline-none"
                >
                  <option value="Clubhouse Multipurpose Hall">Clubhouse Multipurpose Hall</option>
                  <option value="Society Sports Turf & Court">Society Sports Turf & Court</option>
                  <option value="Terrace Garden (Tower B)">Terrace Garden (Tower B)</option>
                  <option value="Indoor Badminton Court 1 & 2">Indoor Badminton Court 1 & 2</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#211710] dark:text-[#ded3c4] mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-2.5 py-2 text-xs rounded-lg bg-[#f8f3eb] dark:bg-[#1a120c] border border-[#ded1be] dark:border-[#3c2f24] text-[#211710] dark:text-[#f7f2ea] focus-visible:ring-2 focus-visible:ring-[#c85d2e] focus-visible:outline-none"
                >
                  <option value="Sports League">Sports League</option>
                  <option value="Wellness">Wellness & Yoga</option>
                  <option value="Skill Workshop">Skill Workshop & Repair</option>
                  <option value="Arts & Culture">Arts & Culture</option>
                  <option value="Community Storytelling">Community Storytelling</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#211710] dark:text-[#ded3c4] mb-1">
                  Date & Time Slot
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Date (e.g. Sat, Nov 8)"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#f8f3eb] dark:bg-[#1a120c] border border-[#ded1be] dark:border-[#3c2f24] text-[#211710] dark:text-[#f7f2ea] focus-visible:ring-2 focus-visible:ring-[#c85d2e] focus-visible:outline-none"
                  />
                  <input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Time (e.g. 4:00 PM)"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#f8f3eb] dark:bg-[#1a120c] border border-[#ded1be] dark:border-[#3c2f24] text-[#211710] dark:text-[#f7f2ea] focus-visible:ring-2 focus-visible:ring-[#c85d2e] focus-visible:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#211710] dark:text-[#ded3c4] mb-1">
                  Max Participant Capacity
                </label>
                <input
                  type="number"
                  min="5"
                  max="100"
                  value={maxSeats}
                  onChange={(e) => setMaxSeats(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#f8f3eb] dark:bg-[#1a120c] border border-[#ded1be] dark:border-[#3c2f24] text-[#211710] dark:text-[#f7f2ea] focus-visible:ring-2 focus-visible:ring-[#c85d2e] focus-visible:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#211710] dark:text-[#ded3c4] mb-1">
                  Mohalla Mudra Reward for Attending (MM)
                </label>
                <input
                  type="number"
                  min="10"
                  max="100"
                  value={creditsReward}
                  onChange={(e) => setCreditsReward(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#f8f3eb] dark:bg-[#1a120c] border border-[#ded1be] dark:border-[#3c2f24] text-[#211710] dark:text-[#f7f2ea] focus-visible:ring-2 focus-visible:ring-[#c85d2e] focus-visible:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#211710] dark:text-[#ded3c4] mb-1">
                Event Description & Objective
              </label>
              <textarea
                rows="2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the format, rules, and who should bring what..."
                className="w-full px-3 py-2 text-xs rounded-lg bg-[#f8f3eb] dark:bg-[#1a120c] border border-[#ded1be] dark:border-[#3c2f24] text-[#211710] dark:text-[#f7f2ea] placeholder:text-[#826e5a] focus-visible:ring-2 focus-visible:ring-[#c85d2e] focus-visible:outline-none"
              ></textarea>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsCreatingEvent(false)}
                className="px-4 py-2 rounded-lg bg-[#ede4d6] dark:bg-[#2e2319] text-[#574332] dark:text-[#cfbea5] text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-[#c85d2e] hover:bg-[#b84f22] text-white font-bold text-xs shadow-md"
              >
                Publish event
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ROSTER AND ATTENDANCE TABLE */}
      <div className="rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] overflow-hidden shadow-sm">
        <div className="p-4 border-b border-[#ede4d6] dark:border-[#36291e] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-bold font-heading text-[#211710] dark:text-[#f7f2ea]">
              Resident Registrations & Check-In Roster
            </h2>
            <p className="text-xs text-[#725e4c] dark:text-[#a6917b]">
              Live registration stream across your company’s sponsored society events.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#f6efe3] dark:bg-[#2e2319] text-[#725e4c] dark:text-[#c9b7a3] font-medium border border-[#ded1be] dark:border-transparent">
            {roster.length} Registered Residents
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#574332] dark:text-[#cfbea5]">
            <thead className="bg-[#f6efe3] dark:bg-[#1c140d] text-[11px] uppercase font-mono text-[#725e4c] dark:text-[#8e7a68] border-b border-[#ded1be] dark:border-[#36291e]">
              <tr>
                <th className="py-3 px-4">Resident</th>
                <th className="py-3 px-4">Society Unit</th>
                <th className="py-3 px-4">Employer</th>
                <th className="py-3 px-4">Enrolled Event</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ede4d6] dark:divide-[#36291e]">
              {roster.map((p) => {
                const isCheckedIn = p.status === 'Checked in';
                return (
                  <tr key={p.id} className="hover:bg-[#fbf6ee] dark:hover:bg-[#2b2118] transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#211710] dark:text-[#f7f2ea]">
                      {p.name}
                    </td>
                    <td className="py-3.5 px-4 text-[#725e4c] dark:text-[#a6917b] font-mono">
                      {p.unit}
                    </td>
                    <td className="py-3.5 px-4 text-[#574332] dark:text-[#ded3c4]">
                      {p.company}
                    </td>
                    <td className="py-3.5 px-4 text-[#574332] dark:text-[#ded3c4]">
                      {p.eventTitle}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          isCheckedIn
                            ? 'bg-[#faede6] dark:bg-[#38281b] text-[#c85d2e] dark:text-[#ecc26b] border border-[#e8c6b5] dark:border-[#c58c2b]/40 font-semibold'
                            : 'bg-[#f4ece0] dark:bg-[#2e2319] text-[#725e4c] dark:text-[#a6917b] border border-[#ded1be] dark:border-[#483a2e]'
                        }`}
                      >
                        {isCheckedIn && <Check className="w-3 h-3 text-[#c85d2e] dark:text-[#dfaa43]" />}
                        {p.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => toggleCheckIn(p.id)}
                        className={`px-3 py-1 rounded-md text-[11px] font-medium transition-colors ${
                          isCheckedIn
                            ? 'bg-[#ede4d6] dark:bg-[#2e2319] text-[#574332] dark:text-[#c9b7a3] hover:text-[#c85d2e]'
                            : 'bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#ecc26b] hover:bg-[#e4d4be] border border-[#d8c39e] dark:border-[#c58c2b]/40'
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
