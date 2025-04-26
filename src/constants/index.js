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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const userNavLinks =[
  {
    id: "/users/profile",
    title: "Profile",
  },
  {
    id: "/users/courses",
    title: "Courses",
  },
  {
    id: "/contact",
    title: "Contact",
  },
  {
    id:"/users/logout",
    title:"Logout"
  }
]
export const navLinks = [
  {
    id: "/about",
    title: "About",
  },
  
  {
    id:"/login",
    title:"Login"
  },
  {
    id: "/courses",
    title: "Courses",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const why_to_choose = [ 
  {
    title:"Comprehensive Notes",
    description:"Access detailed notes from our YouTube lectures anytime, anywhere. Perfect for revision and deeper understanding."
  },
  {
    title:"Expert Instructors",
    description:"Learn from experienced instructors who have a deep understanding of the subject matter and can guide you"
  },
  {
    title:"Interactive Quizzes",
    description:"Test your knowledge with our interactive quizzes and assess your understanding of the subject."
  },
  {
    title:"Community Support",
    description:"Join a community of learners who are also taking the course and get support from them."
  }
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The Linux course was super easy to follow. I finally feel confident using the terminal!",
    name: "Radha",
    
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Loved the web development course! Built my first website in just a week.",
    name: "Aman",
  
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Clear, concise, and beginner-friendly! The Git & GitHub tutorials helped me ace my project.",
    name: "Udit",
    
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const courses =[
  {
    name:"Linux",
    description:"Hands-on Linux courses for beginners and pros. Master commands, scripting, and system management step by step.",
    tags:{name:"Linux",
      color:"blue-text-gradient"
      } ,
      image: carrent,
      source_code_link: "https://github.com/",  },
  {
    name:"Git and GitHub",
    description:"Learn version control with Git and collaborate like a pro using GitHub. From basics to advanced workflows—everything you need to manage code with confidence",
    tags:{name:"git",
      color:"blue-text-gradient"
      } ,
      image: carrent,
      source_code_link: "https://github.com/",  },
  {
    name:"Web  Devlopement",
    description:"Build stunning websites from scratch. Learn HTML, CSS, JavaScript, and more—everything you need to become a web developer.",
    tags:{name:"Full Stack",
      color:"blue-text-gradient"
      } ,
      image: carrent,
      source_code_link: "https://github.com/",  }
      

]

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects ,why_to_choose,courses};
