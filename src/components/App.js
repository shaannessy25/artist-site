
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './About'
import Landing from './Landing'
import Navbar from './Navbar/Navbar'



function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route path="/landing" component={Landing}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
