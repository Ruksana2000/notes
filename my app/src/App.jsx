import React from "react";
import NotesPages from "./pages/NotesPages";
import NotesProvider from "./context/NotesContext";

function App() {
    return (
        <div id="app">
            <NotesProvider>
                <NotesPages />
            </NotesProvider>
        </div>
    );
}

export default App;