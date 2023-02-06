import { useState, useEffect, useContext } from "react";
import './List.css'

function List() {

// react state management
    // to do list states
    const [list, setList] = useState([]);
    const [newItem, setNewItem] = useState([]);
    // completed list states
    const [completedList, setCompletedList] = useState([]);
    const [completedItem, setCompletedItem] = useState([]);
    // deleted list states
    const [deletedList, setdeletedList] = useState([]);
    const [deletedItem, setDeletedItem] = useState([]);

// recoil state management

    let handleChange = (event) => {
        setNewItem(event.target.value)
    }

    let handleAdd = () => {
        list.push(newItem)
        setList(list)
        setNewItem('')
    }

    let handleEnter = (event) => {
        if (event.key === 'Enter' && newItem.length > 0) {
            handleAdd()
        }
    }

    let handleComplete = (event) => {
        list.forEach((item, index) => {
            if (event.target.value == index) {
                setCompletedItem(item)
                completedList.push(item)
                setCompletedList(completedList)
                list.splice(index, 1)
            }
        })
    }

    let handleDelete = (event) => {
        list.forEach((item, index) => {
            if (event.target.value == index) {
                setDeletedItem(item)
                deletedList.push(item)
                setdeletedList(deletedList)
                list.splice(index, 1)
                setList(list)
            }
        })
    }

    let handleClear = (event) => {
        switch(event.target.value) {
            case 'Todo':
              setList([])
              break;
            case 'Completed':
                setCompletedList([])
              break;
            case 'Deleted':
                setdeletedList([])
              break;
            default:
                setList([])
                setCompletedList([])
                setdeletedList([])
        }
    }

    
    return (

        <>
            <div className="new-list-item-components">
                <label className="list-item-label"> New List Item: </label>
                <input type="text" className="list-item-field" value={newItem}
                    onKeyPress={(event) => handleEnter(event)}
                    onChange={(event) => {handleChange(event)}}>
                </input>
        
                <button className="add-button" 
                    onClick={() => {handleAdd()}}> + 
                </button>

                <button className="clear-all-button" value={'All'} onClick={(event) => handleClear(event)}>Clear All</button>
            </div>


            <ul className="list-component-container">
                <div> To Do ({list.length}) </div>
                <button className="clear-list-button" value={'Todo'} onClick={(event) => handleClear(event)}>Clear List</button>
                {
                    list.length ?
                    list.map((item, index) => {
                        return (
                            <>
                            <li className="list-div" key={index} value={index}>
                            <button className='crossoff-list-item' value={index} onClick={(event) => handleComplete(event)}>✅ </button>
                            <button className='delete-list-item' value={index} onClick={(event) => handleDelete(event)}>🗑️ </button>
                            <div className="list-item" > {item} </div>
                            </li>
                            </>
                        )
                    }) :
                    <div className="empty-list"></div>
                }
            </ul>

            <ul className="list-component-container">
                <div> Completed ({completedList.length}) </div>
                <button className="clear-list-button" value={'Completed'} onClick={(event) => handleClear(event)}>Clear List</button>
                {
                    completedList.length ?
                    completedList.map((item, index) => {
                        return (
                            <>
                            <li className="list-div" key={index} value={index}>
                            <div className="list-item" > ✔️ {item} </div>
                            </li>
                            </>
                        )
                    }) :
                    <div className="empty-list"></div>
                }
            </ul>

            <ul className="list-component-container">
                <div> Deleted ({deletedList.length}) </div>
                <button className="clear-list-button" value={'Deleted'} onClick={(event) => handleClear(event)}>Clear List</button>
                {
                    deletedList.length ?
                    deletedList.map((item, index) => {
                        return (
                            <>
                            <li className="list-div" key={index} value={index}>
                            <div className="list-item" > ✖️ {item} </div>
                            </li>
                            </>
                        )
                    }) :
                    <div className="empty-list"></div>
                }
            </ul>

        </>

    )
}

export default List;