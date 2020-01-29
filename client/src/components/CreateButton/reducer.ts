interface State {
	itemName: string;
	toggle: boolean;
}

type Action =
	| { type: "TOGGLE_BUTTON" }
	| { type: "SET_NAME"; itemName: string };

export const initialState: State = { itemName: "", toggle: false };

export function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "TOGGLE_BUTTON":
			return { itemName: "", toggle: !state.toggle };
		case "SET_NAME":
			return { ...state, itemName: action.itemName };
		default:
			throw new Error("Unhandled action");
	}
}
