import './App.css';
import CsvToJson from './components/CsvToJson';
import Graphs from './components/Graphs/Graphs';

function App() {
  return (
    <div className="App">
      <CsvToJson />
      <Graphs />
    </div>
  );
}

export default App;
