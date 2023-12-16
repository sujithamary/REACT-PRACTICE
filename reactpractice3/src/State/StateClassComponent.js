import React from 'react';

class StateClassComponent extends React.Component
{
    state = {
        count : 0,
    }

    increment = () => {
        this.setState({count : this.state.count + 1});
    }

    decrement = () => {
        this.setState({count : this.state.count - 1});
    }

    render() {
        return(
            <div>
                <h2>The count will increase by 1 : {this.state.count}</h2>
                <button onClick = {this.increment} >Incrementer</button>
                <button onClick = {this.decrement} >Decrement</button>
            </div>
        );
    }
}

export default StateClassComponent;