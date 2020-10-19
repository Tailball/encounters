import React from 'react';

import AuthenticateComponent from '../components/component/authenticateComponent.component';


class Encounters extends AuthenticateComponent {
    constructor() {
        super();

        this.state = {
            encounters: []
        };

        this.timeout = null;
    }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({
                encounters: [
                    { name: 'poop' },
                    { name: 'poop2' },
                    { name: 'pooppydiepie' },
                ]
            }, () => console.log('state updated'));
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
       return (
            <React.Fragment>
                {super.render()}

                <h1>these are the encounters</h1>
                {this.renderEncounters()}
            </React.Fragment>
        );
    }

    renderEncounters = () => {
        console.log(this.state.encounters);
        return this.state.encounters.map(encounter => {
            console.log(encounter.name);
            return <h2 key={encounter.name}>{encounter.name}</h2>;
        });
    }
};

export default Encounters;
