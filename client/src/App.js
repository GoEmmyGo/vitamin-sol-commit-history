import React  from 'react';
import './App.css';

function App() {
  // const [query, setQuery] = useState([])
  // const [weather, setWeather] = useState([])

  // const search = e => {
  //   if (e.key === "Enter") {
  //     fetch(`${}`)
  //   }
  // }
  return (
    <div className='app'>
      <div className='input-box'>
        <input type="text" placeholder='Location'></input>
        <input type="text" placeholder='Skin Tone'></input>
        <input type="text" placeholder='Coverage'></input>
      </div>
      <div className='calculate-button'>
        <button>How many minutes do I need to stand outside?</button>
      </div>
    </div>
  )
}

export default App;
