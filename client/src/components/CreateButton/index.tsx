import * as React from "react";
import { useReducer } from "react";
import { reducer, initialState } from "./reducer";

interface CreateButtonProps {
	title: string;
	className?: string;
	createItemCallback?: (title: string) => void;
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
		<article className={`Create-Button ${className ? className : ""}`}>
			<h3 onClick={handleToggleWriteSection}>{title}</h3>
			{toggle && (
				<form onSubmit={handleCreateItem}>
					<input
						name="item-name"
						value={itemName}
						onChange={handleWriteItemName}
					/>
					<button type="submit">Create</button>
					<button onClick={handleCancelWriteItemName}>Cancel</button>
				</form>
			)}
		</article>
	);
}

export default CreateButton;
