import * as React from "react";
import logo from "assets/logo.svg";
import RootRouter from "routers";

import "style.scss";

function App() {
	return (
		<>
			<img className="Logo" src={logo}></img>
			<RootRouter />
		</>
	);
}

export default App;
