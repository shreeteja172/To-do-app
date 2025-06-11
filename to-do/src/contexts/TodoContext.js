import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "To-do Msg",
        completed : false,
    }],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleCheck : () => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider