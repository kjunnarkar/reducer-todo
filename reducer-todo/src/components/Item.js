import React, { useState, useReducer } from 'react';
import { initialItems, itemReducer } from '../reducers/reducer';

const Item = () => {
    const [state, dispatch] = useReducer(itemReducer, initialItems);
    const [task, setTask] = useState({
        item: '',
        completed: false,
        id: Math.random()
    });

    console.log('Here are initial items: ', initialItems);
    console.log('Here is state: ', state);

    const handleChange = (event) => {
        setTask({ ...task, item: event.target.value, completed: false, id: Math.random() });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: task });
        setTask({
            item: '',
            completed: false,
            id: Math.random()
        })
    }

    const toggleItem = errand => {
        dispatch({ type: 'TOGGLE_ITEM', payload: errand });
    }

    const clearSelected = (event) => {
        event.preventDefault();
        dispatch({ type: 'REMOVE_ITEM' });
    }

    return (
        <div>
            <h2>Tasks To Do:</h2>
            <form onSubmit={handleSubmit} >
                <input
                    type='text'
                    name='task'
                    value={task.item}
                    onChange={handleChange}
                    placeholder='Enter Task'
                />
                <div>
                    <button className='addItems' onClick={handleSubmit}>Add Item</button>
                </div>
                <div>
                    <button className='removeItems' onClick={clearSelected}>Remove Selected Items</button>
                </div>
            </form>
            <h3>Current Tasks</h3>
            {state.map(errand => 
                <div
                key={errand.id}
                onClick={() => toggleItem(errand)}
                className={`errand${errand.completed ? 'completed' : ''}`}
                >
                <p>{errand.item}</p>
                </div>
            )}
        </div>
    )
}

export default Item;
