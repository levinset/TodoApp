//

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useGetAllTodos } from "./hooks/useGetAllTodos";
//
import { TodoType, InputTodoType } from "./types/types";
import { useAddTodo } from "./hooks/useAddTodo";

//
function App() {
  //Querys
  const {
    data,
    isLoading: isLoadingGetTodos,
    isError: isErrorGetTodos,
  } = useGetAllTodos();
  //
  const { isError: isErrorAddTodos, mutate: addTodos } = useAddTodo();
  //

  //
  const handleAddTodo = async (todo: InputTodoType) => {
    console.log(todo);
    addTodos(todo);
  };
  return (
    <>
      <div className="flex flex-row items-center justify-center h-screen p-0 m-0 bg-gradient-to-r from-blue-400 via-teal-400 to-pink-300">
        <main className="mx-auto my-[4rem] p-[3rem] bg-[#ff6666] text-white box-shadow ">
          <h1 className="text-2xl font-bold text-center ">Todo List</h1>
          {data?.map((todo: TodoType) => (
            <TodoList key={todo.id} {...todo} />
          ))}
          <TodoForm addTodo={handleAddTodo} />
        </main>
      </div>
      {isLoadingGetTodos && <p>....Loding</p>}
      {isErrorGetTodos && <p>....Error Loading data</p>}
      {isErrorAddTodos && <p>....Error Loading data</p>}
    </>
  );
}

export default App;
