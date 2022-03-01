import React from "react";
import { connect } from 'react-redux';
import * as actions from '../actions';

class Counter extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={this.props.decr}>-</button>
                <span>{this.props.number}</span>
                <button onClick={this.props.incr}>+</button>
            </div>
        );
    }

}

const mapStateProps = state => ({
    number: state.counter.number,
});

export default connect(mapStateProps, actions)(Counter);