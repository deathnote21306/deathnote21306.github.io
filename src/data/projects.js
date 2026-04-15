// Add a new project by appending one object to this array with a unique `slug` and image import.
import neuralSpellbookCover from '../assets/images/neuralspellbook-cover.png'
import airlineCover from '../assets/images/airline-cover.png'
import pdfRagUiCover from '../assets/images/pdf-rag-ui-cover.png'
import robotDesignCover from '../assets/images/robot-design-cover.png'
import linearRegressionCover from '../assets/images/linear-regression-illustration.svg'
import n8nLogo from '../assets/images/n8n-logo.svg'
import studyquestCover from '../assets/images/studyquest-cover.png'

const projects = [
  {
    id: 0,
    slug: 'neural-spellbook',
    title: 'NeuralSpellBook',
    description:
      'An interactive iOS educational platform built for the Apple Swift Student Challenge 2026. Five chapters guide learners through how neural networks actually work — decisions, loss, backpropagation, training, and discovery — entirely without code.',
    stack: ['Swift', 'SwiftUI', 'CoreML', 'iOS'],
    coverImage: neuralSpellbookCover,
  },
  {
    id: 1,
    slug: 'ai-chatbot-fastapi',
    title: 'AI-Chatbot Assistant',
    description: 'Built an AI chatbot using Python and FastAPI with retrieval-augmented generation, semantic search over embedded documents, and real-time response synthesis.',
    stack: ['Python', 'FastAPI', 'LangChain', 'RAG'],
    coverImage: pdfRagUiCover,
  },
  {
    id: 2,
    slug: 'royal-canada-airline-system',
    title: 'Royal Canada Airline Reservation System',
    description: 'Developed a full-stack flight management system with Spring Boot and Vue.js, including scheduling, reservation workflows, and secure data handling.',
    stack: ['Spring Boot', 'Vue.js', 'PostgreSQL', 'REST'],
    coverImage: airlineCover,
  },
  {
    id: 3,
    slug: 'linear-regression-from-scratch',
    title: 'Linear Regression from Scratch',
    description: 'Implemented linear regression in Python/NumPy with the closed-form solution on the UCI Bike Sharing dataset, including preprocessing, feature engineering, and MSE evaluation.',
    stack: ['Python', 'NumPy', 'Feature Engineering', 'MSE'],
    coverImage: linearRegressionCover,
  },
  {
    id: 4,
    slug: 'ev3-robot-design',
    title: 'Autonomous Robot Design',
    description:
      'Designed and tested an autonomous EV3 firefighter robot that navigates a constrained arena, detects floor fire targets with calibrated sensing, drops extinguisher cubes accurately, and returns to base after mission completion.',
    stack: ['Java', 'EV3', 'Robotics', 'Algorithms'],
    coverImage: robotDesignCover,
  },
  {
    id: 5,
    slug: 'studyquest',
    title: 'StudyQuest',
    description:
      'A mobile-first, MMORPG-styled academic engagement app. Turns studying, attending class, and sharing notes into a game with XP, rank tiers, and a 3D progression map. Built in React Native with Expo, a Babylon.js 3D map, Supabase Edge Functions, and Claude as the AI tutor.',
    stack: ['React Native', 'Expo', 'Babylon.js', 'Supabase', 'Claude API'],
    coverImage: studyquestCover,
  },
  {
    id: 6,
    slug: 'mcgill-hackathon-voice-assistant',
    title: 'McGill Hackathon Voice Assistant',
    description: 'Built an AI voice assistant for appointment booking by integrating an LLM API with n8n workflows, achieving around 90% task completion and 4th place out of about 40 teams.',
    stack: ['LLM API', 'n8n', 'Automation', 'Hackathon'],
    coverImage: n8nLogo,
  },
]

export default projects
