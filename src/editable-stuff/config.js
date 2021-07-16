// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ariel",
  middleName: "",
  lastName: "Yeung",
  message: " Passionate Programmer Ready To Make a Difference. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Ariel-Yeung",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/man-yi-ariel-yeung-45793313a",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  // imageLink: require("../editable-stuff/ariel.jpg"),
  imageSize: 375,
  message:
    "My name is Man Yi (Ariel) Yeung. I'm a student at Drexel University studying for a BS in Chemical Engineering and a MS in cybersecurity (Computer Science track), graduating in June 2022. I enjoy coding because I love being hyper-focused when I code. I enjoy how programming allows us to bring ideas to life and build interesting solutions to problems. In my spare time, I like to play piano and basketball. Recently, I just found new hobbies, painting and wall-climbing.",
  resume: "",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Ariel-Yeung", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["ecommerce-site", "email-feedback-collector", "stock_prediction", "business-website-gw"],
  specificReposExternalLink: {"ecommerce-site": {name: "deployed page", url: "https://ecommerce-mock-live.herokuapp.com/"}, "email-feedback-collector": {name: "deployed page", url: "https://email-feedback-collector.herokuapp.com/"}, "stock_prediction": {name: "paper", url: "https://github.com/Ariel-Yeung/stock_prediction/blob/main/report/cs_613_final_report.pdf"}, "business-website-gw": {name: "deployed page", url: "https://shgreatwin.com/"}}
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Hobbies",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/ariel.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/ariel.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"161",
    height:"250"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Technical Skills",
  hardSkills: [
    { name: "Python", value: 85 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 80 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 75 },
    { name: "Node.JS", value: 60 },
    { name: "HTML/CSS", value: 55 },
    { name: "SQL", value: 55 },
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "my442@drexel.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer Co-op',// Here Add Company Name
      companylogo: require('../assets/img/glodon.png'),
      date: 'March 2021 – Present (6-month)',
    },
    {
      role: 'Regulatory Affairs Intern',
      companylogo: require('../assets/img/advanzpharma.jpg'),
      date: 'December 2019 – February 2020',
    },
    {
      role: 'Student Researcher',
      companylogo: require('../assets/img/drexel.png'),
      date: 'June 2019 – September 2019',
    },
    {
      role: 'Research and Development Co-op',
      companylogo: require('../assets/img/heraeus.jpg'),
      date: 'September 2019 – March 2019',
    },
  ]
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
