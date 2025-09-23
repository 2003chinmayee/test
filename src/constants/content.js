import html5Icon from "/assets/icons/frontend/html5.svg";
import css3Icon from "/assets/icons/frontend/css3.svg";
import jsIcon from "/assets/icons/frontend/js.svg";
import reactIcon from "/assets/icons/frontend/react.svg";
import reduxIcon from "/assets/icons/frontend/redux.svg";
import bootstrapIcon from "/assets/icons/frontend/bootstrap.svg";
import materialUiIcon from "/assets/icons/frontend/material-ui.svg";
import tailwindCssIcon from "/assets/icons/frontend/tailwind-css.svg";

import pythonIcon from "/assets/icons/backend/python.svg";
import djangoIcon from "/assets/icons/backend/django.svg";
import nodejsIcon from "/assets/icons/backend/nodejs.svg";
import mysqlIcon from "/assets/icons/backend/mysql.svg";
import postgresqlIcon from "/assets/icons/backend/postgresql.svg";
import mongodbIcon from "/assets/icons/backend/mongodb.svg";

import flutterIcon from "/assets/icons/mobile/flutter.svg";
import reactNativeIcon from "/assets/icons/mobile/react-native.svg";
import androidStudioIcon from "/assets/icons/mobile/android-studio.svg";
import xcodeIcon from "/assets/icons/mobile/xcode.svg";

import gitIcon from "/assets/icons/others/git.svg";
import githubIcon from "/assets/icons/others/github.svg";
import awsIcon from "/assets/icons/others/aws.svg";
import firebaseIcon from "/assets/icons/others/firebase.svg";
import dockerIcon from "/assets/icons/others/docker.svg";
import postmanIcon from "/assets/icons/others/postman.png";
import terraformIcon from "/assets/icons/others/terraform.svg";

import awsProfessionalBadge from "/assets/images/aws-professional-badge.png";
import awsDeveloperBadge from "/assets/images/aws-developer-badge.png";
import awsSolutionBadge from "/assets/images/aws-solutions-badge.png";
import terraformBadge from "/assets/images/terraform-associate-badge.png";

export const ABOUT_CONTENT = `Motivated Full Stack Developer and a BE student specialized in AI-DS Engineering. With a solid background in data science, machine learning, and web development, I build solutions that leverage data for real-world impact. Explore my projects to see how I combine technical skills with creative problem-solving.

`;

export const TECHNOLOGIES = {
  Frontend: [
    { icon: html5Icon, name: "HTML5" },
    { icon: css3Icon, name: "CSS3" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: reactIcon, name: "React" },
    { icon: reduxIcon, name: "Redux" },
    { icon: bootstrapIcon, name: "BootStrap" },
    { icon: materialUiIcon, name: "Material UI" },
    { icon: tailwindCssIcon, name: "Tailwind CSS" },
  ],
  Backend: [
    { icon: pythonIcon, name: "Python" },
    { icon: djangoIcon, name: "Django" },
    { icon: nodejsIcon, name: "NodeJS" },
    { icon: mysqlIcon, name: "MySQL" },
    { icon: postgresqlIcon, name: "PostgreSQL" },
    { icon: mongodbIcon, name: "MongoDB" },
  ],
  Mobile: [
    { icon: flutterIcon, name: "Flutter" },
    { icon: reactNativeIcon, name: "React Native" },
    { icon: androidStudioIcon, name: "Android Studio" },
    { icon: xcodeIcon, name: "Xcode" },
  ],
  Others: [
    { icon: gitIcon, name: "Git" },
    { icon: githubIcon, name: "GitHub" },
    { icon: awsIcon, name: "AWS" },
    { icon: firebaseIcon, name: "Firebase" },
    { icon: dockerIcon, name: "Docker" },
    { icon: postmanIcon, name: "Postman" },
    { icon: terraformIcon, name: "Terraform" },
  ],
};

export const EXPERIENCES = [
  {
    year: "Dec 2023 - Feb 2024",
    role: "Research and Analytics Intern",
    company: " iGurus Consultancy Services",
    description: `I  Conducted research and data analysis in machine learning, AI, and NLP Used data preprocessing techniques to clean and prepare data for model training. Implemented models to solve real-world problems using data science techniques..`,
    technologies: ["Core Python", "Advance Python", "ETL Process", "ML", "NLP"  ],
  },
  {
    year: "Jan 2023 - Mar 2023",
    role: "Data Science Intern",
    company: "Teachnooc Services",
    description: `Developed predictive models using machine learning to forecast business trends. Cleaned, processed, and visualized data using Python (Pandas, NumPy, Matplotlib). Created dashboards and reports using Power BI/Tableau for data-driven insights.`,
    technologies: ["Python", "Pandas", "Numpy", "Power BI", "Tableau" , 'Matplotlib'],
  },
];

export const EDUCATION = [
  {
    institution: "Ajeenkya D. Y. Patil School of Engineering",
    university: "Savitribai Phule Pune University",
    percentage: "8.44 CGPA",
    year: "2022-2025",
    degree: "Bachelor of Artificial Intelligence and Data Science",
    location: "Pune, Maharashtra",
    level: "college",
  },
  {
    institution: "Government Polytechnic College, Ambad",
    university: "Maharashtra State Board of Technical Education",
    percentage: "86.17%",
    year: "2022",
    degree: "Diploma in Computer Science",
    location: "Ambad, Maharashtra",
    level: "higher-secondary",
  },
  {
    institution: "Shivchhatrapati High School",
    university: "Maharashtra State Board of Secondary and Higher Secondary Education",
    percentage: "87.0%",
    year: "2019",
    degree: "High School (10<sup>th</sup>)",
    location: "Pachod, Maharashtra",
    level: "high-school",
  },
];

export const PROJECTS = [

  {
    title: " Multi-Language Transliteration App",
    description:
      "Developed a multi-language transliteration app using React Native, enabling real-time script conver sion for languages like Hindi, Tamil, and Bengali. The app features a simple UI, supports multiple languages, and ensures smooth functionality on Android and iOS platforms.",
    technologies: ["React Native", "JavaScript", "Expo", "NLP"],
    githubLink: "https://github.com/SoulCoder65/githubsearch",
  },

  {
    title: "Paper Publication Website",
    description:
      "Developed a paper publication website using ReactJS, allowing users to submit, review, and publish academic papers. The site features a clean interface, supports user authentication, and includes functionalities like paper uploads, peer reviews, and search filters for published works. It provides an efficient platform for managing the publication process.",
    technologies: ["ReactJS", "JavaScript", "MongoDB", "ExpressJS", "NodeJS"],
    githubLink: "https://github.com/SoulCoder65/githubsearch",
  },
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
  phoneNo: "+91 8080125309",
  email: "aadityaekhande@gmail.com",
  linkedin: "https://www.linkedin.com/in/adityae/",
  github: "https://github.com/adie253",
  x: "https://x.com/",
  instagram:
    "https://www.instagram.com/aditya_ekhande_?igsh=MWZ3bGJ1Mmk5NzFwdA%3D%3D&utm_source=qr",
};
