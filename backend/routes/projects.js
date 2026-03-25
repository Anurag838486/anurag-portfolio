const express = require('express');
const router = express.Router();

const projects = [
  {
    id: 1,
    title: "Prashikshan",
    subtitle: "Academic Industry Collaboration Platform",
    description: "Engineered full-stack platform connecting students, educators, and industry users with secure role-based authentication and profile management. Enabled internship and project posting, viewing, and application features to support academic–industry collaboration.",
    features: [
      "Role-based authentication for students, educators & industry users",
      "Internship and project posting with application workflow",
      "RESTful backend with server-side validation and session handling",
      "Responsive UI with real-time updates"
    ],
    techStack: ["PHP", "API Integration", "JSON", "HTML", "CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Anurag838486/Prashiskshan",
    date: "Dec 2025",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Hotel Reservation System",
    subtitle: "Console-Based Booking Management",
    description: "Developed a console-based Hotel Reservation System in C++ with features for room booking, cancellation and viewing all reservations. Implemented structured data handling with automated cost calculation.",
    features: [
      "Room booking and cancellation system",
      "Automated cost calculation based on room type and days",
      "Interactive menu-driven interface",
      "Structured data handling with arrays and structures"
    ],
    techStack: ["C++", "Arrays", "Structures", "Menu-Driven Programming"],
    github: "https://github.com/PiyushTomar05/Production-Planning",
    date: "Jul 2025",
    category: "Systems"
  }
];

router.get('/', (req, res) => res.json(projects));
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json(project);
});

module.exports = router;
