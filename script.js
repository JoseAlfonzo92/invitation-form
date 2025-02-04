/* document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvp-form');
    const modal = document.getElementById('confirmation-modal');
    const closeButton = document.querySelector('.close-button');
    const notificationSound = document.getElementById('notification-sound');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let name = document.getElementById('name').value;
        let contact = document.getElementById('contact').value;

        // Send data to the mock API
        fetch('https://6791318aaf8442fd73795db2.mockapi.io/name>/guests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, contact })
        })
        .then(response => response.json())
        .then(data => {
            // Show modal and play sound
            modal.style.display = 'block';
            launchConfetti();
            notificationSound.play();

            // Clear form
            form.reset();

            // Redirect to guestlist.html after a short delay
            setTimeout(() => {
                window.location.href = 'guestlist.html';
            }, 2000);
        })
        .catch(error => console.error('Error:', error));
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    function launchConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}); */




/* document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvp-form');
    const modal = document.getElementById('confirmation-modal');
    const closeButton = document.querySelector('.close-button');
    const notificationSound = document.getElementById('notification-sound');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let name = document.getElementById('name').value;
        let contact = document.getElementById('contact').value;

        // Send data to the mock API
        fetch('https://6791318aaf8442fd73795db2.mockapi.io/name>/guests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, contact })
        })
        .then(response => response.json())
        .then(data => {
            // Show modal and play sound
            modal.style.display = 'block';
            launchConfetti();
            notificationSound.play();

            // Save data to localStorage
            let guests = JSON.parse(localStorage.getItem('guests')) || [];
            guests.push({ name, contact });
            localStorage.setItem('guests', JSON.stringify(guests));

            // Clear form
            form.reset();

            // Redirect to guest_list.html after a short delay
            setTimeout(() => {
                window.location.href = 'guest_list.html';
            }, 2000);
        })
        .catch(error => console.error('Error:', error));
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    function launchConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}); */




/* document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvp-form');
    const modal = document.getElementById('confirmation-modal');
    const closeButton = document.querySelector('.close-button');
    const notificationSound = document.getElementById('notification-sound');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let name = document.getElementById('name').value;
        let contact = document.getElementById('contact').value;

        // Send data to Firestore
        firebase.firestore().collection('guests').add({
            name: name,
            contact: contact
        }).then(() => {
            // Show modal and play sound
            modal.style.display = 'block';
            launchConfetti();
            notificationSound.play();

            // Clear form
            form.reset();

            // Redirect to guest_list.html after a short delay
            setTimeout(() => {
                window.location.href = 'guest_list.html';
            }, 2000);
        }).catch((error) => {
            console.error('Error adding document: ', error);
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    function launchConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}); */


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_twaPnI7WYm2uWBCDhvvWhOLqNI6psNE",
    authDomain: "birthday-card-and-guest-list.firebaseapp.com",
    databaseURL: "https://birthday-card-and-guest-list-default-rtdb.firebaseio.com",
    projectId: "birthday-card-and-guest-list",
    storageBucket: "birthday-card-and-guest-list.firebasestorage.app",
    messagingSenderId: "968389124243",
    appId: "1:968389124243:web:20153e019dec1d44b06d66",
    measurementId: "G-3FZRZTWTSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvp-form');
    const modal = document.getElementById('confirmation-modal');
    const closeButton = document.querySelector('.close-button');
    const notificationSound = document.getElementById('notification-sound');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        let name = document.getElementById('name').value;
        let contact = document.getElementById('contact').value;

        try {
            // Add guest to Firestore
            await addDoc(collection(db, 'guests'), {
                name: name,
                contact: contact
            });

            // Show modal and play sound
            modal.style.display = 'block';
            launchConfetti();
            notificationSound.play();

            // Clear form
            form.reset();

            // Redirect to guest_list.html after a short delay
            setTimeout(() => {
                window.location.href = 'guest_list.html';
            }, 2000);
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    function launchConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
});
