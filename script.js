// 加算機の計算
function calculate() {
    // 入力値を取得
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    // 計算
    const result = num1 + num2;
    
    // 結果を表示
    document.getElementById('result').textContent = result;
}

// 割引計算機の計算
function calculate_discount() {
    // 入力値を取得
    const price = Number(document.getElementById('price').value);
    const discount = Number(document.getElementById('discount').value);
    
    // 計算
    const discountedPrice = price * (1 - discount / 100);
    const discountAmount = price - discountedPrice;
    
    // 結果を表示
    document.getElementById('result_discountedPrice').textContent = discountedPrice.toLocaleString() + '円';
    document.getElementById('result_discountAmount').textContent = discountAmount.toLocaleString() + '円';
}

// NISA積立シュミレーターの計算
function calculate_nisa() {
    // 入力値を取得
    const investment_Man = Number(document.getElementById('investment').value);
    const investment = investment_Man * 10000;
    const years = Number(document.getElementById('years').value);
    const percent = Number(document.getElementById('percent').value);

    // 計算
    const sum = investment * years * 12;
    const profit = sum * (percent / 100);
    const total = sum + profit;

    // 結果を表示
    document.getElementById('result_sum').textContent = sum.toLocaleString() + '円';
    document.getElementById('result_profit').textContent = profit.toLocaleString() + '円';
    document.getElementById('result_total').textContent = total.toLocaleString() + '円';
}
