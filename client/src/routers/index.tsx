import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Dashboard, Board } from "pages";

function Root() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Dashboard}></Route>
				<Route path="/boards/:id" component={Board}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Root;
