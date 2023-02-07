import {completedListState} from '../ToDoListStates'
import {useRecoilState} from 'recoil'
import { useEffect } from 'react';

function CompletedList(event) {

    const [completedList, setCompletedList] = useRecoilState(completedListState);



console.log(event)

    return (
            <ul className="list-component-container">
            <div> Completed ({completedList.length}) </div>
            {/* <button className="clear-list-button" value={'Completed'} onClick={(event) => handleClear(event)}>Clear List</button> */}
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
    )
}

export default CompletedList;