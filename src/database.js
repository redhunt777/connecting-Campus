function data() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDyzI6C6JNmi2dVNl84qOEEivkDXZN6dO4",
        authDomain: "project-connecting-campus.firebaseapp.com",
        databaseURL: "https://project-connecting-campus-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "project-connecting-campus",
        storageBucket: "project-connecting-campus.appspot.com",
        messagingSenderId: "607358386185",
        appId: "1:607358386185:web:a54390f2d21e0525adb8d8"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            let displayName = user.displayName;
            // This is very IMPORTANT!! We're going to use "db" a lot.
            displayItems();
        }
    });

    function displayItems() {
        const itemsRef = ref(database, 'items');
        let dataArray = []; // Array to store item data

        // Listen for changes in the 'items' node
        onValue(itemsRef, (snapshot) => {
            // Iterate through the items in the snapshot
            snapshot.forEach((childSnapshot) => {
                const itemData = childSnapshot.val();
                const title = itemData.title;
                const description = itemData.description;
                const price = itemData.price;

                const data = {
                    title: title,
                    description: description,
                    price: price
                };

                dataArray.push(data); // Push each item data into the array
            });

            // Convert the array to JSON string
            const jsonData = JSON.stringify(dataArray);

            // Write JSON data to a file (You need to implement file writing based on your environment)
            // For example, in Node.js environment:
            // const fs = require('fs');
            // fs.writeFileSync('data.json', jsonData);
            // Or in a browser environment, you can prompt user to download the file.
        });
    }
}
