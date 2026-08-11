import React from 'react';
import { Target, Flame, Trophy, RefreshCw, Download, Award } from 'lucide-react';

export default function HeroProgressCard({ 
  overallProgress, 
  completedTaskCount, 
  totalTaskCount, 
  dsaSolvedCount, 
  totalDsaCount,
  candidateInfo,
  onResetData,
  onExportData
}) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (overallProgress / 100) * circumference;

  return (
    <div className="bento-card span-col-2 highlight-border">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon-badge">
            <Trophy size={20} />
          </div>
          <div>
            <h2 className="card-title">Preparation Command Center</h2>
            <p className="card-subtitle">{candidateInfo.name} • {candidateInfo.targetRole}</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button className="btn-pill" onClick={onExportData} title="Backup Progress Data">
            <Download size={14} /> Backup
          </button>
          <button className="btn-pill" onClick={onResetData} title="Reset Data">
            <RefreshCw size={14} /> Reset
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', gap: '16px', margin: '12px 0' }}>
        {/* Radial Progress Gauge */}
        <div className="progress-ring-container">
          <svg width="140" height="140" style={{ transform: 'rotate(-90deg)' }}>
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="12"
              fill="transparent"
            />
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="url(#mcGradient)"
              strokeWidth="12"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              style={{ transition: 'stroke-dashoffset 0.6s ease' }}
            />
            <defs>
              <linearGradient id="mcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff5f00" />
                <stop offset="100%" stopColor="#eb001b" />
              </linearGradient>
            </defs>
          </svg>
          <div className="ring-center-text">
            <span className="ring-percent">{Math.round(overallProgress)}%</span>
            <span className="ring-label">READY</span>
          </div>
        </div>

        {/* Key Performance Indicators */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: '1', minWidth: '180px' }}>
          <div style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Flame size={20} color="#ff5f00" />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tasks Completed</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff' }}>
                {completedTaskCount} <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/ {totalTaskCount}</span>
              </div>
            </div>
          </div>

          <div style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Target size={20} color="#10b981" />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>LeetCode Problems</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff' }}>
                {dsaSolvedCount} <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/ {totalDsaCount}</span>
              </div>
            </div>
          </div>

          <div style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Award size={20} color="#f79e1b" />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Candidate Edge</div>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--mc-gold)' }}>
                Spring Boot • JWT • React
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--border-glass)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {candidateInfo.skillsEdge.map((skill, idx) => (
          <span key={idx} className="badge-chip badge-orange">{skill}</span>
        ))}
      </div>
    </div>
  );
}
