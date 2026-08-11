import React, { useState } from 'react';
import { MessageSquare, Edit2, Save, X, Plus } from 'lucide-react';

export default function STARBuilderCard({ starStories, onSaveStory, onAddStory }) {
  const [selectedStoryId, setSelectedStoryId] = useState(starStories[0]?.id || null);
  const [isEditing, setIsEditing] = useState(false);

  const selectedStory = starStories.find(s => s.id === selectedStoryId) || starStories[0];

  const [formSituation, setFormSituation] = useState(selectedStory?.situation || '');
  const [formTask, setFormTask] = useState(selectedStory?.task || '');
  const [formAction, setFormAction] = useState(selectedStory?.action || '');
  const [formResult, setFormResult] = useState(selectedStory?.result || '');

  const handleSelectStory = (story) => {
    setSelectedStoryId(story.id);
    setFormSituation(story.situation);
    setFormTask(story.task);
    setFormAction(story.action);
    setFormResult(story.result);
    setIsEditing(false);
  };

  const handleSave = () => {
    onSaveStory(selectedStory.id, {
      ...selectedStory,
      situation: formSituation,
      task: formTask,
      action: formAction,
      result: formResult
    });
    setIsEditing(false);
  };

  return (
    <div className="bento-card span-col-2">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon-badge" style={{ background: 'rgba(139, 92, 246, 0.12)', color: 'var(--accent-purple)', borderColor: 'rgba(139, 92, 246, 0.2)' }}>
            <MessageSquare size={20} />
          </div>
          <div>
            <h2 className="card-title">STAR Story Builder (Decency Quotient)</h2>
            <p className="card-subtitle">Behavioral & Project Interview Answers</p>
          </div>
        </div>
        {!isEditing ? (
          <button className="btn-pill" onClick={() => setIsEditing(true)}>
            <Edit2 size={14} /> Edit Story
          </button>
        ) : (
          <button className="btn-pill btn-primary" onClick={handleSave}>
            <Save size={14} /> Save
          </button>
        )}
      </div>

      {/* Story Selector Chips */}
      <div className="tab-navigation" style={{ marginBottom: '14px' }}>
        {starStories.map((story) => (
          <button
            key={story.id}
            className={`tab-btn ${selectedStoryId === story.id ? 'active' : ''}`}
            onClick={() => handleSelectStory(story)}
          >
            {story.title.split(':')[0]}
          </button>
        ))}
      </div>

      {selectedStory && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ padding: '10px 12px', background: 'rgba(139, 92, 246, 0.08)', borderRadius: '10px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--accent-purple)' }}>{selectedStory.title}</h4>
            <p style={{ fontSize: '0.785rem', color: 'var(--text-secondary)' }}>💡 {selectedStory.prompt}</p>
          </div>

          {!isEditing ? (
            <div className="task-list" style={{ flex: 1, gap: '8px' }}>
              <div style={{ padding: '8px 12px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--mc-orange)', textTransform: 'uppercase' }}>S — Situation</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginTop: '2px' }}>{selectedStory.situation}</p>
              </div>

              <div style={{ padding: '8px 12px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--mc-gold)', textTransform: 'uppercase' }}>T — Task</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginTop: '2px' }}>{selectedStory.task}</p>
              </div>

              <div style={{ padding: '8px 12px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-emerald)', textTransform: 'uppercase' }}>A — Action</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginTop: '2px' }}>{selectedStory.action}</p>
              </div>

              <div style={{ padding: '8px 12px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>R — Result</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginTop: '2px' }}>{selectedStory.result}</p>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <label className="form-label">Situation</label>
                <textarea className="form-textarea" rows="2" value={formSituation} onChange={e => setFormSituation(e.target.value)} />
              </div>
              <div>
                <label className="form-label">Task</label>
                <textarea className="form-textarea" rows="2" value={formTask} onChange={e => setFormTask(e.target.value)} />
              </div>
              <div>
                <label className="form-label">Action</label>
                <textarea className="form-textarea" rows="2" value={formAction} onChange={e => setFormAction(e.target.value)} />
              </div>
              <div>
                <label className="form-label">Result</label>
                <textarea className="form-textarea" rows="2" value={formResult} onChange={e => setFormResult(e.target.value)} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
