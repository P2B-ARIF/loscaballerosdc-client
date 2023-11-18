import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const serverUrl = import.meta.env.VITE_REACT_APP_SERVER_URL;

export const fetchingMenu = createAsyncThunk("menu/fetchingMenu", async () => {
	const response = await axios.get(`${serverUrl}/menu/get`);
	return response.data;
});

export const menuSlice = createSlice({
	name: "menu",
	initialState: {
		loading: false,
		error: null,
		data: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchingMenu.pending, state => {
				state.loading = true;
			})
			.addCase(fetchingMenu.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchingMenu.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = menuSlice.actions;

export default menuSlice.reducer;
