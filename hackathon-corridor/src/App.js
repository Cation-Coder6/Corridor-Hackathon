import './App.css';
import CsvToJson from './components/CsvToJson';
import GeneratePDF from './components/pdfGenerator';

function App() {
    return (
        <div className="App">
            <CsvToJson />
            <GeneratePDF />
        </div>
    );
}

export default App;
