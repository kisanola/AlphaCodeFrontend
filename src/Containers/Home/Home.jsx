import React, { Component } from 'react';
import './Home.scss';

import { connect } from 'react-redux';

import { changeName } from '../../actions/changeName';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hello World {this.props.name.team}</h1>
                <button onClick={() => this.props.changeName('Avengers')}>Change to avengers</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ name }) => {
    return {
        name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeName: (name) => dispatch(changeName(name))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
