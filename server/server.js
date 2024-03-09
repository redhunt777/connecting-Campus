const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/events', (req, res) => {
    const eventData = req.body;

    const jsonData = JSON.stringify(eventData, null, 2);

    fs.writeFile(__dirname + '/eventData.json', jsonData, (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
            res.status(500).json({ error: 'Error writing JSON file' });
            return;
        }
        console.log('JSON file saved successfully');
        res.status(200).json({ message: 'JSON file saved successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
