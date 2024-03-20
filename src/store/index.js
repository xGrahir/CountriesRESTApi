import { createSlice, configureStore } from '@reduxjs/toolkit'

const initial = { dark: true }

const modeSlice = createSlice({
	name: 'mode',
	initialState: initial,
	reducers: {
		switchMode(state, action) {
			if (state.dark) {
				state.dark = false
			} else {
				state.dark = true
			}
		},
	},
})

const store = configureStore({ reducer: modeSlice.reducer })

export default store
export const modeActions = modeSlice.actions
