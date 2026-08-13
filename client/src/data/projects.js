import taskifyImg from "../assets/taskify.png";
import portfolioImg from "../assets/portfolio.png";
import skymartImg from "../assets/skymart.png"

export const allProjects = [
  {
    title: "Taskify",
    description:
      "A task management app to create, update, and delete tasks using a REST API. Built with a clean UI and plans to integrate MongoDB as a persistent backend.",
    tags: ["React", "REST API", "Node.js", "Express"],
    category: "Full Stack",
    github: "https://github.com/iasharsh/todo-list-app",
    live: "https://todo-list-app-lovat-sigma.vercel.app/",
    image: taskifyImg,
  },

  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio with dark/light mode, smooth navigation, and a clean design built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "React Router"],
    category: "Frontend",
    github: "https://github.com/iasharsh/Portfolio",
    live: "https://portfolio-zeta-eight-tvv9yo50on.vercel.app/",
    image: portfolioImg,
  },
  {
    title: "Portfolio Website",
    description:
      "Sky Mart — A React-based e-commerce frontend with user authentication flow, shopping cart management, protected routes, and persistent user data using Context API and localStorage.",
    tags: ["React", "Context API", "React Router", "LocalStorage", "Tailwind CSS"],
    category: "Frontend",
    github: "https://github.com/iasharsh/SkyMart",
    live: "https://sky-mart-liard.vercel.app/",
    image: skymartImg,
  },

  {
    title: "Coming Soon",
    description:
      "Another project is in the works. Stay tuned for something exciting built with the MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    category: "Full Stack",
    github: "#",
    live: "#",
    image: null,
  },
];
