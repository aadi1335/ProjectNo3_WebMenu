

  firebaseConfig.initializeApp(firebaseConfig)

  // Get a reference to the database
  const database = firebase.database();

  // Reference to the data path in the database
  const dataRef = database.ref('food/desserts');

  // Read data from the database when it changes
  dataRef.on('value', (snapshot) => {
    const data = snapshot.val();

    // Check if there is any data
    if (data) {
      console.log('Data from Firebase:', data);
      // Process the data as needed
    } else {
      console.log('No data available.');
    }
  }, (error) => {
    console.error('Error reading data:', error);
  });




