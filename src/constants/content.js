import html5Icon from "/assets/icons/frontend/html5.svg";
import css3Icon from "/assets/icons/frontend/css3.svg";
import jsIcon from "/assets/icons/frontend/js.svg";
import reactIcon from "/assets/icons/frontend/react.svg";
import reduxIcon from "/assets/icons/frontend/redux.svg";
import bootstrapIcon from "/assets/icons/frontend/bootstrap.svg";
import tailwindCssIcon from "/assets/icons/frontend/tailwind-css.svg";

import pythonIcon from "/assets/icons/backend/python.svg";
import nodejsIcon from "/assets/icons/backend/nodejs.svg";
import mysqlIcon from "/assets/icons/backend/mysql.svg";
import mongodbIcon from "/assets/icons/backend/mongodb.svg";

// import flutterIcon from "/assets/icons/mobile/flutter.svg";
// import reactNativeIcon from "/assets/icons/mobile/react-native.svg";
// import androidStudioIcon from "/assets/icons/mobile/android-studio.svg";
// import xcodeIcon from "/assets/icons/mobile/xcode.svg";

import gitIcon from "/assets/icons/others/git.svg";
import githubIcon from "/assets/icons/others/github.svg";

import awsProfessionalBadge from "/assets/images/aws-professional-badge.png";
import awsDeveloperBadge from "/assets/images/aws-developer-badge.png";
import awsSolutionBadge from "/assets/images/aws-solutions-badge.png";
import terraformBadge from "/assets/images/terraform-associate-badge.png";

export const ABOUT_CONTENT = `Motivated Full Stack Developer and a BE student specialized in Computer Engineering. With a solid background in frontend, Backend, and web development, I build solutions that leverage data for real-world impact. Explore my projects to see how I combine technical skills with creative problem-solving.

`;

export const TECHNOLOGIES = {
  Frontend: [
    { icon: html5Icon, name: "HTML5" },
    { icon: css3Icon, name: "CSS3" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: reactIcon, name: "React" },
    { icon: reduxIcon, name: "Redux" },
    { icon: bootstrapIcon, name: "BootStrap" },

    { icon: tailwindCssIcon, name: "Tailwind CSS" },
  ],
  Backend: [
    { icon: pythonIcon, name: "Python" },
    { icon: nodejsIcon, name: "NodeJS" },
    { icon: mysqlIcon, name: "MySQL" },
    { icon: mongodbIcon, name: "MongoDB" },
  ],

  Others: [
    { icon: gitIcon, name: "Git" },
    { icon: githubIcon, name: "GitHub" },
  ],
};

export const EXPERIENCES = [];

// export const EXPERIENCES = [
//   {
//     year: "Dec 2023 - Feb 2024",
//     role: "Research and Analytics Intern",
//     company: " iGurus Consultancy Services",
//     description: `I  Conducted research and data analysis in machine learning, AI, and NLP Used data preprocessing techniques to clean and prepare data for model training. Implemented models to solve real-world problems using data science techniques..`,
//     technologies: ["Core Python", "Advance Python", "ETL Process", "ML", "NLP"  ],
//   },
//   {
//     year: "Jan 2023 - Mar 2023",
//     role: "Data Science Intern",
//     company: "Teachnooc Services",
//     description: `Developed predictive models using machine learning to forecast business trends. Cleaned, processed, and visualized data using Python (Pandas, NumPy, Matplotlib). Created dashboards and reports using Power BI/Tableau for data-driven insights.`,
//     technologies: ["Python", "Pandas", "Numpy", "Power BI", "Tableau" , 'Matplotlib'],
//   },
// ];

export const EDUCATION = [
  {
    institution: "Ajeenkya D. Y. Patil School of Engineering",
    university: "Savitribai Phule Pune University",
    percentage: "8.81 CGPA",
    year: "2021-2025",
    degree: "Bachelor of Engineering (Computer Engineering)",
    location: "Pune, Maharashtra",
    level: "college",
  },
  {
    institution: " Sadhana Jr. College",
    university: "Maharashtra State Board of Technical Education",
    percentage: "88.60%",
    year: "2019–2021",
    degree: "Higher Secondary Certificate (HSC)",
    location: "Gadhinglaj, Maharashtra",
    level: "higher-secondary",
  },
  {
    institution: "Mahatma Phule Vidyalaya & Jr. College",
    university:
      "Maharashtra State Board of Secondary and Higher Secondary Education",
    percentage: "92.80%",
    year: "2019",
    degree: "Secondary School Certificate (SSC)(10<sup>th</sup>)",
    location: "Karve, Maharashtra",
    level: "high-school",
  },
];

export const PROJECTS = [
  {
    title: " Wanderlust – Full Stack Travel Listing App",
    description:
      "Developed a full-stack travel destination listing platform with user authentication, property management, and reviews. Designed a responsive interface using React.js, Node.js, and MongoDB for seamless navigation and data handling",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
      "JavaScript",
    ],
    githubLink: "https://mern-full-stack-wwonderlust-project.vercel.app/",
  },

  {
    title: "Plant Disease Detection – AI-Based Web App",
    description:
      " Built an AI-powered plant disease detection system using deep learning and image processing. Farmers can upload plant leaf images to detect diseases and view recommendations through a clean, responsive frontend built with HTML, CSS, and JavaScript.",
    technologies: [
      "Python",
      "Flask",
      "Machine Learning",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    githubLink: "https://github.com/2003chinmayee/-plant-disease-detection",
    // link:"https://mern-full-stack-wwonderlust-project.vercel.app/",
  },

  {
    title: "Personal Portfolio Website",
    description:
      "Developed a responsive personal portfolio using React and Tailwind CSS to showcase my projects, education, and contact details with modern animations and smooth scrolling effects.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/2003chinmayee",
    // link:"https://jobsborad.vercel.app/",
  },

  //  {
  //   title: "Car Showroom UI",
  //   description:
  //     "Designed a Supercars showroom ui in figma with modern and sleek aesthetics. The design features a responsive layout, high-quality images, and intuitive navigation to enhance user experience. It showcases various car models with detailed specifications and pricing information.",
  //   technologies: ["Figma", "UI/UX Design"],
  //   githubLink: "https://github.com/adie253/Cars-Showroom",
  //   link:"https://www.figma.com/proto/e1sfixZRdkSTfl3SYVK1Gg/Untitled?node-id=1-23&p=f&t=Cgp0ROSxvWQpLI9y-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3",
  // },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services Training and Certification",
    date: "April 2024",
    link: "https://www.credly.com/badges/00c91b85-4948-4275-88c3-d143e0e888e7/public_url",
    badge: awsProfessionalBadge,
  },
  {
    title: "AWS Certified Developer – &nbsp;&nbsp;&nbsp;Associate",
    issuer: "Amazon Web Services Training and Certification",
    date: "Nov 2023",
    link: "https://www.credly.com/badges/8e7b5ea8-0ab4-40ca-b77a-6cc81aed5213/public_url",
    badge: awsDeveloperBadge,
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services Training and Certification",
    date: "May 2023",
    link: "https://www.credly.com/badges/c356f476-c70b-4bd3-8af8-131497d7bb3a/public_url",
    badge: awsSolutionBadge,
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "Jan 2025",
    link: "https://www.credly.com/badges/45a9c170-5f5c-44f5-abc6-39084c098107/public_url",
    badge: terraformBadge,
  },
];

export const CONTACT = {
  phoneNo: "+91 8767889513",
  email: "chinmayeepatil2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/21-chinmayee-patil/",
  github: "https://github.com/2003chinmayee",
  x: "https://x.com/",
  instagram: "https://www.instagram.com/chinupatil21/",
};
