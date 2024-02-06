//import libaries
import { useForm, SubmitHandler } from "react-hook-form";
import { InputTodoType, TodoType } from "../types/types";
import { useEditTodo } from "../hooks/useEditTodo";
import { useEffect } from "react";
import { IoSaveOutline } from "react-icons/io5";
import { MdCancelPresentation } from "react-icons/md";
//extend types
interface TodoEditFormProps extends TodoType {
  setIsEditing: (value: boolean) => void;
}
//main components
export default function TodoEditForm(props: TodoEditFormProps) {
  //querry
  const { mutate: editTodo } = useEditTodo();
  //react form
  const { register, handleSubmit, setValue } = useForm<InputTodoType>();

  // Set default value for input field
  useEffect(() => {
    setValue("item", props.attributes.item);
  }, [props.attributes.item, setValue]);
  // On submit
  const onSubmit: SubmitHandler<InputTodoType> = async (formData) => {
    try {
      await editTodo({
        id: props.id,
        attributes: {
          item: formData.item,
        },
      });
      props.setIsEditing(false);
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };
  return (
    <form className="flex-grow" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row justify-between shadow-sm max-sm:flex-col max-sm:gap-2 ">
        <div className="flex flex-row items-center gap-1 text-xl font-semibold capitalize ">
          <input
            {...register("item")}
            className="p-2 text-black border-white border-solid rounded-md border-1 w-[90%] "
            type="text"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-2 max-sm:gap-10">
          <button
            type="submit"
            className="p-2 text-xl duration-200 ease-out shadow-xl hover:text-red-500 hover:bg-white rounded-xl transition-background"
          >
            <IoSaveOutline />
          </button>
          <button
            onClick={() => props.setIsEditing(false)}
            className="p-2 text-xl duration-200 ease-out shadow-xl hover:text-red-500 hover:bg-white rounded-xl transition-background"
          >
            <MdCancelPresentation />
          </button>
        </div>
      </div>
    </form>
  );
}
