//

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

//
function App() {
  return (
    <>
      <body className="m-0 p-0 flex flex-row justify-center items-center h-screen bg-gradient-to-r from-blue-400 via-teal-400 to-pink-300">
        <main className="mx-auto my-[4rem] p-[3rem] bg-[#ff6666] text-white box-shadow ">
          <h1 className=" text-center font-bold text-2xl">Todo List</h1>
          <TodoList />

          <TodoForm />
        </main>
      </body>
    </>
  );
}

export default App;
