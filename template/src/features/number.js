import { createSlice } from '@reduxjs/toolkit'

export const number = createSlice({
  name: 'number',
  initialState: {
    number:0
  },
  reducers: {
    setNumber: (state, action) => {
      state.number = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setNumber } = number.actions

export default number.reducer