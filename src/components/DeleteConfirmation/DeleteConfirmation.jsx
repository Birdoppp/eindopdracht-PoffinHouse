import './DeleteConfirmation.css'

export default function DeleteConfirmation({ message, onConfirm, onCancel }) {
    return (
        <div className="delete-confirmation">
            <p >{message}</p>
            <div>
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onCancel}>No</button>
            </div>
        </div>
    );
}