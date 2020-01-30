import * as React from "react";
import { useState } from "react";
import { useDroppable } from "react-useful-dnd";

import { Job } from "components";

import "./style.scss";

interface CreateJobProps {
	jobName: string;
	handleCreateJob: (event: React.FormEvent<HTMLFormElement>) => void;
	handleWriteJobName: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CreateJobForm({
	jobName,
	handleCreateJob,
	handleWriteJobName
}: CreateJobProps) {
	return (
		<form className="Create-Todo-form" onSubmit={handleCreateJob}>
			<input
				type="text"
				className="Job-name-input"
				name="job-name"
				value={jobName}
				onChange={handleWriteJobName}
			/>
			<button className="Create-button" type="submit">
				Create
			</button>
		</form>
	);
}

interface TodoProps {
	todoId: string;
	name: string;
	context: React.Context<Todo>;
}

interface Todo {
	id: string;
	name: string;
}

function Todo({ todoId, name, context }: TodoProps) {
	const [droppableRef, droppableId, jobs, groupId] = useDroppable<Todo>({
		id: todoId,
		context
	});

	const [jobName, setJobName] = useState<string>("");

	const handleWriteJobName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setJobName(value);
	};
	const handleCreateJob = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<article className="Todo">
			<h3 className="Title">{name}</h3>
			<hr />
			<CreateJobForm
				jobName={jobName}
				handleCreateJob={handleCreateJob}
				handleWriteJobName={handleWriteJobName}
			/>
			<section className="Job-wrapper" ref={droppableRef} id={droppableId}>
				{jobs.map(({ id, name }) => (
					<Job
						key={id}
						name={name}
						groupId={groupId}
						droppableId={droppableId}
					/>
				))}
			</section>
		</article>
	);
}

export default React.memo(Todo);
