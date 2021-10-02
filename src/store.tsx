import create from "zustand";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type Store = {
  todos: Todo[];
  newTodo: string;
  addTodo: (text: string) => void;
  updateTodo: (id:number,text:string)=>void;
  deleteTodo: (id:number) =>void;
};

const useStore = create<Store>((set) => ({
  todos: [],
  newTodo: "",
  addTodo: (newTodo) => {
    set((state) => {
      state.todos.push({ text: newTodo, id: Date.now(), done: false });
      return state;
    });
    //THIS COULD ALSO WORK
    //set((state) => ({
    //  ...state,
    //  todos: [...state.todos, { text: newTodo, id: Date.now(), done: false }],
    //}));
  },
  updateTodo: (id, text) =>{
      set((state)=>{
          state.todos[state.todos.findIndex(element=>element.id==id)].text = text;
          return state;
      })
  },
  deleteTodo: (id) =>{
      set((state)=>{
          state.todos.filter(element=>element.id != id)
      })
  }

}));

export default useStore;