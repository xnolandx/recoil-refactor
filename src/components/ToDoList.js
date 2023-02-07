import {toDoListState, completedListState} from '../ToDoListStates'
import {useRecoilState, useRecoilValue} from 'recoil'
import CompletedList, {completedList} from './CompletedList'


function ToDoList() {
    
    const list = useRecoilValue(toDoListState)
    const [completedList, setCompletedList] = useRecoilState(completedListState);
    
    const handleComplete = (event) => {
        list.forEach((item, index) => {
            if (event.target.value == index) {
                setCompletedList([...completedList, item])
            }
        })
    };




    let handleDelete = (event) => {
        // let listToDelete = [...deletedList]
        // let listToSplice = [...list]
        // list.forEach((item, index) => {
        //     if (event.target.value == index) {
        //         setDeletedItem(item)
        //         listToDelete.push(item)
        //         setdeletedList(listToDelete)
        //         listToSplice.splice(index, 1)
        //         setList(listToSplice)
        //     }
        // })
    };

    // const handleClear = (event) => {
    //     switch(event.target.value) {
    //         case 'Todo':
    //           setList([])
    //           break;
    //         case 'Completed':
    //             setCompletedList([])
    //           break;
    //         case 'Deleted':
    //             setdeletedList([])
    //           break;
    //         default:
    //             setList([])
    //             setCompletedList([])
    //             setdeletedList([])
    //     }
    // };
    
    return (

        <>

        
        
        <ul className="list-component-container">
            <div> To Do ({list.length}) </div>
            {/* <button className="clear-list-button" value={'Todo'} onClick={(event) => handleClear(event)}>Clear List</button> */}
            {
                list.length ?
                list.map((item, index) => {
                    return (
                        <>
                        <li className="list-div" key={index} value={index}>
                            <button className='crossoff-list-item' value={index} onClick={(event) => handleComplete(event)}>✅ </button>
                            {/* <button className='delete-list-item' value={index} onClick={(event) => handleDelete(event)}>🗑️ </button> */}
                            <div className="list-item" key={index}> {item} </div>
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

export default ToDoList;