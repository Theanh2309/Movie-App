import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoriteSlice";

// Load state từ localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("favorites");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.error("Could not load state", e);
    return [];
  }
};

// Lưu state vào localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.favorites);
    localStorage.setItem("favorites", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
  preloadedState: {
    favorites: loadFromLocalStorage(), // Dữ liệu được tải từ localStorage
  },
});

// Lắng nghe thay đổi state để lưu vào localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
