import { createSlice } from '@reduxjs/toolkit'

export interface ShowState {
  value: boolean;
}

const initialState: ShowState = {
  value: false,
};

export const ShowSlice = createSlice({
  name: 'showModal',
  initialState,
  reducers: {
    showCreateModal: (state) => {
      state.value = !state.value
    },

  },
});

// Action creators are generated for each case reducer function
export const { showCreateModal } = ShowSlice.actions

export default ShowSlice.reducer