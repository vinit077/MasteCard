package com.mastercard.prep.controller;

import com.mastercard.prep.config.DataInitializer;
import com.mastercard.prep.entity.*;
import com.mastercard.prep.repository.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/prep")
public class PrepController {

    private final WeekTaskRepository weekTaskRepository;
    private final DsaProblemRepository dsaProblemRepository;
    private final ConceptCardRepository conceptCardRepository;
    private final StarStoryRepository starStoryRepository;
    private final JobApplicationRepository jobApplicationRepository;
    private final DataInitializer dataInitializer;

    public PrepController(WeekTaskRepository weekTaskRepository,
                          DsaProblemRepository dsaProblemRepository,
                          ConceptCardRepository conceptCardRepository,
                          StarStoryRepository starStoryRepository,
                          JobApplicationRepository jobApplicationRepository,
                          DataInitializer dataInitializer) {
        this.weekTaskRepository = weekTaskRepository;
        this.dsaProblemRepository = dsaProblemRepository;
        this.conceptCardRepository = conceptCardRepository;
        this.starStoryRepository = starStoryRepository;
        this.jobApplicationRepository = jobApplicationRepository;
        this.dataInitializer = dataInitializer;
    }

    // --- WEEKS & TASKS ---
    @GetMapping("/weeks")
    public ResponseEntity<List<Map<String, Object>>> getWeeks() {
        List<WeekTask> allTasks = weekTaskRepository.findAll();
        
        Map<Integer, List<WeekTask>> tasksByWeek = new HashMap<>();
        for (WeekTask t : allTasks) {
            tasksByWeek.computeIfAbsent(t.getWeekId(), k -> new ArrayList<>()).add(t);
        }

        List<Map<String, Object>> result = new ArrayList<>();
        
        Map<Integer, String[]> metadata = Map.of(
            1, new String[]{"Weeks 1–2", "DSA Foundations (Eliminatory Gate)", "Arrays, Strings, HashMaps, Recursion, Sorting, Trees & Linked Lists", "Solve 2 LeetCode problems daily (Easy → Medium).", "#ff5f00"},
            2, new String[]{"Week 3", "Java Internals & Deep-Dive", "JVM Memory, Generational GC, HashMap Collisions, Threads & Java 8+", "Be ready to explain how Java works under the hood in Technical Round 1.", "#eb001b"},
            3, new String[]{"Week 4", "System Design Basics (Fresher Level)", "REST API Design, Database Indexing, Caching & Project Scalability", "Master client-server basics and practice walking through your Employee Management Portal.", "#f79e1b"},
            4, new String[]{"Week 5", "Security & Payments-Specific Prep", "OAuth 2.0, JWT Tokens, Payment Tokenization & Mastercard Edge", "Differentiate yourself for Mastercard specifically by mastering authentication protocols.", "#10b981"},
            5, new String[]{"Week 6", "Mock Interviews & STAR Behavioral Prep", "Technical Mocks, STAR Response Drafting & Mastercard Decency Quotient (DQ)", "Refine verbal delivery, mock coding rounds, and prepare genuine stories.", "#3b82f6"}
        );

        for (int i = 1; i <= 5; i++) {
            String[] meta = metadata.get(i);
            Map<String, Object> weekMap = new LinkedHashMap<>();
            weekMap.put("id", i);
            weekMap.put("weekNum", meta[0]);
            weekMap.put("title", meta[1]);
            weekMap.put("subtitle", meta[2]);
            weekMap.put("focus", meta[3]);
            weekMap.put("color", meta[4]);
            weekMap.put("tasks", tasksByWeek.getOrDefault(i, Collections.emptyList()));
            result.add(weekMap);
        }

        return ResponseEntity.ok(result);
    }

    @PutMapping("/weeks/{weekId}/tasks/{taskId}/toggle")
    public ResponseEntity<WeekTask> toggleTask(@PathVariable Integer weekId, @PathVariable String taskId) {
        Optional<WeekTask> opt = weekTaskRepository.findById(taskId);
        if (opt.isPresent()) {
            WeekTask task = opt.get();
            task.setCompleted(!task.getCompleted());
            weekTaskRepository.save(task);
            return ResponseEntity.ok(task);
        }
        return ResponseEntity.notFound().build();
    }

    // --- DSA PROBLEMS ---
    @GetMapping("/dsa")
    public ResponseEntity<List<DsaProblem>> getDsaProblems() {
        return ResponseEntity.ok(dsaProblemRepository.findAll());
    }

    @PutMapping("/dsa/{problemId}/toggle")
    public ResponseEntity<DsaProblem> toggleDsa(@PathVariable String problemId) {
        Optional<DsaProblem> opt = dsaProblemRepository.findById(problemId);
        if (opt.isPresent()) {
            DsaProblem p = opt.get();
            p.setSolved(!p.getSolved());
            dsaProblemRepository.save(p);
            return ResponseEntity.ok(p);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/dsa")
    public ResponseEntity<DsaProblem> addDsaProblem(@RequestBody DsaProblem problem) {
        if (problem.getId() == null || problem.getId().isEmpty()) {
            problem.setId("custom-" + System.currentTimeMillis());
        }
        DsaProblem saved = dsaProblemRepository.save(problem);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/dsa/{problemId}/notes")
    public ResponseEntity<DsaProblem> updateDsaNotes(@PathVariable String problemId, @RequestBody Map<String, String> body) {
        Optional<DsaProblem> opt = dsaProblemRepository.findById(problemId);
        if (opt.isPresent()) {
            DsaProblem p = opt.get();
            p.setNotes(body.getOrDefault("notes", p.getNotes()));
            dsaProblemRepository.save(p);
            return ResponseEntity.ok(p);
        }
        return ResponseEntity.notFound().build();
    }

    // --- FLASHCARDS ---
    @GetMapping("/flashcards")
    public ResponseEntity<List<ConceptCard>> getFlashcards() {
        return ResponseEntity.ok(conceptCardRepository.findAll());
    }

    @PutMapping("/flashcards/{cardId}/mastery")
    public ResponseEntity<ConceptCard> updateMastery(@PathVariable String cardId, @RequestBody Map<String, String> body) {
        Optional<ConceptCard> opt = conceptCardRepository.findById(cardId);
        if (opt.isPresent()) {
            ConceptCard card = opt.get();
            card.setMastery(body.getOrDefault("mastery", card.getMastery()));
            conceptCardRepository.save(card);
            return ResponseEntity.ok(card);
        }
        return ResponseEntity.notFound().build();
    }

    // --- STAR STORIES ---
    @GetMapping("/star-stories")
    public ResponseEntity<List<StarStory>> getStarStories() {
        return ResponseEntity.ok(starStoryRepository.findAll());
    }

    @PutMapping("/star-stories/{storyId}")
    public ResponseEntity<StarStory> updateStarStory(@PathVariable String storyId, @RequestBody StarStory updatedStory) {
        updatedStory.setId(storyId);
        StarStory saved = starStoryRepository.save(updatedStory);
        return ResponseEntity.ok(saved);
    }

    // --- APPLICATIONS ---
    @GetMapping("/applications")
    public ResponseEntity<List<JobApplication>> getApplications() {
        return ResponseEntity.ok(jobApplicationRepository.findAll());
    }

    @PostMapping("/applications")
    public ResponseEntity<JobApplication> addApplication(@RequestBody JobApplication application) {
        if (application.getId() == null || application.getId().isEmpty()) {
            application.setId("app-" + System.currentTimeMillis());
        }
        JobApplication saved = jobApplicationRepository.save(application);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/applications/{appId}/stage")
    public ResponseEntity<JobApplication> updateStage(@PathVariable String appId, @RequestBody Map<String, String> body) {
        Optional<JobApplication> opt = jobApplicationRepository.findById(appId);
        if (opt.isPresent()) {
            JobApplication app = opt.get();
            app.setStage(body.getOrDefault("stage", app.getStage()));
            jobApplicationRepository.save(app);
            return ResponseEntity.ok(app);
        }
        return ResponseEntity.notFound().build();
    }

    // --- RESET DATA ---
    @PostMapping("/reset")
    public ResponseEntity<Map<String, String>> resetDatabase() {
        dataInitializer.seedDatabase();
        return ResponseEntity.ok(Map.of("message", "Database successfully reset to default prep plan state"));
    }
}
