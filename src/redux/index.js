//imports de redux toolkit y redux persist
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

//import de los reducers
import productsSlice from "./slices/productsSlice";
import userSlice from "./slices/userSlice";

//configuracion de redux persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products", "user"],
};

//combine de reducers
const reducers = combineReducers({
  products: productsSlice,
  user: userSlice,
});

//creacion del store
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  //middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

//creacion del persistor
const persistor = persistStore(store);

export { store, persistor };
