import './App.css';
import FlightPrice from './components/FlightPrice';

function App() {
  console.log("App is running...")
  return (
    <div className="App">
      <header className="App-header">
        <FlightPrice />
      </header>
    </div>
  );
}

export default App;
