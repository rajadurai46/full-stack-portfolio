
import { Link } from 'react-router-dom'


export default function TopNavbar(){


return (
<nav className="navbar navbar-expand-lg bg-light-subtle navbar-shadow fixed-top top-nav d-flex align-items-center justify-content-between px-3">
<div className="container d-flex align-items-center justify-content-between">
<Link to="/" className="navbar-brand fw-bold">PORTFOLIO</Link>

<div className="collapse navbar-collapse" id="nav">
<ul className="nav nav-pills ms-auto">
<li className="nav-item" role='presentation'><Link className="nav-link" to="/">Home</Link></li>
<li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
<li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
<li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
<li className="nav-item"><Link className="nav-link" to="/experience">Experience</Link></li>
<li className="nav-item"><Link className="nav-link" to="/education">Education</Link></li>
<li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

</ul>
</div>
</div>
</nav>
);
}
