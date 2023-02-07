import {deletedListState} from '../ToDoListStates'
import {useRecoilState} from 'recoil'


function DeletedList() {

    const [deletedList, setdeletedList] = useRecoilState(deletedListState);

    return (
        <ul className="list-component-container">
        <div> Deleted ({deletedList.length}) </div>
        {/* <button className="clear-list-button" value={'Deleted'} onClick={(event) => handleClear(event)}>Clear List</button> */}
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
    )
}

export default DeletedList;