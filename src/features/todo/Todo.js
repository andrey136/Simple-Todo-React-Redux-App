import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToDo, todoSelect } from './todoSlice';

export function Todo(){
    // const todoList = useSelector(todoSelect());
    const todoList = useSelector(todoSelect);

    const [inputText, setIntutText] = useState('');
    const dispatch = useDispatch();

    return(
        <div>
           <h1>ToDo List</h1>
        <input onChange={(e) => setIntutText(e.target.value)} value={inputText}></input>
        <button className="btn btn-primary" onClick={() => {dispatch(addToDo(inputText)); setIntutText('')}}>Add ToDo</button>
        <ul>
            { todoList.map( (el, key) => 
            <li key={key}>{el}</li>
            ) }
        </ul>
        </div> 
    );
}