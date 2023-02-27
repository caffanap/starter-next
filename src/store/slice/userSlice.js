const { createSlice } = require("@reduxjs/toolkit");


const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        name: "John Doe"
    },
    reducers: {
        setName(state, action) {
            state.name = action.payload
        },
        adalagi(state, action) {

        }
    }
})

export const exposeSetName = (param) => async (dispatch) => {
    dispatch(setName(param))
};

export const { setName, adalagi } = userSlice.actions
export default userSlice.reducer