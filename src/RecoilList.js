import { useState, useEffect, useContext } from "react";
import { atom, useRecoilValue, useRecoilState } from "recoil";
import './List.css'

function RecoilList() {

// recoil state management
    
    const listState = atom({
        key: 'list',
        default: []
    });

    const [list, setList] = useRecoilState(listState);

    const newItemState = atom({
        key: 'newItem',
        default: []
    });

    const [newItem, setNewItem] = useRecoilState(newItemState);

    // completed list states
    const completedListState = atom({
        key: 'completedList',
        default: []
    });

    const [completedList, setCompletedList] = useRecoilState(completedListState);

    const completedItemState = atom({
        key: 'completedItem', 
        default: []
    });

    const [completedItem, setCompletedItem] = useRecoilState(completedItemState);

    // deleted list states
    const deletedListState = atom({
        key: 'deletedList', 
        default: []
    });

    const [deletedList, setdeletedList] = useRecoilState(deletedListState);

    const deletedItemState = atom({
        key: 'deletedItem', 
        default: []
    });

    const [deletedItem, setDeletedItem] = useRecoilState(deletedItemState);

    const handleChange = ({target: {value}}) => {
        setNewItem(value)
    };
  
    const handleAdd = () => {
        setList([...list, newItem])
        setNewItem('')
    }

    let handleEnter = (event) => {
        if (event.key === 'Enter' && newItem.length > 0) {
            handleAdd()
        }
    };

    // let handleComplete = (event) => {
    //     let completeListToAdd = [...completedList]
    //     let listToSplice = [...list]
    //     list.forEach((item, index) => {
    //         if (event.target.value == index) {
    //             setCompletedItem(item)
    //             completeListToAdd.push(item)
    //             setCompletedList(completeListToAdd)
    //             listToSplice.splice(index, 1)
    //             setList(listToSplice)
    //         }
    //     })
    // };

    let handleComplete = (event) => {
        list.forEach((item, index) => {
            if (event.target.value == index) {
                setCompletedList([...completedList, item])
                
                setList([...list].splice(index, 1))
                
            }
        })
    };

    let handleDelete = (event) => {
        let listToDelete = [...deletedList]
        let listToSplice = [...list]
        list.forEach((item, index) => {
            if (event.target.value == index) {
                setDeletedItem(item)
                listToDelete.push(item)
                setdeletedList(listToDelete)
                listToSplice.splice(index, 1)
                setList(listToSplice)
            }
        })
    };

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
    };

    
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

export default RecoilList;