import React from 'react';
import {removeMessage} from "../Stores/ToastActions";

// Imported as components, so they can modified by css properties (colorset)
import {ReactComponent as IconError} from "../Resources/Icons/icon-error.svg";
import {ReactComponent as IconInfo} from "../Resources/Icons/icon-info.svg";
import {ReactComponent as IconSuccess} from "../Resources/Icons/icon-success.svg";
import {ReactComponent as IconWarning} from "../Resources/Icons/icon-warning.svg";

const prefix = 'toast-hr';

/**
 * ToastMessage Component
 * Displays a single toast message
 * Layout based on the given properties:
 *
 * Example:
 * <ToastMessage type={type} key={uid} id={uid} onCloseHandle={this.removeMessage} timeout={timeout}>
 *     <h2>{header}</h2>
 *     <p>{message}</p>
 * </ToastMessage>
 *
 * The type is flexible, based on your CSS.
 */
export default class ToastMessage extends React.Component {
    /**
     * Constructor, what else ;-)
     *
     * @param probs
     */
    constructor(probs) {
        super(probs);

        // Push some probs to constants
        const { type, additionalClassName } = this.props;

        // Initial data
        this.data = {};
        this.data.className = `${prefix}-box ${prefix}-${type} ` + (additionalClassName || '');

        // Destroy after given timeout
        if ( this.props.timeout > 0 ) {
            this.data.timeout = setTimeout(
                () => removeMessage({ id: this.props.id }),
                this.props.timeout
            );
        }
    }

    /**
     * Returns the icon based on message type
     *
     * @returns {JSX.Element}
     */
    getIcon = () => {
        let msgIcon = <IconInfo />;

        switch (this.props.type) {
            case 'error':
                msgIcon = <IconError />; break;
            case 'warning':
                msgIcon = <IconWarning />; break;
            case 'success':
                msgIcon = <IconSuccess />; break;
            default:
                break;
        }

        return msgIcon;
    }

    /**
     * Rendering of the component
     *
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div className={this.data.className} id={`${prefix}-id_${this.props.id}`}>
                <div className="toast-hr-icon">
                    {this.getIcon()}
                </div>
                <div className="toast-hr-content">
                    {this.props.children}
                </div>
                <div className="toast-hr-controls">
                    <button onClick={ () => this.props.onCloseHandle(this.props.id) } className="toast-hr-btn toast-hr-btn-close">X</button>
                </div>
            </div>
        );
    }
}
