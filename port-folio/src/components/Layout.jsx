
import { Outlet } from 'react-router-dom'
import TopNavbar from './TopNavbar'
import BottomNav from './BottomNav'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa"
import { FaRegCopyright } from "react-icons/fa6"



export default function Layout(){
return (
<>
<TopNavbar />
<div style={{paddingTop: '72px', paddingBottom:'90px'}}>
<Outlet />
</div>
<BottomNav />
<footer className="py-4 mt-5 footer bg-secondary-subtle">
<div className="container text-center text-info-emphasis fw-bold">
<small><FaRegCopyright/> {new Date().getFullYear()} Rajadurai - Full Stack Developer</small>

   <div className='justify-content-center gap-3 d-flex'>

    <a href='https://www.facebook.com/irajadurai98'><FaFacebook color='#039BE5' size={23}/></a>
 
 
     <a href='https://www.instagram.com/irajadurai46?igsh=MWw5dGZkbWw4cmI4bg=='><FaInstagram color='#CC5DE8' size={23}/> </a>
      <a href='https://wa.me/qr/VX7Y5WNX5VOUG1'><FaWhatsapp color='#40C351' size={23}/> </a>
       <a href='https://www.linkedin.com/in/rajadurai-a-a894a71aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
            <FaLinkedin color='#0078D4' size={23}/> </a>
            <a href='https://github.com/rajadurai46'>
            <FaGithub color='#000000' size={23} /> </a>

</div>
</div>
</footer>
</>
)
}
