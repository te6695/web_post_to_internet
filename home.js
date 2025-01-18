// JavaScript code to manage login, signup, and other interactivity

// Variables for overlay and forms
const overlay = document.getElementById('overlay');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

// Show login form
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'block';
    overlay.style.display = 'block';
});

// Show signup form
signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'block';
    overlay.style.display = 'block';
});

// Hide forms when overlay is clicked
overlay.addEventListener('click', () => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    overlay.style.display = 'none';
});

// Functionality to handle form submission (dummy functionality for now)
loginForm.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login successful!');
    loginForm.style.display = 'none';
    overlay.style.display = 'none';
});

signupForm.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Signup successful!');
    signupForm.style.display = 'none';
    overlay.style.display = 'none';
});

// Handle dropdown menu functionality (optional enhancement)
const dropdowns = document.querySelectorAll('nav .dropdown');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseover', () => {
        const content = dropdown.querySelector('.dropdown-content');
        if (content) content.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', () => {
        const content = dropdown.querySelector('.dropdown-content');
        if (content) content.style.display = 'none';
    });
});

// Add search functionality placeholder
const searchForm = document.getElementById('form');
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.getElementById('query').value;
    alert(`Searching for: ${query}`);
});
