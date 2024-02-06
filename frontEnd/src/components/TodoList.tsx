//
import { FaRegEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { TodoType } from "../types/types";
//

//
export default function TodoList(props: TodoType) {
  return (
    <div>
      <div className="text-center">
        <ul className="p-0 mt-5 list-none ">
          <li className=" bg-[#ff5e5e] p-2 my-2 rounded-md flex justify-between items-center max-sm:flex-col max-sm:gap-2">
            <div className="flex flex-row items-center gap-1 ">
              <input type="checkbox" />
              <p>{props.attributes.item} </p>
            </div>
            <div className="flex flex-row items-center gap-2 max-sm:gap-10 ">
              <button className="text-xl hover:text-red-500 hover:text-2xl">
                <FaRegEdit />
              </button>
              <button className="text-xl hover:text-red-500 hover:text-2xl">
                <FaDeleteLeft />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
