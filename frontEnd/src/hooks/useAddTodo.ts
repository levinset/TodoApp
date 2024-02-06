import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InputTodoType } from "../types/types";

//
const addTodos = async (data: InputTodoType) => {
  try {
    const response = await axios.post("http://localhost:1337/api/todos", {
      data,
    });

    return response.data.data;
  } catch (error) {
    throw new Error("error fetching persons");
  }
};

//
export const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodos,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
