import React from 'react'
import { Link } from 'react-router-dom'


export default function AboutPreview(){
return (
<section className="py-5 bg-white" data-aos="fade-up">
<div className="container">
<h2 className="h3 mb-3 text-center">About</h2>
<div className="row">
<div className="text-center">
<p>I build full-stack web applications using the MERN stack. I focus on writing maintainable code, scalable APIs and polished user experiences.</p>
<Link to="/about" className="btn btn-outline-primary">Learn more</Link>
</div>
</div>
</div>
</section>
)
}