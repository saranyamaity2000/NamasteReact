const { createSlice } = require("@reduxjs/toolkit");

const resSlice = createSlice({
    initialState: {
        favRes: []
    },
    'name': 'restaurant',
    reducers: {
        markFavourite(state, action) {
            state.favRes.push(action.payload); // mutable change also works
        },
        removeFromFavourite(state, action) {
            state.favRes = state.favRes.filter(res => res != action.payload);
            // immutable change this also works
        }
    }
});

export default resSlice;