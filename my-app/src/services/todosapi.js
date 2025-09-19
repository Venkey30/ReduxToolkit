// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500/api/todos" }),
  
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => `/?delay=1500`,
    }),

  addTodo: builder.mutation({
    query: (ntd) => ({
      url: "/",
      method: "POST",
      body: ntd
    }),
  }),
  deleteTodo:builder.mutation({
    query:(id)=>{
      return {
        method: "DELETE",
        url: `/${id}`,
      };
    },
  }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTodosQuery, useLazyGetAllTodosQuery, useAddTodoMutation, useDeleteTodoMutation } = todosApi;