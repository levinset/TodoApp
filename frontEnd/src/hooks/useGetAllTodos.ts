import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getTodos = async () => {
  try {
    const response = await axios.get("http://localhost:1337/api/todos");
    return response.data.data;
  } catch (error) {
    throw new Error("error fetching persons");
  }
};

export const useGetAllTodos = () =>
  useQuery({ queryKey: ["todos"], queryFn: getTodos });
