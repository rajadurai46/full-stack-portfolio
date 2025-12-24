import React, {useState, useEffect} from 'react'
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import project4 from "../assets/project4.jpg"

const ALL = [
{
id: 1,
title: 'Car Rental Website',
desc: 'This fully functional car rental website provides users with a comprehensive platform for browsing and reserving their desired vehicles.',
image: project1,
repo: "https://github.com/rajadurai46/Car-Rental-Website",
link: "https://templecity-car-rent-website.netlify.app/"
},
{
id: 2,
title: 'Food Delivery Website',
desc: 'This website serves as a comprehensive platform for food ordering and delivery, connecting customers with a diverse array of restaurants and cuisines.',
image: project2,
repo: "https://github.com/rajadurai46/Food-Delivery",
link: "https://tomato-fooddel.netlify.app/"
},
{
id: 3,
title: 'Virtual Reality',
desc: 'This is accomplished by offering a comprehensive platform that streamlines the virtual reality (VR) development process, rendering it accessible to both novice and seasoned developers.',
image: project3,
repo: "https://github.com/rajadurai46/virtual-reality",
link: "https://virtual-reality-dev.netlify.app/"
},
{
id: 4,
title: 'Brainwave',
desc: 'Envision a digital domain characterized by refined, futuristic interfaces, operated by sophisticated AI robots poised to provide comprehensive support for all your AI requirements.',
image: project4,
repo: "https://github.com/rajadurai46/brainwave-ai",
link: "https://brain-ai.netlify.app/"
}
].map((pro,i)=>({id:i+1, no:`Project ${i+1}`, title:`${pro.title}`, desc:`${pro.desc}`, image:`${pro.image}`, repo:`${pro.repo}`, live:`${pro.link}`}))

export default function ProjectsPage(){
const perPage = 2
const [page,setPage] = useState(1)
const [active,setActive] = useState(null)
const pages = Math.ceil(ALL.length / perPage)
const start = (page-1)*perPage
const pageItems = ALL.slice(start,start+perPage)


useEffect(()=>{window.scrollTo(0,0)},[page])

return (
<section className="py-5">
<div className="container">
<h2 className="h3 mb-4">Projects</h2>
<div className="row g-3">
{pageItems.map(p=> (
<div className="col-md-6" key={p.id} data-aos="fade-up">
<div className="p-3 bg-white rounded-3 card-hover h-100">
{p.image && <img src={p.image} alt={p.no} className="img-fluid rounded mb-3" />}
<h5>{p.no}</h5>
<p className="text-muted">{p.desc}</p>
<div className="mb-2">
{(p.tech||[]).map(t=> <span key={t} className="badge text-bg-light me-1">{t}</span>)}
</div>


<div className="d-flex gap-2">
<button className="btn btn-sm btn-outline-primary" onClick={()=>setActive(p)}>Details</button>
<a className="btn btn-sm btn-outline-secondary" href={p.repo||'#'}>Repo</a>
</div>
</div>
</div>
))}
</div>


<nav className="mt-4">
<ul className="pagination justify-content-center">
<li className={`page-item ${page===1? 'disabled':''}`}><button className="page-link" onClick={()=>setPage(p=>Math.max(1,p-1))}>Prev</button></li>
{Array.from({length:pages}).map((_,i)=> (
<li key={i} className={`page-item ${page===i+1? 'active':''}`}><button className="page-link" onClick={()=>setPage(i+1)}>{i+1}</button></li>
))}
<li className={`page-item ${page===pages? 'disabled':''}`}><button className="page-link" onClick={()=>setPage(p=>Math.min(pages,p+1))}>Next</button></li>
</ul>
</nav>
</div>


{active && (
<div className="modal fade show" style={{display:'block'}} onClick={()=>setActive(null)}>
<div className="modal-dialog modal-lg modal-dialog-centered" onClick={e=>e.stopPropagation()}>
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title">{active.title}</h5>
<button className="btn-close" onClick={()=>setActive(null)}></button>
</div>
<div className="modal-body">
{active.image && <img src={active.image} alt={active.title} className="img-fluid rounded mb-3" />}
<p>{active.desc}</p>
<div className="mb-2">
{(active.tech||[]).map(t=> <span key={t} className="badge text-bg-secondary me-1">{t}</span>)}
</div>
</div>
<div className="modal-footer">
<a className="btn btn-outline-secondary" href={active.live||'#'}>Live</a>
<button className="btn btn-accent" onClick={()=>setActive(null)}>Close</button>
</div>
</div>
</div>
</div>
)}
</section>
)
}
