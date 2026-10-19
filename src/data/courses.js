import { Coffee, Settings2, Terminal, BrainCircuit, Users, Briefcase, Wrench, GraduationCap, Clock, Network } from 'lucide-react'
import internshipImg from '../assets/images/btech5.webp'
import netsuiteInternshipImg from '../assets/images/btech6.webp'
import genAiInternshipImg from '../assets/images/btech7.webp'
import javaOverviewImg from '../assets/images/tech1.webp'
import capstoneImg from '../assets/images/tech2.webp'

export const courses = [
  {
    slug: 'java-full-stack-ai',
    icon: Coffee,
    badge: 'Comprehensive',
    shortName: 'Java Full Stack + AI',
    name: 'AI-Enabled Java Full Stack Developer Program',
    tagline: 'Core Java to Spring Boot, React, and hands-on AI integration.',
    overviewImage: javaOverviewImg,
    duration: '4 Months Training + 2 Months Internship',
    mode: '[mode: Online / Offline / Hybrid]',
    prerequisites: 'No prior coding experience required — the program starts from Java fundamentals and builds up week by week.',
    curriculum: [
      {
        module: 'Core Java',
        duration: '3 Weeks',
        weeks: [
          {
            title: 'Java Fundamentals',
            topics: ['JDK/JRE/JVM architecture, bytecode & platform independence', 'Data types, variables, type casting, operators', 'Control statements: if-else, switch, loops', 'Arrays: 1D, 2D, multi-dimensional, array of objects', 'Strings: String, StringBuilder, StringBuffer, immutability', 'Input handling: Scanner, BufferedReader'],
          },
          {
            title: 'Object-Oriented Programming (OOPs)',
            topics: ['Classes & objects, constructors, this keyword', 'Encapsulation — access modifiers, getters/setters', 'Inheritance — types, super keyword, method overriding', 'Polymorphism — overloading vs overriding, dynamic dispatch', 'Abstraction — abstract classes vs interfaces', 'static & final keywords, Object class methods, packages, enums'],
          },
          {
            title: 'Collections, Exception Handling & Multithreading',
            topics: ['Collections: List, Set, Queue, Map, Iterator, Comparable vs Comparator', 'Exception handling: try-catch-finally, custom exceptions, try-with-resources', 'Multithreading: Thread vs Runnable, lifecycle, synchronization', 'Inter-thread communication, Executor framework basics'],
          },
        ],
        miniProject: 'Console-based Library/Bank Management System using OOP + Collections',
      },
      {
        module: 'Advanced Java',
        duration: '2 Weeks',
        weeks: [
          {
            title: 'JDBC & File Handling',
            topics: ['JDBC architecture, drivers, DriverManager', 'Connecting Java to MySQL/Oracle', 'Statement, PreparedStatement, CallableStatement, ResultSet, batch processing', 'File handling & serialization/deserialization'],
          },
          {
            title: 'Modern Java (Java 8+)',
            topics: ['Generics — classes, methods, bounded types, wildcards', 'Lambda expressions & functional interfaces (Predicate, Function, Supplier, Consumer)', 'Java Streams API — map, filter, sorted, collect, reduce', 'Method references, Optional class, java.time API'],
          },
        ],
        miniProject: 'JDBC-based CRUD application (e.g., Employee Management System)',
      },
      {
        module: 'Spring Framework',
        duration: '3 Weeks',
        weeks: [
          {
            title: 'Spring Core',
            topics: ['Spring vs Spring Boot, IoC & Dependency Injection', 'ApplicationContext vs BeanFactory, bean lifecycle & scopes', 'XML-based vs annotation-based configuration'],
          },
          {
            title: 'Spring MVC',
            topics: ['MVC architecture, DispatcherServlet, @Controller, @RequestMapping', 'Model, View, ViewResolver, form handling & validation', 'Interceptors and filters'],
          },
          {
            title: 'Spring Boot',
            topics: ['Auto-configuration, starter dependencies, embedded Tomcat', '@Component, @Service, @Repository, @Autowired, @Bean, @Configuration', 'application.properties/yml, profiles, DevTools, Actuator', 'Exception handling with @ControllerAdvice & @ExceptionHandler'],
          },
        ],
        miniProject: 'RESTful Employee/Student Management backend using Spring Boot',
      },
      {
        module: 'Hibernate',
        duration: '2 Weeks',
        weeks: [
          {
            title: 'ORM Fundamentals',
            topics: ['Why Hibernate over JDBC, Hibernate architecture', 'Configuration, SessionFactory, Session, Transaction', 'Entity classes: @Entity, @Table, @Id, @GeneratedValue'],
          },
          {
            title: 'Mappings, HQL & CRUD',
            topics: ['One-to-One, One-to-Many, Many-to-One, Many-to-Many mappings', '@JoinColumn, @JoinTable, cascading & fetch types', 'HQL, Criteria API basics, CRUD via Session/SessionFactory', 'Hibernate caching, Spring Data JPA overview'],
          },
        ],
        miniProject: 'Convert the JDBC CRUD app to a Hibernate-based persistence layer',
      },
      {
        module: 'SQL',
        duration: '2 Weeks',
        weeks: [
          {
            title: 'SQL Basics & DDL/DML',
            topics: ['DDL: CREATE, ALTER, DROP, TRUNCATE', 'DML: INSERT, UPDATE, DELETE, SELECT', 'Constraints, WHERE/ORDER BY/GROUP BY/HAVING, aggregate functions'],
          },
          {
            title: 'Joins, Subqueries & Optimization',
            topics: ['INNER, LEFT, RIGHT, FULL OUTER, SELF JOIN', 'Subqueries, set operations (UNION, INTERSECT, MINUS)', 'Stored procedures, views, triggers, indexing', 'Normalization (1NF–BCNF), transactions & ACID properties'],
          },
        ],
        miniProject: 'Design a normalized database schema + complex query set (e.g., E-commerce domain)',
      },
      {
        module: 'Frontend Development',
        duration: '3 Weeks',
        weeks: [
          {
            title: 'HTML5 & CSS3',
            topics: ['Semantic tags, forms, tables, multimedia', 'Box model, positioning, flexbox, grid layout', 'Transitions, animations, pseudo-classes/elements'],
          },
          {
            title: 'JavaScript (ES6+)',
            topics: ['let/const, arrow functions, template literals, destructuring, spread/rest', 'DOM manipulation & event handling', 'Promises, async/await, fetch API, ES6 modules & classes'],
          },
          {
            title: 'Bootstrap & Responsive Design',
            topics: ['Bootstrap grid system & components', 'Responsive & mobile-first design, media queries', 'Building a fully responsive multi-page website'],
          },
        ],
        miniProject: 'Responsive portfolio/business landing page',
      },
      {
        module: 'React JS',
        duration: '3 Weeks',
        weeks: [
          {
            title: 'React Fundamentals',
            topics: ['Virtual DOM, JSX, functional vs class components', 'Props & state, component composition', 'Event handling, conditional & list rendering'],
          },
          {
            title: 'Hooks & State Management',
            topics: ['useState, useEffect, useRef, useMemo, useCallback', 'Custom hooks, Context API for global state', 'Lifting state up, avoiding prop drilling'],
          },
          {
            title: 'Routing & SPA Development',
            topics: ['React Router — routes, nested & dynamic routing', 'Forms in React, controlled vs uncontrolled components', 'Connecting React to backend APIs with Axios/fetch'],
          },
        ],
        miniProject: 'Full CRUD SPA (e.g., Task Manager / Product Catalog) with React Router',
      },
      {
        module: 'REST APIs',
        duration: '2 Weeks',
        weeks: [
          {
            title: 'REST Fundamentals & Building APIs',
            topics: ['REST principles, statelessness, resources & URIs', 'HTTP methods & status codes', 'Building APIs with Spring Boot (@RestController, @RequestBody, @PathVariable)'],
          },
          {
            title: 'Consuming APIs & Testing',
            topics: ['JSON serialization/deserialization with Jackson', 'API testing with Postman — collections & test scripts', 'Consuming REST APIs from React, CORS, API versioning'],
          },
        ],
        miniProject: 'Full-stack integration — React frontend consuming a Spring Boot REST API',
      },
      {
        module: 'AI Basics & Integration',
        duration: '2 Weeks',
        highlight: 'AI',
        weeks: [
          {
            title: 'AI Concepts Overview',
            topics: ['Introduction to AI, Machine Learning & LLMs (conceptual)', 'How LLMs like GPT-based models work at a high level', 'Prompt engineering basics, overview of AI/LLM APIs'],
          },
          {
            title: 'Integrating AI into Applications',
            topics: ['Authenticating with an AI/LLM API', 'Calling AI APIs from Spring Boot and/or React', 'Building AI-powered features: chatbots, content generation, recommendations'],
          },
        ],
        miniProject: 'an AI chatbot / recommendation feature to your capstone project',
      },
      {
        module: 'Tools & DevOps',
        duration: '1 Week',
        weeks: [
          {
            title: 'Industry-Standard Tooling',
            topics: ['Git & GitHub — branching, merging, pull requests', 'Maven — project structure, dependency management, build lifecycle', 'VS Code setup, Postman advanced usage', 'Deployment basics for Spring Boot & React apps, CI/CD overview'],
          },
        ],
        miniProject: null,
      },
    ],
    capstone: {
      title: 'Capstone Project',
      subtitle: 'AI-Powered E-Commerce / Learning Management / Job Portal Platform',
      description: 'Everything from the program comes together in one complete full-stack application.',
      image: capstoneImg,
      backend: 'Spring Boot + Hibernate + MySQL',
      frontend: 'React + Bootstrap',
      features: ['REST API integration', 'Authentication', 'CRUD modules', 'AI chatbot / recommendation engine'],
      deployment: 'Git-managed repo, Postman-tested APIs, basic hosting & deployment',
    },
    internship: {
      title: 'Internship',
      duration: '2 Months',
      description: 'After the 4 months of training, you move into real project work — sprint reviews, code walkthroughs, and hands-on mentorship, at the pace of an actual engineering team.',
      image: internshipImg,
    },
    summaryTimeline: [
      { phase: 'Java Foundations', modules: 'Core Java + Advanced Java', duration: '5 Weeks' },
      { phase: 'Backend Frameworks', modules: 'Spring Framework + Hibernate', duration: '5 Weeks' },
      { phase: 'Database', modules: 'SQL', duration: '2 Weeks' },
      { phase: 'Frontend', modules: 'HTML/CSS/JS + React', duration: '6 Weeks' },
      { phase: 'Integration', modules: 'REST APIs', duration: '2 Weeks' },
      { phase: 'Emerging Tech', modules: 'AI Basics & Integration', duration: '2 Weeks' },
      { phase: 'Tooling', modules: 'Git, Maven, Postman, Deployment', duration: '1 Week' },
      { phase: 'Internship', modules: 'Real-world project work with hands-on mentorship', duration: '2 Months' },
    ],
  },
  {
    slug: 'netsuite-functional',
    icon: Settings2,
    badge: 'No-Code Track',
    shortName: 'NetSuite Functional',
    name: 'Oracle NetSuite Functional Training',
    tagline: 'Master the tech that powers modern business — implementation-grade NetSuite functional expertise, no coding required.',
    duration: '10 Weeks',
    mode: 'Weekend batches, hybrid (online + offline options)',
    prerequisites: 'No coding background required — ideal for working professionals, business/operations/finance-minded learners, and aspiring consultants.',
    vision: 'To become a trusted destination for professionals seeking real, implementation-grade NetSuite functional expertise — trained by consultants who work on live client engagements, not just theory.',
    mission: "To equip working professionals and aspiring consultants with practical, job-ready NetSuite functional skills — bridging the gap between certification knowledge and real project execution.",
    whyThisProgram: [
      { icon: Users, title: 'Trained by Practicing Consultants', description: 'Learn from NetSuite consultants who are actively delivering client implementations, not full-time trainers reciting theory.' },
      { icon: Briefcase, title: 'Real Project Exposure', description: 'Course scenarios are drawn from actual client business processes — Order-to-Cash, Procure-to-Pay, multi-entity setups.' },
      { icon: Wrench, title: 'Implementation-Grade Curriculum', description: "Covers what you'll actually be asked to configure and troubleshoot on the job, not just exam objectives." },
      { icon: GraduationCap, title: 'Career & Placement Support', description: 'Resume building, interview prep, and guidance from a company that also hires NetSuite talent.' },
      { icon: Clock, title: 'Flexible Formats', description: 'Weekend batches and hybrid options for working professionals.' },
      { icon: Network, title: 'Direct Line to Real Work', description: 'Standout learners get visibility into live Balvirt project opportunities.' },
    ],
    curriculum: [
      {
        module: 'Week 1: Introduction & Navigation',
        duration: '1 Week',
        topics: ['Overview of Oracle NetSuite & Cloud ERP Concepts', 'Editions, Licensing Models, and Deployment Overview', 'Navigating the NetSuite Interface (UI, Portlets, Dashboards)', 'Understanding Users, Roles, and Permission Structures', 'Creating and Managing Role-Based Dashboards'],
      },
      {
        module: 'Week 2: Entity Records & Data Management',
        duration: '1 Week',
        topics: ['Customer, Vendor, Employee, Partner, and Contact Records', 'Record Linking and Customization Basics', 'CSV Imports and Exports', 'Data Cleansing and Duplicate Handling', 'Mass Updates and Inline Editing Techniques'],
      },
      {
        module: 'Week 3: Saved Searches, Reports & Dashboards',
        duration: '1 Week',
        topics: ['Introduction to Saved Searches', 'Advanced Criteria, Formula Fields, and Summary Types', 'Highlighting, Drill-downs, and Joins in Saved Searches', 'Standard Reports vs. Custom Reports', 'KPI Creation and Dashboard Customization'],
      },
      {
        module: 'Week 4: ERP, Accounting & Taxation Setup',
        duration: '1 Week',
        topics: ['Chart of Accounts and Accounting Preferences', 'Fiscal Calendar, Opening and Closing Accounting Periods', 'Entering Opening Balances and Trial Balance Setup', 'Tax Codes, Tax Groups & Country-Specific Tax Rules', 'Multi-Currency Setup and Currency Exchange Management'],
      },
      {
        module: 'Week 5: Company Setup & Item Management',
        duration: '1 Week',
        topics: ['Company Information and General Preferences', 'Enabling Features and Record Label Customization', 'Classifications: Departments, Locations, Classes', 'Item Types: Inventory, Non-Inventory, Service, Assembly', 'Pricing and Units of Measure Configuration'],
      },
      {
        module: 'Week 6: SuiteBuilder (Customizations)',
        duration: '1 Week',
        topics: ['Custom Fields, Lists, and Records', 'Form Customization and Subtabs', 'Field Display Logic and Sourcing Techniques', 'Custom Segments and Role-Based Form Views', 'SuiteBuilder Use Cases and Best Practices'],
      },
      {
        module: 'Week 7: Workflow Management (SuiteFlow)',
        duration: '1 Week',
        highlight: 'No-Code',
        topics: ['Workflow Concepts: States, Transitions, Actions', 'Approval Process Configuration', 'Workflow Conditions and Triggers', 'Workflow Testing, Versioning, and Audit Logs', 'Real-World Workflow Implementation Scenarios'],
      },
      {
        module: 'Week 8: Functional Use Cases & Business Process Flows',
        duration: '1 Week',
        topics: ['Order to Cash Process: Sales Order to Customer Payment', 'Procure to Pay Process: Vendor PO to Bill Payment', 'Business Process Mapping & Functional Gap Analysis', 'Functional Role in UAT and Requirement Gathering', 'Functional Consultant Documentation Standards'],
      },
      {
        module: 'Week 9: Functional Integration & Governance Overview',
        duration: '1 Week',
        topics: ['Overview of NetSuite Integration Capabilities', 'SOAP/XML & REST Integration Concepts for Functional Users', 'Introduction to SuiteTalk and Middleware Communication', 'API Governance and Functional Involvement in Integration Projects', 'Security, Compliance, and Audit Reporting Essentials'],
      },
      {
        module: 'Week 10: Capstone Project & Career Support',
        duration: '1 Week',
        topics: ['Resume Building and Interview Preparation', 'Certification Paths and Career Roadmap Discussion'],
        miniProject: 'Capstone Project — a simulated end-to-end ERP implementation: company setup, item creation, tax & COA configuration, workflow design, saved search, and dashboard reporting.',
      },
    ],
    internship: {
      title: 'Internship',
      duration: '[internship duration]',
      description: 'After training, you move into real functional consulting work — configuring business processes, running UAT, and supporting go-live — with hands-on mentorship guiding you the whole way.',
      image: netsuiteInternshipImg,
    },
  },
  {
    slug: 'netsuite-technical',
    icon: Terminal,
    badge: 'Developer Track',
    shortName: 'NetSuite Technical',
    name: 'Oracle NetSuite Technical Training',
    tagline: 'Build, customize, and integrate NetSuite with SuiteScript 2.x/2.1, RESTlets, SuiteQL, and real-world integrations.',
    duration: '10 Weeks',
    mode: '[mode: Online / Offline / Hybrid]',
    prerequisites: 'Basic programming/JavaScript familiarity is helpful, though the program covers SuiteScript from the ground up.',
    vision: 'To become a trusted destination for developers seeking real, production-grade NetSuite technical expertise — trained by consultants who build and ship live client work, not just theory.',
    mission: 'To equip developers and aspiring technical consultants with practical, job-ready NetSuite development skills — bridging the gap between tutorial-level scripting and real production-grade implementation.',
    whyThisProgram: [
      { icon: Users, title: 'Trained by Practicing Developers', description: 'Learn from NetSuite developers actively building and shipping SuiteScript, RESTlet, and integration work for real clients, not full-time trainers reciting theory.' },
      { icon: Briefcase, title: 'Real Project Exposure', description: 'Course scenarios are drawn from actual client customizations, integrations, and reporting requirements — not toy examples.' },
      { icon: Wrench, title: 'Production-Grade Curriculum', description: "Covers what you'll actually be asked to build, debug, and deploy on the job — real governance limits, integration patterns, and deployment practices, not just certification objectives." },
      { icon: GraduationCap, title: 'Career & Placement Support', description: 'Resume building, interview prep, and guidance from a company that also hires NetSuite developers.' },
      { icon: Clock, title: 'Flexible Formats', description: 'Weekend batches and hybrid options for working professionals.' },
      { icon: Network, title: 'Direct Line to Real Work', description: 'Standout learners get visibility into live Balvirt development projects.' },
    ],
    curriculum: [
      {
        module: 'Week 1: NetSuite Architecture & SuiteScript Foundations',
        duration: '1 Week',
        topics: ['NetSuite Development Environment & Tools (SDF, VS Code, Script Debugger)', 'SuiteScript 1.0 vs 2.0 vs 2.1 — evolution and when each applies', 'Script Types & Entry Points overview (Client, User Event, Scheduled, Suitelet, RESTlet, Map/Reduce)', 'Setting up a script record and deployment', 'Using N/log and basic debugging techniques'],
      },
      {
        module: 'Week 2: Working with Records via SuiteScript',
        duration: '1 Week',
        topics: ['N/record module — creating, loading, submitting records', 'Working with sublists and line items', 'Dynamic vs. Standard mode', 'Search API (N/search) — building searches programmatically', 'Governance limits and usage points'],
      },
      {
        module: 'Week 3: Client & User Event Scripts',
        duration: '1 Week',
        topics: ['Client Script entry points (pageInit, fieldChanged, saveRecord, validateLine)', 'User Event Script entry points (beforeLoad, beforeSubmit, afterSubmit)', 'Form customization via script (N/ui/serverWidget)', 'Field display logic and sourcing via script', 'Real-world validation and automation scenarios'],
      },
      {
        module: 'Week 4: Scheduled, Map/Reduce & Suitelets',
        duration: '1 Week',
        topics: ['Scheduled Script use cases and governance', 'Map/Reduce Script stages (getInputData, map, reduce, summarize)', 'Building Suitelets for custom UI pages', 'N/url and N/redirect for navigation', 'Task scheduling and queue management'],
      },
      {
        module: 'Week 5: SuiteScript 2.1 & Modern Development Practices',
        duration: '1 Week',
        highlight: 'AI',
        topics: ["What's new in SuiteScript 2.1 (native JS syntax, async/await support)", 'SDF-based project structure and version control (Git)', 'Migrating legacy SuiteScript 1.0 code to 2.1', 'Custom modules and external library integration', 'AI-assisted development using SuiteCloud Agent Skills'],
      },
      {
        module: 'Week 6: Advanced PDF & Custom PDF/HTML Templates',
        duration: '1 Week',
        topics: ['Advanced PDF/HTML Templates overview (FreeMarker syntax)', 'Customizing standard transaction PDF templates (invoices, POs, sales orders)', 'Building fully custom PDF templates from scratch', 'Conditional logic, loops, and data binding in templates', 'Generating PDFs programmatically via N/render'],
      },
      {
        module: 'Week 7: RESTlets & Custom Integrations',
        duration: '1 Week',
        topics: ['Building and securing RESTlets', 'SuiteTalk SOAP & REST web services', 'Token-Based Authentication (TBA) and OAuth 2.0', 'Integration patterns via middleware: Celigo, Boomi, and direct API integrations', 'Error handling and retry logic in integrations'],
      },
      {
        module: 'Week 8: SQL in NetSuite — SuiteQL, N/query & Reporting',
        duration: '1 Week',
        topics: ['Introduction to SuiteQL and the N/query module', 'Writing SuiteQL queries vs. traditional Saved Searches', 'Using the SuiteQL Query Tool for ad-hoc reporting', 'SuiteAnalytics Workbooks vs. custom SuiteQL reporting', 'Performance considerations: SuiteQL vs Search API'],
      },
      {
        module: 'Week 9: Deployment, Workflow Automation & Governance',
        duration: '1 Week',
        topics: ['SuiteBundler & Package Deployment for reusable customizations across accounts', 'SuiteFlow vs. scripted automation — when to use which', 'Workflow Action Scripts', 'API governance, usage limits, and optimization techniques', 'Security best practices across SuiteScript and integrations'],
      },
      {
        module: 'Week 10: Capstone Project & Career Support',
        duration: '1 Week',
        topics: ['Code review and optimization pass', 'Resume Building and Interview Preparation', 'Certification Paths (NetSuite Certified Application Developer) and Career Roadmap Discussion'],
        miniProject: 'Capstone Project — build a custom integration with a Suitelet UI, RESTlet backend, and Advanced PDF output.',
      },
    ],
    internship: {
      title: 'Internship',
      duration: '[internship duration]',
      description: 'After training, you move into real NetSuite development work — scripting, customization, and integration tasks — with hands-on mentorship guiding you the whole way.',
      image: netsuiteInternshipImg,
    },
  },
  {
    slug: 'generative-ai',
    icon: BrainCircuit,
    badge: 'Trending',
    shortName: 'Generative AI',
    name: 'Generative AI Development Program',
    tagline: 'Build and ship real applications with LLMs, RAG, and AI agents.',
    duration: '10 Weeks',
    mode: '[mode: Online / Offline / Hybrid]',
    prerequisites: '[prerequisites]',
    curriculum: [
      {
        module: 'Week 1: AI & LLM Foundations',
        duration: '1 Week',
        topics: ['How large language models work (conceptual, no math)', 'Overview of major AI/LLM providers & APIs', 'Capabilities, limitations, and responsible AI use'],
      },
      {
        module: 'Week 2: Prompt Engineering',
        duration: '1 Week',
        topics: ['Prompt design patterns: zero-shot, few-shot, role prompting', 'Chain-of-thought and structured prompting techniques', 'Evaluating and iterating on prompts'],
      },
      {
        module: 'Week 3: Working with LLM APIs',
        duration: '1 Week',
        topics: ['Authenticating and calling LLM APIs', 'Streaming responses, handling tokens and costs', 'Building your first AI-powered feature'],
      },
      {
        module: 'Week 4: Embeddings & Vector Search',
        duration: '1 Week',
        topics: ['What embeddings are and how similarity search works', 'Vector databases and chunking basics', 'Building a simple semantic search feature'],
      },
      {
        module: 'Week 5: Retrieval-Augmented Generation (RAG)',
        duration: '1 Week',
        topics: ['RAG architecture end-to-end', 'Building a RAG pipeline over custom data', 'Common RAG pitfalls and how to avoid them'],
      },
      {
        module: 'Week 6: Function Calling & Tool Use',
        duration: '1 Week',
        topics: ['Connecting LLMs to external tools and APIs', 'Multi-step tool orchestration', 'Designing safe, reliable tool integrations'],
      },
      {
        module: 'Week 7: Building AI Agents',
        duration: '1 Week',
        topics: ['Agent architectures and planning basics', 'Memory and reliability/guardrails in agents', 'Building a working single-purpose agent'],
      },
      {
        module: 'Week 8: Fine-Tuning & Model Customization',
        duration: '1 Week',
        topics: ['When to fine-tune vs. prompt/RAG', 'Fine-tuning basics and evaluating outputs', 'Open-source vs. hosted model tradeoffs'],
      },
      {
        module: 'Week 9: Deployment & AI App Architecture',
        duration: '1 Week',
        topics: ['Architecting and deploying a production AI app', 'Monitoring, cost tracking, and scaling basics', 'Security: prompt injection and data privacy'],
      },
      {
        module: 'Week 10: Capstone Project & Career Support',
        duration: '1 Week',
        topics: ['Resume building and interview preparation', 'Career roadmap and portfolio guidance'],
        miniProject: 'Capstone Project — build and ship a full generative AI application.',
      },
    ],
    internship: {
      title: 'Internship',
      duration: '[internship duration]',
      description: 'After training, you move into real applied AI project work — building and refining AI-powered features with hands-on mentorship guiding you the whole way.',
      image: genAiInternshipImg,
    },
  },
]

export function getCourseBySlug(slug) {
  return courses.find((c) => c.slug === slug)
}
