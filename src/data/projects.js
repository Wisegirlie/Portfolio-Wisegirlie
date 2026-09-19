import projectDiversaImg from "../assets/projects/project-diversa1_resize.jpg";
import projectDiversaFullImg from "../assets/projects/project-diversa1.jpg";
import projectDiversa2Img from "../assets/projects/project-diversa2.jpg";
import projectRosariaImg from "../assets/projects/project-rosaria3.jpg";
import projectRosaria1Img from "../assets/projects/project-rosaria1.jpg";
import projectEnergitImg from "../assets/projects/project-energit5.jpg";
import projectEnergit2Img from "../assets/projects/project-energit2.jpg";
import projectRealStateImg from "../assets/projects/project-realstate1.jpg";
import projectGabywaismanImg from "../assets/projects/projects-gabywaisman.jpg";
import projectGabywaismanFullImg from "../assets/projects/projects-gabywaisman-fullsize.jpg";
import projectFindGrantImg from "../assets/projects/project-findgrant-home2.jpg";
import projectFindGrantFullImg from "../assets/projects/project-findgrant-home-fullsize.jpg";
import projectFireFlyImg from "../assets/projects/fireflySpark_resize.jpg";
import projectFireFly2Img from "../assets/projects/fireflySpark.jpg";
import projectFireFly3Img from "../assets/projects/fireflySpark_2.jpg";
import projectFireFly4Img from "../assets/projects/firefly03.jpg";
import projectMelisaWebImg from "../assets/projects/melisamozzatiweb_2.jpg";
import projectSupermarketImg from "../assets/projects/project-supermarketlist.jpg";
import projectSvgMapImg from "../assets/projects/project-svgmap.jpg";
import projectTheatreAppImg from "../assets/projects/projects-theatreapp.jpg";
import projectRegistrationForm from "../assets/projects/secure-registration-form_2.jpg";
import projectRegistrationFormFull from "../assets/projects/secure-registration-form.jpg";

const projects = [

    //  ---------  ENERGIT  ---------
    {
        id: "project-energit",
        title: "Energit S.A.",
        type: "Website",
        description:
            "Design and development of complete website for a company, including an internal portal to manage product database.",
        website: "https://energit.com.ar",
        image: projectEnergitImg,
        techs: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Git"],
        overview:
            "Corporate website for an energy company, paired with an internal portal that lets the team maintain the product catalog without touching code.",
        objective:
            "Give Energit a public presence that explains their offer, while making day-to-day product updates simple and reliable for non-technical staff.",
        process: [
            "Mapped public pages and the internal catalog workflow with the client.",
            "Designed a clean corporate look and implemented the public site in HTML, CSS, and JavaScript.",
            "Built a PHP/MySQL admin portal to create, edit, and organize product data.",
            "Tested content workflows with the team before launch.",
        ],
        challenges: [
            "Keeping the public catalog in sync with internal edits.",
            "Designing an admin experience that is usable without technical training.",
        ],
        learnings: [
            "A small, focused CMS often serves a company better than a heavy generic one.",
            "Early walkthroughs with the people who will edit content prevent rework after launch.",
        ],
        technicalApproach:
            "Server-rendered PHP pages on top of a MySQL product database, with JavaScript for front-end interactions. Git was used for version control throughout development.",
        screenshots: [
            { src: projectEnergitImg, alt: "Energit homepage" },
            { src: projectEnergit2Img, alt: "Energit website screenshot" },
        ],
        delivery:
            "Live production website with an internal product-management portal.",
        links: [{ label: "Live website", href: "https://energit.com.ar" }],
    },

    //  ---------  FIREFLY SPARK  ---------
    {
        id: "project-firefly",
        title: "Firefly Spark",
        type: "Mobile App",
        description:
            "Fullstack development of a fully functional cross-platform mobile app for iOS and Android. \n Translated Figma designs, built custom reusable components, complete features, screens, backend RESTful APIs endpoints, and database integration, ensuring scalability and seamless user flows. (This version of the app has not been released yet.)",
        website: "https://fireflyspark.io/",
        image: projectFireFlyImg,
        techs: [
            "React Native",
            "Expo",
            "RESTful APIs",
            "Node.js",
            "Express.js",
            "Python",
            "PostgreSQL",
            "Git",
            "JavaScript",
            "HTML",
            "CSS",
            "SVG",
            "Login authentication",
            "Google MAPS Api",
            "Figma",
        ],
        overview:
            "Cross-platform mobile product for iOS and Android, built from Figma into a full stack of screens, APIs, and database integration. This version has not been released yet.",
        objective:
            "Ship a scalable, production-ready app experience with reusable UI, authenticated user flows, and map-based features that match the design system.",
        process: [
            "Translated Figma screens into reusable React Native / Expo components.",
            "Implemented complete feature flows and navigation.",
            "Built RESTful API endpoints and wired them to PostgreSQL.",
            "Integrated login authentication and Google Maps.",
        ],
        challenges: [
            "Keeping visual fidelity with Figma while building a maintainable component system.",
            "Coordinating mobile UI, REST APIs, and database models so user flows stayed seamless.",
        ],
        learnings: [
            "Reusable components and a clear API contract make later screens much faster to ship.",
            "Map and auth features need to be designed as first-class flows, not last-minute add-ons.",
        ],
        technicalApproach:
            "React Native with Expo on the client. Node.js/Express and Python services expose REST APIs backed by PostgreSQL. Authentication and Google Maps APIs sit on top of that stack.",
        screenshots: [
            { src: projectFireFlyImg, alt: "Firefly Spark app preview" },
            { src: projectFireFly2Img, alt: "Firefly Spark screen" },
            { src: projectFireFly3Img, alt: "Firefly Spark screen 2" },
            { src: projectFireFly4Img, alt: "Firefly Spark screen 3" },
        ],
        delivery:
            "Fully functional app build and backend. Public product marketing site is live; this app version is not released yet.",
        links: [{ label: "Product site", href: "https://fireflyspark.io/" }],
    },

    //  ---------  MELISA MOZZATI  ---------
    {
        id: "project-guionista",
        title: "Melisa Mozzati",
        type: "Website",
        description:
            "Design and development of the professional portfolio's for a Scriptwriter specialized in Horror. The colors and look & feel were chosen in coordination with the client.\n The website includes an internal portal for content editing.",
        website: "https://www.melisamozzati.com",
        image: projectMelisaWebImg,
        techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"],
        overview:
            "Professional portfolio for a horror scriptwriter, with a mood and palette defined with the client and an internal portal for updating content.",
        objective:
            "Present the writer's work with a distinctive horror-informed look, while letting her edit content independently.",
        process: [
            "Aligned on color, typography, and atmosphere with the client.",
            "Designed and built the public portfolio pages.",
            "Added a PHP/MySQL content-editing portal for ongoing updates.",
        ],
        challenges: [
            "Balancing a strong genre aesthetic with readability and professional credibility.",
            "Giving the client a simple editing path without exposing the full stack.",
        ],
        learnings: [
            "Look & feel decisions work best when they are made with the client, not presented as a surprise.",
            "A lightweight CMS is enough when the content model is clear.",
        ],
        technicalApproach:
            "HTML, CSS, and JavaScript for the public site; PHP and MySQL for the internal editing portal, versioned with Git.",
        screenshots: [
            { src: projectMelisaWebImg, alt: "Melisa Mozzati portfolio website" },
        ],
        delivery: "Live portfolio website with an internal content portal.",
        links: [{ label: "Live website", href: "https://www.melisamozzati.com" }],
    },

    //  ---------  FINDGRANT  ---------
    {
        id: "project-findgrant",
        title: "Findgrant",
        type: "Web & Mobile App",
        description:
            "Front-end Development of a fully functional web & mobile app, based on a Figma design provided by the client. Successfully implemented the original design and functionality. Further changes were made by the product owner after handoff.",
        website: "https://findgrant.ca/",
        image: projectFindGrantImg,
        techs: [
            "React Native",
            "Expo",
            "RESTful APIs",
            "Node.js",
            "Express.js",
            "Git",
            "JavaScript",
            "HTML",
            "CSS",
            "SVG",
            "Figma",
        ],
        overview:
            "Front-end implementation of a web and mobile grant-finding product from a client-provided Figma file, delivered as a fully functional app.",
        objective:
            "Match the original design and functionality closely, so the product could go live and later evolve under the product owner.",
        process: [
            "Reviewed Figma and mapped screens to React Native / Expo components.",
            "Connected the UI to existing REST APIs.",
            "Delivered a complete front-end and handed it off for further product-owner changes.",
        ],
        challenges: [
            "Implementing a dense product UI with fidelity to Figma.",
            "Building in a way that later owner-led changes would not require a rewrite.",
        ],
        learnings: [
            "Handoff is smoother when components follow the design system rather than one-off layouts.",
            "Documenting what was implemented vs. what is out of scope protects both sides after launch.",
        ],
        technicalApproach:
            "React Native and Expo for web and mobile, consuming Node.js/Express REST APIs. SVG, HTML, and CSS support the visual layer.",
        screenshots: [
            { src: projectFindGrantImg, alt: "Findgrant home" },
            { src: projectFindGrantFullImg, alt: "Findgrant full homepage" },
        ],
        delivery:
            "Front-end handed off as a working product. The live site may include later changes by the product owner.",
        links: [{ label: "Live website", href: "https://findgrant.ca/" }],
    },

    //  ---------  PORTFOLIO  ---------
    {
        id: "project-portfolio",
        title: "My Portfolio",
        type: "Website",
        description: "Design and development of my portfolio's website.",
        website: "/",
        image: projectGabywaismanImg,
        techs: [
            "React",
            "Vite",
            "Node.js",
            "PHP",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
        ],
        overview:
            "Personal portfolio designed and built to present selected work, skills, and a contact path in a clear visual system.",
        objective:
            "Create a fast, maintainable site that reflects both design taste and engineering practice.",
        process: [
            "Defined the information architecture: home, about, projects, skills, contact.",
            "Designed the visual language (color, type, cards, filters).",
            "Implemented the site in React with Vite, plus PHP for the contact form.",
        ],
        challenges: [
            "Showing enough project detail without overwhelming the grid.",
            "Keeping light and dark themes consistent across every section.",
        ],
        learnings: [
            "Filtering projects by technology helps recruiters scan the work quickly.",
            "A case-study dialog is a better fit than sending every card to an external URL.",
        ],
        technicalApproach:
            "React + Vite SPA with component-based layout, CSS custom properties for theming, and a PHP endpoint for contact submissions.",
        screenshots: [
            { src: projectGabywaismanImg, alt: "Portfolio preview" },
            { src: projectGabywaismanFullImg, alt: "Portfolio full page" },
        ],
        delivery: "This website — continuously updated as new work is added.",
        links: [{ label: "Reload site", href: "/" }],
    },

    //  ---------  THEATRE APP  ---------
    {
        id: "project-theatreapp",
        title: "Theatre App",
        type: "Web App",
        description:
            "Full-Stack development of a comprehensive online resource for the performing arts, culture, and entertainment. It features user authentication, client & admin portal, ticket purchasing simulation, among other features. (Still under development)",
        website: "https://github.com/Wisegirlie/Theatre-App",
        image: projectTheatreAppImg,
        techs: [
            "React",
            "Vite",
            "Node.js",
            "RESTful APIs",
            "Express.js",
            "MongoDB",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "Login authentication",
        ],
        overview:
            "Full-stack web app for performing arts, culture, and entertainment: public browsing plus authenticated client and admin portals.",
        objective:
            "Build a comprehensive resource with real user roles, including a simulated ticket-purchase flow.",
        process: [
            "Modeled users, shows, and ticket flows.",
            "Built React/Vite front-end and Express REST APIs on MongoDB.",
            "Implemented login, client portal, and admin portal.",
        ],
        challenges: [
            "Supporting distinct client and admin experiences on the same data.",
            "Simulating ticket purchase in a way that still feels like a real product flow.",
        ],
        learnings: [
            "Role-based routes should be designed together with the data model.",
            "Auth early in the project avoids bolting it onto finished screens.",
        ],
        technicalApproach:
            "React and Vite on the client; Node.js, Express, and MongoDB on the server, with REST APIs and login authentication.",
        screenshots: [
            { src: projectTheatreAppImg, alt: "Theatre App screenshot" },
        ],
        delivery: "In development. Source is available on GitHub.",
        links: [
            {
                label: "GitHub repository",
                href: "https://github.com/Wisegirlie/Theatre-App",
            },
        ],
    },

    //  ---------  DIVERSA FILMS  ---------
    {
        id: "project-diversafilms",
        title: "Diversa Films",
        type: "Website",
        description: "Development of complete website for the company.",
        website: "https://www.diversafilms.com.ar",
        image: projectDiversaImg,
        techs: ["HTML", "CSS", "JavaScript"],
        overview:
            "Complete company website for a film production brand, covering their identity and work in a straightforward public presence.",
        objective:
            "Deliver a complete, production-ready site that presents the company clearly and works across devices.",
        process: [
            "Structured the site around the company's key pages and content.",
            "Implemented layout, styling, and interaction with HTML, CSS, and JavaScript.",
            "Launched the live site for the client.",
        ],
        challenges: [
            "Presenting a media-oriented brand with a site that still loads cleanly.",
        ],
        learnings: [
            "A focused static site can be the right delivery when the content model is stable.",
        ],
        technicalApproach:
            "Semantic HTML with custom CSS and JavaScript for layout and interaction. No heavy framework was required for this scope.",
        screenshots: [
            { src: projectDiversaImg, alt: "Diversa Films preview" },
            { src: projectDiversaFullImg, alt: "Diversa Films homepage" },
            { src: projectDiversa2Img, alt: "Diversa Films page" },
        ],
        delivery: "Live production website.",
        links: [
            { label: "Live website", href: "https://www.diversafilms.com.ar" },
        ],
    },

    //  ---------  SECURE REGISTRATION FORM  ---------
    {
        id: "project-secure-form",
        title: "Secure Registration System",
        type: "Component",
        description:
            "Secure user registration form with many features as real-time front-end and back-end validation, password strength requirements, international phone number input, accessibility support, responsive design, normalized database structure, and secure data storage following industry best practices.",
        website:
            "https://gabywaisman.com/portfolio/secure-registration-form/index.html",
        image: projectRegistrationForm,
        techs: [
            "PHP",
            "MySQL",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "Login authentication",
        ],
        overview:
            "A registration system built as a reusable component, with validation on both ends and storage practices aligned with common security expectations.",
        objective:
            "Demonstrate a production-minded signup flow: usable, accessible, and careful with user data.",
        process: [
            "Defined validation rules (including password strength and phone input).",
            "Implemented real-time front-end checks and matching back-end validation.",
            "Designed a normalized MySQL schema and stored credentials securely.",
        ],
        challenges: [
            "Keeping front-end and back-end validation messages consistent.",
            "Supporting international phone numbers without harming accessibility.",
        ],
        learnings: [
            "Client-side validation improves UX; server-side validation is what actually protects the system.",
            "Accessibility belongs in the first pass of a form, not as a later polish.",
        ],
        technicalApproach:
            "HTML/CSS/JavaScript form layer with PHP processing, MySQL persistence, and authentication-oriented storage practices.",
        screenshots: [
            { src: projectRegistrationForm, alt: "Secure registration form" },
            {
                src: projectRegistrationFormFull,
                alt: "Secure registration form full view",
            },
        ],
        delivery: "Live demo of the registration component.",
        links: [
            {
                label: "Live demo",
                href: "https://gabywaisman.com/portfolio/secure-registration-form/index.html",
            },
        ],
    },

    //  ---------  REAL STATE  ---------
    {
        id: "project-realstate",
        title: "Real State",
        type: "Website",
        description:
            "Design and development of complete website template for a real state company.",
        website:
            "https://www.gabywaisman.com/portfolio/real-state/index.html",
        image: projectRealStateImg,
        techs: ["HTML", "CSS", "JavaScript"],
        overview:
            "Complete website template for a real-estate company, covering listing-oriented pages and a polished public look.",
        objective:
            "Provide a ready-to-adapt front-end template that a real-estate brand could launch or customize.",
        process: [
            "Designed page structure for property-focused content.",
            "Built a complete HTML/CSS/JavaScript template.",
            "Published a live demo for review.",
        ],
        challenges: [
            "Making property content scannable without a live backend catalog.",
        ],
        learnings: [
            "Templates work best when layout patterns (cards, galleries, CTAs) are consistent.",
        ],
        technicalApproach:
            "Static HTML, CSS, and JavaScript template, hosted as a portfolio demo.",
        screenshots: [
            { src: projectRealStateImg, alt: "Real estate website template" },
        ],
        delivery: "Live template demo.",
        links: [
            {
                label: "Live demo",
                href: "https://www.gabywaisman.com/portfolio/real-state/index.html",
            },
        ],
    },

    //  ---------  VOICE COMMANDED SUPERMARKET LIST  ---------
    {
        id: "project-supermarketlist",
        title: "Voice Commanded Supermarket List",
        type: "Mobile App",
        description:
            "App that allows users to easily create and manage their shopping lists using voice commands.",
        website:
            "https://github.com/Wisegirlie/Supermarket-list-voice-commanded",
        image: projectSupermarketImg,
        techs: [
            "React Native",
            "Expo",
            "Node.js",
            "RESTful APIs",
            "Express.js",
            "MongoDB",
            "Google Speech-to-Text API",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
        ],
        overview:
            "Mobile shopping-list app where users add and manage items with voice commands instead of typing every entry.",
        objective:
            "Make list-building faster in a supermarket context by turning speech into structured list items.",
        process: [
            "Designed the list UI and voice-input flow in React Native / Expo.",
            "Connected speech input through Google Speech-to-Text.",
            "Stored lists via Express REST APIs and MongoDB.",
        ],
        challenges: [
            "Turning noisy speech results into usable list items.",
            "Keeping the interaction simple enough for hands-busy shopping.",
        ],
        learnings: [
            "Voice UI needs visible confirmation so users trust what was captured.",
            "API latency has to be designed into the interaction, not hidden.",
        ],
        technicalApproach:
            "React Native/Expo client, Google Speech-to-Text for transcription, Node.js/Express REST APIs, and MongoDB for persistence.",
        screenshots: [
            { src: projectSupermarketImg, alt: "Voice commanded supermarket list app" },
        ],
        delivery: "Source available on GitHub.",
        links: [
            {
                label: "GitHub repository",
                href: "https://github.com/Wisegirlie/Supermarket-list-voice-commanded",
            },
        ],
    },

    //  ---------  ROSARIA  ---------
    {
        id: "project-rosaria",
        title: "Rosaria",
        type: "Website",
        description:
            "Design and development of complete website. The client required to use their brand's colors and fonts.",
        website: "https://www.soyrosaria.com",
        image: projectRosariaImg,
        techs: ["HTML", "CSS", "JavaScript"],
        overview:
            "Complete brand website designed and developed to the client's existing colors and fonts.",
        objective:
            "Launch a full site that feels like the brand, not a generic template.",
        process: [
            "Collected brand colors, type, and content requirements.",
            "Designed layouts that respect those constraints.",
            "Built and launched the site in HTML, CSS, and JavaScript.",
        ],
        challenges: [
            "Working inside a fixed brand system while still creating a distinctive page rhythm.",
        ],
        learnings: [
            "Brand constraints can speed design if they are documented before layout starts.",
        ],
        technicalApproach:
            "Custom HTML/CSS/JavaScript implementation of the client's visual identity.",
        screenshots: [
            { src: projectRosariaImg, alt: "Rosaria website" },
            { src: projectRosaria1Img, alt: "Rosaria website page" },
        ],
        delivery: "Live production website.",
        links: [{ label: "Live website", href: "https://www.soyrosaria.com" }],
    },

    //  ---------  INTERACTIVE SVG MAP  ---------
    {
        id: "project-svgmap",
        title: "Interactive SVG Map",
        type: "Component",
        description:
            "Developed an interactive map, using full use of SVG properties, matching the look and feel of the client's webpage.",
        website: "https://unidadpopular.org.ar/mapa-referentes/",
        image: projectSvgMapImg,
        techs: ["SVG", "JavaScript", "HTML", "CSS"],
        overview:
            "Interactive map component that uses SVG properties for regions and interaction, visually matched to the client's existing site.",
        objective:
            "Let visitors explore geographic referents without breaking the look of the host page.",
        process: [
            "Studied the client's visual language.",
            "Built an SVG map with interactive states in JavaScript.",
            "Embedded it so it sits naturally in the live page.",
        ],
        challenges: [
            "Making SVG regions usable on both desktop and mobile.",
            "Matching colors and interaction to an already-live site.",
        ],
        learnings: [
            "SVG is a strong fit for maps when you need crisp scaling and per-region behavior.",
            "Components that live inside someone else's site need extra care with CSS scope.",
        ],
        technicalApproach:
            "SVG markup styled with CSS and driven by JavaScript for hover, selection, and related content.",
        screenshots: [
            { src: projectSvgMapImg, alt: "Interactive SVG map" },
        ],
        delivery: "Live component on the client's website.",
        links: [
            {
                label: "Live map",
                href: "https://unidadpopular.org.ar/mapa-referentes/",
            },
        ],
    },
];

export default projects;
