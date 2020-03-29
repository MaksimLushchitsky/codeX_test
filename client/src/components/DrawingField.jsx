import React from 'react';
import Canvas from "./Canvas";

class DrawingField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    componentDidMount() {
        fetch('/api/input')
            .then(res => res.json())
            .then(input => this.setState({input}, () => console.log("Input fetched ..", input)));
    }

    arraySeparator = (array) => {
        array = this.state.input.split('\n');
        return array.map((element) => {
            return element + '\n';
        });
    };

    render() {
        const input_array = this.state.input.split('\n');
        const first_line = input_array[0].split(' ');
        return (
            <div>
                <b>Input commands: </b>
                <div className="input_commands">
                    {this.arraySeparator(input_array)}
                </div>
                {first_line[0] === 'C' &&
                <div>
                    <Canvas input={this.state.input}/>
                </div>
                }
            </div>
        );
    }
}

export default DrawingField;