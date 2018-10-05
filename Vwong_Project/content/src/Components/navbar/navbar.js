import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css"

class Navbar extends React.Component {
    
    render() {
        return (

            <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
				
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup"
					>
						<div className="navbar-nav">
						<img alt="..." src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN5SURBVGhD7ZnJqxVHFIef0040EDUKLrLRJMZhlfwPKgElxIGsHYJmEcSlCA7oKk5bNSunJCJqFmo2QQV3CglOqDtHdOk85vvgHiiahlvdt7s15P7gg7rVt86pfreqzqnzRoYaaqih/tcaDfPgB9gFv8KfPWzvhNXgd0bBB6e5sAfuw7tM/K4vNgfeu76Ek/AWyiabg2OPwxfQucbBFngJZRO7CHthE6ztYds+n5W9+AvQ5ljoRJ/ABShO5G9YAVOhn6bBSvgHinbOwhRoVZ/CDUgdX4fvwI1eVY5ZCjehaFNfrWgyFF/iAIyHQTUBPNVS2/rSZ6NyT5yH1NF6aFraTH2cgzHQmLZC6mADtCUPhdSXnxuRR2x6Ou2DtrUfwt9z+BwGlnEijN4G13Pbmgh3Ifweg4FkxE7P/G+hKy2B8OscXBm1tRvC2GU7Kspf7+seVX9Jc7GrEP53QC15xj+AMPQT5GoW/AGvIcbbNhXxWa7WQYy/B7USTTPUdBIfQ46+gWcQY4s8hQWQI+PIG4ixtRJMU/Ew4E+co8/gCcQ48XOx7zHMgBwZ5WPcKjuqyvtEGDhkR4aOQIx5CIvAgCa27YvnByFH+o4xtfbJUQgDRvXtGXjmxxgnbkbwI5j92rYvnrv8ymwUSTOK36CyTkMYqIpLyV/BF4i+Nb2+4jKrwimoLAeVGcvhg3qR3yEMDLK0fAGxvRjieWdLy/t0GMjd7Ichxrixnbg3PrH9COK5V4AcpZv9ZzuqympHGMg9fmdCcen4udjX6fGbBkSD0iTI0ULoFxDnQ46KAXE2VJbpQFreqZqimI68ghhvu2q1JL1omQ3XroWlQTF3eaUyUfyqR52k8RqE/1r7I+RPmabxFhm60jIIv86hSrJZqhMQBu+Al5629RGY7YZfs4yB5ZpOr7peQ9uUS+oXCH/GJk/DRtRaQaBE2yD1tREakwHN0kzqoIty0F9gWtOoygp0FtWaKEZoo5MCXcgyZhpp5RYsh7ol0+9BG6nNVkumIf9KFppTx2JxwsL0dOgnv+N3r0DRjsspN4sYWO4ZN7z/CihOxDPffx14um0GL1Zi275LUBwj2rKC2fieyJEVQItnadCsirmUcaKxI3YQmQGYQqRBrB/mTo55L/+p6ieDmSUbrwBO0pPoTA/b9pmK++K1E8ChhhpqqP+6Rkb+BeW97jSkKgP7AAAAAElFTkSuQmCC"/>
							<Link to="/user/home" className="nav-item nav-link">
							
								<strong>Poke-Elite  ||</strong>
							</Link>
							<Link to="/user/poke-file" className="nav-item nav-link">
									Poke-File  ||
							</Link>
							<span>
								<Link to="/user/poke-trainer" className="nav-item nav-link">
									Poke-Trainers  ||
								</Link>
							</span>
							<span>
								<Link to="/user/poke-master" className="nav-item nav-link">
									Poke-Masters  ||
								</Link >
							</span>
							<span>
								<Link to="/user/poke-store" className="nav-item nav-link">
									Poke-Store  ||
								</Link>
							</span>
							<span>
								<Link to="/user/poke-links" className="nav-item nav-link">
									Poke-Links  ||
								</Link>
							</span>
							<span>
								<Link to="/user/poke-cards" className="nav-item nav-link">
									Poke-Cards  ||
								</Link>
							</span>
							<span>
								<Link to="/user/poke-mon" className="nav-item nav-link">
									Poke-Mons  ||
								</Link>
							</span>
							<span>
								<Link to="/user/poke-credits" className="nav-item nav-link">
									Poke-Credits  ||
								</Link>
							</span>
							<span>
								<Link to="/user/poke-submit" className="nav-item nav-link">
									Poke-Submit  ||
								</Link>
							</span>
							<span>
								<Link to="/user/about" className="nav-item nav-link">
									About ||
								</Link>
							</span>
							<span>
								<Link to="/user/contact-us" className="nav-item nav-link">
									Contact Us  ||
								</Link>
							</span>
							<span>
								<Link to="/user/logout" className="nav-item nav-link">
									Log Out  ||
								</Link>
							</span>
							
						</div>
					</div>
				</nav>
            </React.Fragment>
        )
    }
}
export default Navbar