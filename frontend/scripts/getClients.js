document.addEventListener('DOMContentLoaded', fetchClients);

async function fetchClients() {
    const status = document.getElementById('status');
    const tbody = document.querySelector('#clientTable tbody');

    status.textContent = 'Loading clients...';
    status.style.color = 'blue';

    tbody.innerHTML = '';

    try {
        const response = await fetch('../../api-rest/get_all_client.php');

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        if (data?.error) {
            throw new Error(`Error: ${data.error}`);
        }

        if (!Array.isArray(data) || data.length === 0) {
            status.textContent = 'No clients found.';
            status.style.color = 'orange';
            return;
        }

        data.forEach(client => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = client.id;

            const emailCell = document.createElement('td');
            emailCell.textContent = client.email;

            const nameCell = document.createElement('td');
            nameCell.textContent = client.name;

            const cityCell = document.createElement('td');
            cityCell.textContent = client.city;

            const phoneCell = document.createElement('td');
            phoneCell.textContent = client.telephone;

            row.append(idCell, emailCell, nameCell, cityCell, phoneCell);
            tbody.appendChild(row);
        });

        status.textContent = '';
    } catch (error) {
        console.error('Error:', error);
        status.textContent = error.message || 'Network error. Please try again.';
        status.style.color = 'red';
    }
}
