import React from 'react';


class Encounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            encounterId: props.match.params.id
        };
    }

    componentDidMount() {
        console.log(this);
    }

    render() {
        return <h1>Encounter {this.state.encounterId}!</h1>;
    }
}

export default Encounter;