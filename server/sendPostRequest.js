const sendFormData = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const fileInput = document.getElementById('image');
    const image = fileInput.files[0];

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    fetch('/api/events', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Event data saved:', data);
        alert('News submitted successfully');
    })
    .catch(error => {
        console.error('Error submitting news:', error);
        alert('Error submitting news: ' + error.message);
    });
};

document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    sendFormData();
});
