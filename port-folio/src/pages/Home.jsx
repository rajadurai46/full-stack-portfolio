import Skills from '../sections/Skills'
import profile from "../assets/profile.jpg"
import AboutPreview from '../sections/AboutPreview'
import ProjectsPreview from '../sections/ProjectsPreview'
import Education from '../sections/Education'
import Experience from '../sections/Experience'
import ContactPage from './ContactPage'
import ResumeButton from '../components/ResumeButton'
import {ReactTyped} from 'react-typed'





export default function Home(){
return (
<main>
<section className="py-4">
<div className="container py-4">
<div className="row align-items-center">
<div className="col-md-7" data-aos="fade-up">
<h1 className="display-5 fw-bold">Rajadurai <span style={{color:'green'}}>A</span> </h1>
    <h2 className="text-body-secondary fw-bold">I am a {" "}
    <ReactTyped style={{color:'red'}} strings={[ "MERN", "Java"]}
    typeSpeed={90} backSpeed={70} smartBackspace={true} loop={true} />
    Full Stack Developer</h2>
<p className="em">Full Stack Developer - Turning the vision into Reality with Code and Design</p>
<div className="mt-1 gap-1 d-flex">
    <ResumeButton>
        <a href="/projects" className="btn btn-outline-success">Resume</a>
        </ResumeButton>

<a href="/contact" className="btn btn-outline-danger">Contact Me</a>
</div>
</div>
<div className="col-md-5 text-center" data-aos="zoom-in">
<img src={profile} alt="profile" className="profile-photo" />
</div>
</div>
</div>
</section>

<AboutPreview />
<Skills />
<ProjectsPreview />
<Experience/>
<Education/>
<ContactPage/>
</main>
)
}