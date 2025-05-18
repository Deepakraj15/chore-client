import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlertState {
  message: string;
  type: "error" | "warning" | "success" | "info" | "muted";
}
interface AppState {
  currentPage: "Home" | "Search" | "Profile" | "Settings" | "Create";
  alert: AlertState | null;
}

const initialState: AppState = {
  currentPage: "Home",
  alert: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentPage: (
      state,
      action: PayloadAction<
        "Home" | "Search" | "Profile" | "Settings" | "Create"
      >
    ) => {
      state.currentPage = action.payload;
    },
    setAlert: (state, action: PayloadAction<AlertState>) => {
      state.alert = action.payload;
    },
    clearAlert: (state) => {
      state.alert = null;
    },
  },
});

// Selectors
export const getCurrentPage = (state: { app: AppState }) =>
  state.app.currentPage;
export const getAlert = (state: { app: AppState }) => state.app.alert;
export const getAlertMessage = (state: { app: AppState }) =>
  state.app.alert?.message;
export const getAlertType = (state: { app: AppState }) => state.app.alert?.type;
// Actions

export const { setCurrentPage, setAlert, clearAlert } = appSlice.actions;

// Reducer
export default appSlice.reducer;
