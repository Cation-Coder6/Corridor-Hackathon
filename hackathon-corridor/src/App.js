import './App.css';
import CsvToJson from './components/CsvToJson';
import ConfusionMatrixComponent from './components/Graphs/ConfusionMatrixComponent';
import Graphs from './components/Graphs/Graphs';
import GeneratePDF from './components/pdfGenerator';

function App() {
    return (
        <div className="App">
            <CsvToJson />
            <Graphs />
            <GeneratePDF />
            <ConfusionMatrixComponent />
        </div>
    );
}

export default App;
