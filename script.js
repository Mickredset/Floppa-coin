document.getElementById('buyForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Получаем значения из формы
  const amount = parseFloat(document.getElementById('amount').value);
  const paymentMethod = document.getElementById('payment').value;

  // Рассчитываем стоимость
  const pricePerFLP = 100; // 1 FLP = 100 руб.
  const totalCost = amount * pricePerFLP;

  // Формируем сообщение
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <p>Вы купили <strong>${amount} FLP</strong>.</p>
    <p>Сумма к оплате: <strong>${totalCost.toLocaleString()} руб.</strong></p>
    <p>Способ оплаты: <strong>${getPaymentName(paymentMethod)}</strong></p>
    <p>✅ Транзакция имитационно завершена!</p>
  `;
  resultDiv.className = 'success';
  resultDiv.style.display = 'block';

  // Сбрасываем форму
  document.getElementById('buyForm').reset();
});

// Переводим код способа оплаты в читаемое название
function getPaymentName(code) {
  const names = {
    'card': 'Банковская карта',
    'sbp': 'Система быстрых платежей (СБП)',
    'crypto': 'Другая криптовалюта'
  };
  return names[code] || code;
}
