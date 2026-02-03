const BASE_URL = import.meta.env.BASE_URL;

const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: `${BASE_URL}icons/wifi.svg`,
    },
    {
        id: 2,
        img: `${BASE_URL}icons/search.svg`,
    },
    {
        id: 3,
        img: `${BASE_URL}icons/user.svg`,
    },
    {
        id: 4,
        img: `${BASE_URL}icons/mode.svg`,
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Sep 2, 2025",
        title: "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
        image: `${BASE_URL}images/blog1.png`,
        link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "The Ultimate Guide to Mastering Three.js for 3D Development",
        image: `${BASE_URL}images/blog2.png`,
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "The Ultimate Guide to Mastering GSAP Animations",
        image: `${BASE_URL}images/blog3.png`,
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["Javascript", "React.js", "Basic TypeScript"],
    },
    {
        category: "Styling",
        items: ["CSS3", "Basic Tailwind CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Python"],
    },
    {
        category: "Database",
        items: ["MongoDB", "MySQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker", "Basic Linux", "NPM"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: `${BASE_URL}icons/github.svg`,
        bg: "#f4656b",
        link: "https://github.com/gnagavci",
    },
    {
        id: 2,
        text: "LinkedIn",
        icon: `${BASE_URL}icons/linkedin.svg`,
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/gegenagavci/",
    },
    {
        id: 3,
        text: "Email",
        icon: `${BASE_URL}icons/email.svg`,
        bg: "#4bcb63",
        link: "mailto:gegenagavci@gmail.com",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: `${BASE_URL}icons/gicon1.svg`,
        title: "Library",
    },
    {
        id: 2,
        icon: `${BASE_URL}icons/gicon2.svg`,
        title: "Memories",
    },
    {
        id: 3,
        icon: `${BASE_URL}icons/file.svg`,
        title: "Places",
    },
    {
        id: 4,
        icon: `${BASE_URL}icons/gicon4.svg`,
        title: "People",
    },
    {
        id: 5,
        icon: `${BASE_URL}icons/gicon5.svg`,
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: `${BASE_URL}images/gega.jpg`,
    },
    {
        id: 2,
        img: `${BASE_URL}images/gega2.jpg`,
    },
    {
        id: 3,
        img: `${BASE_URL}images/gega3.jpg`,
    },
    {
        id: 4,
        img: `${BASE_URL}images/gega4.jpg`,
    },
    {
        id: 5,
        img: `${BASE_URL}images/gega5.jpeg`,
    },
    {
        id: 6,
        img: `${BASE_URL}images/gega6.jpeg`,
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: `${BASE_URL}icons/work.svg`,
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Converso - AI Teaching Platform",
            icon: `${BASE_URL}images/folder.png`,
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Converso Project.txt",
                    icon: `${BASE_URL}images/txt.png`,
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Converso platform is a sleek and modern AI-driven educational space designed for real-time voice learning with customizable tutors.",

                        "Instead of a standard learning portal, it delivers an immersive experience with voice-activated sessions, live transcripts, and dynamic subject-specific interactions.",

                        "Think of it like having a personal expert tutor available for any subject—accessible instantly from your browser.",

                        "It's built with Next.js, Tailwind CSS, and Vapi.ai, ensuring ultra-fast communication, a responsive interface, and a seamless learning journey.",
                    ],
                },
                {
                    id: 2,
                    name: "converso_1.png",
                    icon: `${BASE_URL}images/image.png`,
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: `${BASE_URL}images/converso_1.png`,
                },
                {
                    id: 3,
                    name: "converso_2.png",
                    icon: `${BASE_URL}images/image.png`,
                    kind: "file",
                    fileType: "img",
                    imageUrl: `${BASE_URL}images/converso_2.png`,
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "Agentarium - Cellular Simulation Plaform",
            icon: `${BASE_URL}images/folder.png`,
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[25vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Agentarium.txt",
                    icon: `${BASE_URL}images/txt.png`,
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "The Agentarium platform is a sophisticated and powerful research tool designed for modeling and analyzing complex tumor microenvironments.",

                        "Instead of a static data portal, it delivers a high-performance simulation engine featuring interactive 2D and 3D visualizations, real-time status tracking, and comprehensive analytical charts.",

                        "Think of it like having a high-tech biological laboratory accessible from anywhere—allowing you to run complex experiments without ever touching a pipette.",

                        "It’s built with React 19, Node.js, and RabbitMQ, ensuring scalable microservice orchestration, rapid job processing, and a sleek, professional interface for modern researchers.",
                    ],
                },

                {
                    id: 2,
                    name: "agentarium_1.png",
                    icon: `${BASE_URL}images/image.png`,
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: `${BASE_URL}images/agentarium_1.png`,
                },
                {
                    id: 5,
                    name: "agentarium_2.png",
                    icon: `${BASE_URL}images/image.png`,
                    kind: "file",
                    fileType: "img",
                    imageUrl: `${BASE_URL}images/agentarium_2.png`,
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "MoviesByGegë",
            icon: `${BASE_URL}images/folder.png`,
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[65vh] left-14",
            children: [
                {
                    id: 1,
                    name: "MoviesByGegë.txt",
                    icon: `${BASE_URL}images/txt.png`,
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The MoviesByGege platform is a sophisticated and intuitive movie discovery application designed for real-time search and cinematic trend analysis.",

                        "Instead of a static movie directory, it provides a dynamic discovery engine featuring debounced real-time results, trending analytics based on live search frequency, and a robust SQLite-powered caching layer for optimized performance.",

                        "Think of it like having a personal cinematic data analyst—one that not only helps you find your next favorite film but also tracks the pulse of what audiences are watching from anywhere in the world.",

                        "It’s built with React 19, Node.js, and SQLite, utilizing Docker for multi-service orchestration and a multi-layer testing infrastructure featuring Playwright and Vitest for a seamless, high-performance experience.",
                    ],
                },
                {
                    id: 3,
                    name: "moviesbygege.png",
                    icon: `${BASE_URL}images/image.png`,
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: `${BASE_URL}images/moviesbygege.png`,
                },
            ],
        },
        // ▶ Project 4
        {
            id: 8,
            name: "Subscription Tracker API",
            icon: `${BASE_URL}images/folder.png`,
            kind: "folder",
            position: "top-35 left-85",
            windowPosition: "top-[45vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Subscription Tracker.txt",
                    icon: `${BASE_URL}images/txt.png`,
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Subscription-Tracker platform is a sophisticated and robust financial management tool designed for organizing, monitoring, and optimizing recurring service expenses.",

                        "Instead of a static subscription list, it delivers a dynamic automated workflow engine featuring intelligent renewal tracking, real-time security filtering, and proactive notification scheduling.",

                        "Think of it like having a dedicated financial concierge—one that never sleeps and ensures you are alerted well before a trial ends or a subscription renews, preventing any unwanted charges.",

                        "It’s built with Node.js, Express, and MongoDB, integrating Upstash for serverless workflow orchestration and Arcjet for advanced security and rate limiting, providing a secure and scalable architecture for modern expense management.",
                    ],
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: `${BASE_URL}icons/info.svg`,
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: `${BASE_URL}images/image.png`,
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: `${BASE_URL}images/adrian.jpg`,
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: `${BASE_URL}images/image.png`,
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: `${BASE_URL}images/adrian-2.jpg`,
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: `${BASE_URL}images/image.png`,
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: `${BASE_URL}images/adrian-3.jpeg`,
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: `${BASE_URL}images/txt.png`,
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: `${BASE_URL}images/adrian.jpg`,
            description: [
                "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
                "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
                "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
                "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: `${BASE_URL}icons/file.svg`,
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: `${BASE_URL}images/pdf.png`,
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: `${BASE_URL}icons/trash.svg`,
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: `${BASE_URL}images/image.png`,
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: `${BASE_URL}images/trash-1.png`,
        },
        {
            id: 2,
            name: "trash2.png",
            icon: `${BASE_URL}images/image.png`,
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: `${BASE_URL}images/trash-2.png`,
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
