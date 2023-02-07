import { useRecoilState } from "recoil";
import { newListItemState } from '../ToDoListStates';
import ToDoList, { handleAdd } from './ToDoList'

function NewListItem(){
    const [newItem, setNewItem] = useRecoilState(newListItemState);

    const handleChange = ({target: {value}}) => {
        setNewItem(value)
    };

    const handleAdd = (event) => {
        if ((event.key === 'Enter' && newItem.length > 0)  || (event.target.value === 'Enter' && newItem.length > 0) ) {
            // <ToDoList newItem = {newItem} />
        //   setList([...list, newItem])
        //   setNewItem('')
        }
    };

    // const handleAdd = (event) => {
    //     if (event.key === 'Enter' && newItem.length > 0) {
    //       setList([...list, newItem])
    //       setNewItem('')
    //     }
    // };

    let handleClear = (event) => {
        // switch(event.target.value) {
        //     case 'Todo':
        //       setList([])
        //       break;
        //     case 'Completed':
        //         setCompletedList([])
        //       break;
        //     case 'Deleted':
        //         setdeletedList([])
        //       break;
        //     default:
        //         setList([])
        //         setCompletedList([])
        //         setdeletedList([])
        // }
    };

    return (

        <div className="new-list-item-components">
            <label className="list-item-label"> New List Item: </label>
            <input type="text" className="list-item-field" value={newItem}
                onKeyPress={(event) => handleAdd(event)}
                onChange={(event) => {handleChange(event)}}>
            </input>

            <button className="add-button" value={'Enter'}
                onClick={(event) => {handleAdd(event)}}> + 
            </button>

            {/* <button className="clear-all-button" value={'All'} onClick={(event) => handleClear(event)}>Clear All</button> */}
        </div>

    )
}

export default NewListItem;