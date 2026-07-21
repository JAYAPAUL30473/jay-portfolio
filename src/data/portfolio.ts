export const profile = {
  name: 'Sakhamuri Jayapaul Naidu',
  email: 'jayapaul30473@gmail.com',
  phone: '+91-7330724723',
  location: 'India',
  github: 'https://github.com/JAYAPAUL30473',
  linkedin: 'https://www.linkedin.com/in/s-jayapaulnaidu/',
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const navigation = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

export const experience = [
  { year: '03/2026 — PRESENT', company: 'WIPRO, BANGALORE, KARNATAKA', title: 'Project Engineer', description: 'Building a strong foundation in Python development, software engineering practices, AI solutions, and collaborative delivery.', points: ['Technical training & continuous learning', 'Python development & intelligent automation', 'Team collaboration & problem solving'] },
  { year: '08/2021 — 05/2025', company: 'KL UNIVERSITY, GUNTUR', title: 'B.Tech — CSE (AI & IPA)', description: 'Built a foundation in algorithms, AI, machine learning, software development, and real-world project work.' },
]

export const projects = [
  { title: 'Pneumonia Detection', category: 'DEEP LEARNING', image: asset('img/pn.jpg'), description: 'Deep-learning driven image analysis for pneumonia detection using medical chest X-ray imagery.', tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'] },
  { title: 'WeCareForYou', category: 'FULL-STACK', image: asset('img/p3.png'), description: 'A full-stack application designed to create a helpful, connected user experience.', tags: ['Angular', 'Flask', 'MySQL'] },
  { title: 'Movie Recommendation System', category: 'MACHINE LEARNING', image: asset('img/movie.jpg'), description: 'A personalised recommendation engine that helps users discover their next favourite film.', tags: ['Python', 'ML', 'Pandas'] },
]

export const achievements = [
  ['AI Projects', 'Applied deep-learning and machine-learning concepts to projects with real-world relevance.'],
  ['Technical Training', 'Building professional engineering skills through Wipro training and practice.'],
  ['Certifications', 'AWS, Red Hat, Salesforce AI Associate, Aviatrix ACE, and Juniper JNCIA.'],
  ['Continuous Learning', 'Expanding capability across AI, cloud, full-stack, and software engineering.'],
] as const

export const certifications = 
['AWS', 'Red Hat', 'Salesforce AI Associate', 'Aviatrix ACE', 'Juniper JNCIA']
