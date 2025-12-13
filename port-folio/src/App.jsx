import { Routes, Route } from 'react-router-dom'
import {motion} from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import Skills from './sections/Skills'
import ContactPage from './pages/ContactPage'
import Education from './sections/Education'
import Experience from './sections/Experience'


export default function App(){
return (
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Routes>
<Route path="/" element={<Layout />}>
<Route index element={<Home />} />
<Route path="projects" element={<ProjectsPage />} />
<Route path="about" element={<AboutPage />} />
<Route path="skills" element={<Skills />} />
<Route path='education' element={<Education/>}/>
<Route path='experience' element={<Experience/>}/>
<Route path="contact" element={<ContactPage />} />
</Route>
</Routes></motion.div>
)
}

