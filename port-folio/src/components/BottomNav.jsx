
import { Link, useLocation } from 'react-router-dom'
import { CiHome } from "react-icons/ci";
import { BsFilePersonFill } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdWorkHistory, MdOutlineCastForEducation } from "react-icons/md";
import { IoMdContact } from "react-icons/io";


export default function BottomNav(){
const loc = useLocation()
const items = [
{to:'/', label:'Home', icon:<CiHome />},
{to:'/about', label:'About', icon:<BsFilePersonFill />},
{to:'/skills', label:'Skills', icon:<GiBrain />},
{to:'/projects', label:'Projects', icon:<AiOutlineFundProjectionScreen />},
{to:'/experience', label:'Experience', icon:<MdWorkHistory />},
{to:'/education', label:'Education', icon:<MdOutlineCastForEducation />},
{to:'/contact', label:'Contact', icon:<IoMdContact />}
]


return (
<nav className="bottom-nav" aria-label="bottom navigation">
{items.map(it=> (
<Link key={it.to} to={it.to} className={loc.pathname===it.to? 'active':''} title={it.label}>{it.icon}</Link>
))}
</nav>
)
}