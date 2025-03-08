document.getElementById('updateClientForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const params = new URLSearchParams(formData);
    const message = document.getElementById('message');
    const clientId = formData.get('id');

    try {
        
        const updateResponse = await fetch(`../../api-rest/update_client.php?${params.toString()}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params.toString()
        });

        if (updateResponse.ok) {
            message.textContent = 'Updated client';
            message.style.color = 'green';
            event.target.reset();
        } else if (updateResponse.status === 404) {
            message.textContent = 'Error: cannot update client';
            message.style.color = 'red';
        } else {
            message.textContent = 'Unknow error';
            message.style.color = 'red';
        }
    } catch (error) {
        console.error('Error:', error);
        message.textContent = 'An error are ocurred, please try later.';
        message.style.color = 'red';
    }
});