import * as React from "react";
import { BoardContainer } from "components";

import "./style.scss";

function Dashboard() {
	return (
		<main className="Dashboard">
			<BoardContainer className="Board-container" />
		</main>
	);
}

export default Dashboard;
