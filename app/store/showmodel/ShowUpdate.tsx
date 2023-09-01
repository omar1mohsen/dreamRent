import { createSlice } from '@reduxjs/toolkit'

export interface ShowState {
  value: boolean;
}

const initialState: ShowState = {
  value: false,
};

export const ShowUpdate = createSlice({
  name: 'showUpdate',
  initialState,
  reducers: {
    showUpdateModal: (state) => {
      state.value = !state.value
    },

  },
});

// Action creators are generated for each case reducer function
export const { showUpdateModal } = ShowUpdate.actions

export default ShowUpdate.reducer