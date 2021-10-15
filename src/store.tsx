import { TodayOutlined } from "@mui/icons-material";
import create from "zustand";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type Store = {
  todos: Todo[];
  addTodo: (text: string) => void;
  updateTodo: (item: Todo) => void;
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const useStore = create<Store>((set) => ({
  todos: [],

  addTodo: (newTodo) => {
    // set((state) => {
    //   state.todos.push({ text: newTodo, id: Date.now(), done: false });
    //   return state;
    // });
    //THIS COULD ALSO WORK
    set((state) => ({
      ...state,
      todos: [...state.todos, { text: newTodo, id: Date.now(), done: false }],
    }));
  },
  updateTodo: (item: Todo) => {
    set((state) => {
      const itemIndex = state.todos.findIndex(
        (element) => element.id == item.id
      );
      if (itemIndex !== undefined) {
        state.todos[itemIndex] = item;
      }
      return { ...state };
    });
  },
  checkTodo: (id) => {
    set((state) => {
      const itemIndex = state.todos.findIndex((element) => element.id === id);
      if (itemIndex >= 0) {
        state.todos[itemIndex].done = !state.todos[itemIndex].done;
      }
      return { ...state };
    });
  },
  deleteTodo: (id) => {
    set((state) => {
      state.todos = state.todos.filter((element) => element.id != id);
      return { ...state };
    });
  },
}));

export default useStore;
