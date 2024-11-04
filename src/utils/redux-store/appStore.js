import resSlice from "./res";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
    'reducer' : {
        res: resSlice.reducer 
    },
});

export default appStore;