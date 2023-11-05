import React,{useState} from 'react';
import './App.css';

function App() {
  const [isCompleteScreen , setIsCompleteScree] = useState(false);
  return (
    <div className="App">
     <h1>TO-DO-LIST</h1>

     <div className="wrapper">
      <div className="todo-input">
        <div className="todo-input-item">
            <label>Title </label>
            <input type="text" placeholder="What's the task for?"></input>
        </div>
        <div className="todo-input-item">
          <label>Description </label>
          <input type="text" placeholder="What's the task's description?"></input>
        </div>
        <div className="todo-input-item">
          <button type="button" className="todo-but">Add</button>
        </div>
      </div>  
        
        <div className="todo-task">
          <button className={`todo-but1 ${isCompleteScreen===false && 'active'} `} onClick={()=>setIsCompleteScree(false)}>TODO </button>
          <button className={`todo-but1 ${isCompleteScreen === true && 'active'} `} onClick={() => setIsCompleteScree(true)}>COMPLETED </button>
        </div>

        <div className="todo-list">
          <div className='todo-list-item'>
            <div>
              <h3>TASK 1</h3>
              <p>Description</p>
            </div>
            
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;
