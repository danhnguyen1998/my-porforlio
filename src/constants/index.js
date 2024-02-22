import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
  polypi,
  resumyai,
  naipot,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "SASS Development",
    icon: backend,
  },
  {
    title: "ERP Development",
    icon: mobile,
  },
  {
    title: "Mobile Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Java",
  //   icon: java,
  // },
  {
    name: "MySQL",
    icon: mysql,
  },
  // {
  //   name: "Git",
  //   icon: git,
  // },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Nickelfox Technologies",
    company_website: "https://www.nickelfox.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web and mobile applications using React.js, React-native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Newgen Software",
    company_website: "https://newgensoft.com/home-india/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Dec 2021",
    points: [
      "Developed a groundbreaking banking product for a Singapore-based firm, improved transaction management.",
      "Developed a dynamic dashboard for efficient transaction management, resulting in a 30% increase in productivity.",
      "Optimized frontend performance by achieving 20% reduction in page loading time and make it responsive.",
      "Created a transaction report generator, reducing report generation time by 50% and enhancing data analysis.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Skillrisers",
    company_website: "https://www.skillrisers.com/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Jul 2020",
    points: [
      "Contributed to the development of a Test Engine Application, empowering users to create and conduct tests seamlessly.",
      "Built three essential modules: Teacher, Student, and Admin, ensuring comprehensive functionality for all user roles.",
      "Collaborated effectively with the development team, actively participating in code reviews and resolving technical challenges.",
      "Demonstrated strong problem-solving skills, consistently delivering high-quality code and meeting project deadlines.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Self-employed",
    company_website: "https://proximus.surge.sh/index.html",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Jan 2021",
    points: [
      "Spearheaded the development of a fully responsive website for the college coding society.",
      "Led coding sessions, actively sharing knowledge and insights to enrich members' programming skills and understanding.",
      "Organized informative sessions on cutting-edge technologies, including JavaScript and ReactJs.",
      "Curated and designed challenging coding problems for college competitions.",
    ],
  },
];

const projects = [
  {
    name: "PolyPi AI",
    description:
      "PolyPi.ai is a platform for connecting students with IELTS exam preparation teachers, supported by artificial intelligence (AI). The platform offers unique features like unlimited custom test packages, accurate scoring by AI, deep analysis of mistakes for personalized learning, and 24/7 speaking practice with AI.",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
    ],
    image: polypi,
    hosted_link: "https://polypi.ai/",
  },
  {
    name: "Resumy AI",
    description:
      "Resumy.ai is a platform that automatically generates resumes and job descriptions tailored to specific job types. It offers a variety of templates for job descriptions, along with a wealth of examples for self-promotion and job summaries, making the creation process easy.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "algolia",
        color: "pink-text-gradient",
      },
    ],
    image: resumyai,
    hosted_link: "https://resumy.ai/",
  },
  {
    name: "Naipot",
    description:
      "Naipot.com is a reputable and affordable platform for importing goods directly from China, aimed at providing users with a seamless shopping experience. It supports both individuals and businesses looking to source products at competitive prices. The site offers various services, including price quotes, order placement tools, and mobile app access for convenient shopping.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: naipot,
    hosted_link: "https://naipot.com/",
  },
  {
    name: "Document Annotation System",
    description:
      "The project is an application on managing documents and extraction items extracted from documents.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "#",
  },
  {
    name: "ESG Framework",
    description:
      "The app offers solutions for ESG (Environmental, Social, and Governance) data management. Their services include reducing the workload of data collection and aggregation, automating the creation of ESG data books and reports, and utilizing AI technology for analysis and improvement.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "#",
  },
];

const personalInfo = {
  name: "Danh",
  fullName: "Danh Nguyen",
  email: "danhnguyen1998@gmail.com",
  role: "Software Engineering",
  about: `As a highly skilled software engineer in IT development, I have honed my technical expertise and gained valuable insights into building robust and scalable software solutions. Throughout my career, I have successfully delivered numerous projects, leveraging my strong problem-solving abilities, attention to detail, and passion for creating innovative applications.
  With a solid foundation in both frontend and backend sides, I am adept at collaborating with cross-functional teams and translating complex requirements into e cient and user-friendly software products. As a dedicated professional, I strive to stay up to date with the latest industry trends and best practices, ensuring that I consistently deliver high-quality, cutting-edge solutions.`,
};

const publicUrls = {
  // resume:
  //   "https://drive.google.com/file/d/1vmiPiCLaCuqM0uuDcXQlAd8pY8yBDEOU/view?usp=sharing",
  socialProfiles: {
    // linkedin: {
    //   title: "linkedin",
    //   link: "https://www.linkedin.com/in/shridharrai/",
    //   icon: linkedIn,
    // },
    // github: {
    //   title: "github",
    //   link: "https://github.com/shridharrai",
    //   icon: github,
    // },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
