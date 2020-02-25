import produce from 'immer';

import Types from './types';

const INITIAL_STATE = {};

export default function user(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		const { type, payload } = action;

		switch (type) {
			case Types.EXAMPLE: {
				draft.example = payload;
				break;
			}
			default:
				break;
		}
	});
}
