import projects from './projects'
import neuralSpellbookCover from '../assets/images/neuralspellbook-cover.png'
import neuralSpellbookSpellFails from '../assets/images/neuralspellbook-spell-fails.png'
import neuralSpellbookTraining from '../assets/images/neuralspellbook-training.png'
import studyquestCover from '../assets/images/studyquest-cover.png'
import studyquestOnboarding from '../assets/images/studyquest-onboarding.png'
import studyquestMascot from '../assets/images/studyquest-mascot.png'

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
    slug: 'neural-spellbook',
    decorative: 'neural-grid',
    githubUrl: 'https://github.com/deathnote21306/NeuralSpellBook',
    heroParagraph:
      'NeuralSpellBook is a fully native iPad app built in Swift and SwiftUI for the Apple Swift Student Challenge 2026. It teaches how neural networks really work through five interactive chapters — Decisions, Mistakes, Learning, Training, and Discovery — using real-time animated visualizations, interactive sliders, and live feedback. Each chapter surfaces a concrete concept: how a neuron decides, how loss is measured, how the network corrects mistakes through backpropagation, and how hyperparameters like speed, batch size, and rounds control the entire learning outcome. The architecture is entirely offline, self-contained, and free of external dependencies — designed to make the fundamentals of AI genuinely accessible without any prior coding knowledge.',
    metrics: [
      { label: 'Chapters', value: '5 Interactive' },
      { label: 'Screens', value: '12 Slides' },
      { label: 'Challenge', value: 'Swift 2026' },
      { label: 'Code Required', value: 'None' },
    ],
    problem: {
      statement:
        'Neural networks are taught through formulas and slides that describe behavior without letting learners feel it. Most people leave an ML course knowing the terms but having no intuition for what happens inside a forward pass or why a network fails to learn.',
      audience:
        'Students, curious learners, and non-programmers who want to understand how AI really works, without needing to write a single line of code.',
      impact:
        'A hands-on, visual-first experience removes the conceptual barrier, turning abstract math into something you can drag, tap, and watch change in real time.',
    },
    features: [
      {
        title: 'Five-Chapter Neural Journey',
        bullets: [
          'Chapter I: Decisions — how a neuron makes a prediction',
          'Chapter II: Mistakes — live loss visualization with interactive target ring',
          'Chapter III: Learning — backpropagation concept surfaced step by step',
          'Chapter IV: Training — adjust speed, batch size, and rounds; watch the outcome',
          'Chapter V: Discovery — free exploration of the trained network',
        ],
      },
      {
        title: 'Real-Time Animated Visualizations',
        bullets: [
          'Starfield neural network canvas with animated nodes and connections',
          'Live loss meter showing percentage with directional ring feedback',
          'Gradient typography and spatial iPad-optimized layout throughout',
        ],
      },
      {
        title: 'Native Swift Architecture',
        bullets: [
          'Built entirely in Swift and SwiftUI — no external libraries or bridges',
          'CoreML for in-process neural computation with zero-latency feedback',
          'Offline, self-contained — no network calls, no backend dependencies',
        ],
      },
    ],
    architecture: [
      {
        label: 'UI Layer',
        detail:
          'Pure SwiftUI declarative views with custom Canvas API animations rendering the neural network starfield and loss ring at 60fps.',
      },
      {
        label: 'Chapter Engine',
        detail:
          'State-machine driven chapter progression with 5 states; each chapter unlocks after the user completes the interactive objective.',
      },
      {
        label: 'Computation',
        detail:
          'CoreML-backed training simulation keeps inference fully in-process. Chapter IV exposes speed, batch size, and rounds as live hyperparameters.',
      },
      {
        label: 'Asset System',
        detail:
          'Custom starfield backgrounds, gradient text rendering, and haptic feedback integrated to reinforce key learning moments.',
      },
    ],
    architectureFlow: [
      'User opens app on iPad',
      'Chapter selection screen renders (I–V tabs)',
      'Chapter state machine activates',
      'Neural canvas initializes with starfield',
      'User interacts — taps, drags, adjusts sliders',
      'CoreML processes inputs in real-time',
      'Animated visualization updates live',
      'Chapter completes → next chapter unlocks',
    ],
    implementation: {
      backend: [
        'No server-side component — fully offline and self-contained. State managed with @Observable and Combine pipelines.',
        'Chapter progression is deterministic; each chapter has a clear entry condition and a completion check before the next unlocks.',
      ],
      frontend: [
        'All views are pure SwiftUI — declarative, composable, and optimized for the iPad spatial canvas.',
        'Custom animated views render the neural network and loss ring using the SwiftUI Canvas API with geometry caching to avoid redundant redraws.',
      ],
      ai: [
        'CoreML integration powers the neural computation layer, keeping inference in-process for zero-latency feedback visible to the user.',
        'Chapter IV exposes three real hyperparameters — speed, batch size, rounds — with a live training outcome simulation updating as sliders move.',
      ],
      optimization: [
        'Animation targets 60fps using the SwiftUI built-in animation scheduler; heavy canvas redraws minimized with geometry caching.',
        'Haptic feedback synchronized with key learning moments — correct predictions, loss drops, and chapter completions.',
      ],
    },
    challenges: [
      {
        challenge:
          'Making backpropagation intuitively understandable without showing any math or code.',
        solution:
          'Split the concept into two chapters: "Mistakes" shows loss as a concrete percentage with a ring that physically shrinks toward the target as the user drags a slider — making the gradient direction something you feel, not just read.',
      },
      {
        challenge:
          'Keeping SwiftUI canvas animations synchronized with CoreML computation state without dropped frames.',
        solution:
          'Used @Published state objects with Combine pipelines to propagate ML state updates into the SwiftUI animation system, batching all main-thread updates to prevent stutter during continuous slider interaction.',
      },
    ],
    resultNotes: [
      'Successfully submitted to Apple Swift Student Challenge 2026 — end-to-end native Swift app.',
      'Five fully playable chapters across 12 screens: decisions, loss, backpropagation, training, and discovery.',
      'Zero external dependencies — fully offline, self-contained, and optimized for iPad.',
    ],
    resultVisuals: [
      {
        title: 'Home — Chapter Selection',
        caption: 'Starfield landing screen with five chapter tabs and the neural orb ready to begin.',
        image: neuralSpellbookCover,
      },
      {
        title: 'Chapter II — The Spell Fails',
        caption: 'Live loss visualization: the ring closes toward the target as the learner adjusts the prediction slider.',
        image: neuralSpellbookSpellFails,
      },
      {
        title: 'Chapter IV — Training the Trainer',
        caption: 'Interactive hyperparameter panel: speed, batch size, and rounds — all real, all live.',
        image: neuralSpellbookTraining,
      },
    ],
    future: [
      'Expand to a convolutional network chapter with image recognition visualization.',
      'Add a "Build Your Own Network" sandbox where learners configure layer sizes and activation functions.',
      'Submit to the App Store as a public educational tool with a teacher mode for classroom use.',
    ],
  }),
  buildCaseStudy({
    slug: 'ai-chatbot-fastapi',
    decorative: 'neural-grid',
    githubUrl: 'https://github.com/deathnote21306/rag-backend-fastapi',
    demoUrl: 'http://127.0.0.1:8000',
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
    reportUrl: '/reports/ecse-211-final-report.pdf',
    heroParagraph:
      'This project delivers an autonomous EV3 firefighter robot for a 1.2m x 1.2m simulated building environment. The system was engineered to leave the base station, enter the fire room through the main door, detect floor-mounted fire targets, drop extinguishing cubes with a custom dispenser, and backtrack home under strict hardware, timing, and material constraints. The final design balances embedded control logic, sensor calibration, and physical reliability rather than relying on idealized motion or simulation-only assumptions.',
    problem: {
      statement:
        'A firefighter rescue robot has to find and extinguish two fires autonomously while avoiding walls, furniture, and incorrect rooms despite noisy sensors, imperfect motion, and severe build constraints.',
      audience: 'Robotics students, embedded-systems builders, and teams validating autonomous behavior in uncertainty-heavy physical environments.',
      impact:
        'The project demonstrates how robust behavior emerges from careful calibration, subsystem tradeoffs, and fallback-friendly control logic rather than from ideal hardware assumptions.',
    },
    features: [
      {
        title: 'Mission Navigation',
        bullets: ['Hardcoded base-to-room entry path', 'Ultrasonic wall and obstacle detection', 'Stack-based return-to-base backtracking'],
      },
      {
        title: 'Fire Detection + Extinguishing',
        bullets: ['Downward color-sensor fire recognition', 'Two-cube extinguisher payload', 'Tennis-racket dispenser with near-perfect test accuracy'],
      },
      {
        title: 'Embedded Safety + Reliability',
        bullets: ['Startup siren during deployment route', 'Manual emergency stop via touch sensor', 'Calibration factors for wheel imbalance and sensor noise'],
      },
    ],
    implementation: {
      backend: [
        'Control logic was modularized into movement, turning, wall detection, color classification, dispenser activation, siren playback, emergency stop, and return-to-base functions.',
        'A movement stack records core displacements so the robot can reverse the path and approximate its return to the base station after extinguishing two fires.',
      ],
      frontend: [
        'There is no traditional web frontend; iteration depended on repeated physical testing, telemetry interpretation, and hardware-software tuning inside the demo environment.',
      ],
      ai: [
        'The final room-search behavior uses a practical random-walk strategy instead of a more brittle DFS-style mapping approach, because the hardware could not support precise localization reliably.',
      ],
      optimization: [
        'Color detection was calibrated with ratio-based RGB thresholds and moving-average filtering to separate red, green, yellow, purple, white, and black under varying lighting conditions.',
        'Wheel-turn correction factors, sensor positioning, and a higher-torque dispenser motor were introduced to improve repeatability in full-system runs.',
      ],
    },
    challenges: [
      {
        challenge: 'Early design ideas such as a map-aware search algorithm and more complex dispenser mechanisms proved too fragile for the actual hardware behavior.',
        solution: 'The final system simplified the search logic to a sensor-driven random walk and selected the most reliable dispenser concept rather than the most mechanically ambitious one.',
      },
      {
        challenge: 'Weight imbalance, inconsistent motor behavior, and component faults caused turning drift and subsystem failures during integration.',
        solution: 'The team added wheel correction factors, redistributed weight with added support, and replaced faulty BrickPi and speaker hardware to stabilize the final robot.',
      },
    ],
    metrics: [
      { label: 'Arena', value: '1.2m × 1.2m' },
      { label: 'Fire Targets', value: '2 red floor markers' },
      { label: 'Door Limit', value: '< 22 cm robot width' },
    ],
    resultNotes: [
      'The final design combined calibrated sensing, reliable cube deployment, and modular control logic into a workable autonomous firefighter mission flow.',
      'Testing validated the chosen tennis-racket dispenser, the room-entry path, the wall-detection behavior, and the stack-based return strategy under the actual demo setup.',
    ],
    future: [
      'Replace the random-walk room scan with a more structured exploration policy once localization becomes trustworthy.',
      'Improve the emergency-stop responsiveness by reducing touch-sensor or software latency.',
      'Extend the design with richer post-run logging and more resilient multi-sensor fusion.',
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
  buildCaseStudy({
    slug: 'studyquest',
    decorative: 'stream-matrix',
    githubUrl: 'https://github.com/theaboy/cracked-quest',
    heroParagraph:
      'StudyQuest (codenamed GetCracked) is a mobile-first academic engagement platform that treats a university semester like a game campaign. Each course is a map. Each exam is a boss. Lectures, study sessions, and note contributions earn XP that feeds a visible social rank — Student, Grinder, Scholar, Veteran, Elite, Legend — which resets every semester. The app is a React Native + Expo build with a Babylon.js 3D progression map, Supabase handling auth, storage, and Postgres, and Claude powering the AI tutor and on-device quiz generation through Supabase Edge Functions. Every Claude call is brokered server-side so API keys never leave the backend, and every XP mutation is server-awarded so progression cannot be forged from the client. The product thesis: students are already gamers, so stop fighting that instinct and turn the right behavior into the score.',
    metrics: [
      { label: 'Phase 1 Target', value: 'McGill' },
      { label: 'Core Pillars', value: '3' },
      { label: 'XP Actions Tracked', value: '9+' },
      { label: 'AI Provider', value: 'Claude' },
    ],
    problem: {
      statement:
        'Students fight billion-dollar attention algorithms with willpower alone, academic effort is invisible until grades arrive, and course knowledge lives in scattered group chats. Traditional study apps bolt points onto productivity and still feel like homework.',
      audience:
        'University students aged 17–25 enrolled in structured programs with exams — initial rollout targets McGill, with a design that extends to any campus.',
      impact:
        'A game-first experience replaces willpower with engagement loops. Effort becomes socially visible, resources pool by course, and the gameplay is what keeps students coming back — with studying as the side effect.',
    },
    features: [
      {
        title: 'Study Mode — Focus and Deep',
        bullets: [
          'Focus Mode: timer sessions with quiz checkpoints pulled from real course material as intelligent friction.',
          'Deep Mode: OS-level distraction blocking via iOS Screen Time and Android Accessibility Service.',
          'AI Tutor powered by Claude, pre-loaded with course context, pushes back and asks follow-ups instead of giving answers.',
        ],
      },
      {
        title: 'The Rank — social reputation for effort',
        bullets: [
          'XP awarded for verified attendance (+50), study sessions (+30), quiz checkpoints (+10), mastery checks (+40), and more.',
          'Six-tier rank progression — Student → Grinder → Scholar → Veteran → Elite → Legend — resets every semester.',
          'Leaderboards scoped by course, campus, and friend group so competition stays relevant.',
        ],
      },
      {
        title: 'The Commons — course-specific knowledge pool',
        bullets: [
          'Upload lecture notes, past exams, and study guides tagged by course and topic.',
          'Top contributors earn XP plus social credibility; downloads award passive XP to uploaders.',
          'Study group formation and campus event discovery sit inside the same course surface.',
        ],
      },
      {
        title: '3D Progression Map',
        bullets: [
          'Babylon.js native renderer (@babylonjs/react-native) powers an MMORPG-style map per course.',
          'Topics render as map nodes, progress lights the path, and the current exam sits as the endpoint boss.',
          'Requires Expo prebuild — the map is unavailable in Expo Go by design.',
        ],
      },
    ],
    architecture: [
      {
        label: 'Mobile Client',
        detail:
          'React Native 0.81 + Expo SDK 54 with the New Architecture enabled, Expo Router v6 for file-based navigation, NativeWind for Tailwind-style styling, and Zustand v5 for app state.',
      },
      {
        label: 'Backend',
        detail:
          'Supabase provides Postgres, Auth, Storage, and Realtime from a single backend. All schema, RLS policies, and triggers live in the repo under supabase/.',
      },
      {
        label: 'AI Gateway',
        detail:
          'Supabase Edge Functions (Deno runtime) broker every Claude call — breakdown, quiz-gen, flashcards — so the client never holds the Anthropic key.',
      },
      {
        label: 'Progression Integrity',
        detail:
          'A dedicated award_xp Edge Function is the only path that can write XP. Client-side progression events are signals; the server is the source of truth.',
      },
    ],
    architectureFlow: [
      'Student opens the app and authenticates through Supabase Auth',
      'Courses and the Progress Map render from Postgres with realtime subscriptions',
      'User starts a Focus or Deep session — OS-level distraction blockers engage',
      'Quiz checkpoints request fresh questions from the quiz-gen Edge Function',
      'Edge Function calls Claude server-side and returns structured question payloads',
      'Session completion triggers the award_xp Edge Function to update rank server-side',
      'Leaderboards and the 3D map re-render with the new progression state',
    ],
    implementation: {
      backend: [
        'Supabase Postgres schema models users, courses, topics, sessions, uploads, and XP events with row-level security policies keeping data course-scoped.',
        'Edge Functions written in TypeScript/Deno handle AI orchestration, XP awards, and upload processing — no AI keys ever touch the client.',
      ],
      frontend: [
        'Expo Router v6 file-based routing splits the app into (auth), (tabs), and map/[courseId] — keeping navigation legible as features compound.',
        'NativeWind v4 provides Tailwind ergonomics inside React Native; a shared lib/theme.ts pins the dark, neon, game-first design tokens.',
      ],
      ai: [
        'Claude (claude-sonnet-4) powers three Edge Functions: breakdown (assignment → day-by-day plan), quiz-gen (lecture → checkpoint questions), flashcards (notes → spaced-repetition deck).',
        'The AI Tutor is prompt-engineered to push back and ask follow-ups — it refuses to simply hand over answers, which is what makes it a tutor instead of a homework-doer.',
      ],
      optimization: [
        'Babylon.js renders natively on-device through @babylonjs/react-native; the Expo New Architecture is required for the bridgeless JSI calls it depends on.',
        'Client caches per-course map state in Zustand so navigating between courses does not re-initialize the 3D scene unnecessarily.',
      ],
    },
    challenges: [
      {
        challenge:
          'Keeping XP progression un-forgeable when the client is the one observing study behavior.',
        solution:
          'Made the server the only authority on XP. The client emits a structured event describing what happened; the award_xp Edge Function validates, applies rate limits, and writes. No client-side XP write path exists.',
      },
      {
        challenge:
          'Integrating Babylon.js 3D rendering inside an Expo/React Native app without ejecting to a bare workflow.',
        solution:
          'Adopted Expo prebuild + New Architecture + @babylonjs/react-native. The map is opted out of Expo Go so dev iteration stays fast for everything except the 3D surface, where we build once with run:ios / run:android.',
      },
      {
        challenge:
          'Shipping an AI Tutor that actually teaches instead of just answering.',
        solution:
          'Prompt design forbids direct solutions. The tutor re-derives the question in its own words, asks what the student has already tried, and scaffolds toward the answer one step at a time — with course context baked in so hints stay relevant.',
      },
    ],
    resultNotes: [
      'Branded product "GetCracked" with full design system in place — Crack the mascot, dark/neon palette, custom typography, pill buttons.',
      'Phase 1 feature set scoped for McGill with a clear Phase 2 (portal OAuth, verified attendance) and Phase 3 (teacher dashboards, multi-campus) roadmap.',
      'Architecture is production-shaped from day one — server-authoritative XP, RLS policies, Edge Function key isolation — not a prototype that has to be rebuilt to ship.',
    ],
    resultVisuals: [
      {
        title: 'Landing — "Study. Rank. Get Cracked."',
        caption: 'Splash screen with Crack, the graduation-capped slime mascot, and the two primary CTAs.',
        image: studyquestCover,
      },
      {
        title: 'Onboarding — Start with what stresses you',
        caption: 'Conversational onboarding flow inspired by Duolingo; Crack drives the course-setup step.',
        image: studyquestOnboarding,
      },
      {
        title: 'Crack the Mascot',
        caption: 'A purple slime in a graduation cap. Appears throughout onboarding, Deep Mode, and key reward moments.',
        image: studyquestMascot,
      },
    ],
    future: [
      'University-portal OAuth integration so course schedules, grades, and attendance sync automatically.',
      'Study-group matchmaking inside The Commons, scored by rank tier and course overlap.',
      'Teacher dashboards that surface aggregate engagement without exposing individual student data.',
      'Multi-university expansion with cross-campus leaderboards and federated course pools.',
    ],
  }),
].filter(Boolean)

export default projectCaseStudies
