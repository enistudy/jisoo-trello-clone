import * as React from "react";
import { useState, useCallback } from "react";

import { CreateButton } from "components";

import "./style.scss";

interface BoardProps {
	className?: string;
}

interface Board {
	id: string;
	name: string;
}

const initialState: Board[] = [
	{ id: "1", name: "first" },
	{ id: "2", name: "second" },
	{ id: "1", name: "first" },
	{ id: "2", name: "second" },
	{ id: "1", name: "first" },
	{ id: "2", name: "second" },
	{ id: "1", name: "first" },
	{ id: "2", name: "second" },
	{ id: "1", name: "first" },
	{ id: "2", name: "second" },
	{ id: "1", name: "first" },
	{ id: "2", name: "second" },
	{ id: "1", name: "first" },
	{ id: "2", name: "second" },
	{ id: "1", name: "first" },
	{ id: "2", name: "second" },
	{ id: "1", name: "first" },
	{ id: "2", name: "second" },
	{ id: "2", name: "second" },
	{ id: "1", name: "first" },
	{ id: "2", name: "second" },
	{ id: "1", name: "first" }
];

function BoardContainer({ className }: BoardProps) {
	const [boards, setBoards] = useState<Board[]>(initialState);
	const handleCreateBoard = useCallback(
		(newItemName: string) => {
			const newBoard: Board = { id: newItemName, name: newItemName };
			setBoards(prevBoards => [...prevBoards, newBoard]);
		},
		[setBoards]
	);

	return (
		<section
			className={`Board-container-wrapper ${className ? className : ""}`}
		>
			{boards.map(({ id, name }, index) => (
				<article className="Board" key={id + index}>
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
