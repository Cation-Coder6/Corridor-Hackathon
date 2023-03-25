import './App.css';
import CsvToJson from './components/CsvToJson';
import ConfusionMatrixComponent from './components/Graphs/ConfusionMatrixComponent';
import Graphs from './components/Graphs/Graphs';
import GeneratePDF from './components/pdfGenerator';

function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      Home
    </div>
  );
=======
    return (
        <div className="App">
            <CsvToJson />
            <Graphs />
            <GeneratePDF />
            <ConfusionMatrixComponent />
        </div>
    );
>>>>>>> main
}

export default App;
