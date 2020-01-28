import * as React from "react";
import apple from "apple";
import banana from "banana.json";
import logo from "assets/logo.svg";
import { Hello } from "Hello";

import "style.css";
import "style.scss";

const App: React.FC = () => {
	apple();
	console.log(banana);
	console.log(process.env.HELLO_DOT_ENV);
	console.log(process.env.NODE_ENV);

	return (
		<>
			<img className={"react-logo"} src={logo}></img>
			<h1 className={"title"}>reactdd</h1>
			<Hello compiler="TypeScript" framework="React" />
		</>
	);
};

export default App;
