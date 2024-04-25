import { useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState(["Ready", "Set", "Go"])

  function handleSubmit(event) {
    event.preventDefault();
    setListItems([...listItems, inputText]);
  }

  return (
    <>
      <h1>React State Exercise</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
        />

        <div>
          <button>Click Me</button>
        </div>
      </form>

      <ul>
        {listItems.map((element, index) => {
          return <li key={index}>{element}</li>
        })}
      </ul>
    </>
  )
}


export default App;
