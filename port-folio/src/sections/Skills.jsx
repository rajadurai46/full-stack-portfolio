import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaJava, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaNode, FaGithub, FaDocker } from "react-icons/fa6";
import { SiExpress, SiSpringboot, SiKubernetes, SiMysql, SiMongodb } from "react-icons/si";



const SKILLS = [
{name:'HTML5', icon:<AiFillHtml5 color='orange'/>},
{name:'CSS3', icon:<FaCss3Alt color='blue'/>},
{name:'Bootstrap', icon:<FaBootstrap color='#7C4DFF'/>},
{name:'JavaScript', icon:<RiJavascriptFill color='#FFD600'/>},
{name:'React', icon:<FaReact color='#53C1DE'/>},
{name:'Node.js', icon:<FaNode color='green'/>},
{name:'Express.js', icon:<SiExpress color='#212121'/>},
{name:'Java', icon:<FaJava color='#1A6DFF'/> },
{name:'Spring-Boot', icon:<SiSpringboot color='green'/>},
{name:'Git', icon:<FaGitAlt color='orange'/>},
{name:'GitHub', icon:<FaGithub/>},
{name:'Docker', icon:<FaDocker color='#2395EC'/>},
{name:'Kubernetes', icon:<SiKubernetes color='#0277BD'/>},
{name:'MySQL', icon:<SiMysql color='#F57F17'/>},
{name:'MongoDB', icon:<SiMongodb color='#499D4A'/>}
]


export default function Skills(){
return (
<section id="skills" className="py-5">
<div className="container">
<h2 className="h3 mb-4 text-center" data-aos="fade-up">Skills</h2>
<div className="row g-3">
{SKILLS.map(s=> (
<div key={s.name} className="col-6 col-md-4" data-aos="zoom-in" data-aos-delay="60">
<div className="p-3 bg-white rounded-3 text-center card-hover">
<div className="fs-1 icon-bounce">{s.icon}</div>
<div className="mt-2 fw-semibold">{s.name}</div>
</div>
</div>
))}
</div>
</div>
</section>
)
}