/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Suraj Panker",
  logo_name: "PankerTechie",
  nickname: "PankerTechie",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
"https://drive.google.com/file/d/1YIRiJZMAs7BBzqI1ORq9xfO-TAqeV1f5/view?usp=sharing"};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/surajpanker",
  // linkedin: "https://www.linkedin.com/in/surajpanker/",
  // gmail: "surajpanker82@gmail.com",
  // gitlab: "https://gitlab.com/surajpanker82",
  // facebook: "https://www.facebook.com/suraj.panker/",
  // twitter: "https://twitter.com/SurajPanker",
  // instagram: "https://www.instagram.com/therisingsun1997/"
  //quora : "https://www.quora.com/profile/Suraj-Panker-1"
  //medium : "https://medium.com/@surajpanker82 "

  {
    name: "Github",
    link: "https://github.com/surajpanker",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/surajpanker/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC6oRI9_vm4ouuEBu-j9bh8A",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:surajpanker82@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link:  "https://twitter.com/SurajPanker",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/suraj.panker/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/therisingsun1997/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "GitLab",
    link:  "https://gitlab.com/surajpanker82",
    fontAwesomeIcon: "fa-gitlab", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#8C929D", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Quora",
    link:"https://www.quora.com/profile/Suraj-Panker-1",
    fontAwesomeIcon: "fa-quora", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#a62100 ", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Medium",
    link:  "https://medium.com/@surajpanker82 ",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "black", // Reference https://simpleicons.org/?q=instagram
  }

 //quora : "https://www.quora.com/profile/Suraj-Panker-1"
  //medium : "https://medium.com/@surajpanker82 "



];

const skills = {
  data: [

    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express & MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        }     ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server  AWS",
      ],
      softwareSkills: [
        
  
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
      
        }
      ]
    }
  ]
    };

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#AABBCC",
      },
      profileLink: "https://leetcode.com/surajpanker1997/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/surajpanker82",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/surajpanker1997",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/surajpanker82",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@suraj1289",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/suraj123456",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Birla  Institute of  Technology Mesra",
      subtitle: "B.Tech. in Computer Engineering",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CN.",
        "⚡ Apart from this, I have done Full Stack Development.",
        "⚡ I was selected for JP Birla Scholarship which is given to top performance of students in college.",
      ],
      website_link: "https://www.bitmesra.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "MongoDB",
      subtitle: "Maximilian schwarzmüller ",
      logo_path: "udemy.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-8e5cedd6-0a17-46ef-8d95-19b2ca3f0d69.pdf",
      alt_name: "Udemy",
      color_code: "#8C151599",
    },
    {
      title: "Nodejs",
      subtitle: "- Andrew med",
      logo_path: "udemy.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f9350baf-54dd-4314-bea0-f48ab4f54589.pdf",
      alt_name: "nodejs",
      color_code: "#00000099",
    },
    {
      title: "R-Programming LANGUAGE",
      subtitle: "Brooke Anderson",
      logo_path: "R.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/D7MH7P353C6X",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Java script",
      subtitle: "Hackerrank",
      logo_path: "h.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/58de0001537a",
      alt_name: "Hackerrank",
      color_code: "#1F70C199",
    }
      ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:"I have worked with Startup as well as Government organization.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internship",
      experiences: [
        {
          title: "Full stack developer",
          company: "Sociolla",
          company_url: "https://www.linkedin.com/company/sociolla/",
          logo_path: "sociolla.png",
          duration: "Jan 2020 - July 2020",
          location: "Gurugram, Haryana",
          description:
            " 1.Architected an end to end real-time Chatbot that talks into many important internal services including our product, offer, and many other services. (Working on a chatbot to improving features) 2.Learning full Stack development technology. 3. Worked on Human Resource Management System (HRMS) software where I added important features and rebuilt.",

          color: "#0879bf",
        },
        {
          title: "Algorithm developer",
          company: "Learnbay",
          company_url: "https://www.linkedin.com/company/learnbay/",
          logo_path: "lb.png",
          duration: "April 2019 - July 2019",
          location: "Banglore, Karnatka",
          description:
            " Worked on Data structures and algorithm with c++ and java.",
          color: "#9b1578",
        },
        {
          title: "Software Engineer Intern",
          company: "North Western Railway",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "nwrp.png",
          duration: "May 2018 - July 2018",
          location: "Ahmedabad, Gujarat",
          description:
            "Worked as backend developer and also worked as frontend developer .Technology used in this project are HTML5 ,CSS3 ,PHP ,Java ,Js. ",
          color: "#fc1f20",
        },
      ],
    },
    
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Cluster Lead",
          company: "Hapiens Digital",
          company_url: "https://www.linkedin.com/company/hapiens/",
          logo_path: "hp.png",
          duration: "June 2020 - Des 2020",
          location: "Remotely",
          description:
            "Responsibility for the management of students of the different zone and Handling different task to lead a team to participate in different  task. ",
          color: "#4285F4",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to built Full stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sp.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Full stack development technology using MERN stack, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@surajpanker82",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambedkarward ward, Bazar chowk,Betul bazar, Dist.-Betul, Madyapradesh - 460004",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/search/suraj+auto+parts/@21.855801,77.9270843,18z/data=!3m1!4b1",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7976978646",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
