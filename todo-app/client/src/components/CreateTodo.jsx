import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div>
            <div className="bg-gray-200 flex justify-center items-center min-h-screen">
                <div className="border rounded-lg shadow-xl p-6 bg-white w-80 flex flex-col items-center">

                <input type="text" placeholder="title" className="w-full mb-2 p-2 border rounded" onChange={function (e) {
                    const value = e.target.value;
                    setTitle(e.target.value);
                }}
                ></input><br />


                <input type="text" placeholder="description" className="w-full mb-2 p-2 border rounded" onChange={function (e) {
                    const value = e.target.value;
                    setDescription(e.target.value);
                }}
                ></input><br />



                <button className=" bg-blue-600 text-white p-2 w-35 border rounded hover:bg-blue-700 hover:shadow-xl cursor-pointer" onClick={() => {
                    fetch('http://localhost:3000/todo', {
                        method: 'POST',
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "content-type": "application/json"
                        }
                    })
                        .then(async function (res) {
                            const json = await res.json()
                            alert('todo added')
                        })
                }}>add todo</button>
            </div>
            </div> 
        </div>
    );
}
