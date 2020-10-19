import React from 'React';
import { Redirect } from 'react-router-dom';

import { loadToken } from '../../util/auth';


class AuthenticateComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(!loadToken()) return <Redirect to="/login" />
        return null;
    }
}

export default AuthenticateComponent;