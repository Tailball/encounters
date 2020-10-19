import React from 'react';
import { connect } from 'react-redux';

import AuthenticateComponent from '../components/component/authenticateComponent.component';

import { AddEncounter } from '../redux/encounters/encounters.actions';
import store from '../redux/store';


class Encounters extends AuthenticateComponent {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log('before state change', store.getState());

        setTimeout(() => {
            console.log('dispatching to store');
            store.dispatch(AddEncounter('Reduxnewencounter'));    
        }, 3000);

        setTimeout(() => {
            console.log('after state change', store.getState());
        }, 5000);
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

                <h1 onClick={this.onClickTitle}>these are the encounters</h1>
                {this.renderEncounters()}
            </React.Fragment>
        );
    }

    renderEncounters = () => {
        return this.props.encounters.map(encounter => {
            console.log(encounter.name);
            return <h2 key={encounter.name}>{encounter.name}</h2>;
        });
    }

    onClickTitle = () => {
        store.dispatch(AddEncounter('ByClick'));
    }
};


const mapStateToProps = (state) => ({
    encounters: state.encounters
});


export default connect(mapStateToProps)(Encounters);
