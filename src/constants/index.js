import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [

  {
    title: "Rabble Ambassador",
    company_name: "Rabble",
    icon: edunet,
    iconBg: "#161329",
    date: "Nov 2024 - Present",
    points: [
      "Contributing in scaling Rabble telegram bot to simplify crypto transactions.",
      "Participated in Rabble MiniHack and won 100$",
      "Currently working in RabbleGuilds",
    ],
  },
 
  {
    title: "Community Ambassador",
    company_name: "PUSH Chain | Web3.0 Company",
    icon: eduskill,
    iconBg: "#161329",
    date: "Jan 2024 - Present",
    points: [
      "Worked as a Community Ambassador at PUSH Chain, a Web3.0 company, where I was responsible for managing the community and engaging with the audience.",
      "Won 800$PUSH at Internal Push Hackathon",
      "Made video Content explaining differnt features of PushChain and helped in improving docs ",
    ],
  },
 
  {
    title: "COMMUNITY Intern",
    company_name: "HUDDLE01",
    icon: mathwork,
    iconBg: "#161329",
    date: "June 2024 - September 2024",
    points: [
      "Making the community engaging and spreading information about HUDDLE01 and Huddle nodes through making videos , blogs and threads.",
      "Helped in organizing events and hackathons",
      "Developed expertise in WebRTC's workflow and Web3.0",
    ],
  }, 
  
];

export const projects = [
  {
    name: "StakeRich",
    description:
      " StakeRich, empowers users to seamlessly buy, sell, and swap tokens with real-time crypto price tracking. We’ve integrated cutting-edge ZK-proof technology, enhancing security while optimizing transactions",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Solidity", color: "pink-text-gradient" },
      { name: "3JS", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/kavyansh18/StakeRich",
  },
  {
    name: "Decentralized-Identity-Verification",
    description:
      " decentralized, secure, and tamper-proof identity verification platform using blockchain technology. Take control of your digital identity today.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Ipfs", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/rajdeep-singha/Decentralized-Identity-Verification",
  },
  {
    name: "Currency-Convertor",
    description:
      "Coverting 300 plus currencies with real time exchange rates using API Routing and this project secifies the use of API Routing in React . I have gained ecperience of API routing and practised Api routing in this project.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "API Routing", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/rajdeep-singha/CurrencyConverter",
  },
  {
    name: "InvoStake",
    description:
      "AI agents powering your investments Solving Liquidity by making a Utility Layer on top of Liquidity pool",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "C++", color: "blue-text-gradient" },
      { name: "Ethers", color: "blue-text-gradient" },
      { name: "Solidity", color: "blue-text-gradient" },
     
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/mmaroof487/InvoStake",
  },
  {
    name: "MEMEX",
    description:
      "Know the perfect memecoin to buy with gamifying features ",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "TwitterApi", color: "pink-text-gradient" },
      { name: "MongoDb", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/kavyansh18/MemeX",
  },
  {
    name: "ZK-ReUselt",
    description:
      "ur project aims to build ZKREuseit, a decentralized marketplace leveraging the Reclaim Protocol and Polygon zkEVM",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Solidity", color: "green-text-gradient" },
      { name: "Reclaim Protocol", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/tanayarun/Zk-ReUseIt",
  },
];
