import React from 'react';
import { Zap, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

export default function DailyFocusCard({ dsaProblems, onToggleDsa, activeWeek }) {
  // Find top 2 unsolved problems or first 2 problems
  const focusProblems = dsaProblems.filter(p => !p.solved).slice(0, 2);
  const displayProblems = focusProblems.length > 0 ? focusProblems : dsaProblems.slice(0, 2);

  return (
    <div className="bento-card span-col-2">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon-badge" style={{ background: 'rgba(235, 0, 27, 0.12)', color: 'var(--mc-red)', borderColor: 'rgba(235, 0, 27, 0.2)' }}>
            <Zap size={20} />
          </div>
          <div>
            <h2 className="card-title">Daily Action Focus</h2>
            <p className="card-subtitle">Target: 2 LeetCode Problems Daily + Active Module</p>
          </div>
        </div>
        <span className="badge-chip badge-red">Active Focus</span>
      </div>

      <div style={{ margin: '8px 0', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
        Current Phase: <strong style={{ color: 'var(--text-primary)' }}>{activeWeek.title}</strong>
      </div>

      <div className="task-list">
        {displayProblems.map((problem) => (
          <div 
            key={problem.id} 
            className={`task-item ${problem.solved ? 'completed' : ''}`}
            onClick={() => onToggleDsa(problem.id)}
          >
            <div className="task-checkbox">
              {problem.solved && <CheckCircle2 size={14} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="task-text" style={{ fontWeight: '600' }}>{problem.title}</span>
                <span className={`badge-chip ${problem.difficulty === 'Easy' ? 'badge-emerald' : 'badge-gold'}`}>
                  {problem.difficulty}
                </span>
              </div>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                {problem.category} • {problem.notes}
              </p>
            </div>
            <a 
              href={problem.leetcodeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ color: 'var(--mc-orange)', padding: '4px' }}
              title="Open on LeetCode"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {focusProblems.length === 0 ? '🎉 All primary problems solved for today!' : `${focusProblems.length} remaining today`}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--mc-orange)', fontSize: '0.825rem', fontWeight: '600' }}>
          Keep momentum <ArrowRight size={14} />
        </div>
      </div>
    </div>
  );
}
