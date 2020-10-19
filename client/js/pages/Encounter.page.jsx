import React from 'react';

import AuthenticateComponent from '../components/component/authenticateComponent.component';


class Encounter extends AuthenticateComponent {
    constructor(props) {
        super(props);

        this.state = {
            encounterId: props.match.params.id
        };
    }

    componentDidMount() {
        console.log('encounter');
    }

    render() {
        return (
            <React.Fragment>
                {super.render()}
                <h1>Encounter {this.state.encounterId}!</h1>
            </React.Fragment>
        );
    }
}

export default Encounter;