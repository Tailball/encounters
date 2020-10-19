import React from 'react';
import { connect } from 'react-redux';

import AuthenticateComponent from '../components/component/authenticateComponent.component';

import { AddEncounter } from '../redux/encounters/encounters.actions';


class Encounters extends AuthenticateComponent {
    constructor() {
        super();
    }

    componentDidMount() {
        //
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.encounters.length !== nextProps.encounters.length) return true;
        return false;
    }

    render() {
       return (
            <React.Fragment>
                {super.render()}

                <h1 onClick={this.props.onClickTitle}>these are the encounters</h1>
                {this.renderEncounters()}
            </React.Fragment>
        );
    }

    renderEncounters = () => {
        return this.props.encounters.map(encounter => {
            return <h2 key={encounter.name}>{encounter.name}</h2>;
        });
    }
};


const mapStateToProps = (state) => ({
    encounters: state.encounters
});

const mapDispatchToProps = (dispatch) => ({
    onClickTitle: () => dispatch(AddEncounter('from DispatchToProps'))
});


export default connect(mapStateToProps, mapDispatchToProps)(Encounters);
