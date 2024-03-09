// Define the data to be sent in the request body
const eventData = {
    title: "Sample News Title",
    description: "Sample News Description",
    image: "sample-image-url.jpg"
};

// Send the POST request to the server
fetch('/api/events', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log('Event data saved:', data);
    // You can perform further actions here, such as displaying a success message to the user
})
.catch(error => {
    console.error('Error saving event data:', error);
    // You can handle errors here, such as displaying an error message to the user
});
