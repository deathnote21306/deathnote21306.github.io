import projects from './projects'

const bySlug = Object.fromEntries(projects.map((project) => [project.slug, project]))

const defaultArchitecture = [
  {
    label: 'Frontend',
    detail:
      'Responsive React client renders dashboards, forms, and live feedback panels with accessible interaction states.',
  },
  {
    label: 'Backend',
    detail:
      'API layer handles auth-safe requests, orchestration logic, validation, and telemetry-friendly logging.',
  },
  {
    label: 'Data Layer',
    detail:
      'Structured persistence for entities, snapshots, and indexed retrieval paths tuned for low-latency reads.',
  },
  {
    label: 'External Services',
    detail:
      'Integrates third-party APIs/models behind adapters to isolate failures and keep upgrade paths clean.',
  },
]

const defaultFlow = [
  'Client sends validated request payload',
  'Backend orchestrates service + data operations',
  'Response pipeline enriches metadata + confidence',
  'UI renders result with trace-friendly state updates',
]

const buildCaseStudy = ({
  slug,
  decorative,
  heroParagraph,
  problem,
  features,
  implementation,
  challenges,
  future,
  architecture = defaultArchitecture,
  architectureFlow = defaultFlow,
  resultNotes,
  metrics = [],
  resultVisuals = [],
  githubUrl = '',
  demoUrl = '',
  reportUrl = '',
}) => {
  const project = bySlug[slug]

  if (!project) return null

  return {
    slug,
    title: project.title,
    stack: project.stack,
    coverImage: project.coverImage,
    description: project.description,
    decorative,
    links: {
      githubUrl,
      demoUrl,
      reportUrl,
    },
    heroParagraph,
    metrics,
    problem,
    features,
    architecture,
    architectureFlow,
    implementation,
    challenges,
    resultNotes,
    resultVisuals,
    future,
  }
}

const projectCaseStudies = [
  buildCaseStudy({
    slug: 'ai-chatbot-fastapi',
    decorative: 'neural-grid',
    heroParagraph:
      'This system is engineered as a retrieval-first assistant for high-signal answers in domain-specific corpora. The API orchestrates document chunking, embedding search, context assembly, and guarded generation so responses stay grounded instead of generic. The architecture focuses on low-latency retrieval, deterministic processing stages, and debuggable inference traces, making it a technically strong foundation for production-facing support and internal knowledge operations.',
    problem: {
      statement:
        'Teams lose time digging through fragmented docs, stale notes, and unstructured references when they need precise answers fast.',
      audience: 'Internal operations, support engineers, and technical users consuming evolving knowledge bases.',
      impact:
        'A retrieval-grounded assistant reduces lookup time, improves consistency, and creates a scalable support surface without multiplying manual review effort.',
    },
    features: [
      {
        title: 'Retrieval-Pipeline Control',
        bullets: ['Configurable chunking strategy', 'Vector recall with scored context', 'Prompt assembly with trace metadata'],
      },
      {
        title: 'FastAPI Service Core',
        bullets: ['Structured request validation', 'Streaming-compatible response contract', 'Operational health + logging endpoints'],
      },
      {
        title: 'Reliability Layer',
        bullets: ['Fallback context policies', 'Guardrails for unsupported queries', 'Deterministic error surfaces'],
      },
    ],
    implementation: {
      backend: [
        'FastAPI routes split into ingestion, retrieval, and completion modules to isolate concerns and keep deployment iteration safe.',
        'Service adapters encapsulate embedding/model providers so model switches do not cascade through core application logic.',
      ],
      frontend: [
        'Client layer can consume plain JSON or stream payloads while preserving UI responsiveness and transparent state updates.',
        'Error and confidence states are explicitly surfaced to avoid hidden failure paths for end users.',
      ],
      ai: [
        'RAG flow prioritizes high-relevance chunks and contextual compression before response synthesis.',
        'Prompt templates use bounded context and instruction contracts to reduce hallucination risk.',
      ],
      optimization: [
        'Embedding cache and index warmup reduce cold-start latency on repeated semantic queries.',
        'Request instrumentation captures bottlenecks across retrieval, generation, and transport stages.',
      ],
    },
    challenges: [
      {
        challenge: 'High lexical overlap across documents reduced retrieval precision.',
        solution: 'Introduced metadata-aware filtering and ranking boosts by source authority to sharpen top-k context quality.',
      },
      {
        challenge: 'Long documents inflated token budgets and increased response variance.',
        solution: 'Applied chunk normalization and selective context compression before completion calls.',
      },
    ],
    resultNotes: [
      'Delivers context-grounded responses with a transparent retrieval chain suitable for future enterprise hardening.',
      'Architecture is already shaped for adding conversation memory, role-based controls, and analytics dashboards.',
    ],
    future: [
      'Introduce feedback-driven reranking loop from user accept/reject signals.',
      'Add multi-tenant isolation for shared deployment environments.',
      'Ship model-ablation dashboard to compare quality/latency tradeoffs by provider.',
    ],
  }),
  buildCaseStudy({
    slug: 'royal-canada-airline-system',
    decorative: 'radar-wave',
    heroParagraph:
      'This project models a complete booking and schedule workflow for an airline-grade platform, from search and inventory visibility to reservation lifecycle management. The architecture combines a structured backend domain model with a reactive frontend experience to handle multi-step user flows without sacrificing clarity. Technical depth comes from transaction-aware booking operations, robust validation layers, and a modular service boundary that makes future expansion toward payment, loyalty, and notification systems straightforward.',
    problem: {
      statement:
        'Flight search and booking flows often fragment across brittle forms, unclear availability states, and inconsistent validation.',
      audience: 'Travel customers plus operations teams managing schedule, seat inventory, and reservation updates.',
      impact:
        'A coherent reservation stack improves conversion, reduces failed bookings, and lowers support overhead on edge-case changes.',
    },
    features: [
      {
        title: 'Search + Reservation Flow',
        bullets: ['Route/date availability query', 'Seat and fare visibility', 'Reservation creation with confirmation state'],
      },
      {
        title: 'Domain Integrity',
        bullets: ['Flight, route, and booking entities', 'Validation across user inputs', 'Lifecycle-aware reservation status'],
      },
      {
        title: 'Operational Readiness',
        bullets: ['Role-based management views', 'Traceable booking records', 'Extensible notification hooks'],
      },
    ],
    implementation: {
      backend: [
        'Spring Boot service boundaries separate routing, booking, and admin operations for maintainable growth.',
        'Transaction-safe operations protect seat allocation consistency during high-concurrency reservation requests.',
      ],
      frontend: [
        'Vue interfaces prioritize form clarity, guided progression, and quick correction loops for failed validation states.',
        'State handling keeps search criteria, availability results, and reservation drafts synchronized across steps.',
      ],
      ai: [
        'Not AI-heavy by default; architecture leaves room for demand forecasting or fare recommendation modules.',
      ],
      optimization: [
        'Indexed query paths reduce response time on route/date search operations.',
        'Input normalization and early validation reduce expensive backend retries.',
      ],
    },
    challenges: [
      {
        challenge: 'Seat-state drift occurred when multiple booking attempts targeted the same inventory window.',
        solution: 'Added explicit reservation-state guards and transaction boundaries around seat assignment commits.',
      },
      {
        challenge: 'Users abandoned bookings when error messaging was too generic.',
        solution: 'Split validation into precise field-level feedback to keep recovery path obvious and quick.',
      },
    ],
    resultNotes: [
      'Case study prototype demonstrates a full booking lifecycle with production-minded structure.',
      'System is ready to absorb payment gateway and customer profile modules without architectural rework.',
    ],
    future: [
      'Integrate loyalty tiers and personalized pricing envelopes.',
      'Add automated disruption handling for delays/cancellations.',
      'Introduce operational analytics panel for route-level conversion diagnostics.',
    ],
  }),
  buildCaseStudy({
    slug: 'linear-regression-from-scratch',
    decorative: 'regression-pulse',
    heroParagraph:
      'This project models the UCI Bike Sharing day-level dataset (731 days across two years) to predict daily bike rental demand (cnt) using linear regression, evaluated with Mean Squared Error (MSE). I built an end-to-end regression pipeline: data cleaning to remove leakage/irrelevant fields, outlier handling via IQR-based clipping for continuous weather variables, z-normalization for numerical stability, and one-hot encoding for discrete features. Starting from a baseline linear regression, I explored polynomial and interaction features to study how feature engineering changes model capacity. Applying nonlinear features to all variables reduced training error but caused severe overfitting due to high-dimensional sparse interactions from one-hot categories. Restricting nonlinear transformations to continuous weather variables (temp/atemp/humidity/windspeed) improved generalization and produced the best test performance. The final takeaway: selective, domain-informed feature engineering beats brute-force expansion.',
    metrics: [
      { label: 'Baseline LR (cnt)', value: 'Test MSE ≈ 5.35 × 10^5' },
      { label: 'FE on All Variables', value: 'Test MSE ≈ 2.29 × 10^6 (overfit)' },
      { label: 'FE on Continuous Only', value: 'Test MSE ≈ 4.53 × 10^5 (best)' },
    ],
    problem: {
      statement:
        'Predict day-level bike demand reliably while avoiding leakage and understanding behavioral patterns across rider types.',
      audience:
        'Urban mobility analysts and operations teams needing actionable forecasts and rider behavior signals (registered vs casual ratio target).',
      impact:
        'Better demand estimation supports fleet balancing and staffing decisions, while ratio modeling reveals who drives demand under changing weather/season conditions.',
    },
    features: [
      {
        title: 'Data Cleaning + Leakage Prevention',
        bullets: ['Removed leakage-prone and irrelevant fields', 'Preserved day-level signal integrity', 'Consistent train/test-ready feature schema'],
      },
      {
        title: 'IQR Outlier Clipping',
        bullets: ['Applied to continuous weather features', 'Reduced extreme-value instability', 'Kept model coefficients more robust'],
      },
      {
        title: 'Standardization + Encoding',
        bullets: ['Z-score scaling for numerical stability', 'One-hot encoding for discrete attributes', 'Reusable preprocessing transformations'],
      },
      {
        title: 'Closed-Form Linear Regression',
        bullets: ['Implemented with NumPy only', 'No sklearn training abstraction', 'Direct MSE-based evaluation loop'],
      },
      {
        title: 'Feature Engineering Variants',
        bullets: ['Polynomial + interaction terms', 'All-variable expansion experiment', 'Continuous-only nonlinear expansion'],
      },
      {
        title: 'Model Diagnostics',
        bullets: ['Train vs test error comparison', 'Overfitting detection by MSE gap', 'Residual-driven sanity checks'],
      },
    ],
    architecture: [
      { label: 'Input', detail: 'UCI Bike Sharing day.csv (731 rows, day-level features + cnt target).' },
      { label: 'Cleaning', detail: 'Leakage/irrelevant columns removed, discrete/continuous feature sets separated.' },
      { label: 'Transform', detail: 'IQR clipping (continuous), z-normalization, one-hot encoding for categorical variables.' },
      { label: 'Modeling', detail: 'Closed-form linear regression fitted on train split, then evaluated by MSE and residual behavior.' },
    ],
    architectureFlow: [
      'day.csv ingest',
      'cleaning + leakage prevention',
      'encoding + scaling',
      'train/test split',
      'fit closed-form linear regression',
      'MSE evaluation',
      'residual analysis',
    ],
    implementation: {
      backend: [
        'Pipeline organized in deterministic preprocessing and modeling blocks for repeatable experiments and quick ablation.',
        'Transformation parameters are learned on train data and reused on test data to avoid leakage.',
      ],
      frontend: [
        'Analysis is notebook-driven and reported with clear figures/tables for reproducible interpretation.',
        'Visual outputs focus on actual-vs-predicted trend quality and residual structure.',
      ],
      ai: [
        'Closed-form linear regression solved with matrix algebra (NumPy), maintaining full interpretability over coefficients.',
        'Feature engineering explored polynomial and interaction terms to increase capacity while monitoring generalization.',
      ],
      optimization: [
        'Avoided naive polynomial expansion on one-hot categories to prevent high-dimensional sparse interaction explosion.',
        'Restricted nonlinear expansion to continuous weather variables (temp/atemp/humidity/windspeed) for best test performance.',
      ],
    },
    challenges: [
      {
        challenge: 'Overfitting from dimensional explosion after polynomial/interaction expansion on all encoded variables.',
        solution:
          'Constrained nonlinear feature engineering to continuous weather variables only, recovering strong generalization and the best test MSE.',
      },
    ],
    resultVisuals: [
      {
        title: 'Regression Illustration',
        caption: 'Linear regression best-fit visual used for high-level communication.',
      },
      {
        title: 'Actual vs Predicted (Placeholder)',
        caption: 'Replace with day-level trend plot comparing cnt predictions vs ground truth.',
      },
      {
        title: 'Residual Analysis (Placeholder)',
        caption: 'Replace with residual histogram/scatter to inspect variance and bias.',
      },
    ],
    resultNotes: [
      'Baseline LR (cnt): Test MSE ≈ 5.35×10^5',
      'Feature engineering on all variables: Test MSE ≈ 2.29×10^6 (severe overfitting)',
      'Feature engineering on continuous only: Test MSE ≈ 4.53×10^5 (best)',
    ],
    future: [
      'Add permutation importance to complement coefficient-based interpretation.',
      'Benchmark nonlinear models against this interpretable baseline.',
      'Introduce time-aware splitting strategies to better simulate deployment behavior.',
    ],
  }),
  buildCaseStudy({
    slug: 'ev3-robot-design',
    decorative: 'circuit-orbit',
    heroParagraph:
      'This robotics project combines embedded control logic, environment navigation, and constrained-system optimization to deliver an autonomous EV3 robot task flow. The implementation bridges high-level logic and physical actuation, requiring precise coordination between sensing, pathing, and command execution in a bounded arena. Technical interest is driven by real-world constraints: finite compute, hardware noise, and deterministic behavior requirements under strict completion criteria.',
    problem: {
      statement:
        'Autonomous robotics tasks fail quickly when control logic assumes perfect sensor data and static conditions.',
      audience: 'Robotics builders, embedded-system learners, and teams validating autonomous behavior in constrained environments.',
      impact:
        'A resilient control loop improves completion consistency and demonstrates practical engineering beyond simulation-only results.',
    },
    features: [
      {
        title: 'Autonomous Navigation',
        bullets: ['Obstacle-aware movement decisions', 'Grid/path progression logic', 'Environment completion state tracking'],
      },
      {
        title: 'Embedded Runtime Adaptation',
        bullets: ['Java VM compatibility handling', 'Command timing calibration', 'Hardware-oriented fail-safe paths'],
      },
      {
        title: 'Mission Control Readability',
        bullets: ['Deterministic state transitions', 'Debug-friendly event checkpoints', 'Recovery branch support'],
      },
    ],
    implementation: {
      backend: [
        'Robot control stack is organized as modular command/state handlers for clear execution sequencing.',
      ],
      frontend: [
        'No traditional web frontend; development tooling centers around telemetry interpretation and iterative tuning.',
      ],
      ai: [
        'Primary logic is rule-based autonomous control with extensible hooks for perception enhancement.',
      ],
      optimization: [
        'Latency-sensitive routines tuned for EV3 constraints and stable execution cadence.',
        'Calibration strategy reduces sensor jitter impact in repeated mission runs.',
      ],
    },
    challenges: [
      {
        challenge: 'Sensor variance produced unstable path decisions during obstacle encounters.',
        solution: 'Introduced filtering thresholds and confidence gating before action commits.',
      },
      {
        challenge: 'Hardware command timing drift affected deterministic completion.',
        solution: 'Refined control loop cadence and added corrective timing windows per maneuver type.',
      },
    ],
    resultNotes: [
      'Autonomous run sequence completed target environment with improved reliability over initial baseline.',
      'Architecture is prepared for future sensor-fusion enhancements and richer decision policies.',
    ],
    future: [
      'Integrate vision-based perception for dynamic target identification.',
      'Add replay logs for post-run diagnostics and control tuning.',
      'Explore hybrid rule+learning controller for adaptive path refinement.',
    ],
  }),
  buildCaseStudy({
    slug: 'mcgill-hackathon-voice-assistant',
    decorative: 'stream-matrix',
    heroParagraph:
      'Built under hackathon constraints, this voice-assistant system focuses on fast end-to-end utility: understanding intent, orchestrating booking actions, and returning actionable confirmations in near real-time. The architecture combines LLM-driven parsing with workflow automation and service connectors, emphasizing speed, fault tolerance, and practical user outcomes. Its technical value lies in building a production-shaped workflow in compressed time while preserving maintainability and extensibility.',
    problem: {
      statement:
        'Appointment and support workflows are often bottlenecked by repetitive coordination tasks that still require human intervention.',
      audience: 'Students and service teams needing quick scheduling support without complex onboarding.',
      impact:
        'Automated voice-driven orchestration reduces friction, shortens response cycles, and scales service access.',
    },
    features: [
      {
        title: 'Voice-to-Action Pipeline',
        bullets: ['Intent extraction from natural speech', 'Structured action mapping', 'Booking flow automation via n8n'],
      },
      {
        title: 'LLM + Workflow Integration',
        bullets: ['Prompted slot extraction', 'Workflow branching logic', 'Human-readable confirmation responses'],
      },
      {
        title: 'Hackathon Execution Focus',
        bullets: ['Rapid module decomposition', 'Stable demo-ready orchestration', 'Clear fallback handling for uncertain intents'],
      },
    ],
    implementation: {
      backend: [
        'Service endpoints normalize voice transcript inputs and route intent payloads into automation workflows.',
      ],
      frontend: [
        'Demo interface centers on quick voice interaction loops and immediate scheduling feedback visibility.',
      ],
      ai: [
        'LLM layer classifies intent and extracts scheduling entities with guard prompts for consistency.',
      ],
      optimization: [
        'Workflow shortcuts and branch pruning keep latency low for live demonstration conditions.',
        'Graceful fallback prompts prevent dead-end interactions during ambiguous requests.',
      ],
    },
    challenges: [
      {
        challenge: 'Ambiguous voice intents caused unstable workflow branching.',
        solution: 'Added confidence thresholds and re-prompt logic before committing automation actions.',
      },
      {
        challenge: 'Hackathon time pressure risked fragile architecture decisions.',
        solution: 'Prioritized modular connectors and explicit contracts to avoid hard-coded one-off logic.',
      },
    ],
    resultNotes: [
      'Delivered a working automated assistant flow and reached high functional completion in competitive timeline constraints.',
      'System design supports post-hackathon hardening into a production scheduling assistant.',
    ],
    future: [
      'Add calendar conflict detection and proactive alternative-slot suggestions.',
      'Integrate voice biometrics or auth tokens for secure personalized actions.',
      'Expand multi-language support with locale-aware prompt templates.',
    ],
  }),
].filter(Boolean)

export default projectCaseStudies
