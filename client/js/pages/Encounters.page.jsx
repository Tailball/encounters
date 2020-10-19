import React from 'react';


class Encounters extends React.Component {
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
            <div>
                <h1>these are the encounters</h1>
                {this.renderEncounters()}
            </div>
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
