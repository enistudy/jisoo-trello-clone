declare module "react-useful-dnd" {
	import * as React from "react";

	// useDnDContext
	interface DnDContextArg<T> {
		[key: string]: { data: Array<T> };
	}

	type DnDStore = (props: { children: React.ReactNode }) => JSX.Element;
	type DnDContext<T> = React.Context<T>;
	type DroppableIds = string[];

	function DnDStore(props: { children: React.ReactNode }): JSX.Element;
	export function useDnDContext<T>(
		dataMap: DnDContextArg<T>
	): [DnDStore, DnDContext<T>, DroppableIds];

	// useDroppable
	interface DroppableArg<T> {
		id?: string;
		context?: React.Context<T>;
	}

	type DroppableRef = React.MutableRefObject<HTMLElement | null>;
	type DroppableId = string;
	type Datas<T> = T[];
	type GroupId = string;

	export function useDroppable<T>(
		option: DroppableArg<T>
	): [DroppableRef, DroppableId, Datas<T>, GroupId];

	// useDraggable
	interface DraggableArg {
		id?: string;
		droppableId?: DroppableId;
		groupId?: GroupId;
	}

	type DraggableRef = React.MutableRefObject<HTMLElement | null>;
	type DraggableId = string;

	export function useDraggable(
		option: DraggableArg
	): [DraggableRef, DraggableId];
}
