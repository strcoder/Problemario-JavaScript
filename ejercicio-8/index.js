const form = document.getElementById('Form');
const minutes = document.getElementById('Minutes');
const day = document.getElementById('Day');
const shift = document.getElementById('Shift');
const paymentP = document.getElementById('Payment');
const taxP = document.getElementById('Tax');
const totalP = document.getElementById('Total');
const resultContainer = document.getElementById('ResultContainer');

resultContainer.style.display = 'none';

const calcPayment = (min) => {
  if (min < 5) {
    return min * 1;
  } else if (min < 8) {
    return (min - 5) * 0.8 + 5;
  } else if (min <= 10) {
    return (min - 8) * 0.7 + 7.4;
  }
  return (min - 10) * 0.5 + 8.8;
}

const calcTax = (pago) => {
  if (day.value === 'sunday') {
    return pago * 0.05;
  }
  if (shift.value === 'morning') {
    return pago * 0.15;
  }
  return pago * 0.10;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!minutes.value || minutes.value <= 0) return;
  resultContainer.style.display = 'grid';
  const payment = calcPayment(parseInt(minutes.value, 10));
  const tax = calcTax(payment);
  const total = payment + tax;
  paymentP.innerText = `Pago: ${payment}`;
  taxP.innerText = `Impusto: ${tax}`;
  totalP.innerText = `Total a pagar: ${total}`;
  minutes.value = '';
});
