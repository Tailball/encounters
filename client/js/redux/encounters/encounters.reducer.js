import { encounterActions } from './encounters.actions';


const initialState = [
    {
        name: 'testEncounter1'
    },
    {
        name: 'testEncounter2'
    }
];


const encountersReducer = (previousState = initialState, action) => {
    switch(action.type) {
        
        case encounterActions.ADD_ENCOUNTER:
            return [...previousState, {
                name: action.payload
            }];

        default:
            return previousState;
    }
};

export default encountersReducer;