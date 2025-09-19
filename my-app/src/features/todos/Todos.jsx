import React from 'react';
import { useDeleteTodoMutation, useGetAllTodosQuery, useLazyGetAllTodosQuery } from '../../services/todosapi';

function Todos() {
    let {isLoading, data} = useGetAllTodosQuery();
    let [deleteTodo] = useDeleteTodoMutation();
    let [getAllTodos] = useLazyGetAllTodosQuery();
  return (
    <div className="border border-2 border-info p-3 m-3">
        <h1>Todos::</h1>
        {
            isLoading && (<h3>Loading...</h3>)
        }
        {
            !isLoading && (
                <ul>
                    {data.map((todo) => {
                        return <li>
                            {todo.title}
                            <button onClick={()=>{deleteTodo(todo["_id"]).
                            then(()=>{
                                getAllTodos();
                            }).catch(()=>{})
                            }}>Delete </button>
                            </li>
                        })
                    }
                </ul>
            )}
    </div>
  )
}

export default Todos;