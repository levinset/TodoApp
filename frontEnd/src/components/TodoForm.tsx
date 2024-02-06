//
import { useForm, SubmitHandler } from "react-hook-form";
import { InputTodoType } from "../types/types";
//
interface TodoFormProps {
  addTodo: (todo: InputTodoType) => void;
}
//
export default function TodoForm({ addTodo }: TodoFormProps) {
  const { register, handleSubmit, reset } = useForm<InputTodoType>();
  const onSubmit: SubmitHandler<InputTodoType> = (inputData) => {
    addTodo(inputData);
    reset();
  };
  //
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5" id="todo-form">
      <div className="flex flex-wrap gap-1 max-md:flex max-md:flex-col max-md:gap-[1rem] items-center justify-center ">
        <input
          {...register("item")}
          className="p-2 text-black border-white border-solid rounded-md border-1"
          type="text"
          id="todo-text"
          placeholder="Enter your todo"
        />
        <button
          className="px-4 py-2  bg-[#ff6666] text-white uppercase font-bold border-solid border border-white border-opacity-30 ml-5 cursor-pointer transition-background duration-200 ease-out hover:bg-red-500 max-sm:ml-0"
          type="submit"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}
