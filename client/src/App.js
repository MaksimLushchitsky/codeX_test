import React from 'react';
import './App.css';
import DrawingField from "./components/DrawingField";

class App extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <div className="title clearfix">
                        <h1>CodeX_test</h1>
                    </div>
                    <div className="input clearfix">
                        <DrawingField/>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;