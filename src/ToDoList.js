/* import React, { useState, useEffect } from "react";

function TodoApp() {
	const [task, setTask] = useState(" ");
	const [tasklist, setTasklist] = useState([]);

	const handleChange = (e) => {
		setTask(e.target.value);
	};

	const addTask = () => {
		if (task !== "") {
			const taskDetails = {
				id: Math.floor(Math.random() * 1000),
				value: task,
			};

			setTasklist([...tasklist, taskDetails]);
		}
	};
	// console.log("tasklist", tasklist);

	const deleteHandler = (e, id) => {
		e.preventDefault();
		setTasklist(tasklist.filter((t) => t.id !== id));
	};
	return (
		<div className="todo">
			<input
				type="text"
				name="text"
				id="text"
				onChange={(e) => handleChange(e)}
				placeholder="Add the Data Here "
			/>
			<button className="add-btn" onClick={addTask}>
				Add
			</button>
			<br />
			{tasklist !== [] ? (
				<ul>
					{tasklist.map((t) => (
						<li className="item">
							{t.value}
							<button
								className="delete"
								onClick={(e) => deleteHandler(e, t.id)}
							>
								Delete
							</button>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}

export default TodoApp;
 */


import React, { useState,  } from 'react'
import axios from 'axios';

function TodoApp() {
   
    
    const [task, setTask] = useState("")
    const [tasklist, setTasklist] = useState([]);
    const [token, setToken] = useState(Buffer.from(`${ "admin" }:${ "morgan2d" }`, "utf-8").toString("base64"));
    const [_rev, set_rev] = useState("14-c3381596135ed08a0a1b1d932ce4a4f8")
    

  

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const addTask = () => {
        if(task !== "") {
            const taskDetails = {
                value: task,
                name:"Bijay",
                _rev
            }
            
                 axios.put("http://localhost:5984/todo_list/2ed85ec0fe47a2c775b232a88f037acf/", taskDetails, {
                headers:{
                    Authorization: `Basic ${token}`
                }
            })
            .then((res) => {
                set_rev(res.data.rev)
                 console.log(res)})
            .catch(err => console.log(err))
             
                 
            setTasklist([...tasklist, taskDetails]);
        }
    };
    // console.log("tasklist", tasklist);

    // const deleteHandler = (e, id) => {
    //     e.preventDefault();
    //     setTasklist(tasklist.filter((t) => t.id !== id));
    // }
    return (
        <div className="todo">
            <input type="text" name="text" id="text"
                onChange={(e) =>handleChange(e)} 
                placeholder="Add the Data Here "/>
            <button className="add-btn" onClick={ addTask }> Add </button>
            <br/>
        {tasklist !== [] ? 
        <ul>
            {/* {tasklist.map((t) => (
                <li className='item'> { t.value } 
                    <button className='delete' onClick={(e) => deleteHandler(e, t.id)}> Delete </button>
                </li>
            ))} */}
        </ul>
        
        : null }
        </div>
    )
}

export default TodoApp
