import {
    githubRed,
    linkedIn,
    resumeLogo,
    myResume,
    
    mobile,
    backend,
    creator,
    web,

    python,
    c,
    cPlusPlus,
    cSharpNet,
    java,
    javascript,
    typescript,
    go,
    reactjs,
    tailwind,
    nodejs,
    flask,
    django,
    aws,
    firebase,
    docker,
    git,
    postman,
    postgresql,
    mongodb,
    mysql,

    emerest,
    massEnergize,
    koc,
    WAISN,
    conedison,

    ListenUp,
    imageCompressor,
    sphereMap,
    whereToWatch,
    scanCleaner,
    goalie,
  } from "../assets";
  
  export const navMediaLinks = [
    {
        id: "GitHub",
        img: githubRed,
        link: "https://github.com/mattia-danese",
    },
    {
        id: "LinkedIn",
        img: linkedIn,
        link: "https://www.linkedin.com/in/danese",
    },
    {
        id: "Resume",
        img: resumeLogo,
        link: myResume,
    }
  ];

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack",
      icon: web,
    },
    {
      title: "Web & API",
      icon: mobile,
    },
    {
      title: "Automation",
      icon: backend,
    },
    {
      title: "High-Performance",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cPlusPlus,
    },
    {
      name: "C#/.NET",
      icon: cSharpNet,
    },
    {
      name: "Java",
      icon: java,
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
      name: "Go",
      icon: go,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Flask",
      icon: flask,
    },
    {
      name: "Django",
      icon: django
    },
    {
      name: "AWS",
      icon: aws
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Docker",
      icon: docker
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
  ];

  const experiences = [
    [{
        title: "Backend Software Engineer",
        company_name: "Emerest Connect",
        icon: emerest,
        iconBg: "#E6DEDD",
        date: "Jun 2024 - May 2025",
        tags: [
            {
                name: "C#/.NET",
                color: "violet-text-gradient"
            },
            {
                name: "MongoDB",
                color: "green-text-gradient"
            },
        ],
        points: [
            "Lead developer for reporting infrastructure, driving seamless cross-team collaboration and communication between dev and data teams",
	        "Developed 16 API endpoints (including all models, services, and handlers) for new client-facing reporting data pipelines, supporting both JSON and CSV responses and various client-side customization",
            {
                text: "I held this position at the same time as another position (Data Software Engineer) at Emerest Connect (see below). This meant operating on two distinct teams - each with its own product manager, environment, tech stack, meetings, and stakeholders",
                bullet_style: "circle"
            }
        ],
      },
      {
        title: "Data Software Engineer",
        company_name: "Emerest Connect",
        icon: emerest,
        iconBg: "#E6DEDD",
        date: "Jan 2024 - May 2025",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient"
            },
            {
                name: "Typescript",
                color: "lightblue-text-gradient"
            },
            {
                name: "AWS",
                color: "yellow-text-gradient"
            },
            {
                name: "MongoDB",
                color: "green-text-gradient"
            },
        ],
        points: [
            "Developed 20+ data pipelines for daily/weekly upper management reports",
	        "Solely responsible for deploying an automated pipeline to ingest and clean highly unstructured patient data from a third-party healthcare API",
	        "Individually designed, developed, and managed a MongoDB (NoSQL) database that stores critical patient data principally used for client-facing reports",
	        "Independently refactored the entire backend infrastructure codebase (30+ preexisting AWS Lambda definitions) by implementing a hierarchal (abstract) class structure and private modules",
            {
                text: "Six months into this role, I began concurrently working as a Backend Software Engineer at Emerest Connect (see above). This meant operating on two distinct teams - each with its own product manager, environment, tech stack, meetings, and stakeholders",
                bullet_style: "circle"
            }
        ],
      }
    ],
    {
      title: "Full Stack Intern",
      company_name: "MassEnergize",
      icon: massEnergize,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Aug 2022",
      tags: [
        {
            name: "React",
            color: "lightblue-text-gradient"
        },
        {
            name: "Django",
            color: "green-text-gradient"
        },
        {
            name: "Google-API",
            color: "orange-text-gradient"
        },
      ],
      points: [
        "Used the Google Docs API to implement efficient importing and exporting of user content to the MassEnergize Admin Portal.",
        "Designed the specific import and export template docs through talks directly with clients.",
        "Implemented logic to ensure username uniqueness across all existing MassEnergize Frontend Portal users and new future users.",
        "Restructured the MassEnergize registration page with a focus on simplicity, user experience, and responsiveness.",
        "Identified stale stored media and implemented a monthly cron function to delete such media.",
      ],
    },
    {
        title: "Full Stack Intern",
        company_name: "Washington Immigrant Solidarity Network",
        icon: WAISN,
        iconBg: "#383E56",
        date: "Oct 2021 - Dec 2021",
        tags: [
            {
                name: "React",
                color: "lightblue-text-gradient"
            },
            {
                name: "Django",
                color: "green-text-gradient"
            },
        ],
        points: [
          "Debugged and addressed several issues of the WAISN Resource Finder.",
          "Added additional functionality and desired features to the Resource Finder as they were presented to me directly from clients.",
          "Aided in the implementation of auto-translating all content in the Resource Finder to multiple languages.",
          "Utilized Git/GitHub for file management and version control.",
        ],
    },
    {
      title: "Blockchain Research Intern",
      company_name: "Koç University",
      icon: koc,
      iconBg: "#383E56",
      date: "July 2021 - Aug 2021",
      tags: [
        {
            name: "Python",
            color: "blue-text-gradient"
        },
        {
            name: "Algorand-Blockchain",
            color: "violet-text-gradient"
        },
      ],
      points: [
        "Implemented anonymous and decentralized online donation scheme as a public ledger (i.e. blockchain) application",
        "Used the Algorand blockchain and Python SDK provided by Algorand.",
      ],
    },
    {
      title: "Engineering Intern",
      company_name: "Con Edison",
      icon: conedison,
      iconBg: "#E6DEDD",
      date: "July 2018 - Aug 2018",
      tags: [
        {
            name: "VBA",
            color: "green-text-gradient"
        },
        {
            name: "AVAIL",
            color: "orange-text-gradient"
        },
      ],
      points: [
        "Added various functionality to Excel spreadsheets, utilized by various employees in the Control Center, with VBA.",
        "Used AVAIL software to compile 200+ geo-fences around MTA signal powering structures which increased the Control Center's efficiency and ability to track Con Edison trucks and organize truck-job assignments.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Listen Up",
      description:
        "Listen Up is a voice-based application that provides news to those that do not have a stable internet connection or are visually impaired. Users call the Listen Up phone number and can get update-to-date articles read to them regarding a specific topic, or listen to currently trending world news articles.",
      tags: [
        {
          name: "Python-Flask",
          color: "yellow-text-gradient",
        },
        {
          name: "Twilio-API",
          color: "green-text-gradient",
        },
        {
          name: "GoogleNews-API",
          color: "blue-text-gradient",
        },
        {
            name: "ChatGPT-API",
            color: "orange-text-gradient",
          },
      ],
      image: ListenUp,
      source_code_link: "https://github.com/mattia-danese/ListenUp",
    },
    {
        name: "Streaming Finder",
        description:
          "A React.js application that displays the streaming information of a user-provided movie or TV show. Users can choose which streaming services and countries their search should consider. Data is retreived from an external API and is displayed in tabular format.",
        tags: [
          {
            name: "React",
            color: "lightblue-text-gradient",
          },
          {
            name: "Tailwind",
            color: "blue-text-gradient",
          },
          {
            name: "REST-API",
            color: "orange-text-gradient",
          },
        ],
        image: whereToWatch,
        source_code_link: "https://github.com/mattia-danese/MovieStreamingFinder",
    },
    {
        name: "Goalie Position: RL Model",
        description:
          "A Reinforcement Learning application where a Multi-Armed Bandit agent learns optimal goalkeeper positioning given the position of an incoming attacker. The attacker chooses where to shoot based on a two dimensional shot distribution heatmap relative to the attacker's poistion, unbeknownst to the goalkeeper agent.",
        tags: [
          {
            name: "Python",
            color: "yellow-text-gradient",
          },
          {
            name: "Reinforcement-Learning",
            color: "green-text-gradient",
          },
        ],
        image: goalie,
        source_code_link: "https://github.com/mattia-danese/TuftsUniversity/tree/main/CS%20138%20-%20Reinforcement%20Learning/Final%20Project/src",
    },
    {
        name: "Image Compressor and Decompressor",
        description:
          "A C application that compresses images files and decompresses compressed files. Utilized provided mathematical and RBG algorithms and implemented various bit-packing algorithms through bit-wise arithmetic.",
        tags: [
          {
              name: "C",
              color: "violet-text-gradient",
          },
          {
              name: "Bit-Packing",
              color: "orange-text-gradient",
          },
        ],
        image: imageCompressor,
        source_code_link: "https://github.com/mattia-danese/TuftsUniversity/tree/main/CS%20040%20-%20Machine%20Structure%20and%20Assembly/Homeworks/hw4",
      },
    {
        name: "Spherical Environment Mapping",
        description:
          "A C++ application scene that implements spherical environment mapping with shaders. There is a large evironment sphere which represnts the environment and a small sphere in the center which reflects the environment that it is in.",
        tags: [
          {
            name: "C++",
            color: "violet-text-gradient",
          },
          {
            name: "fltk",
            color: "orange-text-gradient",
          },
          {
            name: "Shaders",
            color: "blue-text-gradient",
          },
        ],
        image: sphereMap,
        source_code_link: "https://github.com/mattia-danese/TuftsUniversity/tree/main/CS%20175%20-%20Computer%20Graphics/Assignments/a5",
    },
    {
        name: "Scan Cleaner",
        description:
          "A C application that removes black edges from images, where a 'black edge' are black pixels on the edge or black pixels connected to other black edges. This can be used to clean up badly scanned files or images that  have unwanted black pixels on the edges.",
        tags: [
          {
            name: "C",
            color: "violet-text-gradient",
          },
        ],
        image: scanCleaner,
        source_code_link: "https://github.com/mattia-danese/TuftsUniversity/tree/main/CS%20040%20-%20Machine%20Structure%20and%20Assembly/Homeworks/hw2",
      },
  ];
  
  export { services, technologies, experiences, projects };