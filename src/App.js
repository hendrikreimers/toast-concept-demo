import './Resources/Sass/App.scss';

import React from "react";
import Toast from "./Components/Toast";
import {addMessage} from "./Stores/ToastActions";

function App() {
  return (
    <div className="App">

        {/* SAMPLES FOR THE TOAST DEMO */}
        <div className="buttonGroup">
            <button onClick={() => addMessage({
                "type": "error",
                "title": "A good readable Headline ...",
                "message": "This is a detailed error message ..."
            })}>Error </button>

            <button onClick={() => addMessage({
                "type": "warning",
                "title": "A good readable Headline ...",
                "message": "This is a detailed error message ..."
            })}>Warning</button>

            <button onClick={() => addMessage({
                "type": "success",
                "title": "A good readable Headline ...",
                "message": "This is a detailed error message ..."
            })}>Success</button>

            <button onClick={() => addMessage({
                "type": "info",
                "title": "A good readable Headline ...",
                "message": "This is a detailed error message ..."
            })}>Info</button>

            <button onClick={() => addMessage({
                type: "info",
                title: "Get timed out...",
                message: "Destroy itself in 2 Sec.",
                timeout: 2000
            })}>Timed</button>
        </div>

        {/* THE TOAST CONTAINER */}
        <Toast />

    </div>
  );
}

export default App;
