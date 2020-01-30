import * as React from "react";
import { useState, useCallback } from "react";

import { CreateButton, Todo } from "components";

import "./style.scss";

interface TodoContainerProps {
	className?: string;
}

interface Todo {
	id: string;
	name: string;
}

const initialState: Todo[] = [
	{ id: "1", name: "first" },
	{ id: "2", name: "second" }
];

function TodoContainer({ className }: TodoContainerProps) {
	const [todos, setTodos] = useState<Todo[]>(initialState);

	const handleCreateTodo = useCallback(
		(newTodoName: string) => {
			const newTodo: Todo = { id: newTodoName, name: newTodoName };
			setTodos(prevTodos => [...prevTodos, newTodo]);
		},
		[setTodos]
	);

	return (
		<section className={`Todo-container-wrapper ${className ? className : ""}`}>
			{todos.map(({ id, name }) => (
				<Todo key={id} id={id} name={name} />
			))}
			<CreateButton title="Create todo" createItemCallback={handleCreateTodo} />
		</section>
	);
}

export default TodoContainer;
