import React from 'react';
import { connect } from "react-redux";
import ToastMessage from "./ToastMessage";
import { v4 as uuidv4 } from 'uuid';
import {removeMessage} from "../Stores/ToastActions";

/**
 * Toast Container Component
 *
 * Handles and includes toast messages.
 * The message list is handled by a global toastStore so it would be accessable from anywhere.
 *
 * Use the container in your main App.js outside of any route/view or everything
 *
 * <Toast />
 *
 * Don't forget to include the toast actions to add some messages:
 * import {addMessage} from "./Stores/ToastActions";
 *
 * Example in a button:
 *    <button onClick={() => addMessage({
 *      "type": "warning",
 *      "title": "A good readable Headline ...",
 *      "message": "This is a detailed error message ..."
 *    })}>Warning</button>
 *
 */
class ConnectedToast extends React.Component {

    /**
     * Constructor
     *
     * @param probs
     */
    constructor(probs) {
        super(probs);

        // hmm... maybe export it to a global set?
        const prefix = 'toast-hr';

        const { additionalClassName } = this.props;

        // Default data intialization
        this.data = {};
        this.data.className = `${prefix}-container ` + (additionalClassName || '');
    }

    /**
     * Returns a simple toast message component as result
     *
     * @param id
     * @param type
     * @param header
     * @param message
     * @param timeout
     * @returns {JSX.Element}
     */
    getSimpleMessage = (id, type, header, message, timeout = 0) => {
        const typeExpr = /^[a-z]{1,}$/;
        if ( typeExpr.test(type) ) {
            let uid = id || uuidv4();

            return (
                <ToastMessage type={type} key={uid} id={uid} onCloseHandle={this.removeMessage} timeout={timeout}>
                    <h2>{header}</h2>
                    <p>{message}</p>
                </ToastMessage>
            );
        }
    }

    /**
     * Removes a toastMessage based on the element id
     *
     * @param id
     */
    removeMessage = (id) => {
        removeMessage({id: id});
    }

    /**
     * Rendering of the component
     *
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div className={this.data.className}>
                { this.props.messages.map( item => {
                    return this.getSimpleMessage(item.id, item.type, item.title, item.message, item.timeout);
                }) }
            </div>
        );
    }
}

// Mapping the store handler
const mapStateToProps = state => {
    return { messages: state.messages };
};

// Bind the store to the component before export for usage
const Toast = connect(mapStateToProps)(ConnectedToast);

// Make it useable outside this file ;-)
export default Toast;