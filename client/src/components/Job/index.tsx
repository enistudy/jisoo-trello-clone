import * as React from "react";
import { useEffect, useRef } from "react";
import { useDraggable } from "react-useful-dnd";

import "./style.scss";

interface JobProps {
	name: string;
	droppableId: string;
	groupId: string;
}

function Job({ name, droppableId, groupId }: JobProps) {
	const [draggableRef, id] = useDraggable({ droppableId, groupId });
	const widthRef = useRef<string>("");

	const hadndleComponentWidth = () => {
		const element = draggableRef.current;
		if (!element) return;
		element.style.width = widthRef.current;
	};

	const setInitialComponentWidth = () => {
		if (!draggableRef) return;

		const element = draggableRef.current as Element;
		const style = window.getComputedStyle(element);
		widthRef.current = style.width;
	};

	useEffect(setInitialComponentWidth, [draggableRef]);

	return (
		<article
			ref={draggableRef}
			className="Job"
			id={id}
			onDragStart={hadndleComponentWidth}
		>
			<h4 className="Job-name">{name}</h4>
		</article>
	);
}

export default Job;
