import * as React from "react";
import { useState, useCallback } from "react";

import { CreateButton } from "components";

interface Board {
	id: string;
	name: string;
}

const initialState: Board[] = [
	{ id: "1", name: "first" },
	{ id: "2", name: "second" }
];

function BoardContainer() {
	const [boards, setBoards] = useState<Board[]>(initialState);
	const handleCreateBoard = useCallback(
		(newItemName: string) => {
			const newBoard: Board = { id: newItemName, name: newItemName };
			setBoards(prevBoards => [...prevBoards, newBoard]);
		},
		[setBoards]
	);

	return (
		<section>
			{boards.map(({ id, name }) => (
				<article className="Board" key={id}>
					{name}
				</article>
			))}
			<CreateButton
				title="Create board"
				createItemCallback={handleCreateBoard}
			/>
		</section>
	);
}

export default BoardContainer;
