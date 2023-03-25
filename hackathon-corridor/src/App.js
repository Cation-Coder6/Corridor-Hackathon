import './App.css';
import CsvToJson from './components/CsvToJson';
import Graphs from './components/Graphs/Graphs';
import GeneratePDF from './components/pdfGenerator';

function App() {
    return (
        <div className="App">
            <CsvToJson />
            <Graphs />
            <GeneratePDF />
        </div>
    );
}

export default App;
