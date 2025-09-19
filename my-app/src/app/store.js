import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer, { todolistSlice } from '../features/todolist/todolistSlice';
import { productsApi } from '../services/products';
import { setupListeners } from '@reduxjs/toolkit/query';
import { todosApi } from '../services/todosapi';



export const store = configureStore({
  reducer: {
    // cntR: counterReducer,
    // todoR: todoReducer, // Assuming you want to add the todo reducer as well
    // [productsApi.reducerPath]: productsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(productsApi.middleware),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),

});
setupListeners(store.dispatch);
