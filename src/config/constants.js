// Centralized configuration — single source of truth for social links, personal info, etc.

export const PERSONAL = {
  name: "Sai Raj Aggani",
  email: "sairaj.aggani@gmail.com",
  title: "Full Stack Developer",
  github: "sairajaggani",
  linkedIn: "https://www.linkedin.com/in/sai-raj-a4817a2a1",
  instagram: "https://www.instagram.com/sairaj_aggani/",
};

export const SOCIAL_LINKS = {
  github: `https://github.com/${PERSONAL.github}`,
  linkedIn: PERSONAL.linkedIn,
  instagram: PERSONAL.instagram,
  email: `mailto:${PERSONAL.email}`,
};

export const EDUCATION = {
  degree: "Master of Science in Computer Science",
  school: "Missouri University of Science & Technology",
  location: "Rolla, Missouri",
  date: "Aug 2023 – May 2025",
  coursework: [
    "Advanced Algorithms",
    "Distributed Systems",
    "Machine Learning",
    "Cloud Computing",
    "Database Systems",
  ],
};

export const IMPACT_METRICS = [
  { value: "3+", label: "Years Experience" },
  { value: "1000+", label: "Students Served" },
  { value: "10+", label: "Projects Shipped" },
  { value: "40+", label: "Technologies" },
];
