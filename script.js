const socket = io.connect('http://localhost:3000'); // Replace with your listener service URL

const dataContainer = document.getElementById('dataContainer');
const successRateElement = document.getElementById('successRate');
let successCount = 0;
let totalCount = 0;

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('savedData', (data) => {
  totalCount++;
  const successRate = ((successCount / totalCount) * 100).toFixed(2);
  successRateElement.textContent = `${successRate}%`;

  const dataElement = document.createElement('p');
  dataElement.textContent = JSON.stringify(data);
  dataContainer.appendChild(dataElement);

  // Update success count
  successCount++;
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
