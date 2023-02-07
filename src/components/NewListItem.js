import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { newListItemState, toDoListState } from '../ToDoListStates';
import ToDoList, { handleAdd } from './ToDoList'

function NewListItem(){
    const [newItem, setNewItem] = useRecoilState(newListItemState);

    const [list, setList] = useRecoilState(toDoListState);

    const handleChange = ({target: {value}}) => {
        setNewItem(value)
        
    };

    const handleAdd = (event) => {
        if (event.key === 'Enter' && newItem.length > 0) {
            setList([...list, newItem])
            setNewItem('')
        } else if (event.key === undefined && newItem.length > 0){
            setList([...list, newItem])
            setNewItem('') 
        }
    }

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
                onKeyPress={(event) => {handleAdd(event)}}
                onChange={(event) => {handleChange(event)}}>
            </input>

            <button className="add-button" 
                onClick={(event) => {handleAdd(event)}}> + 
            </button>

            {/* <button className="clear-all-button" value={'All'} onClick={(event) => handleClear(event)}>Clear All</button> */}
        </div>

    )
}

export default NewListItem;