import {createStore} from "redux";
import {ADD_MESSAGE, REMOVE_MESSAGE, SET_MESSAGES} from "./ToastActionTypes";

/**
 * Initial store data
 *
 * @type {{messages: *[]}}
 */
const initialState = {
    messages: []
};

/**
 * Reducer
 * Handling the store data by immutable states.
 * Action selected by given ActionType
 *
 * @param state
 * @param action
 * @returns {({messages: *[]} & {messages})|{messages: *[]}|({messages: *[]} & {messages: *})}
 */
const toastReducer = (state = initialState, action) => {
    // Add a new message to the store
    if (action.type === ADD_MESSAGE) {
        return Object.assign({}, state, {
            messages: state.messages.concat(action.payload)
        });
    }

    // Remove a single message
    if (action.type === REMOVE_MESSAGE) {
        return Object.assign({}, state, {
            // eslint-disable-next-line
            messages: state.messages.filter(item => {
                if (item.id !== action.payload.id)
                    return item;
            })
        });
    }

    // Overwrite the store with new data
    if (action.type === SET_MESSAGES) {
        if ( action.payload.length > 0 && typeof action.payload.messages === "object" )
            state.messages = action.payload.messages
    }

    return state;
}

// Create the store
const toastStore = createStore(toastReducer, initialState);

export default toastStore;