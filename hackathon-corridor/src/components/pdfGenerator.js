import React from "react";
import jsPDF from "jspdf";

function GeneratePDF() {
    const generatePdf = () => {
        const doc = new jsPDF();
        doc.text("Hello, world!", 10, 10);
        doc.save("document.pdf");
    };

    return (
        <div>
            <button onClick={generatePdf}>Generate PDF</button>
        </div>
    );
}

export default GeneratePDF;
