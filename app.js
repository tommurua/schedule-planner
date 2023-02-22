const form = document.getElementById('schedule-form');
const table = document.getElementById('schedule-table');
const printButton = document.querySelector('.print-button');

function sortTable() {
  // Get all rows in the table
  const rows = Array.from(table.rows).slice(1);  // slice(1) to exclude the header row

  // Sort the rows based on the time value
  rows.sort((row1, row2) => {
    const time1 = row1.cells[1].innerHTML;
    const time2 = row2.cells[1].innerHTML;
    return time1 > time2 ? 1 : -1;
  });

  // Add the sorted rows back to the table
  rows.forEach((row) => table.appendChild(row));
}

//Add a print button
printButton.addEventListener('click', () => {
  window.print();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskName = document.getElementById('task-name').value;
  const taskTime = document.getElementById('task-time').value;

  const row = table.insertRow(-1);
  const nameCell = row.insertCell(0);
  const timeCell = row.insertCell(1);
  const deleteCell = row.insertCell(2);

  nameCell.innerHTML = taskName;
  timeCell.innerHTML = taskTime;
  deleteCell.innerHTML = '<button class="delete-button">Delete</button>';

  form.reset();

  sortTable();
});

table.addEventListener('click', (event) => {
  if (event.target.className === 'delete-button') {
    event.target.parentNode.parentNode.remove();
    sortTable();
  }
});
