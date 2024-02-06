import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

//
const deleteTodos = async (id: number) => {
  try {
    const response = await axios.delete(
      `http://localhost:1337/api/todos/${id}`
    );

    return response.data.data;
  } catch (error) {
    throw new Error("Error deleting todo");
  }
};

//
export const useDeletTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodos,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
