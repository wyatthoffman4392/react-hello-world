import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';

function App() {
  const object = {
    gmc:'Yukon'
  }
  const object1 = {
    honda:'Civic'
  }
  return (
    <div className="App">
      <Homepage object={object} object1={object1} />
    </div>
  );
}

export default App;
