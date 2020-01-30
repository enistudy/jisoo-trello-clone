import * as React from "react";
import { useReducer } from "react";
import { reducer, initialState } from "./reducer";

import "./style.scss";

interface CreateFormProps {
	itemName: string;
	handleCreateItem: (event: React.FormEvent<HTMLFormElement>) => void;
	handleWriteItemName: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleCancelWriteItemName: () => void;
}

function CreateForm({
	itemName,
	handleCreateItem,
	handleWriteItemName,
	handleCancelWriteItemName
}: CreateFormProps) {
	return (
		<form className="Create-form" onSubmit={handleCreateItem}>
			<input
				type="text"
				className="Name-input"
				name="item-name"
				value={itemName}
				onChange={handleWriteItemName}
			/>
			<button className="Create-button" type="submit">
				Create
			</button>
			<button className="Cancel-button" onClick={handleCancelWriteItemName}>
				Cancel
			</button>
		</form>
	);
}

interface CreateButtonProps {
	title: string;
	className?: string;
	createItemCallback?: (newItemName: string) => void;
}

function CreateButton({
	title,
	className,
	createItemCallback
}: CreateButtonProps) {
	const [{ toggle, itemName }, dispatch] = useReducer(reducer, initialState);

	const handleToggleWriteSection = () => dispatch({ type: "TOGGLE_BUTTON" });
	const handleWriteItemName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		dispatch({ type: "SET_NAME", itemName: value });
	};
	const handleCreateItem = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		createItemCallback && createItemCallback(itemName);
		dispatch({ type: "TOGGLE_BUTTON" });
	};
	const handleCancelWriteItemName = () => dispatch({ type: "TOGGLE_BUTTON" });

	return (
		<article className={`Create-button-wrapper ${className ? className : ""}`}>
			<h3 className="Title" onClick={handleToggleWriteSection}>
				{title}
			</h3>
			{toggle && (
				<CreateForm
					itemName={itemName}
					handleCreateItem={handleCreateItem}
					handleWriteItemName={handleWriteItemName}
					handleCancelWriteItemName={handleCancelWriteItemName}
				/>
			)}
		</article>
	);
}

export default CreateButton;
