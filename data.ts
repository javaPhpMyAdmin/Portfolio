import { IProject, IService, ISkill } from './type'
import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { BsCircleFill } from 'react-icons/bs'

export const services: IService[] = [
    {
        title: 'Frontend Development',
        about: 'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b>',
        Icon: RiComputerLine,
    },
    {
        title: 'Backend Development',
        about: 'Handle database, server, api using <b>Express</b> & other popular frameworks',
        Icon: FaServer,
    },
    {
        title: 'Api Development',
        about: 'I can develop robust REST API using <b>Python-Flask</b>, <b>PHP</b> & <b>Node API</b>',
        Icon: AiOutlineApi,
    },
    {
        title: 'Competitive Coder',
        about: 'A daily problem solver in <b>HackerRank</b> and <b>Leet Code</b>',
        Icon: MdDeveloperMode,
    },
    {
        title: 'UI/UX designer',
        about: 'Stunning user interface designer using <b>Figma</b> and <b>Sketch</b>',
        Icon: AiOutlineAntDesign,
    },
    {
        title: 'UI/UX designer',
        about: 'TODO....Stunning user interface designer using <b>Figma</b> and <b>Sketch</b>',
        Icon: RiComputerLine,
    },
]

export const languages: ISkill[] = [
    {
        name: 'Python',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Java Script',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'React Native',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'ReactJS',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'NodeJS',
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name: 'Flask',
        level: '40%',
        Icon: BsCircleFill
    },
    {
        name: 'Bootstrap',
        level: '70%',
        Icon: BsCircleFill
    },

]
export const tools: ISkill[] = [
    {
        name: 'Figma',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Sketch',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'Trello',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'Jira',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Git',
        level: '80%',
        Icon: BsCircleFill
    },
]

export const projects: IProject[] = [
    {
        id:1,
        name: 'COVID TRACKER',
        description: 'This app shows a statistical view about corona virus over the world',
        image_path: '/images/chatapp.jpg',
        deployed_url:'',
        github_url:'',
        category:['react'],
        key_techs:['React', 'Chart.js', 'Material UI']
    },
    {
        id:2,
        name: "Algorithm Visualizer",
        image_path: "/images/chatapp.jpg",
        deployed_url: "https://visual-algorithm.web.app/",
        github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
        category: ["react"],
        description:
          "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
        key_techs: ["React", "firebase", "Framer Motion"],
      },
    
      {
        id:3,
        name: "Dev Talks",
        image_path: "/images/chatapp.jpg",
        deployed_url: "https://dev-talks.herokuapp.com/",
        github_url: "https://github.com/Dey-Sumit/Dev-talks",
        category: ["node", "mongo", "react"],
        description:
          "Social Media app for developers who can share project,create posts,etc...",
        key_techs: [
          "React",
          "Redux",
          "Node",
          "Express",
          "Mongo",
          "REST API",
          "Bootstrap",
        ],
      },
    
      {
        id:4,
        name: "Realtime Chat App",
        image_path: "/images/chatapp.jpg",
        deployed_url: "https://sumit-chat.netlify.app/",
        github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
        category: ["node", "react"],
        description:
          "Basic Realtime Chat App where one can create a room can talk to each other",
        key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
      },
    
      {
        id:5,
        name: "Tweeter Clone",
        image_path: "/images/chatapp.jpg",
        deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
        github_url: "https://github.com/Dey-Sumit/tweetme",
        category: ['python-flask', "react"],
        description:
          "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
        key_techs: ["React", "Django", "Django REST API"],
      },
    
      {
        id:6,
        name: "Color Classification tf.js",
        image_path: "/images/chatapp.jpg",
        deployed_url: "!#",
        github_url: "https://github.com/Dey-Sumit/color-classification",
        category: ["express"],
        description:
          "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
        key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
      },
      {
        id:7,
        name: "YouTube using YouTube ",
        image_path: "/images/chatapp.jpg",
        deployed_url: "https://not-utube.web.app/",
        github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
        category: ["express"],
        description:
          'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
        key_techs: [
          "React",
          "Redux",
          "Firebase Auth",
          "YouTube API",
          "Sass",
          "Bootstrap",
        ],
      },
      {
        id:8,
        name: "Football App",
        image_path: "/images/chatapp.jpg",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: ["react"],
        description:
          "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
      },
]