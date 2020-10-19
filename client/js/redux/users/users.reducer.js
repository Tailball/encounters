const initialState = {
    name: 'test',
    token: 'testtoken'
};


const userReducer = (previousState = initialState, action) => {
    switch(action.type) {
        default:
            return previousState;
    }
};

export default userReducer;