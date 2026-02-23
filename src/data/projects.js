// Add a new project by appending one object to this array with a unique `slug` and image import.
import airlineCover from '../assets/images/airline-cover.png'
import ragChatbotCover from '../assets/images/rag-chatbot-cover.png'
import robotDesignCover from '../assets/images/robot-design-cover.png'
import linearRegressionCover from '../assets/images/linear-regression-illustration.svg'
import n8nLogo from '../assets/images/n8n-logo.svg'

const projects = [
  {
    id: 1,
    slug: 'ai-chatbot-fastapi',
    title: 'AI-Chatbot Assistant',
    description: 'Built an AI chatbot using Python and FastAPI with retrieval-augmented generation, semantic search over embedded documents, and real-time response synthesis.',
    stack: ['Python', 'FastAPI', 'LangChain', 'RAG'],
    coverImage: robotDesignCover,
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
    description: 'Designed and programmed an autonomous fire-extinguishing robot by porting a Java virtual machine to EV3 and implementing obstacle-avoidance navigation in a constrained environment.',
    stack: ['Java', 'EV3', 'Robotics', 'Algorithms'],
    coverImage: ragChatbotCover,
  },
  {
    id: 5,
    slug: 'mcgill-hackathon-voice-assistant',
    title: 'McGill Hackathon Voice Assistant',
    description: 'Built an AI voice assistant for appointment booking by integrating an LLM API with n8n workflows, achieving around 90% task completion and 4th place out of about 40 teams.',
    stack: ['LLM API', 'n8n', 'Automation', 'Hackathon'],
    coverImage: n8nLogo,
  },
]

export default projects
