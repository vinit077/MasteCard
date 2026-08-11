package com.mastercard.prep.config;

import com.mastercard.prep.entity.*;
import com.mastercard.prep.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final WeekTaskRepository weekTaskRepository;
    private final DsaProblemRepository dsaProblemRepository;
    private final ConceptCardRepository conceptCardRepository;
    private final StarStoryRepository starStoryRepository;
    private final JobApplicationRepository jobApplicationRepository;

    public DataInitializer(WeekTaskRepository weekTaskRepository,
                           DsaProblemRepository dsaProblemRepository,
                           ConceptCardRepository conceptCardRepository,
                           StarStoryRepository starStoryRepository,
                           JobApplicationRepository jobApplicationRepository) {
        this.weekTaskRepository = weekTaskRepository;
        this.dsaProblemRepository = dsaProblemRepository;
        this.conceptCardRepository = conceptCardRepository;
        this.starStoryRepository = starStoryRepository;
        this.jobApplicationRepository = jobApplicationRepository;
    }

    @Override
    public void run(String... args) {
        if (weekTaskRepository.count() == 0) {
            seedDatabase();
        }
    }

    public void seedDatabase() {
        weekTaskRepository.deleteAll();
        dsaProblemRepository.deleteAll();
        conceptCardRepository.deleteAll();
        starStoryRepository.deleteAll();
        jobApplicationRepository.deleteAll();

        // Seed Week Tasks
        List<WeekTask> tasks = Arrays.asList(
            new WeekTask("w1_1", 1, "Arrays & Strings: Two Pointers & Sliding Window (2 problems/day)", "DSA", false),
            new WeekTask("w1_2", 1, "HashMaps & Sets: Frequency counting & lookup optimizations", "DSA", false),
            new WeekTask("w1_3", 1, "Recursion & Backtracking basics (Subsets, Permutations)", "DSA", false),
            new WeekTask("w1_4", 1, "Sorting & Binary Search variants (Rotated sorted array, search boundary)", "DSA", false),
            new WeekTask("w1_5", 1, "Linked Lists: Reverse LL, Detect cycle, Fast & Slow pointers", "DSA", false),
            new WeekTask("w1_6", 1, "Stacks & Queues: Valid Parentheses, Min Stack, Monotonic Stack", "DSA", false),
            new WeekTask("w1_7", 1, "Trees & BST: Level order traversal, Height, Balanced tree check", "DSA", false),
            new WeekTask("w1_8", 1, "Clean up & organize LeetCode / HackerRank profile link for resume", "Action Item", false),

            new WeekTask("w2_1", 2, "JVM Memory Model: Stack vs Heap vs Method Area (Metaspace)", "Java Internals", false),
            new WeekTask("w2_2", 2, "Garbage Collection: Generational GC, Eden vs Survivor vs Tenured spaces", "Java Internals", false),
            new WeekTask("w2_3", 2, "equals() vs hashCode() contract & HashMap internal bucket indexing", "Java Internals", false),
            new WeekTask("w2_4", 2, "Collections internals: ArrayList (dynamic resize) vs LinkedList trade-offs", "Java Internals", false),
            new WeekTask("w2_5", 2, "Multithreading basics: synchronized keyword, volatile, thread lifecycle", "Java Internals", false),
            new WeekTask("w2_6", 2, "Java 8+ features: Streams API, Lambdas, Optional, Function interfaces", "Java Internals", false),
            new WeekTask("w2_7", 2, "Spring Boot project story: Explain WHY JPA/Hibernate was chosen over raw JDBC", "Project Story", false),

            new WeekTask("w3_1", 3, "REST API design principles: HTTP methods, status codes, idempotent routes", "System Design", false),
            new WeekTask("w3_2", 3, "Database Indexing: B-Tree vs Hash index, primary key vs secondary index", "System Design", false),
            new WeekTask("w3_3", 3, "Caching basics: Client vs Server vs Redis cache (when and why)", "System Design", false),
            new WeekTask("w3_4", 3, "Scaling fundamentals: Horizontal vs Vertical scaling, Load Balancers", "System Design", false),
            new WeekTask("w3_5", 3, "Project Walkthrough 1: Employee Management Portal architecture & 10x scale bottleneck analysis", "Project Story", false),
            new WeekTask("w3_6", 3, "Project Walkthrough 2: AI Expense Splitter settlement calculation & concurrent updates handling", "Project Story", false),

            new WeekTask("w4_1", 4, "OAuth 2.0 vs OIDC vs SAML: Differences, grants, and practical use cases", "Security", false),
            new WeekTask("w4_2", 4, "JWT Deep-Dive: Header, Payload, Signature verification & secret keys", "Security", false),
            new WeekTask("w4_3", 4, "Token lifecycle: Access Tokens vs Refresh Tokens, revocation & expiry handling", "Security", false),
            new WeekTask("w4_4", 4, "Payment Tokenization concept: How primary account numbers (PAN) are replaced with tokens", "Mastercard Security", false),
            new WeekTask("w4_5", 4, "Project Defense: Walkthrough your JWT auth flow in Employee Portal end-to-end", "Project Story", false),

            new WeekTask("w5_1", 5, "Complete 2-3 Mock Technical Interviews (Pramp / peer coding + project walk)", "Mocks", false),
            new WeekTask("w5_2", 5, "STAR Story 1: Technical challenge during internship (Flutter to Supabase migration)", "Behavioral", false),
            new WeekTask("w5_3", 5, "STAR Story 2: Team collaboration & resolving ambiguity under tight deadline", "Behavioral", false),
            new WeekTask("w5_4", 5, "STAR Story 3: Why Mastercard / Why Fintech (scalable & secure systems passion)", "Behavioral", false),
            new WeekTask("w5_5", 5, "Decency Quotient (DQ) prep: Authenticity, empathy, and handling disagreements constructively", "Behavioral", false)
        );
        weekTaskRepository.saveAll(tasks);

        // Seed DSA Problems
        List<DsaProblem> problems = Arrays.asList(
            new DsaProblem("dsa-1", "Two Sum", "Arrays & HashMaps", "Easy", false, "https://leetcode.com/problems/two-sum/", "Use HashMap for O(N) lookup of complement."),
            new DsaProblem("dsa-2", "Best Time to Buy and Sell Stock", "Arrays & Strings", "Easy", false, "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", "Track min price so far and max profit."),
            new DsaProblem("dsa-3", "Longest Substring Without Repeating Characters", "Arrays & Strings", "Medium", false, "https://leetcode.com/problems/longest-substring-without-repeating-characters/", "Sliding window with character last index map."),
            new DsaProblem("dsa-4", "Container With Most Water", "Arrays & Strings", "Medium", false, "https://leetcode.com/problems/container-with-most-water/", "Two pointers inward from edges."),
            new DsaProblem("dsa-5", "3Sum", "Arrays & Strings", "Medium", false, "https://leetcode.com/problems/3sum/", "Sort array, fix one element, use two pointers for remaining two."),
            new DsaProblem("dsa-6", "Valid Anagram", "HashMaps & Sets", "Easy", false, "https://leetcode.com/problems/valid-anagram/", "Frequency array of size 26 or HashMap."),
            new DsaProblem("dsa-7", "Group Anagrams", "HashMaps & Sets", "Medium", false, "https://leetcode.com/problems/group-anagrams/", "Key by sorted string or character count frequency string."),
            new DsaProblem("dsa-8", "Binary Search", "Sorting & Searching", "Easy", false, "https://leetcode.com/problems/binary-search/", "Standard low + (high - low)/2 boundary check."),
            new DsaProblem("dsa-9", "Search in Rotated Sorted Array", "Sorting & Searching", "Medium", false, "https://leetcode.com/problems/search-in-rotated-sorted-array/", "Identify which half is sorted first."),
            new DsaProblem("dsa-10", "Reverse Linked List", "Linked Lists", "Easy", false, "https://leetcode.com/problems/reverse-linked-list/", "Iterative 3-pointer method (prev, curr, next)."),
            new DsaProblem("dsa-11", "Linked List Cycle", "Linked Lists", "Easy", false, "https://leetcode.com/problems/linked-list-cycle/", "Floyd's Tortoise and Hare fast & slow pointer."),
            new DsaProblem("dsa-12", "Valid Parentheses", "Stacks & Queues", "Easy", false, "https://leetcode.com/problems/valid-parentheses/", "Use stack to match opening & closing brackets."),
            new DsaProblem("dsa-13", "Maximum Depth of Binary Tree", "Trees & BST", "Easy", false, "https://leetcode.com/problems/maximum-depth-of-binary-tree/", "DFS recursion max(depth(left), depth(right)) + 1."),
            new DsaProblem("dsa-14", "Validate Binary Search Tree", "Trees & BST", "Medium", false, "https://leetcode.com/problems/validate-binary-search-tree/", "Pass valid (min, max) bounds recursively."),
            new DsaProblem("dsa-15", "Lowest Common Ancestor of a BST", "Trees & BST", "Medium", false, "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", "Compare node value with p and q values to decide left/right traversal.")
        );
        dsaProblemRepository.saveAll(problems);

        // Seed Flashcards
        List<ConceptCard> cards = Arrays.asList(
            new ConceptCard("fc-1", "Java Internals", "How does HashMap work internally in Java 8+ when collisions occur?", "HashMap uses an array of Node buckets. When hash collision occurs (same index = hash % capacity), elements are stored in a linked list. In Java 8+, if a bucket has > 8 elements, the linked list converts to a Red-Black Tree (O(log N) lookup instead of O(N)). On resize, elements are rehashed.", "Needs Review"),
            new ConceptCard("fc-2", "Java Internals", "What is the contract between equals() and hashCode()?", "If two objects are equal according to equals(), they MUST have the same hashCode(). However, if two objects have the same hashCode(), they are NOT necessarily equal (hash collision). Violating this contract breaks HashMap and HashSet keys.", "Needs Review"),
            new ConceptCard("fc-3", "Java Internals", "Explain JVM Memory Structure: Stack vs Heap vs Metaspace.", "Stack holds thread-specific execution frames, local variables, and primitive types (short-lived, auto cleaned). Heap holds all instantiated objects (shared across threads, managed by GC). Metaspace (replaced PermGen in Java 8) stores class metadata in native memory.", "Needs Review"),
            new ConceptCard("fc-4", "System Design", "How would you scale your Employee Management Portal if traffic grows 10x?", "1. Introduce Redis caching for frequently accessed employee profiles & auth tokens. 2. Implement Database Read Replicas for read-heavy queries. 3. Add a Load Balancer (Nginx/AWS ALB) across multiple Spring Boot stateless application instances. 4. DB Indexing on employee_id and department_id.", "Needs Review"),
            new ConceptCard("fc-5", "Security & Payments", "What is Payment Tokenization and how does it protect cardholders?", "Payment Tokenization replaces sensitive Primary Account Numbers (PAN / 16-digit card numbers) with a surrogate random string called a 'Token'. The real PAN is stored in a secure token vault (PCI-DSS compliant). Even if a merchant DB is breached, the token is useless to attackers outside the payment network.", "Needs Review"),
            new ConceptCard("fc-6", "Security & Payments", "Explain OAuth 2.0 vs OIDC vs SAML.", "OAuth 2.0 is an AUTHORIZATION framework (grants third-party apps limited access via access tokens). OIDC (OpenID Connect) is an IDENTITY layer built ON TOP of OAuth 2.0 (provides ID Token for authentication). SAML is an XML-based enterprise SSO protocol.", "Needs Review"),
            new ConceptCard("fc-7", "Java Internals", "What is the difference between synchronized, ReentrantLock, and volatile in Java?", "synchronized is an implicit intrinsic lock managed by JVM (auto lock/unlock). ReentrantLock is an explicit lock offering fairness, tryLock(), and interruptible locks. volatile ensures memory visibility across CPU caches for variable reads/writes without providing atomicity for compound operations (like i++).", "Needs Review"),
            new ConceptCard("fc-8", "Java Internals", "How does Generational Garbage Collection work in Java (Eden, Survivor, Tenured)?", "Objects are allocated in Eden space (Young Gen). Minor GC collects short-lived objects; survivors move between S0 and S1 survivor spaces. Objects surviving multiple GCs (aging threshold) get promoted to Tenured (Old Gen). Major/Full GC cleans Old Gen (causes longer Stop-The-World STW pauses).", "Needs Review"),
            new ConceptCard("fc-9", "Java Internals", "What is the difference between Stream map() and flatMap() in Java 8+?", "map(Function<T,R>) transforms each element into a single new value (1-to-1 mapping). flatMap(Function<T, Stream<R>>) transforms each element into a Stream of values and flattens multiple streams into a single merged Stream (1-to-many mapping).", "Needs Review"),
            new ConceptCard("fc-10", "Java Internals", "Why are Strings immutable in Java, and how does the String Constant Pool work?", "Immutability ensures security (DB connection strings, URLs, file paths), thread-safety without synchronization, and HashMap key caching (hashCode calculated once). String Pool stores literal strings in Heap memory so identical string literals share the same object reference.", "Needs Review"),
            new ConceptCard("fc-11", "Java Internals", "ArrayList vs LinkedList vs CopyOnWriteArrayList: When to use which?", "ArrayList uses a contiguous dynamic array (O(1) random index access, fast iteration, slow O(N) middle insertion/deletion). LinkedList uses doubly-linked nodes (O(1) head/tail insertion, slow O(N) lookup). CopyOnWriteArrayList creates a fresh copy of array on every write (thread-safe, ideal for read-heavy & low-write concurrent scenarios).", "Needs Review"),
            new ConceptCard("fc-12", "System Design", "What is Idempotency in REST APIs and why is it critical for payment processing?", "An idempotent API request produces the exact same server state regardless of how many times it is executed. For payment POST endpoints, clients pass a unique 'Idempotency-Key' header in requests. If network retries occur, the server checks the key in Redis and returns the cached original transaction response instead of double-charging the user.", "Needs Review"),
            new ConceptCard("fc-13", "System Design", "Explain Database Indexing (B-Tree vs Hash) & Composite Index Left-most Prefix Rule.", "B-Tree index supports equality and range queries (O(log N)). Hash index supports O(1) exact equality queries only. A composite index on (colA, colB, colC) can only be used by queries filtering on colA, or (colA, colB), or (colA, colB, colC) due to the left-most prefix requirement.", "Needs Review"),
            new ConceptCard("fc-14", "System Design", "What are the 3 primary Caching Strategies (Cache-Aside, Write-Through, Write-Back)?", "1. Cache-Aside: App reads from cache; on miss, reads from DB and populates cache. 2. Write-Through: App writes to cache, which synchronously writes to DB. 3. Write-Back (Write-Behind): App writes to cache instantly; cache asynchronously flushes updates to DB in batches.", "Needs Review"),
            new ConceptCard("fc-15", "System Design", "How does debt simplification work in your AI Expense Splitter project?", "Calculates net balance for every participant (amount paid minus amount owed). Separates people into net debtors and net creditors. Uses a greedy two-pointer algorithm to match the maximum debtor with the maximum creditor, resolving balances in minimum total transactions (at most N-1 transactions for N users).", "Needs Review"),
            new ConceptCard("fc-16", "Security & Payments", "How does JWT Refresh Token Rotation work to prevent stolen token abuse?", "Access Tokens have a short lifetime (e.g., 15 mins). Refresh Tokens have a longer lifetime (e.g., 7 days) and are stored in HttpOnly secure cookies. When renewing an Access Token, the server issues a NEW Refresh Token and invalidates the old one. If an old Refresh Token is reused, the auth server detects theft and revokes all tokens for that user session.", "Needs Review"),
            new ConceptCard("fc-17", "Security & Payments", "What is PCI-DSS and what cardholder data is forbidden to store after authorization?", "Payment Card Industry Data Security Standard (PCI-DSS) sets security controls for handling cardholder data. Merchants & payment platforms are strictly FORBIDDEN from storing Sensitive Authentication Data (SAD) after payment authorization—including CVV/CVC, full magnetic stripe data, and PIN/PIN blocks.", "Needs Review"),
            new ConceptCard("fc-18", "Security & Payments", "What is the TLS 1.3 Handshake protocol for HTTPS payment security?", "TLS 1.3 establishes an encrypted channel over TCP in 1 RTT (Round Trip Time). Client and Server use Asymmetric Cryptography (Diffie-Hellman / RSA) to authenticate identity and agree on a shared ephemeral secret key. All subsequent payment data is encrypted using high-speed Symmetric Cryptography (AES-GCM-256).", "Needs Review"),
            new ConceptCard("fc-19", "Security & Payments", "XSS vs CSRF: How do they differ and how does Spring Security protect against them?", "XSS (Cross-Site Scripting) injects malicious client JavaScript into vulnerable pages (mitigated by DOM escaping & Content-Security-Policy). CSRF (Cross-Site Request Forgery) tricks a logged-in user's browser into sending unwanted requests (mitigated by Spring Security CSRF Synchronizer Tokens and SameSite=Strict cookies).", "Needs Review"),
            new ConceptCard("fc-20", "Security & Payments", "What is Spring Security Filter Chain & how does JWT Authentication Filter fit in?", "Spring Security processes HTTP requests through a chain of Servlet Filters (SecurityFilterChain). A custom OncePerRequestFilter (e.g., JwtAuthenticationFilter) intercepts requests, extracts 'Authorization: Bearer <token>', verifies signature using secret/public key, creates an Authentication object, and populates SecurityContextHolder.", "Needs Review")
        );
        conceptCardRepository.saveAll(cards);

        // Seed STAR Stories
        List<StarStory> stories = Arrays.asList(
            new StarStory("star-1", "Internship Tech Migration: Flutter to Supabase", "A technical challenge from your internship showing real production trade-offs.", "During my internship, our mobile application experienced slow sync speeds and backend latency under concurrent user usage.", "I was tasked with migrating backend connectivity and real-time state management from our legacy setup to Supabase.", "I evaluated Supabase PostgreSQL real-time listeners, implemented optimistic UI updates in Flutter, and optimized RLS (Row Level Security) policies.", "Reduced sync latency by 45%, eliminated data race conditions, and deployed a smooth real-time feature set without downtime."),
            new StarStory("star-2", "Team Collaboration Under Ambiguity", "A time you collaborated with a team when requirements were unclear.", "Working on our AI Expense Splitter project, settlement logic requirements were ambiguous regarding split edge cases (e.g. unequal split & pending refunds).", "Lead the technical consensus on settling debts cleanly without confusing the user.", "I organized a quick wireframing session, drafted a simplified greedy algorithm for debt minimization, and built a quick prototype to demo to team members.", "Aligned team members within 24 hours and delivered a debt-simplification feature that reduced total transactions needed by 60%."),
            new StarStory("star-3", "Why Mastercard & Fintech Security", "Tie your background in Spring Boot & JWT security to Mastercard's mission.", "I built an Employee Management Portal with custom JWT authentication, Spring Security, and role-based access control.", "Explain why Mastercard's engineering culture and payment network appeal to you.", "I deeply enjoyed designing stateless token verification and understanding security trade-offs. Mastercard handles billions of secure transactions daily.", "Excited to bring my foundational Java/Spring Boot knowledge, security mindset, and commitment to Decency Quotient (DQ) to Mastercard's Associate team.")
        );
        starStoryRepository.saveAll(stories);

        // Seed Applications
        List<JobApplication> apps = Arrays.asList(
            new JobApplication("app-1", "Mastercard", "SDE-1 / Software Engineer Associate", "2026-08-10", "Preparing OA", "Requested / Pending", "Target role! Focusing heavily on DSA + Java Internals + Payment Security.")
        );
        jobApplicationRepository.saveAll(apps);
    }
}
