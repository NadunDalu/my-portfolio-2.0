import { FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaDocker, FaGitAlt, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPython, SiJava, SiMysql, SiFirebase, SiFigma, SiMarkdown, SiVisualstudiocode, SiNextdotjs } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaJava } from "react-icons/fa6";
import { SiFlutter } from "react-icons/si";

export const skillData = {
    mainData: {
        title: "Skills",
        description: "A showcase of my professional technical abilities."
    },
    technical: [
        { name: 'JavaScript', icon: FaJsSquare },
        { name: 'React.js', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'CSS3', icon: FaCss3Alt },
        { name: 'HTML5', icon: AiFillHtml5 },
        { name: 'Java', icon: FaJava },
        { name: 'Tailwind CSS', icon: SiTailwindcss  },
        { name: 'Flutter', icon: SiFlutter },
        { name: 'MongoDB', icon: FaDatabase },
        { name: 'Python', icon: SiPython },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Git & GitHub', icon: FaGitAlt },
        { name: 'Docker', icon: FaDocker },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'Figma', icon: SiFigma },
        { name: 'Next.js', icon: SiNextdotjs }
        
        
    ]
};