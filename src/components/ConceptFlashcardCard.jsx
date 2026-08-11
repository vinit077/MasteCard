import React, { useState } from 'react';
import { BookOpen, RotateCw, CheckCircle, Eye, EyeOff } from 'lucide-react';

export default function ConceptFlashcardCard({ flashcards, onUpdateMastery }) {
  const [activeModule, setActiveModule] = useState('All');
  const [revealedIds, setRevealedIds] = useState([]);

  const modules = ['All', 'Java Internals', 'System Design', 'Security & Payments'];

  const filteredCards = flashcards.filter(card => {
    if (activeModule === 'All') return true;
    return card.module === activeModule;
  });

  const toggleReveal = (id) => {
    if (revealedIds.includes(id)) {
      setRevealedIds(revealedIds.filter(i => i !== id));
    } else {
      setRevealedIds([...revealedIds, id]);
    }
  };

  return (
    <div className="bento-card span-col-2">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon-badge" style={{ background: 'rgba(59, 130, 246, 0.12)', color: 'var(--accent-blue)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
            <BookOpen size={20} />
          </div>
          <div>
            <h2 className="card-title">Concept & Revision Cards</h2>
            <p className="card-subtitle">Java Internals • System Design • Payment Security</p>
          </div>
        </div>
      </div>

      {/* Module Filter Tabs */}
      <div className="tab-navigation" style={{ marginBottom: '14px' }}>
        {modules.map(mod => (
          <button
            key={mod}
            className={`tab-btn ${activeModule === mod ? 'active' : ''}`}
            onClick={() => setActiveModule(mod)}
          >
            {mod}
          </button>
        ))}
      </div>

      {/* Flashcards List */}
      <div className="task-list" style={{ maxHeight: '380px', overflowY: 'auto' }}>
        {filteredCards.map((card) => {
          const isRevealed = revealedIds.includes(card.id);
          return (
            <div
              key={card.id}
              className="task-item"
              style={{ flexDirection: 'column', alignItems: 'stretch', gap: '8px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                <span className="badge-chip badge-blue">{card.module}</span>
                <span 
                  className={`badge-chip ${
                    card.mastery === 'Mastered' ? 'badge-emerald' : 
                    card.mastery === 'Confident' ? 'badge-gold' : 'badge-red'
                  }`}
                >
                  {card.mastery}
                </span>
              </div>

              <h4 style={{ fontSize: '0.925rem', fontWeight: '600', color: '#ffffff', lineHeight: '1.4' }}>
                {card.question}
              </h4>

              {isRevealed ? (
                <div style={{ marginTop: '6px', padding: '10px 12px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', borderLeft: '3px solid var(--mc-orange)', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                  <p style={{ whiteSpace: 'pre-wrap' }}>{card.answer}</p>
                  <div style={{ marginTop: '10px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Self-Rate Mastery:</span>
                    <button className="btn-pill" style={{ padding: '2px 8px', fontSize: '0.7rem' }} onClick={() => onUpdateMastery(card.id, 'Needs Review')}>🔴 Review</button>
                    <button className="btn-pill" style={{ padding: '2px 8px', fontSize: '0.7rem' }} onClick={() => onUpdateMastery(card.id, 'Confident')}>🟡 Confident</button>
                    <button className="btn-pill" style={{ padding: '2px 8px', fontSize: '0.7rem' }} onClick={() => onUpdateMastery(card.id, 'Mastered')}>🟢 Mastered</button>
                  </div>
                </div>
              ) : null}

              <button
                className="btn-pill"
                style={{ width: '100%', justifyContent: 'center', marginTop: '4px', fontSize: '0.8rem' }}
                onClick={() => toggleReveal(card.id)}
              >
                {isRevealed ? <><EyeOff size={14} /> Hide Explanation</> : <><Eye size={14} /> Reveal Explanation</>}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
