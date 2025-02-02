import { createSlice } from '@reduxjs/toolkit';
import { TodoType } from '@tudushka/shared/models';

interface TodoSliceInterface {
  todos: TodoType[];
  isTodoAdding: boolean;
}

const initialState: TodoSliceInterface = {
  todos: [
    {
      id: '3',
      isCompleted: false,
      text: 'Do something',
    },
    {
      id: '2',
      isCompleted: false,
      text: 'Do something else',
    },
    {
      id: '1',
      isCompleted: true,
      text: 'One more time do something',
    },
  ],
  isTodoAdding: false,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload);
      state.isTodoAdding = true;
    },
    removeTodo: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
    toggleTodo: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) todo.isCompleted = !todo.isCompleted;
      });
    },
    toggleTodoAdding: (state) => {
      state.isTodoAdding = !state.isTodoAdding;
    },
    toggleAddingAnimation: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            const { addingAnimation, ...todoWithoutAddingAnimation } = todo;
            return todoWithoutAddingAnimation;
          }
          return todo;
        }),
      };
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  toggleTodoAdding,
  toggleAddingAnimation,
} = todosSlice.actions;

export const selectTodos = (state: any) => state.todos.todos;
export const selectIsTodoAdding = (state: any) => state.todos.isTodoAdding;

export const TodosReducer = todosSlice.reducer;
