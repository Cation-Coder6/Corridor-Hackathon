import React from 'react'
import {ConfusionMatrix} from 'ml-confusion-matrix';

const ConfusionMatrixComponent = ()=> {

    function createConfusionMatrix(data) {
        // Extract true labels and predicted labels from the JSON data
        const trueLabels = data.map(item => item.trueLabel);
        const predictedLabels = data.map(item => item.predictedLabel);

        // Create a confusion matrix from the true labels and predicted labels
        const matrix = ConfusionMatrix.fromLabels(trueLabels, predictedLabels);

        return matrix;
    }

    const data = [
        { trueLabel: 'cat', predictedLabel: 'cat' },
        { trueLabel: 'dog', predictedLabel: 'cat' },
        { trueLabel: 'dog', predictedLabel: 'dog' },
        { trueLabel: 'cat', predictedLabel: 'dog' },
        { trueLabel: 'cat', predictedLabel: 'cat' },
        { trueLabel: 'dog', predictedLabel: 'dog' },
    ];

    const matrix = createConfusionMatrix(data);

    return (
        <div>
            <h2>Confusion Matrix</h2>
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        {matrix.classes.map(className => (
                            <th key={className}>{className}</th>
                        ))}
                    </tr>
                    {matrix.classes.map((className, i) => (
                        <tr key={className}>
                            <th>{className}</th>
                            {matrix.getMatrix()[i].map((value, j) => (
                                <td key={`${i}-${j}`}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ConfusionMatrixComponent

