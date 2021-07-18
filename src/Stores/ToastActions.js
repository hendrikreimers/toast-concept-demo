import { v4 as uuidv4 } from 'uuid';
import {ADD_MESSAGE, REMOVE_MESSAGE, SET_MESSAGES} from "./ToastActionTypes";
import toastStore from "./ToastStore";

/**
 * Action Handler
 * Adding a new message to the toast container handled by the toastStore
 *
 * @param payload
 */
export function addMessage(payload) {
    if ( payload.id === undefined )
        payload.id = uuidv4();

    toastStore.dispatch({ type: ADD_MESSAGE, payload });
}

/**
 * Action Handler
 * Remove a toast message based on the given ID
 *
 * @param payload
 */
export function removeMessage(payload) {
    toastStore.dispatch({ type: REMOVE_MESSAGE, payload });
}

/**
 * Action Handler
 * Replace any message by replacing the store state
 *
 * @param payload
 */
export function setMessages(payload) {
    toastStore.dispatch({ type: SET_MESSAGES, payload });
}