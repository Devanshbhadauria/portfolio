import { Project, Experience, SkillCategory, Achievement, SystemMetric } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Devansh Singh Bhadauria',
  title: 'Backend & AI Engineer | Systems Builder',
  tagline: 'Architecting High-Scale Distributed Systems & Autonomous AI Infrastructure',
  status: 'ONLINE',
  statusText: 'Building @ OFB Tech | Exploring Founding Opportunities',
  email: 'devanshbhadauria22@gmail.com',
  phone: '+91-7817074386',
  github: 'https://github.com/Devanshbhadauria',
  linkedin: 'https://linkedin.com/in/devansh-bhadauria',
  location: 'Gurugram, India',
  availability: 'Open for high-impact AI/Backend engineering & co-founder roles',
};

export const HERO_METRICS: SystemMetric[] = [
  { label: 'B2B Enterprise Users', value: '5,000+', subtext: 'Serviced on Nexizo.ai' },
  { label: 'Global Coverage', value: '50+ Countries', subtext: 'Tender tracking system' },
  { label: 'DSA & Algorithmic Problems', value: '650+', subtext: 'Top 5% globally (LeetCode/CodeChef)' },
  { label: 'Internal Tech Assessment', value: 'Top 1%', subtext: 'Ranked in company-wide assessment' },
];

export const PROJECTS: Project[] = [
  {
    id: 'rag-engine',
    title: 'Intelligent RAG Knowledge Engine',
    subtitle: 'Context-aware vector querying system over unstructured enterprise PDFs',
    category: 'ai',
    summary: 'Engineered a high-precision Retrieval-Augmented Generation (RAG) system in Java designed to process, vectorize, and query high-volume unstructured PDF documents with semantic accuracy.',
    highlights: [
      'Engineered custom recursive text-chunking algorithms preserving semantic boundaries, boosting LLM context response accuracy by 35%.',
      'Implemented custom vector embedding pipelines using OpenAI API integrated with MongoDB Atlas Vector Search.',
      'Designed efficient high-dimensional vector similarity indexing for sub-100ms retrieval latency.',
      'Structured clean Java/Spring Boot microservice layer for context injection into downstream LLM prompts.',
    ],
    techStack: ['Java', 'Spring Boot', 'OpenAI API', 'MongoDB Atlas Vector Search', 'Embeddings', 'RAG'],
    metrics: [
      { label: 'Context Accuracy', value: '+35%' },
      { label: 'Retrieval Latency', value: '<100ms' },
    ],
    githubUrl: 'https://github.com/Devanshbhadauria',
    featured: true,
  },
  {
    id: 'agent-orchestrator',
    title: 'Multi-Agent Orchestrator',
    subtitle: 'Autonomous travel planning system with parallel agent execution & partial failure tolerance',
    category: 'ai',
    summary: 'A resilient multi-agent orchestration architecture that parses complex natural language travel requests through a synchronized chain of 5+ specialized agents (Parser, Validator, Provider, Aggregator, Formatter).',
    highlights: [
      'Engineered parallel agent execution using thread pools, accelerating total pipeline execution speed by 38%.',
      'Built immutable context passing between agents to prevent state race conditions and enable complete trace observability.',
      'Implemented graceful partial failure handling—system degrades cleanly when individual provider agents time out without failing the overall request.',
      'Created thread-safe state synchronization primitives for multi-agent aggregation.',
    ],
    techStack: ['Java', 'Spring Boot', 'Multithreading', 'ExecutorService', 'Design Patterns', 'AI Agents'],
    metrics: [
      { label: 'Execution Speedup', value: '+38%' },
      { label: 'Agent Chain', value: '5+ Autonomous Agents' },
    ],
    githubUrl: 'https://github.com/Devanshbhadauria',
    featured: true,
  },
  {
    id: 'nexizo-global-tender',
    title: 'Nexizo.ai Global Tender Search Engine',
    subtitle: 'High-throughput SaaS tender discovery platform across 50+ countries',
    category: 'backend',
    summary: 'Architected full-text search, SQS event-driven decoupling, and multi-field querying for Nexizo.ai SaaS, serving over 5,000 enterprise B2B customers.',
    highlights: [
      'Architected sub-second response full-text search queries across large tender document databases using custom Elasticsearch DSL.',
      'Integrated SQS-based event-driven pipelines to decouple microservices and ensure reliable asynchronous data propagation.',
      'Implemented multi-tier Redis caching strategies for search queries, drastically reducing database read pressure under peak traffic.',
      'Optimized critical MySQL query bottlenecks by eliminating N+1 patterns and introducing composite indices.',
    ],
    techStack: ['Java', 'Spring Boot', 'Elasticsearch', 'Redis', 'AWS SQS', 'MySQL', 'Microservices'],
    metrics: [
      { label: 'Countries Tracked', value: '50+' },
      { label: 'Search Latency', value: 'Sub-second' },
      { label: 'Enterprise Clients', value: '5,000+' },
    ],
    featured: true,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'ofb-tech',
    role: 'Software Engineer',
    company: 'OFB Tech Private Limited (OfBusiness)',
    location: 'Gurugram, India',
    period: 'May 2024 – Present',
    summary: 'Building core microservices and search infrastructure for Nexizo.ai, a enterprise B2B SaaS platform used by 5000+ businesses globally.',
    bullets: [
      'Engineered a global tender management platform tracking bids across 50+ countries, improving data accessibility by 40%.',
      'Architected sub-second full-text search using custom Elasticsearch index mappings & query DSL for multi-field filtering over bid deadlines and geographies.',
      'Integrated SQS event-driven message pipelines to decouple core microservices and guarantee reliable asynchronous data processing.',
      'Implemented multi-layered Redis caching for high-frequency queries, protecting primary MySQL storage during traffic spikes.',
      'Eliminated query bottlenecks and N+1 anti-patterns in MySQL using strategic composite indexing, lowering execution latency across API endpoints.',
      'Designed Role-Based Access Control (RBAC) and enterprise user workflows, drastically reducing unauthorized access vectors.',
    ],
    skillsUsed: ['Java', 'Spring Boot', 'Elasticsearch', 'Redis', 'AWS SQS', 'MySQL', 'Microservices', 'RBAC'],
    metrics: ['5,000+ Clients', '50+ Countries', '40% Data Access Gain', 'Sub-second Search'],
  },
  {
    id: 'contify',
    role: 'Software Engineer Intern',
    company: 'Contify',
    location: 'Gurugram, India',
    period: 'Feb 2024 – Apr 2024',
    summary: 'Developed backend API services and business intelligence integration pipelines for 1,000+ enterprise customers.',
    bullets: [
      'Developed high-performance backend microservices using Java and Spring Boot, reducing core API latency by 25%.',
      'Integrated third-party APIs to automate business intelligence delivery pipelines for 1000+ enterprise clients.',
      'Improved service reliability, maintaining 99.9% uptime and reducing bug resolution turn-around times by 15%.',
    ],
    skillsUsed: ['Java', 'Spring Boot', 'REST APIs', 'System Reliability', 'Third-Party Integration'],
    metrics: ['25% Latency Reduction', '99.9% Uptime', '1,000+ Enterprise Users'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Backend Architecture & Microservices',
    description: 'Designing resilient, distributed, high-concurrency Java & Python systems',
    skills: [
      { name: 'Java & Core Java', context: 'High concurrency, JVM tuning, thread pools, OOP design patterns', badge: 'Core' },
      { name: 'Spring Boot & REST APIs', context: 'Production microservices, Dependency Injection, RBAC', badge: 'Core' },
      { name: 'Python & Django', context: 'Backend scripting, API development, AI pipeline orchestration' },
      { name: 'C++ & Algorithms', context: 'Memory management, low-level data structures, CP' },
    ],
  },
  {
    category: 'AI Engineering & Vector Search',
    description: 'Building LLM orchestration, RAG pipelines, and vector retrieval engines',
    skills: [
      { name: 'LLM Integration & OpenAI APIs', context: 'Prompt engineering, structured outputs, function calling', badge: 'AI' },
      { name: 'MongoDB Vector Search', context: 'High-dimensional embeddings, ANN vector indexing', badge: 'AI' },
      { name: 'RAG & Text Chunking', context: 'Recursive semantic chunking, context injection strategies', badge: 'AI' },
      { name: 'Multi-Agent Frameworks', context: 'State synchronization, thread pools, partial failure resilience', badge: 'AI' },
    ],
  },
  {
    category: 'Databases, Caching & Search',
    description: 'High-throughput data storage, sub-second search, and caching strategies',
    skills: [
      { name: 'Elasticsearch & Query DSL', context: 'Custom index mappings, multi-field filtering, full-text search', badge: 'Search' },
      { name: 'Redis Caching', context: 'Query caching, session store, rate limiting, cache invalidation' },
      { name: 'MySQL & PostgreSQL', context: 'Composite indexing, query optimization, eliminating N+1' },
      { name: 'MongoDB', context: 'Document store, aggregation pipelines, vector index management' },
    ],
  },
  {
    category: 'Cloud, DevOps & Messaging',
    description: 'Event-driven architectures, CI/CD pipelines, and cloud operations',
    skills: [
      { name: 'AWS SQS & Event Pipelines', context: 'Asynchronous event decoupling, message queues' },
      { name: 'Docker & Containers', context: 'Containerization, environment reproducibility' },
      { name: 'Jenkins & CI/CD', context: 'Automated test execution, deployment pipelines' },
      { name: 'Git & GitHub', context: 'Version control, multi-identity SSH management, code reviews' },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'top-performer',
    title: 'Consistent Top Performer',
    organization: 'OFB Tech (OfBusiness)',
    description: 'Formally recognized as a top-tier engineer for maintained excellence in delivery, system architecture, and technical execution.',
    badge: 'Award',
    iconName: 'award',
  },
  {
    id: 'top-1-percent',
    title: 'Ranked Top 1% Technologist',
    organization: 'OFB Tech Engineering',
    description: 'Achieved Top 1% ranking in organization-wide technical assessment focusing on Data Structures, Algorithms, and Core Java.',
    badge: 'Top 1%',
    iconName: 'trophy',
  },
  {
    id: 'cp-rating',
    title: '650+ Algorithmic Problems (5-Star)',
    organization: 'LeetCode & CodeChef',
    description: 'Solved over 650 complex DSA problems. Achieved 5-star rating on CodeChef (Top 5% of global participants).',
    badge: 'Top 5% Global',
    iconName: 'star',
  },
];
