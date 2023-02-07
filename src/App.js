import './App.css';
import NewListItem from './components/NewListItem';
import ToDoList from './components/ToDoList';
import CompletedList from './components/CompletedList';
import DeletedList from './components/DeletedList';

function App() {
  return (
    <div className='app-container'>
    <NewListItem />
    <ToDoList />
    <CompletedList />
    {/* <DeletedList /> */}
  </div>
  )
}

export default App;
