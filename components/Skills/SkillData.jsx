import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaCss3Alt,
  FaLinux,
  FaNetworkWired,
  FaDesktop,
  FaTerminal
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiPython,
  SiMysql,
  SiFirebase,
  SiFigma,
  SiMarkdown,
  SiNextdotjs,
  SiFlutter
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { AiFillHtml5 } from "react-icons/ai";
import { FaJava } from "react-icons/fa6";

export const skillData = {
  mainData: {
    title: "Skills",
    description: "A showcase of my professional technical abilities."
  },
  categories: [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: FaJsSquare },
        { name: "HTML5", icon: AiFillHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "Java", icon: FaJava },
        { name: "Python", icon: SiPython },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", icon: FaReact },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Flutter", icon: SiFlutter },
        { name: "Next.js", icon: SiNextdotjs },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: FaDatabase },
        { name: "MySQL", icon: SiMysql },
        { name: "Firebase", icon: SiFirebase },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", icon: FaGitAlt },
        { name: "Docker", icon: FaDocker },
        { name: "Figma", icon: SiFigma },
        { name: "Linux", icon: FaLinux },
        { name: "Networking", icon: FaNetworkWired },
        { name: "VirtualBox", icon: FaDesktop },
        { name: "Putty", icon: FaTerminal },
        { name: "Packet Tracer", icon: VscVscode },
        { name: "GNS3", icon: SiMarkdown },
      ]
    }
  ]
};
