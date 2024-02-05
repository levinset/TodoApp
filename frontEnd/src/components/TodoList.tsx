//
import { FaRegEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
//
export default function TodoList() {
  return (
    <div>
      <div className="text-center">
        <ul className=" list-none p-0 mt-5">
          <li className=" bg-[#ff5e5e] p-2 my-2 rounded-md flex justify-between items-center max-sm:flex-col max-sm:gap-2">
            <div className=" flex flex-row gap-1 items-center">
              <input type="checkbox" />
              <p>Learn Query saFd\sfdsfdsgg</p>
            </div>
            <div className="flex flex-row gap-2 items-center max-sm:gap-10 ">
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
