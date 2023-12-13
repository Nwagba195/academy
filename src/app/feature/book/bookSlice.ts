import { BookState } from "@/app/interface/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: BookState = {
  books: [],
  loading: false,
  error: "",
  itemsPerPage: 8
};
const baseUrl = "https://freetestapi.com/api/v1";

export const fetchBooks = createAsyncThunk("book/fetchbooks", async () => {
  //   const res = await axios.get(`${process.env.BOOK_API}/books`);
  const res = await axios.get(`${baseUrl}/books`);
  return res.data;
});

export const searchBook = createAsyncThunk(
  "book/searchBook",
  async (search: string) => {
    const res = await axios.get(`${baseUrl}/books?search=${search}`);
    return res.data;
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
      state.error = "";
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.error.message;
    });
    builder.addCase(searchBook.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(searchBook.fulfilled, (state, action) => {
      state.books = action.payload.slice(0, state.itemsPerPage)
      state.error = "";
      state.loading = false;
    });
    builder.addCase(searchBook.rejected, (state, action) => {
      state.error = action.error.message;
      state.books = [];
      state.loading = false;
    });
  },
});

export default bookSlice.reducer;
