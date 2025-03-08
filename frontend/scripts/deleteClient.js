async function deleteClient() {
    const clientId = document.getElementById('clientId').value.trim();
    const message = document.getElementById('message');

    if (!clientId) {
        message.textContent = 'Please enter a valid client ID.';
        message.style.color = 'red';
        return;
    }

    message.textContent = 'Deleting, please wait...';
    message.style.color = 'blue';

    try {
        const response = await fetch(`../../api-rest/delete_client.php?id=${clientId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            alert('Client erased successfully');
            message.textContent = '';
            document.getElementById('clientId').value = ''; // Limpiar el campo de entrada
        } else if (response.status === 404) {
            alert('Error: Client not found.');
        } else {
            alert(`Unknown error: ${body.message || 'No details available'}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error has ocurred, please try later.', error);
    }
}
