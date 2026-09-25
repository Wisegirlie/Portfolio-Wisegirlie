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
            "Design and development of a corporate and comercial website with an internal portal for managing the product catalogue, and user database.",        
        website: "https://energit.com.ar",
        image: projectEnergitImg,
        techs: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Git"],
        overview:
            "Design and development of a corporate website for a company specializing in power electronics equipment for energy applications.",
        objective:
            "Provide a public digital presence for Energit that increases visibility, engagement, and sales, while providing a detailed online product catalogue, client registration, and a simple, reliable way for non-technical staff to manage day-to-day product updates.",
        process: [
            "Collaborated closely with the client to understand their business requirements and product characteristics, ensuring the solution met their business needs.", 
            "Designed a clean corporate visual identity aligned with the company's brand colors, logo, and guidelines, giving the site a distinct personality rather than a generic feel.",
            "Developed the backend logic and database structure for product and user management.",
            "Built the public-facing responsive website using PHP, MySQL, JavaScript, HTML, and CSS.",
            "Developed an internal admin portal for creating, editing, and organizing product information.",            
            "Implemented security measures throughout the website and administration system.",
            "Tested content workflows with the team before launch.",
            "Conducted frequent iterations to improve or add features based on user feedback and evolving business needs.",  
            "Provided hosting, support, and ongoing maintenance, to ensure the website and internal portal remain functional and up-to-date."
        ],
        challenges: [   
            "Products could have multiple classification attributes, requiring careful front-end implementation to present the different combinations clearly and intuitively.",            
            "Some legacy code used from the previous website required extensive refactoring and cleanup to integrate it with the new front-end and back-end systems.",
            "Worked with minimal feedback and material resources from the client, requiring proactive problem-solving and initiative.",            
        ],
        learnings: [
            "Finding ways to display complex product information that is both clear and user-friendly.",
            "Provide comprehensive solutions without expecting the client to have all the answers or materials ready.", 
            "When working with legacy code, careful integration, refactoring, and cleaning were essential.",            
            "Extensive testing and implementing security measures are crucial to ensure a secure and reliable website.",
        ],
        technicalApproach:
            "This project involved both front-end and back-end development, ensuring a seamless user experience and efficient content management.",
        screenshots: [
            { src: projectEnergitImg, alt: "Energit homepage" },
            { src: projectEnergit2Img, alt: "Energit website screenshot" },
        ],
        delivery: [
            "Live corporate website featuring the complete product catalogue and contact information.",
            "Internal management portal that allows administrators to manage the product catalogue and user database without touching code.",
            "Hosting, support, and ongoing maintenance to ensure the website and internal portal remain functional and up-to-date.",
        ],
        links: [{ 
            label: 'Visit Live website', 
            href: "https://energit.com.ar" 
        }],
        publishInfo: true,
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
            "TypeScript",
            "HTML",
            "CSS",
            "SVG",
            "Login authentication",
            "Google MAPS Api",
            "Figma",
        ],
        overview:
            "Fullstack development of a mobile app for making new friends, developed for both iOS and Android.",
        objective:
            "Ship a scalable, production-ready app experience with reusable UI components, authenticated user flows, deep links, activity logs, live chat, user interactions, app configuration, and map-based features that match the design system.",
        process: [
            "Translated Figma designs into reusable components and full screens.",
            "Refined components and system for design consistency.",
            "Implemented complete feature flows and navigation for user account management, deep links, event creation, map integration, app configuration, credits management, activity log, admin account, among other features.",
            "Built the correspondant backend RESTful API endpoints and integrated them with the database.",
            "Ensured seamless integration between frontend components and backend services.",
            "Integrated Google Maps with several features, including location filtering to allow only selected public spaces.",
            "Created deep links for sharing specific app content.",
            "Worked to ensure iOS and Android compatibility and visual consistency.",
            "Led the development team during some sprints.",            
            "Documented code for future reference and team onboarding.",            
            "Worked in an Agile development environment with daily meetings, regular sprints and team collaboration.",
            "Used issue tracking and project management tools for team coordination.",
            "Managed Git workflows and version control for the development team.",
        ],
        challenges: [
            "Working in a very high-pressure environment with time constraints.",
            "The designs kept changing continuously, requiring frequent updates to the components and screens.",
            "The system itself had frequent major changes that required careful adjustments and updates to the features while keeping the project on track",
            "Keeping visual fidelity and flow between iOS and Android.",
            "Ensuring smooth collaboration between frontend and backend teams under tight deadlines.",
            "Handling unexpected technical challenges and finding quick solutions under pressure.",
        ],
        learnings: [            
            "Effective communication and collaboration are crucial in high-pressure development environments.",
            "Balancing the need for rapid development with maintaining code quality.",  
            "Adapting to frequent design changes while maintaining project progress.",            
            "Prioritizing tasks effectively under tight deadlines.",
            "Recognizing the value of thorough documentation for reference.",
            "The importance of keeping the team engaged by actively hearing all voices and recognizing everyone's contributions.",
        ],
        technicalApproach:
            "Developed using React Native with Expo on the client side. The database was PostgreSQL, and the backend was built with Node.js/Express and Python, exposing REST APIs. Authentication and Google Maps APIs were integrated into the stack.",
        screenshots: [
            { src: projectFireFlyImg, alt: "Firefly Spark app preview" },
            { src: projectFireFly2Img, alt: "Firefly Spark screen" },
            { src: projectFireFly3Img, alt: "Firefly Spark screen 2" },
            { src: projectFireFly4Img, alt: "Firefly Spark screen 3" },
        ],
        delivery: [        
            "Fully functional app build and backend.",
            "Public product marketing site is live; this app version is not yet released.",
        ],
        links: [{ label: "Product site", href: "https://fireflyspark.io/" }],
        publishInfo: true,
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
            "Design and development of a professional digital portfolio for a horror scriptwriter.",
        objective:
            "Provide a website that presents the writer's work and profile with a distinctive horror-inspired look, including an internal content-editing portal to facilitate updates.",
        process: [
            "Collaborated closely with the client to define contents and requirements.", 
            "Aligned on color, typography, and atmosphere with the client.",
            "Created images and worked on the texts.",
            "Designed and built the public portfolio pages.",
            "Added an internal content-editing portal for ongoing updates.",
            "Tested the website thoroughly to ensure functionality and design consistency.",
            "Launched the site and provided hosting, ongoing maintenance, and support.",
        ],
        challenges: [                        
            "Balancing a strong genre aesthetic with readability and professional credibility.",            
            "Building an internal text editor for news, that enable the client to use font variations, image insertion, and formatting options.",
            "Including little horror-themed interactive elements to enhance user engagement.",            
        ],
        learnings: [
            "When working with very specialized topics, close collaboration with the client is crucial to ensure that the chosen resources align with their vision and expectations.",
            "Iteration and continuous feedback are key to refining both the design and functionality, leaving the door open for future improvements.",
        ],
        technicalApproach:
            "Developed with HTML, CSS, and JavaScript for the static pages; and PHP and MySQL for editable content and registration of forms. Versioned with Git.",
        screenshots: [
            { src: projectMelisaWebImg, alt: "Melisa Mozzati portfolio website" },
        ],
        delivery: [
            "Live portfolio website",
            "Internal content-editing portal.",
            "Hosting, support, and ongoing maintenance.",
        ],
        links: [{ label: "Live website", href: "https://www.melisamozzati.com" }],
        publishInfo: true,
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
            "TypeScript",
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
        publishInfo: false,
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
            "TypeScript",
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
        publishInfo: false,
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
        publishInfo: false,
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
        publishInfo: false,
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
        publishInfo: false,
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
        publishInfo: false,
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
            "TypeScript",
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
        publishInfo: false,
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
            "Design and development of a brand website for an actress who creates shows for children.",
        objective: 
            "Provide a site that showcases the fictional character and that is interactive, attractive, and engaging for children, while reflecting the fictional character's personality and maintaining the brand's visual identity.",        
        process: [
            "Collected requirements: collaborated with the client to gather requirements, information, brand logo and colors, guidelines, typefaces, content, and other materials.",
            "Created a mockup to present the initial design concept to the client and gather feedback.",
            "Worked with an illustrator to create custom graphics that aligned with the visual identity.",
            "Designed and built the entire site using HTML, CSS, and JavaScript.",
            "Provided hosting and maintenance for the website",
            "Maintained constant communication with the client to ensure alignment with their vision throughout the project lifecycle."
        ],
        challenges: [
            "The client required strict adherence to specific client-selected colors and a cursive font that affected readability.",
            "All included multimedia content had to be carefully integrated to maintain the visual identity.",
            "Completed the project with very limited resources."
        ],
        learnings: [
            "Effectively explain the pros and cons of certain design decisions while adapting the design approach to meet the client's requirements, even when they chose a different direction.",
            "Balance content in each section to achieve a visually appealing and functional website, with calls to action strategically placed.",
            "Providing guidance for non-technical clients is crucial for the long-term success.",
        ],
        technicalApproach: 
            " ",
        screenshots: [
            { src: projectRosariaImg, alt: "Soy Rosaria website" },
            { src: projectRosaria1Img, alt: "Soy Rosaria website page" },
        ],
        delivery: [
            "Live website",
            "Hosting, support, and ongoing maintenance",
        ],
        links: [{ label: "Visit live website", href: "https://www.soyrosaria.com" }],
        publishInfo: true,
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
            "Interactive map component to be integrated into the client's existing site, using SVG properties for interaction.",
        objective:
            "Deliver a fully functional interactive SVG map that reflects the client's visual identity.",
        process: [
            "Collected requirements and data, and studied the client's visual language.",
            "Built an SVG map with interactive states in JavaScript.",
            "Tested the interactive map across different devices and browsers to ensure consistent behavior.",
            "Embedded it so it sits naturally in the live page.",            
            "Trained the client on how to update data on the interactive SVG map.",
        ],
        challenges: [
            "Making SVG regions usable on both desktop and mobile.",
            "Working with a non-technical client who also manages their existing website, and training them to update the data on the interactive SVG map when needed.",
        ],
        learnings: [
            "Taking advantage of the full capabilities of SVG.",
            "Guiding clients with no technical knowledge.", 
        ],
        technicalApproach:
            " ",
        screenshots: [
            { src: projectSvgMapImg, alt: "Interactive SVG map" },
        ],
        delivery: [
            "Live component embedded into the client's website.",
            "Technical support and guidance.",
        ],
        links: [
            {
                label: "Visit live map component",
                href: "https://unidadpopular.org.ar/mapa-referentes/",
            },
        ],
        publishInfo: true,
    },
];

export default projects;
