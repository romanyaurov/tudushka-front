import { configureStore } from '@reduxjs/toolkit';
import { TodosReducer } from '@tudushka/entities/todo';

const appStore = configureStore({
  reducer: {
    todos: TodosReducer,
  },
});

export default appStore;
