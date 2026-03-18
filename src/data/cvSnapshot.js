const cvSnapshot = {
  subtitle: 'Fast scan // software profile',
  experience: [
    {
      role: 'Software Engineer Intern',
      company: 'CraftyCrib.com',
      location: 'Montréal, QC',
      period: 'Nov 2025 – Ongoing',
      stack: ['React', 'Node.js', 'Python', 'REST APIs'],
      bullets: [
        'Building and maintaining full-stack features for a real estate platform serving Canadian renters and landlords.',
        'Collaborating in an agile team to ship product improvements across the frontend (React) and backend (Node.js/Python) codebases.',
      ],
      metrics: [],
    },
    {
      role: 'Software Engineer',
      company: 'Cita MarketPlace',
      location: 'Montréal, QC',
      period: 'Apr – Aug 2025',
      stack: ['Python', 'scikit-learn', 'REST APIs', 'A/B Testing'],
      bullets: [
        'Improved platform engagement by 18% by deploying a recommendation system in Python (scikit-learn) and integrating real-time inference APIs into production.',
        'Reduced content load latency by 25% through optimized video ranking and retrieval pipelines.',
        'Increased conversions by 12% by implementing an AI-driven ranking system validated with A/B testing.',
      ],
      metrics: ['+18% engagement', '−25% latency', '+12% conversions'],
    },
    {
      role: 'Digital Sales & E-commerce Coordinator',
      company: 'Self-Employed',
      location: 'Montréal, QC',
      period: '2020 – 2025',
      stack: ['HTML/CSS', 'Python', 'Java', 'Excel', 'Canva'],
      bullets: [
        'Converted website traffic into 100+ customers, generating ~$4K in revenue through targeted chat engagement and persuasion strategies.',
        'Designed and launched ad campaigns across Facebook, TikTok, and Google Ads, driving ~20 daily visitors.',
        'Built and managed web content using HTML/CSS and Python/Java; created marketing assets with Excel, PowerPoint, Canva, and Photoshop.',
      ],
      metrics: ['100+ customers', '~$4K revenue'],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Notary Office of Mr. Bongo',
      location: 'Libreville, Gabon',
      period: 'May – Aug 2020',
      stack: ['Database Design', 'Excel', 'Word'],
      bullets: [
        'Built a customer and inquiry database by organizing digital records, reducing retrieval time by ~40%.',
        'Streamlined document processing using Excel/Word, saving ~5 hours weekly; applied cybersecurity best practices to improve data protection.',
      ],
      metrics: ['−40% retrieval time', '−5h/week'],
    },
    {
      role: 'Volunteer',
      company: 'Canadian National Institute for the Blind (CNIB)',
      location: 'Montréal, QC',
      period: 'Jan – Dec 2025',
      stack: [],
      bullets: [
        'Supported individuals with visual impairments through accessibility initiatives and community activities, demonstrating empathy and commitment to inclusion.',
      ],
      metrics: [],
    },
  ],
  projects: [
    {
      title: 'AI Chatbot',
      stack: ['FastAPI', 'LangChain', 'Python'],
      bullet:
        'Built a RAG-based AI chatbot using Python and FastAPI, enabling accurate, context-aware responses through semantic search over embedded documents with scalable REST API design.',
    },
    {
      title: 'Royal Canada Airline — Flight Management System',
      stack: ['Spring Boot', 'Vue.js', 'PostgreSQL'],
      bullet:
        'Full-stack flight management system with REST APIs and a relational database achieving >85% automated test coverage under concurrent usage.',
    },
    {
      title: 'NeuralSpellBook — Apple Swift Student Challenge 2026',
      stack: ['Swift', 'SwiftUI', 'CoreML'],
      bullet:
        'Interactive iOS educational platform enabling learners to understand neural networks through hands-on visual modules; submitted to the Apple Swift Student Challenge 2026.',
    },
    {
      title: 'ML Spam Classifier — Spambase Dataset',
      stack: ['Python', 'scikit-learn', 'NumPy', 'pandas'],
      bullet:
        'Trained and evaluated multiple supervised classifiers (Logistic Regression, SVM, Random Forest) on the UCI Spambase dataset, achieving >97% accuracy with optimized feature selection and cross-validation.',
    },
  ],
  leadership: [
    {
      title: 'Claude Builder Club — McGill University',
      period: '2025 – Ongoing',
      stack: ['Claude API', 'OpenAI API', 'Python'],
      bullet:
        'Active member of McGill\'s Claude Builder Club, building AI-powered projects and collaborating with peers to explore applied LLM development using the Anthropic Claude and OpenAI APIs.',
    },
    {
      title: 'McGill Hackathon — 4th Place (~40+ Teams)',
      period: 'Nov 2025',
      stack: ['LLM API', 'n8n'],
      bullet:
        'Developed an AI voice assistant automating appointment booking for the McGill Wellness Hub using an LLM API and n8n workflows, achieving ~90% task completion accuracy.',
    },
    {
      title: 'Lead Programming Designer — Robot Design Project',
      period: 'Apr 2025',
      stack: ['Java', 'EV3', 'JVM'],
      bullet:
        'Led a 6-person team to build an autonomous fire-extinguishing robot by porting a JVM onto an EV3 and implementing navigation and obstacle-avoidance algorithms in a ~5.4 m² environment.',
    },
  ],
  skills: {
    Languages: ['Java', 'Python', 'JavaScript', 'Swift', 'C', 'C++', 'SQL', 'HTML5', 'CSS', 'MATLAB'],
    Frameworks: ['Spring Boot', 'ReactJS', 'Vue.js', 'Node.js', 'FastAPI', 'LangChain'],
    'ML / Data': ['scikit-learn', 'NumPy', 'RAG', 'A/B Testing', 'Recommendation Systems'],
    'Tools & DB': ['Git', 'PostgreSQL', 'REST APIs', 'n8n', 'OpenAI API', 'Excel', 'Canva', 'Photoshop'],
    'Spoken Languages': ['French (fluent)', 'English (fluent)', 'Spanish (intermediate)'],
  },
  education: [
    {
      school: 'McGill University',
      degree: 'B.Eng. Computer Engineering',
      minor: 'Minor: Artificial Intelligence',
      highlights: [
        "Dean's Honor List (Top 10%)",
        'GPA: 3.71 / 4.0',
        'James McGill Scholarship of Merit',
      ],
      courses: [
        'Software Engineering Practice',
        'Applied Machine Learning',
        'Operating Systems',
        'Computer Architecture',
        'Algorithms & Data Structures',
      ],
      period: 'Expected April 2027',
      location: 'Montréal, QC',
    },
    {
      school: 'Lycée Blaise Pascal de Libreville',
      degree: 'French Baccalaureate',
      minor: '',
      highlights: [
        'Highest Honors (18.45/20)',
        'Scholarship covering all higher education expenses',
        'Ranked top 5 nationally',
      ],
      courses: [],
      period: '2023',
      location: 'Libreville, Gabon',
    },
  ],
}

export default cvSnapshot
