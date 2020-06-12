import { HANDLE_MODAL } from '../types';

export default (state, action) => {
    switch(action.type) {

        case HANDLE_MODAL:
            return {
                ...state,
                show: !state.show
            }

        default: 
            return state;
    }
}