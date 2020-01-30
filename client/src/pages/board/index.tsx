import * as React from "react";
import { useDnDContext } from "react-useful-dnd";

import { TodoContainer } from "components";

// dummy data
const boardItems: Board[] = [
	{
		id: "one1",
		name: "one",
		todos: [
			{ id: "one2", name: "one1" },
			{ id: "two3", name: "two1" },
			{ id: "three4", name: "three1" }
		]
	},
	{
		id: "two5",
		name: "two",
		todos: [
			{ id: "one6", name: "one2" },
			{ id: "two7", name: "two2" },
			{ id: "three8", name: "three2" }
		]
	},
	{
		id: "three9",
		name: "three",
		todos: [
			{ id: "one10", name: "one3" },
			{ id: "two11", name: "two3" },
			{ id: "three12", name: "three3" }
		]
	}
];

const boardData = {
	board: { data: boardItems }
};

export interface Board {
	id: string;
	name: string;
	todos: {
		id: string;
		name: string;
	}[];
}

function Board() {
	const [BoardStore, boardContext, [boardId]] = useDnDContext<Board>(boardData);

	return (
		<main className="Page">
			<BoardStore>
				<TodoContainer
					className="Container"
					boardId={boardId}
					context={boardContext}
				/>
			</BoardStore>
		</main>
	);
}

export default Board;
