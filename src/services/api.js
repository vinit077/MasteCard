// Dynamic API Host (auto-normalizes VITE_API_URL or defaults to live Render backend)
const rawApiUrl = (import.meta.env.VITE_API_URL && import.meta.env.VITE_API_URL.trim() !== '')
  ? import.meta.env.VITE_API_URL.trim()
  : (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
      ? 'http://localhost:8080' 
      : 'https://mastercard-prep-backend.onrender.com');

const cleanBaseUrl = rawApiUrl.replace(/\/+$/, '');
const API_BASE = cleanBaseUrl.endsWith('/api/prep') ? cleanBaseUrl : `${cleanBaseUrl}/api/prep`;

export async function fetchWeeks() {
  const res = await fetch(`${API_BASE}/weeks`);
  if (!res.ok) throw new Error('Failed to fetch weeks from backend');
  return res.json();
}

export async function toggleTaskApi(weekId, taskId) {
  const res = await fetch(`${API_BASE}/weeks/${weekId}/tasks/${taskId}/toggle`, {
    method: 'PUT'
  });
  if (!res.ok) throw new Error('Failed to toggle task');
  return res.json();
}

export async function fetchDsaProblems() {
  const res = await fetch(`${API_BASE}/dsa`);
  if (!res.ok) throw new Error('Failed to fetch DSA problems');
  return res.json();
}

export async function toggleDsaApi(problemId) {
  const res = await fetch(`${API_BASE}/dsa/${problemId}/toggle`, {
    method: 'PUT'
  });
  if (!res.ok) throw new Error('Failed to toggle DSA problem');
  return res.json();
}

export async function addDsaApi(problem) {
  const res = await fetch(`${API_BASE}/dsa`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(problem)
  });
  if (!res.ok) throw new Error('Failed to add DSA problem');
  return res.json();
}

export async function updateDsaNotesApi(problemId, notes) {
  const res = await fetch(`${API_BASE}/dsa/${problemId}/notes`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ notes })
  });
  if (!res.ok) throw new Error('Failed to update notes');
  return res.json();
}

export async function fetchFlashcards() {
  const res = await fetch(`${API_BASE}/flashcards`);
  if (!res.ok) throw new Error('Failed to fetch flashcards');
  return res.json();
}

export async function updateMasteryApi(cardId, mastery) {
  const res = await fetch(`${API_BASE}/flashcards/${cardId}/mastery`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mastery })
  });
  if (!res.ok) throw new Error('Failed to update mastery');
  return res.json();
}

export async function fetchStarStories() {
  const res = await fetch(`${API_BASE}/star-stories`);
  if (!res.ok) throw new Error('Failed to fetch STAR stories');
  return res.json();
}

export async function updateStarStoryApi(storyId, story) {
  const res = await fetch(`${API_BASE}/star-stories/${storyId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(story)
  });
  if (!res.ok) throw new Error('Failed to update STAR story');
  return res.json();
}

export async function fetchApplications() {
  const res = await fetch(`${API_BASE}/applications`);
  if (!res.ok) throw new Error('Failed to fetch applications');
  return res.json();
}

export async function addApplicationApi(application) {
  const res = await fetch(`${API_BASE}/applications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(application)
  });
  if (!res.ok) throw new Error('Failed to add application');
  return res.json();
}

export async function updateAppStageApi(appId, stage) {
  const res = await fetch(`${API_BASE}/applications/${appId}/stage`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ stage })
  });
  if (!res.ok) throw new Error('Failed to update application stage');
  return res.json();
}

export async function resetDatabaseApi() {
  const res = await fetch(`${API_BASE}/reset`, {
    method: 'POST'
  });
  if (!res.ok) throw new Error('Failed to reset backend database');
  return res.json();
}
