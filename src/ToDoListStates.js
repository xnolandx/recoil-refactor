import { atom, selector } from "recoil";

//atoms
const toDoListState = atom({
    key: 'toDoListState',
    default: []
  });

const newListItemState = atom({
    key: 'newListItemState',
    default: []
});

const completedListState = atom({
    key: 'completedList',
    default: []
});

const deletedListState = atom({
    key: 'deletedList', 
    default: []
});

export {
    toDoListState, 
    newListItemState, 
    completedListState, 
    deletedListState
}