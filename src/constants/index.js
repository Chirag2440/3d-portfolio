import {
    ai,
    moctail,
    chatlogo,
    gta6,
    keeper,
    contact,
    postgresql,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nodejs,
    react,
    redux,
    tailwindcss
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Backend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Chirag2440',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/contactchiragdhaima/',
    }
];

export const projects = [
    {
        iconUrl: gta6,
        theme: 'btn-back-blue',
        name: 'GTA-6 Animation Website',
        description: 'Developed a conceptual, desktop-first project focused on creating complex, cinematic animations and high-fidelity visual effects using the GreenSock Animation Platform (GSAP).',
        link: 'https://github.com/Chirag2440/gta_6_app',
    },
    {
        iconUrl: keeper,
        theme: 'btn-back-yellow',
        name: 'Keeper App',
        description: 'A note-taking web application built with React.js, JavaScript, and CSS3.The app allows users to create, organize, and delete notes efficiently. It features a clean, responsive UI with real-time updates, ensuring a seamless user experience.',
        link: 'https://github.com/Chirag2440/KeeperApp',
    },
    {
        iconUrl: chatlogo,
        theme: 'btn-back-green',
        name: 'Quick-Chat',
        description: 'A full-stack, realtime chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and powered by Socket.io for instant, bidirectional communication. Users can create accounts, join conversations, and exchange messages in realtime with other users.',
        link: 'https://github.com/Chirag2440/quick-Chat',
    },
    {
        iconUrl: moctail,
        theme: 'btn-back-pink',
        name: 'Gin and Genius',
        description: 'A dynamic, multi-page mocktail recipe website featuring smooth animations and an interactive user interface, built with React and powered by the GSAP animation library for a premium, engaging experience.',
        link: 'https://github.com/Chirag2440/gsap-Mocktail',
    },
    {
        iconUrl: ai,
        theme: 'btn-back-violet',
        name: 'Quick-GPT',
        description: 'A feature-rich, full-stack web application that harnesses the power of OpenAI GPT model to provide intelligent conversational experiences. Built with the modern MERN (MongoDB, Express.js, React, Node.js) stack, it features a clean, responsive interface and robust backend functionality.',
        link: 'https://github.com/Chirag2440/quick-GPT',
    }
];