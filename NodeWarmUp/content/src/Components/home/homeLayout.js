import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';


export const HomeLayout = (props) => {
 
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
							<Link to="/user/sell" className="nav-item nav-link">
								Sell tickets
							</Link>
							
						</div>
					</div>
				</nav>
          
      </React.Fragment>
    );
  }


