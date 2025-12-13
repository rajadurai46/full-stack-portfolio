import React from 'react'
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import { Link } from 'react-router-dom'


export default function ProjectsPreview(){
const items = [{
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
}]
return (
<section className="py-5" data-aos="fade-up">
<div className="container">
<h2 className="h3 mb-3 text-center">Projects</h2>
<div className="row g-3">
{items.map((pro, i)=> (
<div key={i} className="col-md-6">
<div className="p-3 bg-white rounded-3 card-hover">
<h5>{pro.title}</h5>
<p className="text-muted">{pro.desc}</p>
<img src={pro.image} alt={pro.title} className="img-fluid rounded mb-3" />
<a className="btn btn-sm btn-outline-primary me-2" href={pro.link}>Demo</a>
<a className="btn btn-sm btn-outline-secondary" href={pro.repo}>Repo</a>
</div>
</div>
))}
</div>
<div className="mt-3">
<Link to="/projects" className="btn btn-accent mx-auto d-grid col-2">See all projects</Link>
</div>
</div>
</section>
)
}