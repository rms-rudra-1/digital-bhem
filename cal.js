
let currentResult = '0';

function appendToResult(value) {
    if (currentResult === '0') {
        currentResult = value;
    } else {
        currentResult += value;
    }
    document.getElementById('result').textContent = currentResult;
}

function calculate() {
    try {
        currentResult = eval(currentResult).toString();
        document.getElementById('result').textContent = currentResult;
    } catch (error) {
        document.getElementById('result').textContent = 'Error';
    }
}

function clearAll() {
    currentResult = '0';
    document.getElementById('result').textContent = currentResult;
}

function deleteone() {
    if (currentResult !== '0') {
        currentResult = currentResult.slice(0, -1);
        if (currentResult === '') {
            currentResult = '0';
        }
        document.getElementById('result').textContent = currentResult;
    }
}
