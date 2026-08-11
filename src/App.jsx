import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CANDIDATE_INFO, 
  WEEKS_DATA, 
  INITIAL_DSA_PROBLEMS, 
  INITIAL_FLASHCARDS, 
  INITIAL_STAR_STORIES, 
  INITIAL_APPLICATIONS 
} from './data/prepData';

import {
  fetchWeeks, toggleTaskApi,
  fetchDsaProblems, toggleDsaApi, addDsaApi, updateDsaNotesApi,
  fetchFlashcards, updateMasteryApi,
  fetchStarStories, updateStarStoryApi,
  fetchApplications, addApplicationApi, updateAppStageApi,
  resetDatabaseApi
} from './services/api';

import HeroProgressCard from './components/HeroProgressCard';
import DailyFocusCard from './components/DailyFocusCard';
import WeekTimelineCard from './components/WeekTimelineCard';
import DSATrackerCard from './components/DSATrackerCard';
import ConceptFlashcardCard from './components/ConceptFlashcardCard';
import STARBuilderCard from './components/STARBuilderCard';
import ApplicationTrackerCard from './components/ApplicationTrackerCard';

export default function App() {
  const [weeks, setWeeks] = useState(WEEKS_DATA);
  const [dsaProblems, setDsaProblems] = useState(INITIAL_DSA_PROBLEMS);
  const [flashcards, setFlashcards] = useState(INITIAL_FLASHCARDS);
  const [starStories, setStarStories] = useState(INITIAL_STAR_STORIES);
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  
  const [isBackendConnected, setIsBackendConnected] = useState(false);
  const [activeWeekId, setActiveWeekId] = useState(1);

  // Sync data from Spring Boot REST API
  const syncWithBackend = async () => {
    try {
      const [w, dsa, fc, star, apps] = await Promise.all([
        fetchWeeks(),
        fetchDsaProblems(),
        fetchFlashcards(),
        fetchStarStories(),
        fetchApplications()
      ]);
      setWeeks(w);
      setDsaProblems(dsa);
      setFlashcards(fc);
      setStarStories(star);
      setApplications(apps);
      setIsBackendConnected(true);
    } catch (err) {
      console.error('Backend sync error:', err);
      setIsBackendConnected(false);
      // Fallback to localStorage if Spring Boot API is offline
      const savedW = localStorage.getItem('mc_prep_weeks');
      if (savedW) setWeeks(JSON.parse(savedW));
      const savedDsa = localStorage.getItem('mc_prep_dsa');
      if (savedDsa) setDsaProblems(JSON.parse(savedDsa));
      const savedFc = localStorage.getItem('mc_prep_flashcards');
      if (savedFc) setFlashcards(JSON.parse(savedFc));
      const savedStar = localStorage.getItem('mc_prep_star');
      if (savedStar) setStarStories(JSON.parse(savedStar));
      const savedApps = localStorage.getItem('mc_prep_apps');
      if (savedApps) setApplications(JSON.parse(savedApps));
    }
  };

  // Initial Load & Real-Time Polling every 3 seconds for Cross-Device Sync
  useEffect(() => {
    syncWithBackend();
    const interval = setInterval(() => {
      syncWithBackend();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Save to localStorage as backup
  useEffect(() => {
    if (!isBackendConnected) {
      localStorage.setItem('mc_prep_weeks', JSON.stringify(weeks));
      localStorage.setItem('mc_prep_dsa', JSON.stringify(dsaProblems));
      localStorage.setItem('mc_prep_flashcards', JSON.stringify(flashcards));
      localStorage.setItem('mc_prep_star', JSON.stringify(starStories));
      localStorage.setItem('mc_prep_apps', JSON.stringify(applications));
    }
  }, [weeks, dsaProblems, flashcards, starStories, applications, isBackendConnected]);

  // Overall Progress Calculation
  const totalTasks = weeks.reduce((acc, w) => acc + w.tasks.length, 0);
  const completedTasks = weeks.reduce((acc, w) => acc + w.tasks.filter(t => t.completed).length, 0);

  const totalDsa = dsaProblems.length;
  const dsaSolved = dsaProblems.filter(p => p.solved).length;

  const totalCards = flashcards.length;
  const masteredCards = flashcards.filter(c => c.mastery === 'Mastered' || c.mastery === 'Confident').length;

  const syllabusScore = totalTasks > 0 ? (completedTasks / totalTasks) * 40 : 0;
  const dsaScore = totalDsa > 0 ? (dsaSolved / totalDsa) * 40 : 0;
  const conceptScore = totalCards > 0 ? (masteredCards / totalCards) * 20 : 0;
  
  const overallProgress = Math.min(100, syllabusScore + dsaScore + conceptScore);

  // Handlers with Spring Boot API Sync & Optimistic UI
  const handleToggleTask = async (weekId, taskId) => {
    setWeeks(prevWeeks => 
      prevWeeks.map(week => {
        if (week.id !== weekId) return week;
        const updatedTasks = week.tasks.map(t => {
          if (t.id !== taskId) return t;
          const nextState = !t.completed;
          if (nextState) {
            confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
          }
          return { ...t, completed: nextState };
        });
        return { ...week, tasks: updatedTasks };
      })
    );

    if (isBackendConnected) {
      try {
        await toggleTaskApi(weekId, taskId);
      } catch (e) {
        console.error('Backend sync error:', e);
      }
    }
  };

  const handleToggleDsa = async (problemId) => {
    setDsaProblems(prev => 
      prev.map(p => {
        if (p.id !== problemId) return p;
        const nextSolved = !p.solved;
        if (nextSolved) {
          confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
        }
        return { ...p, solved: nextSolved };
      })
    );

    if (isBackendConnected) {
      try {
        await toggleDsaApi(problemId);
      } catch (e) {
        console.error('Backend sync error:', e);
      }
    }
  };

  const handleAddDsaProblem = async (newProblem) => {
    setDsaProblems(prev => [newProblem, ...prev]);
    if (isBackendConnected) {
      try {
        await addDsaApi(newProblem);
      } catch (e) {
        console.error('Backend sync error:', e);
      }
    }
  };

  const handleUpdateDsaNotes = async (problemId, newNotes) => {
    setDsaProblems(prev => 
      prev.map(p => p.id === problemId ? { ...p, notes: newNotes } : p)
    );
    if (isBackendConnected) {
      try {
        await updateDsaNotesApi(problemId, newNotes);
      } catch (e) {
        console.error('Backend sync error:', e);
      }
    }
  };

  const handleUpdateMastery = async (cardId, newMastery) => {
    setFlashcards(prev => 
      prev.map(c => c.id === cardId ? { ...c, mastery: newMastery } : c)
    );
    if (isBackendConnected) {
      try {
        await updateMasteryApi(cardId, newMastery);
      } catch (e) {
        console.error('Backend sync error:', e);
      }
    }
  };

  const handleSaveStarStory = async (storyId, updatedStory) => {
    setStarStories(prev => 
      prev.map(s => s.id === storyId ? updatedStory : s)
    );
    if (isBackendConnected) {
      try {
        await updateStarStoryApi(storyId, updatedStory);
      } catch (e) {
        console.error('Backend sync error:', e);
      }
    }
  };

  const handleAddApplication = async (newApp) => {
    setApplications(prev => [newApp, ...prev]);
    if (isBackendConnected) {
      try {
        await addApplicationApi(newApp);
      } catch (e) {
        console.error('Backend sync error:', e);
      }
    }
  };

  const handleUpdateAppStage = async (appId, newStage) => {
    setApplications(prev => 
      prev.map(a => a.id === appId ? { ...a, stage: newStage } : a)
    );
    if (isBackendConnected) {
      try {
        await updateAppStageApi(appId, newStage);
      } catch (e) {
        console.error('Backend sync error:', e);
      }
    }
  };

  const handleResetData = async () => {
    if (window.confirm("Are you sure you want to reset all progress data back to default initial state?")) {
      if (isBackendConnected) {
        try {
          await resetDatabaseApi();
          await syncWithBackend();
        } catch (e) {
          console.error(e);
        }
      } else {
        localStorage.clear();
        setWeeks(WEEKS_DATA);
        setDsaProblems(INITIAL_DSA_PROBLEMS);
        setFlashcards(INITIAL_FLASHCARDS);
        setStarStories(INITIAL_STAR_STORIES);
        setApplications(INITIAL_APPLICATIONS);
      }
    }
  };

  const handleExportData = () => {
    const exportObj = {
      weeks,
      dsaProblems,
      flashcards,
      starStories,
      applications,
      exportDate: new Date().toISOString()
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `mastercard_prep_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const activeWeek = weeks.find(w => w.id === activeWeekId) || weeks[0];

  return (
    <div className="app-container">
      {/* Top Brand Header */}
      <header className="app-header">
        <div className="brand-wrapper">
          <div className="mastercard-circles">
            <div className="circle-red" />
            <div className="circle-orange" />
          </div>
          <div>
            <h1 className="brand-title">Mastercard SDE-1 Prep Tracker</h1>
            <p className="brand-subtitle">Vinit Mahale • Bento Grid Edition</p>
          </div>
        </div>

        <div className="header-actions">
          {isBackendConnected ? (
            <span className="badge-chip badge-emerald" title="Spring Boot REST API Connected">
              🟢 Java Spring Boot Live Sync
            </span>
          ) : (
            <span className="badge-chip badge-gold" title="Offline Local Storage Mode">
              🟡 LocalStorage Mode
            </span>
          )}
          <button className="btn-pill btn-primary" onClick={handleExportData}>
            Export JSON
          </button>
        </div>
      </header>

      {/* Main Bento Grid */}
      <main className="bento-grid">
        <HeroProgressCard
          overallProgress={overallProgress}
          completedTaskCount={completedTasks}
          totalTaskCount={totalTasks}
          dsaSolvedCount={dsaSolved}
          totalDsaCount={totalDsa}
          candidateInfo={CANDIDATE_INFO}
          onResetData={handleResetData}
          onExportData={handleExportData}
        />

        <DailyFocusCard
          dsaProblems={dsaProblems}
          onToggleDsa={handleToggleDsa}
          activeWeek={activeWeek}
        />

        <WeekTimelineCard
          weeks={weeks}
          onToggleTask={handleToggleTask}
          activeWeekId={activeWeekId}
          setActiveWeekId={setActiveWeekId}
        />

        <DSATrackerCard
          problems={dsaProblems}
          onToggleProblem={handleToggleDsa}
          onAddProblem={handleAddDsaProblem}
          onUpdateNotes={handleUpdateDsaNotes}
        />

        <ConceptFlashcardCard
          flashcards={flashcards}
          onUpdateMastery={handleUpdateMastery}
        />

        <STARBuilderCard
          starStories={starStories}
          onSaveStory={handleSaveStarStory}
        />

        <ApplicationTrackerCard
          applications={applications}
          onAddApplication={handleAddApplication}
          onUpdateStage={handleUpdateAppStage}
        />
      </main>
    </div>
  );
}
