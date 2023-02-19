// Fetch the driver data from the server
fetch('/api/drivers')
    .then(response => response.json())
    .then(data => {
        // Get a reference to the driver gallery element
        const driverGallery = document.getElementById('driver-gallery');

        // Loop through the driver data and create a card for each driver
        data.forEach(driver => {
            // Create the driver card
            const driverCard = document.createElement('div');
            driverCard.classList.add('driver-card');
            driverCard.addEventListener('click', () => {
                // Handle clicking on the driver card
                alert(`Name: ${driver.name}\nNumber: ${driver.number}\nTeam: ${driver.team}`);
            });

            // Add the driver name, number, and team to the card
            const nameElement = document.createElement('h3');
            nameElement.textContent = driver.name;
            driverCard.appendChild(nameElement);

            const numberElement = document.createElement('p');
            numberElement.textContent = `Number: ${driver.number}`;
            driverCard.appendChild(numberElement);

            const teamElement = document.createElement('p');
            teamElement.textContent = `Team: ${driver.team}`;
            driverCard.appendChild(teamElement);

            // Add the driver card to the gallery
            driverGallery.appendChild(driverCard);
        });
    })
    .catch(error => {
        console.error('Error fetching driver data:', error);
    });
