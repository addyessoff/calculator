function calculate() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    const result = num1 + num2;
    
    document.getElementById('result').textContent = result;
}

function calculate_nisa() {
    const investment_Man = Number(document.getElementById('investment').value);
    const investment = investment_Man * 10000;
    const years = Number(document.getElementById('years').value);
    const percent = Number(document.getElementById('percent').value);

    const sum = investment * years * 12;
    const profit = sum * (percent / 100);
    const total = sum + profit;

        document.getElementById('result_sum').textContent = sum.toLocaleString() + '円';
    document.getElementById('result_profit').textContent = profit.toLocaleString() + '円';
    document.getElementById('result_total').textContent = total.toLocaleString() + '円';
}
