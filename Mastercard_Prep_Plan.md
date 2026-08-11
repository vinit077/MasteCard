# Mastercard SDE-1 / Associate Prep Plan — Vinit Mahale

**Target:** Fresher/Entry-level Software Engineer role
**Your edge:** Spring Boot, JWT auth, Hibernate/JPA, REST APIs, MySQL, React — directly relevant to Mastercard's backend + payments-security stack.
**Your gaps to close:** DSA depth, Java internals, basic system design, security concepts (OAuth/tokenization).

The process is: **Online Assessment (coding) → Technical Round 1 (DSA + Java internals) → Technical Round 2 (architecture/security) → Final (behavioral + "Decency Quotient")**.

---

## Week 1–2: DSA Foundations (the eliminatory gate)

Mastercard's OA is 2–3 problems on strings, arrays, and basic data structures — not exotic. Depth beats breadth here.

- **Daily:** 2 problems on LeetCode (Easy → Medium), focused on:
  - Arrays & Strings (sliding window, two pointers)
  - HashMaps & Sets
  - Recursion & Backtracking basics
  - Sorting & Searching (binary search variants)
- **End of Week 2:** Move to Medium-level Linked Lists, Stacks/Queues, and Trees (BST traversal, height, balanced checks).
- **Action item:** Create/clean up your LeetCode or HackerRank profile — you'll want to link it on your resume and LinkedIn.

## Week 3: Java Internals

Technical Round 1 explicitly probes "Java internals," not just DSA. Be ready to explain, not just use:

- JVM memory model: stack vs heap, method area
- Garbage collection basics: generational GC, when objects get promoted
- `equals()` vs `hashCode()`, and why they matter for HashMap keys
- Collections framework internals: how HashMap resolves collisions, ArrayList vs LinkedList trade-offs
- Multithreading basics: `synchronized`, thread lifecycle (you likely haven't used this — worth 2–3 days)
- Java 8+ features: streams, lambdas, Optional (common in Spring Boot codebases)

**Action item:** Since your projects already use Spring Boot + Hibernate, go back and explain *why* each design choice was made (e.g., why JPA over raw JDBC) — this bridges DSA-Java into your project story.

## Week 4: System Design Basics (fresher-level)

You won't get a "design Twitter at scale" question — expect something scoped, like designing a leave-approval notification system (close to your own Employee Management Portal).

- Learn: client-server basics, REST API design principles, database indexing basics, caching (what/why, not deep implementation), horizontal vs vertical scaling
- Practice explaining **your own projects** as system-design answers:
  - Walk through the Employee Management Portal: how did you structure the API layer, auth flow, and DB schema? What would break at 10x the users?
  - Walk through the AI Expense Splitter: how are settlements calculated and stored? How would you handle concurrent updates to a shared expense?

## Week 5: Security & Payments-Specific Prep

This is where you differentiate yourself for Mastercard specifically:

- OAuth 2.0 vs OIDC vs SAML — what each solves, when you'd use which
- JWT internals: what's actually inside a token, how signature verification works, access vs refresh tokens
- Basic tokenization concept (how payment tokenization protects card data — conceptual understanding is enough)
- Revisit your own JWT implementation in the Employee Portal and be ready to explain the auth flow end-to-end, including what happens on token expiry

## Week 6: Mock Interviews + Behavioral Prep

- 2–3 mock technical interviews (Pramp, peer, or with a mentor) covering coding + a project walkthrough
- Prepare STAR-format stories for:
  - A technical challenge from your internship (Flutter/Supabase migration is a good one — it shows real production trade-offs)
  - A time you collaborated with a team under ambiguity
  - Why Mastercard / why fintech (tie it to your interest in secure, scalable systems)
- Mastercard evaluates a "Decency Quotient" in the final round — this is about how you treat people and handle disagreement, not a technical score. Be genuine, not rehearsed.

---

## Ongoing (every week)
- Keep applying — don't wait for prep to be "done." Off-campus portal + LinkedIn + referrals in parallel.
- Track applications in a simple sheet: company, role, date applied, status.
- Revisit this plan weekly and adjust based on which rounds you're actually facing.
