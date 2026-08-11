import React, { useState } from 'react';
import { Briefcase, Plus, X } from 'lucide-react';

export default function ApplicationTrackerCard({ applications, onAddApplication, onUpdateStage }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('Software Engineer / SDE-1');
  const [stage, setStage] = useState('Preparing OA');
  const [referral, setReferral] = useState('Pending');
  const [notes, setNotes] = useState('');

  const stagesList = ['Preparing OA', 'OA Submitted', 'Technical R1 Scheduled', 'Technical R2 Scheduled', 'Final HR / DQ', 'Offer Received'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company.trim()) return;
    onAddApplication({
      id: `app-${Date.now()}`,
      company,
      role,
      appliedDate: new Date().toISOString().split('T')[0],
      stage,
      referral,
      notes
    });
    setCompany('');
    setNotes('');
    setIsAddModalOpen(false);
  };

  return (
    <div className="bento-card span-col-2">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon-badge" style={{ background: 'rgba(255, 95, 0, 0.12)', color: 'var(--mc-orange)', borderColor: 'rgba(255, 95, 0, 0.2)' }}>
            <Briefcase size={20} />
          </div>
          <div>
            <h2 className="card-title">Job Application Pipeline Tracker</h2>
            <p className="card-subtitle">Mastercard & Off-Campus Roles ({applications.length} Tracked)</p>
          </div>
        </div>
        <button className="btn-pill btn-primary" onClick={() => setIsAddModalOpen(true)}>
          <Plus size={14} /> Add App
        </button>
      </div>

      <div className="table-responsive" style={{ maxHeight: '300px' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Company & Role</th>
              <th>Date</th>
              <th>Pipeline Stage</th>
              <th>Referral</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>
                  <div style={{ fontWeight: '600', color: '#ffffff' }}>{app.company}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{app.role}</div>
                </td>
                <td style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {app.appliedDate}
                </td>
                <td>
                  <select
                    className="form-select"
                    style={{ padding: '4px 8px', fontSize: '0.75rem' }}
                    value={app.stage}
                    onChange={(e) => onUpdateStage(app.id, e.target.value)}
                  >
                    {stagesList.map(stg => (
                      <option key={stg} value={stg}>{stg}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <span className={`badge-chip ${app.referral.includes('Requested') || app.referral.includes('Pending') ? 'badge-gold' : 'badge-emerald'}`}>
                    {app.referral}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Application Modal Drawer */}
      {isAddModalOpen && (
        <div className="modal-overlay" onClick={() => setIsAddModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Track New Application</h3>
              <button className="btn-pill" onClick={() => setIsAddModalOpen(false)}><X size={16} /></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Mastercard"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Role Title</label>
                <input
                  type="text"
                  className="form-input"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Stage</label>
                  <select
                    className="form-select"
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                  >
                    {stagesList.map(stg => (
                      <option key={stg} value={stg}>{stg}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Referral Status</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g., Contacted Senior Manager"
                    value={referral}
                    onChange={(e) => setReferral(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Notes & Recruiter Contact</label>
                <textarea
                  className="form-textarea"
                  rows="2"
                  placeholder="e.g. Applied via off-campus portal; followed up on LinkedIn."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '16px' }}>
                <button type="button" className="btn-pill" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-pill btn-primary">Save Application</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
