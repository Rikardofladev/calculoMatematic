function solveTriangleArea() {
    const input = document.getElementById('area-triangle').value;
    const resultDiv = document.getElementById('triangle-result');
    try {
        const [base, height] = parseTriangleAreaInput(input);
        if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
            throw new Error('Base e altura devem ser números positivos.');
        }
        const area = (base * height) / 2;
        resultDiv.textContent = `A área do triângulo é: ${area}`;
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
    }
}

function parseTriangleAreaInput(input) {
    const regex = /^\s*(\d+(\.\d+)?)\s*,\s*(\d+(\.\d+)?)\s*$/;
    const match = input.match(regex);
    if (!match) throw new Error('Entrada inválida');
    return [parseFloat(match[1]), parseFloat(match[3])];
}

function solveCircleArea() {
    const radius = document.getElementById('radius').value;
    const resultDiv = document.getElementById('circle-result');
    try {
        const radiusValue = parseFloat(radius);
        if (isNaN(radiusValue) || radiusValue <= 0) {
            throw new Error('O raio deve ser um número positivo.');
        }
        const area = Math.PI * Math.pow(radiusValue, 2);
        resultDiv.textContent = `A área do círculo é: ${area.toFixed(2)}`;
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
    }
}

function solveSphereVolume() {
    const radius = document.getElementById('sphere-radius').value;
    const resultDiv = document.getElementById('sphere-result');
    try {
        const radiusValue = parseFloat(radius);
        if (isNaN(radiusValue) || radiusValue <= 0) {
            throw new Error('O raio deve ser um número positivo.');
        }
        const volume = (4 / 3) * Math.PI * Math.pow(radiusValue, 3);
        resultDiv.textContent = `O volume da esfera é: ${volume.toFixed(2)}`;
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
    }
}

function solveLinearEquation() {
    const equation = document.getElementById('linear-equation').value;
    const resultDiv = document.getElementById('linear-result');
    try {
        const [a, b] = parseLinearEquation(equation);
        const x = -b / a;
        resultDiv.textContent = `A solução é x = ${x}`;
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
    }
}

function parseLinearEquation(equation) {
    const regex = /([+-]?\d*)x\s*([+-]\s*\d+)\s*=\s*0/;
    const match = equation.match(regex);
    if (!match) throw new Error('Equação inválida');
    let a = match[1] === '' ? 1 : parseInt(match[1].replace(/\s/g, ''));
    let b = parseInt(match[2].replace(/\s/g, ''));
    return [a, b];
}

function solveQuadraticEquation() {
    const equation = document.getElementById('quadratic-equation').value;
    const resultDiv = document.getElementById('quadratic-result');
    try {
        const [a, b, c] = parseQuadraticEquation(equation);
        const discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            resultDiv.textContent = `As soluções são x1 = ${x1} e x2 = ${x2}`;
        } else if (discriminant === 0) {
            const x = -b / (2 * a);
            resultDiv.textContent = `A solução única é x = ${x}`;
        } else {
            resultDiv.textContent = 'A equação não possui soluções reais.';
        }
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
    }
}

function parseQuadraticEquation(equation) {
    const regex = /([+-]?\d*)x\^2\s*([+-]?\d*)x\s*([+-]\s*\d+)\s*=\s*0/;
    const match = equation.match(regex);
    if (!match) throw new Error('Equação inválida');
    let a = match[1] === '' ? 1 : parseInt(match[1].replace(/\s/g, ''));
    let b = match[2] === '' ? 0 : parseInt(match[2].replace(/\s/g, ''));
    let c = parseInt(match[3].replace(/\s/g, ''));
    return [a, b, c];
}

function solveDerivative() {
    const functionInput = document.getElementById('derivative').value;
    const resultDiv = document.getElementById('derivative-result');
    try {
        const derivative = differentiate(functionInput);
        resultDiv.textContent = `A derivada é: ${derivative}`;
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
    }
}

function differentiate(functionInput) {
    // Simples diferenciação de polinômios
    const terms = functionInput.match(/([+-]?\d*)x\^?(\d*)/g);
    let derivative = '';
    terms.forEach(term => {
        const [coeff, power] = term.split('x');
        let coeffNum = coeff === '' ? 1 : parseInt(coeff);
        let powerNum = power === '' ? 1 : parseInt(power);
        if (powerNum > 0) {
            coeffNum *= powerNum;
            powerNum -= 1;
            derivative += `${coeffNum}x^${powerNum} `;
        }
    });
    return derivative.trim();
}

function solveMean() {
    const input = document.getElementById('mean').value;
    const resultDiv = document.getElementById('mean-result');
    try {
        const numbers = input.split(',').map(Number);
        const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
        resultDiv.textContent = `A média é: ${mean}`;
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
    }
}

function solveTrigonometricFunctions() {
    const angle = document.getElementById('angle').value;
    const resultDiv = document.getElementById('trigonometric-result');
    try {
        const angleInRadians = parseFloat(angle) * (Math.PI / 180);
        const sinValue = Math.sin(angleInRadians);
        const cosValue = Math.cos(angleInRadians);
        const tanValue = Math.tan(angleInRadians);
        resultDiv.textContent = `Seno: ${sinValue.toFixed(4)}, Cosseno: ${cosValue.toFixed(4)}, Tangente: ${tanValue.toFixed(4)}`;
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
    }
}

function solveMatrixAddition() {
    const matrixA = document.getElementById('matrix-a').value;
    const matrixB = document.getElementById('matrix-b').value;
    const resultDiv = document.getElementById('matrix-addition-result');
    try {
        const matrixAArray = parseMatrixInput(matrixA);
        const matrixBArray = parseMatrixInput(matrixB);
        if (matrixAArray.length !== matrixBArray.length || matrixAArray[0].length !== matrixBArray[0].length) {
            throw new Error('As matrizes devem ter a mesma dimensão');
        }
        const resultMatrix = addMatrices(matrixAArray, matrixBArray);
        resultDiv.textContent = `Resultado: ${matrixToString(resultMatrix)}`;
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
    }
}

function solveMatrixSubtraction() {
    const matrixA = document.getElementById('matrix-a-sub').value;
    const matrixB = document.getElementById('matrix-b-sub').value;
    const resultDiv = document.getElementById('matrix-subtraction-result');
    try {
        const matrixAArray = parseMatrixInput(matrixA);
        const matrixBArray = parseMatrixInput(matrixB);
        if (matrixAArray.length !== matrixBArray.length || matrixAArray[0].length !== matrixBArray[0].length) {
            throw new Error('As matrizes devem ter a mesma dimensão');
        }
        const resultMatrix = subtractMatrices(matrixAArray, matrixBArray);
        resultDiv.textContent = `Resultado: ${matrixToString(resultMatrix)}`;
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
    }
}

function solveMatrixMultiplication() {
    const matrixA = document.getElementById('matrix-a-mul').value;
    const matrixB = document.getElementById('matrix-b-mul').value;
    const resultDiv = document.getElementById('matrix-multiplication-result');
    try {
        const matrixAArray = parseMatrixInput(matrixA);
        const matrixBArray = parseMatrixInput(matrixB);
        if (matrixAArray[0].length !== matrixBArray.length) {
            throw new Error('O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz');
        }
        const resultMatrix = multiplyMatrices(matrixAArray, matrixBArray);
        resultDiv.textContent = `Resultado: ${matrixToString(resultMatrix)}`;
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
    }
}

function parseMatrixInput(input) {
    const rows = input.split(';');
    return rows.map(row => row.split(',').map(Number));
}

function addMatrices(matrixA, matrixB) {
    return matrixA.map((row, i) => row.map((val, j) => val + matrixB[i][j]));
}

function subtractMatrices(matrixA, matrixB) {
    return matrixA.map((row, i) => row.map((val, j) => val - matrixB[i][j]));
}

function multiplyMatrices(matrixA, matrixB) {
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < matrixA[0].length; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return result;
}

function matrixToString(matrix) {
    return matrix.map(row => row.join(', ')).join('; ');
}