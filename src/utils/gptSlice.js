import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    gptMovieNamesSpecific: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResults: (state, action) => {
      const { gptMovieNamesSpecific, gptMovies } = action.payload;
      state.gptMovieNamesSpecific = gptMovieNamesSpecific;
      state.gptMovies = gptMovies;
    },
  },
});

export const { toggleGptSearchView, addGptMoviesResults } = gptSlice.actions;
export default gptSlice.reducer;
