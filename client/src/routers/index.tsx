import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Dashboard } from "pages";

function Root() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Dashboard}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Root;
