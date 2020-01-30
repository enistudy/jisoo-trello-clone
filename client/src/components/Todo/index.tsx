import * as React from "react";
import { useState } from "react";

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
	id: string;
	name: string;
	createJobCallback?: (jobName: string) => void;
}

interface Job {
	id: string;
	name: string;
}

function Todo({ id, name }: TodoProps) {
	const [jobName, setJobName] = useState<string>("");
	const [jobs, setJobs] = useState<Job[]>([]);

	const handleWriteJobName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setJobName(value);
	};
	const handleCreateJob = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const newJob: Job = { id: jobName, name: jobName };
		setJobName("");
		setJobs(prevJobs => [...prevJobs, newJob]);
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
			{jobs.map(({ id, name }) => (
				<article className="Job" key={id}>
					{name}
				</article>
			))}
		</article>
	);
}

export default React.memo(Todo);
