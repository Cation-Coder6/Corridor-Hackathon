import './App.css';
import CsvToJson from './components/CsvToJson';
import ConfusionMatrix from './components/Graphs/ConfusionMatrix';
import ConfusionMatrixComponent from './components/Graphs/ConfusionMatrixComponent';
import Graphs from './components/Graphs/Graphs';
import Header from './components/Header';
import Form from './components/Form';
import GeneratePDF from './components/pdfGenerator';
import Quesions from './components/Quesions';

function App() {
    return (
        <div className="App">
            <Header />
            <Form />
            <Quesions />
            <CsvToJson />
            <Graphs />
            <GeneratePDF />
            {/* <ConfusionMatrixComponent /> */}
            {/* <ConfusionMatrix /> */}
        </div>
    );
}

export default App;
