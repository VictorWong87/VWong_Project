import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './login/loginPage';
import HomePage from './home/homePage';
import SellPage from './sell/sellPage';


//const NoMatch: React.StatelessComponent<{ location }> = ({ location }) => (
//    <div>No URL matching {location.pathname}</div>
//);


class AppRouter extends React.Component {
	componentDidMount() {
		// apiExecute("/api/common/logins", "GET", null)
		// 	.then(response => {
		// 		if (response.item.id != 0) {
		// 			this.props.getUserData(response.item);
		// 			apiExecute(`/api/notifications/${this.props.user.profileId}`, "GET", null)
		// 				.then(response => {
		// 					this.props.getNewNotif(response.item);
		// 				})
		// 				.catch(error => console.log(error))
		// 		}
		// 	})
		// 	.catch(error => {
		// 		console.log("AppRouter err")
		// 		console.log(error);
		// 		this.props.history.push("/");
		// 	})


	}

	render() {
		return (
			<React.Fragment>
                <BrowserRouter>
				<Switch>
					<Route exact path="/" component={LoginPage} />
					<Route path="/user/sell" component={SellPage} />
					<Route exact path="/user/home" component={HomePage} />
					
				</Switch>
                </BrowserRouter>
	    </React.Fragment>
		);
	}
}

export default AppRouter;