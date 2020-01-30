import * as React from "react";
import { useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";

import { CreateButton } from "components";

import "./style.scss";

interface BoardContainerProps {
	className?: string;
}

interface BoardProps {
	id: string;
	name: string;
}

interface Board {
	id: string;
	name: string;
}

const initialState: Board[] = [
	{ id: "1", name: "first" },
	{ id: "2", name: "second" }
];

function Board({ id, name }: BoardProps) {
	return (
		<Link to={`/boards/${id}`} className="Board" key={id}>
			{name}
		</Link>
	);
}

const ButtonMemo = memo(Board);

function BoardContainer({ className }: BoardContainerProps) {
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
			{boards.map(({ id, name }) => (
				<ButtonMemo key={id} id={id} name={name} />
			))}
			<CreateButton
				title="Create board"
				createItemCallback={handleCreateBoard}
			/>
		</section>
	);
}

export default BoardContainer;
