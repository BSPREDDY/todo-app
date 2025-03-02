export function Todos({todos}) {
    return (<div>
        {
            todos.map((todo,index)=> (
                <div key={index}>
                    <h1>{todo.title}</h1>
                    <h1>{todo.description}</h1>
                    <button>{todo.completed ? "completed" : "mark as complete"}</button>
                </div>
            ))}
    </div>
)
}
  