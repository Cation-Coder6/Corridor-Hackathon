import React from 'react'
import Papa from "papaparse";

function CsvToJson() {
    return (
        <div>
            <input
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={(e) => {
                    const files = e.target.files;
                    console.log(files);
                    if (files) {
                        console.log(files[0]);
                        const parsedData = Papa.parse(files[0], {
                            header: true,
                            error: function (err) {
                                console.log("Error:", err);
                            },
                            complete: function (results) {
                                console.log("Finished:", results.data);
                            },
                        });
                    }
                }}
            />
        </div>
    )
}

export default CsvToJson




