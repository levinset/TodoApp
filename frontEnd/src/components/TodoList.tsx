//import libaries and components
import { FaRegEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { TodoType } from "../types/types";
import { useDeletTodo } from "../hooks/useDeletTodo";
import { useState } from "react";
import TodoEditForm from "./TodoEditForm";

//main component
export default function TodoList(props: TodoType) {
  //query
  const { mutate: deleteTodos } = useDeletTodo();
  //usestate for editing mode
  const [isEditing, setIsEditing] = useState(false);
  //handle delete
  const handleDelete = async () => {
    await deleteTodos(props.id);
  };
  return (
    <div>
      <div className="text-center">
        <ul className="p-0 mt-5 list-none ">
          <li className="bg-[#ff5e5e] p-2 my-2 rounded-md flex items-center shadow-sm max-sm:w-[15rem]  ">
            {isEditing ? (
              <TodoEditForm {...props} setIsEditing={setIsEditing} />
            ) : (
              <div className="flex flex-row justify-between w-full max-sm:flex-col max-sm:gap-2">
                <div className="flex flex-row items-center gap-1 text-xl font-semibold capitalize">
                  <input type="checkbox" />
                  <p>{props.attributes.item}</p>
                </div>
                <div className="flex flex-row items-center gap-2 max-sm:gap-10 max-sm:justify-center">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="p-2 text-xl duration-200 ease-out shadow-xl hover:text-red-500 hover:bg-white rounded-xl transition-background"
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    onClick={handleDelete}
                    className="p-2 text-xl duration-200 ease-out shadow-xl rounded-xl rounded-xd hover:text-red-500 hover:bg-white transition-background"
                  >
                    <FaDeleteLeft />
                  </button>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
