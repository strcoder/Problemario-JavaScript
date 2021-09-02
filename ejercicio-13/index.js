const form = document.getElementById('Form');
const employeeName = document.getElementById('Name');
const department = document.getElementById('Department');
const date = document.getElementById('Date');
const salary = document.getElementById('Salary');
const resultContainer = document.getElementById('ResultContainer');
const result = document.getElementById('Result');
const addition = document.getElementById('Addition');
const subtraction = document.getElementById('Subtraction');

resultContainer.style.display = 'none';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!employeeName.value || !salary.value || !date.value) {
    resultContainer.style.display = 'none';
    return;
  }

  const fecha = new Fecha(date.value);

  if (department.value) {
    const ingeniero = new Ingeniero(employeeName.value, fecha, salary.value, department.value);
    result.innerHTML = ingeniero.getIngeniero();
  } else {
    const empleado = new Empleado(employeeName.value, fecha, salary.value,);
    result.innerHTML = empleado.getEmpleado();
  }


  date.value = '';
  salary.value = '';
  department.value = '';
  employeeName.value = '';
  resultContainer.style.display = 'grid';
});
