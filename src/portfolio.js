/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import Ncclogo from "./assets/images/Ncclogo.png";
import oxfordlogo from "./assets/images/oxfordbrookes.webp";
import issaraLogo from "./assets/images/issaraLogo.png"
import freelanceLogo from "./assets/images/freelancelogo.png";
import wunderfauksLogo from "./assets/images/wunderfauksLogo.jpeg";
import scwLogo from "./assets/images/scwLogo.jpg";
import mvista from "./assets/images/mvista.webp"
import nextevo from "./assets/images/nextevo.webp"
import nextevo1 from "./assets/images/nextevo1.webp"
import orangeclove from "./assets/images/orangeclove.png"
import postman from "./assets/images/postman.webp"
import rwc from "./assets/images/rwc.webp"
import workervoice from "./assets/images/workervoice.png"
import cascade from "./assets/images/cascade.png"
import ilm from "./assets/images/ilm.png"
import goldendreams from "./assets/images/goldendreams.png"
import issarainstitute from "./assets/images/issarainstitute.png"
import booppa from "./assets/images/booppa.png"
import Deloitte from "./assets/images/Deloitte.jpeg"
import myt from "./assets/images/myt.png"


import googleAssistantLogo from "./assets/images/googleAssistantLogo.webp";


// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zin Min Khant",
  title: "Hello, I'm Alfred",
  subTitle: emoji(`Dynamic Senior Full Stack Developer with 7+ years of full-stack experience, specializing in e-commerce, responsive design, and blockchain integration. Expert in Vue.js, React.js, and Node.js, with a strong record of delivering secure, scalable, high-performance applications, including Ethereum-based dApps. Proven leader in full-cycle projects and international team collaboration, focused on building user-centric solutions aligned with modern web standards.`),
  resumeLink:
    "https://drive.google.com/file/d/1fa4Ed-af-frU4idDKKANDXPnKYzKWl69/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Alfred-ZinMinKhant",
  linkedin: "https://www.linkedin.com/in/zin-min-khant-alfred/",
  gmail: "zinminkhant.alfred@gmail.com",
  myfol: "https://myfol.io/zinminkhant_alfred?page=1",
  facebook: "https://www.facebook.com/alfred.zinminkhant",
  line: "https://line.me/ti/p/oQhHUxqvGu",
  upwork: "https://www.upwork.com/freelancers/~01c3a44d6e103d2b2d",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Versatile full‑stack developer — building performant UIs, scalable backends, and reliable deployments",
skills: [
  emoji("Build highly interactive and scalable front-end interfaces using Vue.js, React.js, and modern JavaScript"),
  emoji("Develop robust back-end systems using Node.js and Django, including RESTful APIs and secure authentication"),
  emoji("Create Progressive Web Applications (PWA) in both SPA and traditional stacks"),
  emoji("Design and optimize databases, caching layers, and data flows for high-performance applications"),
  emoji("Integrate and manage third-party services such as AWS, Firebase, DigitalOcean, and payment gateways"),
  emoji("Implement blockchain and Web3 integrations, including Ethereum-based dApps"),
  emoji("Deploy, monitor, and scale applications using modern DevOps and cloud best practices")
],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
    ,
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "Tailwind",
      fontAwesomeClassname: "fas fa-border-all"
    },
    {
      skillName: "Jest",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Google Cloud Platform",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Git & Version Control",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "PHP & Laravel",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "SEO Tools",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "HubSpot CMS",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "cPanel / CyberPanel / FTP / SSH",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Custom Server Deployment",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Netlify / Vercel",
      fontAwesomeClassname: "fas fa-cloud"
    }
    ,
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NoSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "NCC Education (Strategy First University)",
      logo: Ncclogo,
      subHeader: "Diploma in Business Information Technology",
      // duration: "September 2017 - April 2019",
      desc: "Studied core business and IT modules, including Systems Analysis, Database Management, and E-Commerce. Completed acapstone project on developing a business intelligence system for small and medium enterprises (SMEs). Gained practical experience through internships, assisting in the implementation of IT solutions for local businesses. Graduated with distinction, recognized for excellence in academic performance and practical application of skills.",
    },
    {
      schoolName: "Oxford Brookes University",
      logo: oxfordlogo,
      subHeader: "Bachelor of Science (Honours) in Information Technology For Business",
      // duration: "September 2013 - April 2017",
      desc: "Studied advanced computer science topics including algorithms, data structures, artificial intelligence, and software engineering. Completed a final-year research project on machine learning applications in natural language processing. Actively participated in collaborative software and mobile application projects, contributing as part of cross-functional teams. Graduated with honors, recognized for academic excellence and contributions to student-led technology initiatives.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
  {
    Stack: "Frontend Engineering & UI/UX",
    progressPercentage: "100%"
  },
  {
    Stack: "Backend Engineering (Node.js, Django, APIs)",
    progressPercentage: "100%"
  },
  {
    Stack: "Full-Stack Architecture & Integration",
    progressPercentage: "95%"
  },
  {
    Stack: "Cloud, DevOps & Infrastructure",
    progressPercentage: "90%"
  },
  {
    Stack: "Blockchain & Web3 Development",
    progressPercentage: "85%"
  }
],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Developer (Django + React)",
      company: "Issara Institute",
      companylogo: issaraLogo, // add your asset
      date: "2025 – Present",
      desc: "Member of the Tech and Innovation Team, developing web applications that support worker protection, ethical supply chains, and anti–human trafficking initiatives across Southeast Asia.",
      descBullets: [
        "Develop and maintain full-stack web applications using Django (backend) and React.js (frontend)",
        "Design clean, scalable architectures with a strong focus on performance, security, and maintainability",
        "Collaborate with international teams across Thailand, Myanmar, Cambodia, Malaysia, Nepal, and the United States",
        "Work closely with program managers and stakeholders to translate organizational and user needs into technical solutions",
        "Participate in user research and feedback sessions involving staff, migrant workers, jobseekers, and business partners",
        "Continuously refine features based on real-world feedback and evolving project requirements"
      ]
    },
    {
      role: "Senior Full Stack Developer",
      company: "Freelance",
      companylogo: freelanceLogo,
      date: "2024 – 2025",
      desc: "Contracted by a Germany-based company for a blockchain project with a Thai client, leading the end-to-end development of a production-ready decentralized application (dApp).",
      descBullets: [
        "Led full-cycle development of a blockchain-integrated web application focused on scalability, security, and performance",
        "Designed and deployed Ethereum smart contracts using Solidity for token transactions and on-chain data validation",
        "Built frontend interfaces using Vue.js and backend services with Node.js, integrating Web3.js",
        "Implemented MetaMask wallet authentication and transaction signing",
        "Collaborated with cross-border teams using Agile workflows and Git-based code reviews"
      ]
    },
    {
      role: "Senior Full Stack Developer",
      company: "Wunderfauks",
      companylogo: wunderfauksLogo,
      date: "2023 – 2024",
      desc: "Delivered multiple web platforms across e-commerce, corporate, and promotional domains.",
      descBullets: [
        "Developed an e-commerce platform for M-Vista with secure payment integration",
        "Built responsive and performance-optimized websites for Nextevo",
        "Engineered interactive games and a promotional redeem platform for RWC",
        "Designed and implemented a Postman review and feedback system for Singpost",
        "Delivered a functional catering website for Orange Clove Singapore"
      ]
    },
    {
      role: "Web Developer",
      company: "SCW Myanmar",
      companylogo: scwLogo,
      date: "2020 – 2023",
      desc: "Developed and maintained customer-facing web solutions across multiple industries.",
      descBullets: [
        "Converted design mockups into production-ready web pages",
        "Conceptualized and launched an e-commerce website",
        "Designed a travel and tour website with intuitive navigation",
        "Built a hotel website with an integrated booking system"
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Independent",
      companylogo: freelanceLogo,
      date: "2018 – 2020",
      desc: "Delivered custom web solutions for clients from requirements gathering to deployment.",
      descBullets: [
        "Worked directly with clients to define functional and technical requirements",
        "Maintained and updated internal and external websites",
        "Built a property-listing platform with admin panel and multi-role access"
      ]
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "KEY PLATFORMS AND PRODUCTS I HELPED BUILD AND LAUNCH",
  projects: [
    // =======================
    // Commercial Projects
    // =======================
    {
      image: mvista,
      projectName: "M-Vista E-Commerce Platform",
      projectDesc:
        "A full-featured e-commerce platform with secure payment gateway integration, optimized UX, and a scalable backend architecture.",
      footerLink: [{ name: "Visit Website", url: "https://m-vista.com/" }]
    },
    {
      image: orangeclove,
      projectName: "Orange Clove Catering Singapore",
      projectDesc:
        "A high-traffic catering website designed to showcase services, manage complex menus, and ensure full mobile responsiveness.",
      footerLink: [{ name: "Visit Website", url: "https://www.orangeclove.com.sg/" }]
    },
    {
      image: postman,
      projectName: "My Postman Singapore",
      projectDesc:
        "A Postman review and feedback platform allowing users to search by postal code, optimized for fast data retrieval at scale.",
      footerLink: [{ name: "Visit Website", url: "https://www.singpost.com/" }]
    },
    {
      image: rwc,
      projectName: "RWC Games & Promo Redeem Platform",
      projectDesc:
        "Interactive games and a promotional reward redemption system designed to increase campaign engagement and user retention.",
      footerLink: [{ name: "Visit Website", url: "https://stardreamcruises.com/en-th" }]
    },
    {
      image: booppa,
      projectName: "Ethereum-Based dApp Platform",
      projectDesc:
        "A decentralized web application featuring Ethereum smart contracts, MetaMask wallet integration, and secure on-chain transactions.",
      footerLink: [{ name:  "Visit Website", url: "booppa.io" }]
    },

    // =======================
    // Nextevo Projects (2)
    // =======================
    {
      image: nextevo,
      projectName: "Nextevo – Sustainable Fashion Platform (I)",
      projectDesc:
        "A responsive, performance-optimized website for an eco-conscious fashion brand, emphasizing clean UI and sustainability storytelling.",
      footerLink: [{ name: "Visit Website", url: "https://nextevo.one/" }]
    },
    {
      image: nextevo1,
      projectName: "Nextevo – Sustainable Fashion Platform (II)",
      projectDesc:
        "A second Nextevo platform with refined UX, improved accessibility, and optimized performance across devices.",
      footerLink: [{ name: "Visit Website", url: "https://nextevogroup.com/" }]
    },

    // =======================
    // Issara Institute Projects (5)
    // =======================
    {
      image: goldendreams,
      projectName: "Golden Dreams",
      projectDesc:
        "A public awareness platform focused on ethical recruitment and worker protection, designed for accessibility and impact storytelling.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app.golden-dreams.org/"
        }
      ]
    },
    {
      image: issarainstitute,
      projectName: "Issara Institute Main Website",
      projectDesc:
        "The primary organizational website presenting Issara’s mission, programs, and impact with a focus on clarity, performance, and accessibility.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.issarainstitute.org/"
        }
      ]
    },
    {
      image: ilm,
      projectName: "ILM 3.0 – Inclusive Labor Monitoring System",
      projectDesc:
        "A secure internal system for collecting, managing, and analyzing labor data to support ethical supply chains and due diligence.",
      footerLink: [{ name: "Visit Website", url: "https://ilm.issarainstitute.org/auth/login-page" }]
    },
    {
      image: workervoice,
      projectName: "Worker Voices",
      projectDesc:
        "A worker engagement platform enabling meaningful, anonymous feedback to improve labor conditions across global supply chains.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.workervoices.org/"
        }
      ]
    },
    {
      image: cascade,
      projectName: "CASCADE Platform",
      projectDesc:
        "A data-driven intelligence platform delivering better business insights, ethical decision-making, and improved labor conditions across supply chains.",
      footerLink: [{ name: "Visit Website", url: "https://cascade.issarainstitute.org/" }]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Professional achievements, awards, and recognitions earned throughout my career",

  achievementsCards: [
    {
      title: "Myanmar Youth Technopreneurship – Honorable Mention",
      subtitle:
        "Recognized for innovative use of technology and entrepreneurship to address real-world challenges and create social impact.",
      image: myt,
      imageAlt: "Myanmar Youth Technopreneurship Award",
      footerLink: []
    },
    {
      title: "Deloitte Risk Intelligence Challenge – Runner Up",
      subtitle:
        "Awarded runner-up for developing a data-driven solution addressing risk intelligence and analytical problem-solving.",
      image: Deloitte,
      imageAlt: "Deloitte Risk Intelligence Challenge",
      footerLink: []
    },
    {
      title: "Employee of the Year",
      subtitle:
        "Awarded Employee of the Year at SCW Myanmar for outstanding performance, technical leadership, and consistent delivery excellence (2021 & 2022).",
      image: scwLogo,
      imageAlt: "Employee of the Year Award",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "zinminkhant.alfred@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
