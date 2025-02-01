import { createSlice } from '@reduxjs/toolkit';
import { TodoType } from '@tudushka/shared/models';

interface TodoSliceInterface {
  todos: TodoType[];
}

const initialState: TodoSliceInterface = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export const selectTodos = (state: any) => state.todos.todos;

export const TodosReducer = todosSlice.reducer;
