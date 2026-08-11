import React, { useState } from 'react';
import { Code2, ExternalLink, Plus, Search, Edit3, CheckCircle2, X } from 'lucide-react';

export default function DSATrackerCard({ problems, onToggleProblem, onAddProblem, onUpdateNotes }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNotesId, setEditingNotesId] = useState(null);
  const [notesText, setNotesText] = useState('');

  // New Problem Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Arrays & Strings');
  const [newDifficulty, setNewDifficulty] = useState('Medium');
  const [newUrl, setNewUrl] = useState('');
  const [newNotes, setNewNotes] = useState('');

  const categories = ['All', 'Arrays & Strings', 'HashMaps & Sets', 'Sorting & Searching', 'Linked Lists', 'Stacks & Queues', 'Trees & BST'];

  const filteredProblems = problems.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.notes.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleSaveNotes = (id) => {
    onUpdateNotes(id, notesText);
    setEditingNotesId(null);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    onAddProblem({
      id: `custom-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      difficulty: newDifficulty,
      solved: false,
      leetcodeUrl: newUrl || 'https://leetcode.com/problemset/all/',
      notes: newNotes || 'Review key algorithm steps.'
    });
    setNewTitle('');
    setNewUrl('');
    setNewNotes('');
    setIsAddModalOpen(false);
  };

  const solvedCount = problems.filter(p => p.solved).length;

  return (
    <div className="bento-card span-col-3">
      <div className="card-header">
        <div className="card-title-group">
          <div className="card-icon-badge" style={{ background: 'rgba(16, 185, 129, 0.12)', color: 'var(--accent-emerald)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
            <Code2 size={20} />
          </div>
          <div>
            <h2 className="card-title">DSA Problem Repository & Notes</h2>
            <p className="card-subtitle">LeetCode Easy/Medium Tracker ({solvedCount}/{problems.length} Solved)</p>
          </div>
        </div>
        <button className="btn-pill btn-primary" onClick={() => setIsAddModalOpen(true)}>
          <Plus size={14} /> Add Problem
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '180px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            className="form-input"
            style={{ paddingLeft: '36px' }}
            placeholder="Search problems or approach notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="tab-navigation" style={{ marginBottom: 0 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Problems List */}
      <div className="task-list" style={{ maxHeight: '380px', overflowY: 'auto' }}>
        {filteredProblems.map((problem) => (
          <div
            key={problem.id}
            className={`task-item ${problem.solved ? 'completed' : ''}`}
            style={{ flexDirection: 'column', alignItems: 'stretch' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div 
                className="task-checkbox" 
                onClick={() => onToggleProblem(problem.id)}
                style={{ cursor: 'pointer' }}
              >
                {problem.solved && <CheckCircle2 size={14} />}
              </div>
              <div style={{ flex: 1, cursor: 'pointer' }} onClick={() => onToggleProblem(problem.id)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="task-text" style={{ fontWeight: '600' }}>{problem.title}</span>
                  <span className={`badge-chip ${problem.difficulty === 'Easy' ? 'badge-emerald' : 'badge-gold'}`}>
                    {problem.difficulty}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{problem.category}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <button
                  className="btn-pill"
                  style={{ padding: '4px 8px', fontSize: '0.75rem' }}
                  onClick={() => {
                    setEditingNotesId(problem.id);
                    setNotesText(problem.notes);
                  }}
                  title="Edit approach notes"
                >
                  <Edit3 size={12} /> Notes
                </button>
                <a
                  href={problem.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill"
                  style={{ padding: '4px 8px', fontSize: '0.75rem', color: 'var(--mc-orange)' }}
                  title="Solve on LeetCode"
                >
                  Solve <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Approach Notes Display or Inline Editor */}
            {editingNotesId === problem.id ? (
              <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  className="form-input"
                  value={notesText}
                  onChange={(e) => setNotesText(e.target.value)}
                  placeholder="Enter key complexity / approach notes..."
                  autoFocus
                />
                <button className="btn-pill btn-primary" onClick={() => handleSaveNotes(problem.id)}>Save</button>
                <button className="btn-pill" onClick={() => setEditingNotesId(null)}>Cancel</button>
              </div>
            ) : (
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '6px', paddingLeft: '32px', fontStyle: 'italic' }}>
                💡 {problem.notes}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Add Custom Problem Modal Drawer */}
      {isAddModalOpen && (
        <div className="modal-overlay" onClick={() => setIsAddModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Add Custom LeetCode Problem</h3>
              <button className="btn-pill" onClick={() => setIsAddModalOpen(false)}><X size={16} /></button>
            </div>
            <form onSubmit={handleAddSubmit}>
              <div className="form-group">
                <label className="form-label">Problem Title</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Subarray Sum Equals K"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select
                    className="form-select"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  >
                    {categories.filter(c => c !== 'All').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Difficulty</label>
                  <select
                    className="form-select"
                    value={newDifficulty}
                    onChange={(e) => setNewDifficulty(e.target.value)}
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">LeetCode URL (optional)</label>
                <input
                  type="url"
                  className="form-input"
                  placeholder="https://leetcode.com/problems/..."
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Approach Notes</label>
                <textarea
                  className="form-textarea"
                  rows="2"
                  placeholder="e.g., Prefix sum array with HashMap frequency lookup."
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '16px' }}>
                <button type="button" className="btn-pill" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-pill btn-primary">Add Problem</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
