import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isPending: false,
  movies: [],
  movieSearch: [],
  movieDetail: [],
  bookmark: [],
};

export const getMovies = createAsyncThunk('movie/getMovies', async () => {
  let res = await axios.get('https://www.omdbapi.com/?s=spongebob&apikey=2f59c9ba');
  return res?.data?.Search;
});
export const getSearch = createAsyncThunk('movie/getSearch', async (search) => {
  let res = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=2f59c9ba`);
  return res?.data?.Search;
});

export const getDetail = createAsyncThunk('movie/getDetail', async (id) => {
  let res = await axios.get(`https://www.omdbapi.com/?apikey=2f59c9ba&plot=full&i=${id}`);
  return res?.data;
});

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    bookmarkMovie: (state, action) => {
      const { imdbID } = action.payload;
      const book = state.bookmark.find((item) => item.imdbID === imdbID);
      if (!book) {
        state.bookmark.push(action.payload);
      }
    },
    unBookmarkMovie: (state, action) => {
      const { imdbID } = action.payload;

      state.bookmark = state.bookmark.filter((item) => item.imdbID !== imdbID);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMovies.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isPending = false;
        state.movies = action.payload;
      })
      .addCase(getSearch.pending, (state, action) => {
        state.isPending = true;
      })
      .addCase(getSearch.fulfilled, (state, action) => {
        state.isPending = false;
        state.movieSearch = action.payload;
      })
      .addCase(getDetail.pending, (state, action) => {
        state.isPending = true;
        state.movieDetail = [];
      })
      .addCase(getDetail.fulfilled, (state, action) => {
        state.isPending = false;
        const detail = action.payload;
        const m = action.payload.Runtime.split(' ', 1);
        detail.Runtime = {
          hour: Math.floor(m / 60),
          minute: m % 60,
        };
        state.movieDetail = detail;
      });
  },
});

export const { bookmarkMovie, unBookmarkMovie } = movieSlice.actions;
export default movieSlice.reducer;
