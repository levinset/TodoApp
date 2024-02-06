import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoType } from "../types/types";

//
const editTodos = async (data: TodoType) => {
  try {
    const response = await axios.put(
      `http://localhost:1337/api/todos/${data.id}`,
      { data: data.attributes }
    );
    return response.data.data;
  } catch (error) {
    throw new Error("error editing persons");
  }
};

//
export const useEditTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editTodos,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
