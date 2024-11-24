import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    // addFavorite: (state, action) => {
    //   state.push(action.payload);
    // },
    // removeFavorite: (state, action) => {
    //   return state.filter((movie) => movie.id !== action.payload);
    // },
    addFavorite: (state, action) => {
      // Kiểm tra xem phim đã tồn tại chưa
      const isExisting = state.find((movie) => movie.id === action.payload.id);
      if (!isExisting) {
        state.push(action.payload); // Thêm phim vào danh sách yêu thích
      }
    },
    removeFavorite: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload); // Xóa phim
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
