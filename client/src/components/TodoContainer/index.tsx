import * as React from "react";
import { useCallback } from "react";
import { useDnDContext, useDroppable } from "react-useful-dnd";

import { Board } from "pages/board";
import { CreateButton, Todo } from "components";

import "./style.scss";

interface TodoContainerProps {
	className?: string;
	boardId: string;
	context: React.Context<Board>;
}

interface Todo {
	id: string;
	name: string;
}

function TodoContainer({ className, boardId, context }: TodoContainerProps) {
	const [droppableRef, droppableId, todos] = useDroppable<Board>({
		id: boardId,
		context
	});
	const todoData = todos.reduce(
		(acc, { id, todos }) => ({ ...acc, [id]: { data: todos } }),
		{}
	);

	const [TodoStore, todoContext, todoIds] = useDnDContext<Todo>(todoData);

	const handleCreateTodo = useCallback((newTodoName: string) => {
		console.log("create todo");
	}, []);

	return (
		<section className={`Todo-container-wrapper ${className ? className : ""}`}>
			<TodoStore>
				{todoIds.map((id, index) => (
					<Todo
						key={id}
						todoId={id}
						name={todos[index].name}
						context={todoContext}
					/>
				))}
			</TodoStore>
			<CreateButton title="Create todo" createItemCallback={handleCreateTodo} />
		</section>
	);
}

export default TodoContainer;
