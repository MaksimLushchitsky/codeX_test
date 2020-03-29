import React from 'react';
import executeCommands from "../functions/executeCommands";

class Canvas extends React.Component {
    render() {
        return executeCommands(this.props.input);
    }
}

export default Canvas;