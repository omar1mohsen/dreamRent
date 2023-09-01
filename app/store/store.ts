import { configureStore } from '@reduxjs/toolkit'
import showReducer from './showmodel/ShowSlice'
import showUpdateReducer from './showmodel/ShowUpdate'
export const store = configureStore({
  reducer: {
    showModal: showReducer,
    ShowUpdate : showUpdateReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch