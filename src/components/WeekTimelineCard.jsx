import React, { useState } from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';

export default function WeekTimelineCard({ weeks, onToggleTask, activeWeekId, setActiveWeekId }) {
  const activeWeek = weeks.find(w => w.id === activeWeekId) || weeks[0];

  const completedCount = activeWeek.tasks.filter(t => t.completed).length;
  const progressPercent = Math.round((completedCount / activeWeek.tasks.length) * 100);

  return (
    <div className="bento-card span-col-4">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon-badge" style={{ background: 'rgba(247, 158, 27, 0.12)', color: 'var(--mc-gold)', borderColor: 'rgba(247, 158, 27, 0.2)' }}>
            <Calendar size={20} />
          </div>
          <div>
            <h2 className="card-title">6-Week Curriculum & Progress Roadmap</h2>
            <p className="card-subtitle">Mastercard SDE-1 Preparation Syllabus</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            {completedCount}/{activeWeek.tasks.length} Done ({progressPercent}%)
          </span>
        </div>
      </div>

      {/* Week Selector Tabs */}
      <div className="tab-navigation">
        {weeks.map((w) => {
          const wDone = w.tasks.filter(t => t.completed).length;
          const isComplete = wDone === w.tasks.length;
          return (
            <button
              key={w.id}
              className={`tab-btn ${activeWeekId === w.id ? 'active' : ''}`}
              onClick={() => setActiveWeekId(w.id)}
              style={activeWeekId === w.id ? { backgroundColor: w.color } : {}}
            >
              {isComplete && '✓ '}
              {w.weekNum}
            </button>
          );
        })}
      </div>

      {/* Active Week Details Header */}
      <div style={{ marginBottom: '16px', padding: '14px', background: 'rgba(0,0,0,0.25)', borderRadius: '12px', borderLeft: `4px solid ${activeWeek.color}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#ffffff' }}>
            {activeWeek.weekNum}: {activeWeek.title}
          </h3>
          <span className="badge-chip badge-gold">{activeWeek.subtitle.split(',')[0]}</span>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
          {activeWeek.focus}
        </p>
      </div>

      {/* Task Checklist for Selected Week */}
      <div className="task-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '10px' }}>
        {activeWeek.tasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.completed ? 'completed' : ''}`}
            onClick={() => onToggleTask(activeWeek.id, task.id)}
          >
            <div className="task-checkbox">
              {task.completed && <CheckCircle2 size={14} />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="task-text">{task.text}</span>
              </div>
              <span 
                style={{ 
                  fontSize: '0.7rem', 
                  color: 'var(--text-muted)', 
                  display: 'inline-block', 
                  marginTop: '4px',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '2px 6px',
                  borderRadius: '4px'
                }}
              >
                {task.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
