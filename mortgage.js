document.getElementById('mortgage-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const principal = parseFloat(document.getElementById('principal').value);
    const annualInterestRate = parseFloat(document.getElementById('rate').value);
    const loanTerm = parseInt(document.getElementById('term').value);

    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment = principal * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfPayments)) / (Math.pow((1 + monthlyInterestRate), numberOfPayments) - 1);

    document.getElementById('result').innerText = `Your monthly mortgage payment is: $${monthlyPayment.toFixed(2)}`;
});
