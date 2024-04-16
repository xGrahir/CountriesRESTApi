import { createSlice, configureStore } from '@reduxjs/toolkit'

const initial = { dark: true }
const region = { current: 'All', name: '' }

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

const countrySlice = createSlice({
	name: 'region',
	initialState: region,
	reducers: {
		changeRegion(state, action) {
			state.current = action.payload
		},
		searchByName(state, action) {
			state.name = action.payload
		}
	}
})

const store = configureStore({ reducer: {mode: modeSlice.reducer, country: countrySlice.reducer} })

export default store
export const modeActions = modeSlice.actions
export const countryActions = countrySlice.actions