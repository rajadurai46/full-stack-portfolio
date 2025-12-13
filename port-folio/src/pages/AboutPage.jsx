import React from 'react'


export default function AboutPage(){
    const certificates = [
{
title: "Java Programmer Certificate",
provider: "Scaler",
year: "2025",
link: "https://moonshot.scaler.com/s/li/ZfzzBYKRmS"
},
{
title: "Product Management Certificate",
provider: "Coursera",
year: "2025",
link: "https://coursera.org/share/16e2152e7e3f3e4deb1df2947a70c646"
},
{
title: "Frontend Web Development Certificate",
provider: "Udemy",
year: "2024",
link: "https://www.udemy.com/certificate/UC-b7990a52-fbe9-4645-8def-814f3548bab6/"
}
]
return (
<section className="py-5 bg-light">
<div className="container text-center">
<h2 className="h3 mb-3">About Me</h2>
<div className="container text-center">
<div className="text-wrap">
<p>I am a passionate MERN Stack and Java Full Stack Developer with strong experience in building scalable, responsive, and high-performance web applications.I specialize in developing end-to-end solutions using MongoDB, Express.js, React.js, Node.js, along with Java, Spring Boot, and RESTful APIs.

I enjoy turning complex problems into clean, efficient, and user-friendly applications. From designing interactive front-end interfaces to building secure and optimized back-end systems, I focus on writing maintainable code and following best development practices.

I have hands-on experience with component-based UI design, API integration, database management, authentication, and deployment workflows. I am always eager to learn new technologies, improve my skills, and adapt to modern development trends.

My goal is to contribute to impactful projects, collaborate with dynamic teams, and continuously grow as a full-stack developer by delivering reliable and innovative software solutions.</p>

<h5 className="mt-4">Certifications</h5>
<div className="row g-3 mt-2 justify-content-center">
{certificates.map((cert, index) => (
<div className="col-md-8" key={index}>
<div className="p-3 bg-white rounded-3 card-hover h-100">
<h6 className="fw-semibold">{cert.title}</h6>
<p className="mb-1 text-muted">{cert.provider} • {cert.year}</p>
<a
href={cert.link}
target="_blank"
rel="noopener noreferrer"
className="btn btn-sm btn-outline-primary mt-2"
>
View Certificate
</a>
</div>
</div>
))}
</div>

</div>
</div>
</div>
</section>
)
}