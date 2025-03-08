document.getElementById('CreateClientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const params = new URLSearchParams(formData).toString();
    
    fetch('../../api-rest/create_client.php?' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params
    })
    .then(response => {
        if (response.status === 201) {
            alert('Client created successfully');
            event.target.reset();
        } else if (response.status === 404) {
            alert('Error: cannot create client');
        } else {
            alert(`Unknown error: ${body.message || 'No details available'}`);
        }
    })
    .catch(error => {
        //console.error('Error:', error);
        alert('An error has ocurred, please try later.', error);
    });
});