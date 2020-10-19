export const encounterActions = {
    ADD_ENCOUNTER: 'encounters/ADD'
};

export const AddEncounter = name => ({
    type: encounterActions.ADD_ENCOUNTER,
    payload: name
});