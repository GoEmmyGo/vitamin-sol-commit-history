import React  from 'react';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Calculator from './components/Calculator';

function App() {
  // const [query, setQuery] = useState([])
  // const [weather, setWeather] = useState([])

  // const search = e => {
  //   if (e.key === "Enter") {
  //     fetch(`${}`)
  //   }
  // }
  return (
    <div>
      <Router>
        <div>
          <Calculator />
          <Header />
            <Route path='components/About.jsx' component={About} />
            <Route path ='components/Calculator.jsx' component={Calculator} />
            <Route path='components/Home.jsx' component={Home} />
        </div>
      </Router>
    </div>
  )
}

export default App;
