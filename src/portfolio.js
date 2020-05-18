
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sebastiaan Hilbers",
  title: "Hi all, I'm Sebastiaan",
  subTitle: emoji("Passionate freelance fullstack developer with 10+ years of experience based in Den Bosch, The" +
    " Netherlands. I specialize in Enterprise apps (Symfony 4/5 and Vue.js)"),
  resumeLink: "https://drive.google.com/file/d/1s8NXO95x_wvPSxnJeBiMm01Z8Pl5ayxi/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/bashilbers",
  linkedin: "https://www.linkedin.com/in/sebastiaan-hilbers-b4a3b327/",
  gmail: "sebastiaan@hilbers.tech",
  gitlab: "https://gitlab.com/sebastiaan5"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Applying Design Pattersn & DDD"),
    emoji("⚡ Integration of third party services"),
    emoji("⚡ BDD, TDD and writing clean code"),
    emoji("⚡ Creating Monolithic/Microsevices and/or cloud functions"),
    emoji("⚡ Working with containers (Docker, ECR, Kubernetes etc.)"),
    emoji("⚡ CI/CD pipelines"),
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "GIT",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "symfony",
      fontAwesomeClassname: "fab fa-symfony"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
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
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "PHP7",  //Insert stack or technology you have experience in
      progressPercentage: "95%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "ES6",
      progressPercentage: "70%"
    },
    {
      Stack: "Devops",
      progressPercentage: "50%"
    },
    {
      Stack: "Frontend development",
      progressPercentage: "40%"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: null,
  githubUserName: 'bashilbers',
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://media-exp1.licdn.com/dms/image/C560BAQFZBRxxNbSIng/company-logo_200_200/0?e=1597881600&v=beta&t=wh98GpQ1gl5Hk4h1a7CVc9lWLj7ny3Gfyno5Zka9vEE",
      link: "https://funix.nl"
    },
    {
      image: "https://media-exp1.licdn.com/dms/image/C4D0BAQGXmrFK-fc0qg/company-logo_200_200/0?e=1597881600&v=beta&t=psnWe02BlnYmP37KyxGr36skBm-Re5EQ84f84mhoPYw",
      link: "https://logisticforce.nl"
    },
    {
      image: "https://media-exp1.licdn.com/dms/image/C4E0BAQEg7abOy57QrA/company-logo_200_200/0?e=1597881600&v=beta&t=rt0kVNCbkUulWwwPtjU6p5WxCkHECDKg7YOvrUcMi4k",
      link: "https://basebuilder.com"
    },
    {
      image: "https://media-exp1.licdn.com/dms/image/C4D0BAQHLedUVS6I9xw/company-logo_200_200/0?e=1597881600&v=beta&t=JZNa4SmLMsywngvFUfhJKnEdTydf1cNnjr4zD3yTw1Q",
      link: "https://adchieve.com"
    },
    {
      image: "https://media-exp1.licdn.com/dms/image/C4E0BAQHeN8_Y4gxzJg/company-logo_200_200/0?e=1597881600&v=beta&t=u-6FfxVnK5677qBh_mLCz_CpnsbXCUrRwJKiVjQCrs4",
      link: "https://www.riffonline.com/"
    },
    {
      image: "https://media-exp1.licdn.com/dms/image/C4E0BAQFOlKKUzA4Png/company-logo_200_200/0?e=1597881600&v=beta&t=b9I-M5JBqo1bQdJS6-3FER-5E05c5q2ObeNWPJWZlTM",
      link: "https://insiders.nl"
    },
    {
      image: "https://media-exp1.licdn.com/dms/image/C560BAQF9aAW_GW0FBw/company-logo_200_200/0?e=1597881600&v=beta&t=vZipd68nZreGSFN_MVhaM53iGdmiCTCYX_GdI3DkdZ8",
      link: "https://tradetracker.com"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
