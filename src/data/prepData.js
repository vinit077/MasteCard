export const CANDIDATE_INFO = {
  name: "Vinit Mahale",
  targetRole: "Mastercard SDE-1 / Associate",
  targetDate: "6-Week Fast-Track",
  skillsEdge: ["Spring Boot", "JWT Auth", "Hibernate / JPA", "REST APIs", "MySQL", "React"],
  gapsToClose: ["DSA Depth", "Java Internals", "System Design Basics", "OAuth & Payment Tokenization"],
  interviewPipeline: [
    { id: "oa", name: "Online Assessment", desc: "2-3 coding problems (Arrays, Strings, HashMaps)" },
    { id: "r1", name: "Technical Round 1", desc: "DSA (Trees, LL, Sorting) + Java Internals & JVM" },
    { id: "r2", name: "Technical Round 2", desc: "System Design + Payment Security & JWT Auth" },
    { id: "hr", name: "Final Round", desc: "Behavioral STAR Stories & Decency Quotient (DQ)" }
  ]
};

export const WEEKS_DATA = [
  {
    id: 1,
    weekNum: "Weeks 1–2",
    title: "DSA Foundations (Eliminatory Gate)",
    subtitle: "Arrays, Strings, HashMaps, Recursion, Sorting, Trees & Linked Lists",
    focus: "Solve 2 LeetCode problems daily (Easy → Medium). Master sliding window, two pointers, HashMaps, binary search, and BST traversal.",
    color: "#ff5f00",
    tasks: [
      { id: "w1_1", text: "Arrays & Strings: Two Pointers & Sliding Window (2 problems/day)", category: "DSA", completed: false },
      { id: "w1_2", text: "HashMaps & Sets: Frequency counting & lookup optimizations", category: "DSA", completed: false },
      { id: "w1_3", text: "Recursion & Backtracking basics (Subsets, Permutations)", category: "DSA", completed: false },
      { id: "w1_4", text: "Sorting & Binary Search variants (Rotated sorted array, search boundary)", category: "DSA", completed: false },
      { id: "w1_5", text: "Linked Lists: Reverse LL, Detect cycle, Fast & Slow pointers", category: "DSA", completed: false },
      { id: "w1_6", text: "Stacks & Queues: Valid Parentheses, Min Stack, Monotonic Stack", category: "DSA", completed: false },
      { id: "w1_7", text: "Trees & BST: Level order traversal, Height, Balanced tree check", category: "DSA", completed: false },
      { id: "w1_8", text: "Clean up & organize LeetCode / HackerRank profile link for resume", category: "Action Item", completed: false }
    ]
  },
  {
    id: 2,
    weekNum: "Week 3",
    title: "Java Internals & Deep-Dive",
    subtitle: "JVM Memory, Generational GC, HashMap Collisions, Threads & Java 8+",
    focus: "Be ready to explain how Java works under the hood in Technical Round 1. Bridge core Java concepts to your Spring Boot projects.",
    color: "#eb001b",
    tasks: [
      { id: "w2_1", text: "JVM Memory Model: Stack vs Heap vs Method Area (Metaspace)", category: "Java Internals", completed: false },
      { id: "w2_2", text: "Garbage Collection: Generational GC, Eden vs Survivor vs Tenured spaces", category: "Java Internals", completed: false },
      { id: "w2_3", text: "equals() vs hashCode() contract & HashMap internal bucket indexing", category: "Java Internals", completed: false },
      { id: "w2_4", text: "Collections internals: ArrayList (dynamic resize) vs LinkedList trade-offs", category: "Java Internals", completed: false },
      { id: "w2_5", text: "Multithreading basics: synchronized keyword, volatile, thread lifecycle", category: "Java Internals", completed: false },
      { id: "w2_6", text: "Java 8+ features: Streams API, Lambdas, Optional, Function interfaces", category: "Java Internals", completed: false },
      { id: "w2_7", text: "Spring Boot project story: Explain WHY JPA/Hibernate was chosen over raw JDBC", category: "Project Story", completed: false }
    ]
  },
  {
    id: 3,
    weekNum: "Week 4",
    title: "System Design Basics (Fresher Level)",
    subtitle: "REST API Design, Database Indexing, Caching & Project Scalability",
    focus: "Master client-server basics and practice walking through your Employee Management Portal and AI Expense Splitter as system design answers.",
    color: "#f79e1b",
    tasks: [
      { id: "w3_1", text: "REST API design principles: HTTP methods, status codes, idempotent routes", category: "System Design", completed: false },
      { id: "w3_2", text: "Database Indexing: B-Tree vs Hash index, primary key vs secondary index", category: "System Design", completed: false },
      { id: "w3_3", text: "Caching basics: Client vs Server vs Redis cache (when and why)", category: "System Design", completed: false },
      { id: "w3_4", text: "Scaling fundamentals: Horizontal vs Vertical scaling, Load Balancers", category: "System Design", completed: false },
      { id: "w3_5", text: "Project Walkthrough 1: Employee Management Portal architecture & 10x scale bottleneck analysis", category: "Project Story", completed: false },
      { id: "w3_6", text: "Project Walkthrough 2: AI Expense Splitter settlement calculation & concurrent updates handling", category: "Project Story", completed: false }
    ]
  },
  {
    id: 4,
    weekNum: "Week 5",
    title: "Security & Payments-Specific Prep",
    subtitle: "OAuth 2.0, JWT Tokens, Payment Tokenization & Mastercard Edge",
    focus: "Differentiate yourself for Mastercard specifically by mastering authentication protocols and payment security concepts.",
    color: "#10b981",
    tasks: [
      { id: "w4_1", text: "OAuth 2.0 vs OIDC vs SAML: Differences, grants, and practical use cases", category: "Security", completed: false },
      { id: "w4_2", text: "JWT Deep-Dive: Header, Payload, Signature verification & secret keys", category: "Security", completed: false },
      { id: "w4_3", text: "Token lifecycle: Access Tokens vs Refresh Tokens, revocation & expiry handling", category: "Security", completed: false },
      { id: "w4_4", text: "Payment Tokenization concept: How primary account numbers (PAN) are replaced with tokens", category: "Mastercard Security", completed: false },
      { id: "w4_5", text: "Project Defense: Walkthrough your JWT auth flow in Employee Portal end-to-end", category: "Project Story", completed: false }
    ]
  },
  {
    id: 5,
    weekNum: "Week 6",
    title: "Mock Interviews & STAR Behavioral Prep",
    subtitle: "Technical Mocks, STAR Response Drafting & Mastercard Decency Quotient (DQ)",
    focus: "Refine verbal delivery, mock coding rounds, and prepare genuine stories evaluated against Mastercard's Decency Quotient.",
    color: "#3b82f6",
    tasks: [
      { id: "w5_1", text: "Complete 2-3 Mock Technical Interviews (Pramp / peer coding + project walk)", category: "Mocks", completed: false },
      { id: "w5_2", text: "STAR Story 1: Technical challenge during internship (Flutter to Supabase migration)", category: "Behavioral", completed: false },
      { id: "w5_3", text: "STAR Story 2: Team collaboration & resolving ambiguity under tight deadline", category: "Behavioral", completed: false },
      { id: "w5_4", text: "STAR Story 3: Why Mastercard / Why Fintech (scalable & secure systems passion)", category: "Behavioral", completed: false },
      { id: "w5_5", text: "Decency Quotient (DQ) prep: Authenticity, empathy, and handling disagreements constructively", category: "Behavioral", completed: false }
    ]
  }
];

export const INITIAL_DSA_PROBLEMS = [
  { id: "dsa-1", title: "Two Sum", category: "Arrays & HashMaps", difficulty: "Easy", solved: false, leetcodeUrl: "https://leetcode.com/problems/two-sum/", notes: "Use HashMap for O(N) lookup of complement." },
  { id: "dsa-2", title: "Best Time to Buy and Sell Stock", category: "Arrays & Strings", difficulty: "Easy", solved: false, leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", notes: "Track min price so far and max profit." },
  { id: "dsa-3", title: "Longest Substring Without Repeating Characters", category: "Arrays & Strings", difficulty: "Medium", solved: false, leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", notes: "Sliding window with character last index map." },
  { id: "dsa-4", title: "Container With Most Water", category: "Arrays & Strings", difficulty: "Medium", solved: false, leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/", notes: "Two pointers inward from edges." },
  { id: "dsa-5", title: "3Sum", category: "Arrays & Strings", difficulty: "Medium", solved: false, leetcodeUrl: "https://leetcode.com/problems/3sum/", notes: "Sort array, fix one element, use two pointers for remaining two." },
  { id: "dsa-6", title: "Valid Anagram", category: "HashMaps & Sets", difficulty: "Easy", solved: false, leetcodeUrl: "https://leetcode.com/problems/valid-anagram/", notes: "Frequency array of size 26 or HashMap." },
  { id: "dsa-7", title: "Group Anagrams", category: "HashMaps & Sets", difficulty: "Medium", solved: false, leetcodeUrl: "https://leetcode.com/problems/group-anagrams/", notes: "Key by sorted string or character count frequency string." },
  { id: "dsa-8", title: "Binary Search", category: "Sorting & Searching", difficulty: "Easy", solved: false, leetcodeUrl: "https://leetcode.com/problems/binary-search/", notes: "Standard low + (high - low)/2 boundary check." },
  { id: "dsa-9", title: "Search in Rotated Sorted Array", category: "Sorting & Searching", difficulty: "Medium", solved: false, leetcodeUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array/", notes: "Identify which half is sorted first." },
  { id: "dsa-10", title: "Reverse Linked List", category: "Linked Lists", difficulty: "Easy", solved: false, leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list/", notes: "Iterative 3-pointer method (prev, curr, next)." },
  { id: "dsa-11", title: "Linked List Cycle", category: "Linked Lists", difficulty: "Easy", solved: false, leetcodeUrl: "https://leetcode.com/problems/linked-list-cycle/", notes: "Floyd's Tortoise and Hare fast & slow pointer." },
  { id: "dsa-12", title: "Valid Parentheses", category: "Stacks & Queues", difficulty: "Easy", solved: false, leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/", notes: "Use stack to match opening & closing brackets." },
  { id: "dsa-13", title: "Maximum Depth of Binary Tree", category: "Trees & BST", difficulty: "Easy", solved: false, leetcodeUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", notes: "DFS recursion max(depth(left), depth(right)) + 1." },
  { id: "dsa-14", title: "Validate Binary Search Tree", category: "Trees & BST", difficulty: "Medium", solved: false, leetcodeUrl: "https://leetcode.com/problems/validate-binary-search-tree/", notes: "Pass valid (min, max) bounds recursively." },
  { id: "dsa-15", title: "Lowest Common Ancestor of a BST", category: "Trees & BST", difficulty: "Medium", solved: false, leetcodeUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", notes: "Compare node value with p and q values to decide left/right traversal." }
];

export const INITIAL_FLASHCARDS = [
  {
    id: "fc-1",
    module: "Java Internals",
    question: "How does HashMap work internally in Java 8+ when collisions occur?",
    answer: "HashMap uses an array of Node buckets. When hash collision occurs (same index = hash % capacity), elements are stored in a linked list. In Java 8+, if a bucket has > 8 elements, the linked list converts to a Red-Black Tree (O(log N) lookup instead of O(N)). On resize, elements are rehashed.",
    mastery: "Needs Review"
  },
  {
    id: "fc-2",
    module: "Java Internals",
    question: "What is the contract between equals() and hashCode()?",
    answer: "If two objects are equal according to equals(), they MUST have the same hashCode(). However, if two objects have the same hashCode(), they are NOT necessarily equal (hash collision). Violating this contract breaks HashMap and HashSet keys.",
    mastery: "Needs Review"
  },
  {
    id: "fc-3",
    module: "Java Internals",
    question: "Explain JVM Memory Structure: Stack vs Heap vs Metaspace.",
    answer: "Stack holds thread-specific execution frames, local variables, and primitive types (short-lived, auto cleaned). Heap holds all instantiated objects (shared across threads, managed by GC). Metaspace (replaced PermGen in Java 8) stores class metadata in native memory.",
    mastery: "Needs Review"
  },
  {
    id: "fc-4",
    module: "System Design",
    question: "How would you scale your Employee Management Portal if traffic grows 10x?",
    answer: "1. Introduce Redis caching for frequently accessed employee profiles & auth tokens. 2. Implement Database Read Replicas for read-heavy queries. 3. Add a Load Balancer (Nginx/AWS ALB) across multiple Spring Boot stateless application instances. 4. DB Indexing on employee_id and department_id.",
    mastery: "Needs Review"
  },
  {
    id: "fc-5",
    module: "Security & Payments",
    question: "What is Payment Tokenization and how does it protect cardholders?",
    answer: "Payment Tokenization replaces sensitive Primary Account Numbers (PAN / 16-digit card numbers) with a surrogate random string called a 'Token'. The real PAN is stored in a secure token vault (PCI-DSS compliant). Even if a merchant DB is breached, the token is useless to attackers outside the payment network.",
    mastery: "Needs Review"
  },
  {
    id: "fc-6",
    module: "Security & Payments",
    question: "Explain OAuth 2.0 vs OIDC vs SAML.",
    answer: "OAuth 2.0 is an AUTHORIZATION framework (grants third-party apps limited access via access tokens). OIDC (OpenID Connect) is an IDENTITY layer built ON TOP of OAuth 2.0 (provides ID Token for authentication). SAML is an XML-based enterprise SSO protocol.",
    mastery: "Needs Review"
  },
  {
    id: "fc-7",
    module: "Java Internals",
    question: "What is the difference between synchronized, ReentrantLock, and volatile in Java?",
    answer: "synchronized is an implicit intrinsic lock managed by JVM (auto lock/unlock). ReentrantLock is an explicit lock offering fairness, tryLock(), and interruptible locks. volatile ensures memory visibility across CPU caches for variable reads/writes without providing atomicity for compound operations (like i++).",
    mastery: "Needs Review"
  },
  {
    id: "fc-8",
    module: "Java Internals",
    question: "How does Generational Garbage Collection work in Java (Eden, Survivor, Tenured)?",
    answer: "Objects are allocated in Eden space (Young Gen). Minor GC collects short-lived objects; survivors move between S0 and S1 survivor spaces. Objects surviving multiple GCs (aging threshold) get promoted to Tenured (Old Gen). Major/Full GC cleans Old Gen (causes longer Stop-The-World STW pauses).",
    mastery: "Needs Review"
  },
  {
    id: "fc-9",
    module: "Java Internals",
    question: "What is the difference between Stream map() and flatMap() in Java 8+?",
    answer: "map(Function<T,R>) transforms each element into a single new value (1-to-1 mapping). flatMap(Function<T, Stream<R>>) transforms each element into a Stream of values and flattens multiple streams into a single merged Stream (1-to-many mapping).",
    mastery: "Needs Review"
  },
  {
    id: "fc-10",
    module: "Java Internals",
    question: "Why are Strings immutable in Java, and how does the String Constant Pool work?",
    answer: "Immutability ensures security (DB connection strings, URLs, file paths), thread-safety without synchronization, and HashMap key caching (hashCode calculated once). String Pool stores literal strings in Heap memory so identical string literals share the same object reference.",
    mastery: "Needs Review"
  },
  {
    id: "fc-11",
    module: "Java Internals",
    question: "ArrayList vs LinkedList vs CopyOnWriteArrayList: When to use which?",
    answer: "ArrayList uses a contiguous dynamic array (O(1) random index access, fast iteration, slow O(N) middle insertion/deletion). LinkedList uses doubly-linked nodes (O(1) head/tail insertion, slow O(N) lookup). CopyOnWriteArrayList creates a fresh copy of array on every write (thread-safe, ideal for read-heavy & low-write concurrent scenarios).",
    mastery: "Needs Review"
  },
  {
    id: "fc-12",
    module: "System Design",
    question: "What is Idempotency in REST APIs and why is it critical for payment processing?",
    answer: "An idempotent API request produces the exact same server state regardless of how many times it is executed. For payment POST endpoints, clients pass a unique 'Idempotency-Key' header in requests. If network retries occur, the server checks the key in Redis and returns the cached original transaction response instead of double-charging the user.",
    mastery: "Needs Review"
  },
  {
    id: "fc-13",
    module: "System Design",
    question: "Explain Database Indexing (B-Tree vs Hash) & Composite Index Left-most Prefix Rule.",
    answer: "B-Tree index supports equality and range queries (O(log N)). Hash index supports O(1) exact equality queries only. A composite index on (colA, colB, colC) can only be used by queries filtering on colA, or (colA, colB), or (colA, colB, colC) due to the left-most prefix requirement.",
    mastery: "Needs Review"
  },
  {
    id: "fc-14",
    module: "System Design",
    question: "What are the 3 primary Caching Strategies (Cache-Aside, Write-Through, Write-Back)?",
    answer: "1. Cache-Aside: App reads from cache; on miss, reads from DB and populates cache. 2. Write-Through: App writes to cache, which synchronously writes to DB. 3. Write-Back (Write-Behind): App writes to cache instantly; cache asynchronously flushes updates to DB in batches.",
    mastery: "Needs Review"
  },
  {
    id: "fc-15",
    module: "System Design",
    question: "How does debt simplification work in your AI Expense Splitter project?",
    answer: "Calculates net balance for every participant (amount paid minus amount owed). Separates people into net debtors and net creditors. Uses a greedy two-pointer algorithm to match the maximum debtor with the maximum creditor, resolving balances in minimum total transactions (at most N-1 transactions for N users).",
    mastery: "Needs Review"
  },
  {
    id: "fc-16",
    module: "Security & Payments",
    question: "How does JWT Refresh Token Rotation work to prevent stolen token abuse?",
    answer: "Access Tokens have a short lifetime (e.g., 15 mins). Refresh Tokens have a longer lifetime (e.g., 7 days) and are stored in HttpOnly secure cookies. When renewing an Access Token, the server issues a NEW Refresh Token and invalidates the old one. If an old Refresh Token is reused, the auth server detects theft and revokes all tokens for that user session.",
    mastery: "Needs Review"
  },
  {
    id: "fc-17",
    module: "Security & Payments",
    question: "What is PCI-DSS and what cardholder data is forbidden to store after authorization?",
    answer: "Payment Card Industry Data Security Standard (PCI-DSS) sets security controls for handling cardholder data. Merchants & payment platforms are strictly FORBIDDEN from storing Sensitive Authentication Data (SAD) after payment authorization—including CVV/CVC, full magnetic stripe data, and PIN/PIN blocks.",
    mastery: "Needs Review"
  },
  {
    id: "fc-18",
    module: "Security & Payments",
    question: "What is the TLS 1.3 Handshake protocol for HTTPS payment security?",
    answer: "TLS 1.3 establishes an encrypted channel over TCP in 1 RTT (Round Trip Time). Client and Server use Asymmetric Cryptography (Diffie-Hellman / RSA) to authenticate identity and agree on a shared ephemeral secret key. All subsequent payment data is encrypted using high-speed Symmetric Cryptography (AES-GCM-256).",
    mastery: "Needs Review"
  },
  {
    id: "fc-19",
    module: "Security & Payments",
    question: "XSS vs CSRF: How do they differ and how does Spring Security protect against them?",
    answer: "XSS (Cross-Site Scripting) injects malicious client JavaScript into vulnerable pages (mitigated by DOM escaping & Content-Security-Policy). CSRF (Cross-Site Request Forgery) tricks a logged-in user's browser into sending unwanted requests (mitigated by Spring Security CSRF Synchronizer Tokens and SameSite=Strict cookies).",
    mastery: "Needs Review"
  },
  {
    id: "fc-20",
    module: "Security & Payments",
    question: "What is Spring Security Filter Chain & how does JWT Authentication Filter fit in?",
    answer: "Spring Security processes HTTP requests through a chain of Servlet Filters (SecurityFilterChain). A custom OncePerRequestFilter (e.g., JwtAuthenticationFilter) intercepts requests, extracts 'Authorization: Bearer <token>', verifies signature using secret/public key, creates an Authentication object, and populates SecurityContextHolder.",
    mastery: "Needs Review"
  }
];

export const INITIAL_STAR_STORIES = [
  {
    id: "star-1",
    title: "Internship Tech Migration: Flutter to Supabase",
    prompt: "A technical challenge from your internship showing real production trade-offs.",
    situation: "During my internship, our mobile application experienced slow sync speeds and backend latency under concurrent user usage.",
    task: "I was tasked with migrating backend connectivity and real-time state management from our legacy setup to Supabase.",
    action: "I evaluated Supabase PostgreSQL real-time listeners, implemented optimistic UI updates in Flutter, and optimized RLS (Row Level Security) policies.",
    result: "Reduced sync latency by 45%, eliminated data race conditions, and deployed a smooth real-time feature set without downtime."
  },
  {
    id: "star-2",
    title: "Team Collaboration Under Ambiguity",
    prompt: "A time you collaborated with a team when requirements were unclear.",
    situation: "Working on our AI Expense Splitter project, settlement logic requirements were ambiguous regarding split edge cases (e.g. unequal split & pending refunds).",
    task: "Lead the technical consensus on settling debts cleanly without confusing the user.",
    action: "I organized a quick wireframing session, drafted a simplified greedy algorithm for debt minimization, and built a quick prototype to demo to team members.",
    result: "Aligned team members within 24 hours and delivered a debt-simplification feature that reduced total transactions needed by 60%."
  },
  {
    id: "star-3",
    title: "Why Mastercard & Fintech Security",
    prompt: "Tie your background in Spring Boot & JWT security to Mastercard's mission.",
    situation: "I built an Employee Management Portal with custom JWT authentication, Spring Security, and role-based access control.",
    task: "Explain why Mastercard's engineering culture and payment network appeal to you.",
    action: "I deeply enjoyed designing stateless token verification and understanding security trade-offs. Mastercard handles billions of secure transactions daily.",
    result: "Excited to bring my foundational Java/Spring Boot knowledge, security mindset, and commitment to Decency Quotient (DQ) to Mastercard's Associate team."
  }
];

export const INITIAL_APPLICATIONS = [
  {
    id: "app-1",
    company: "Mastercard",
    role: "SDE-1 / Software Engineer Associate",
    appliedDate: "2026-08-10",
    stage: "Preparing OA",
    referral: "Requested / Pending",
    notes: "Target role! Focusing heavily on DSA + Java Internals + Payment Security."
  }
];
