        document.addEventListener('DOMContentLoaded', () => {
            // Get form and link elements
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');
            const showLoginLink = document.getElementById('show-login');
            const showRegisterLink = document.getElementById('show-register');
            const loginFields = document.getElementById('login-fields');
            const registerFields = document.getElementById('register-fields');

            // Custom message box elements
            const messageBox = document.getElementById('message-box');
            const messageText = document.getElementById('message-text');
            const closeMessageButton = document.getElementById('close-message');
            
            // Hamburger menu elements
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('nav-links');

            function showCustomAlert(message) {
                messageText.textContent = message;
                messageBox.classList.remove('hidden');
            }

            closeMessageButton.addEventListener('click', () => {
                messageBox.classList.add('hidden');
            });

            // Function to show the login form and hide the register form
            function showLoginForm() {
                loginForm.classList.remove('opacity-0', 'pointer-events-none');
                registerForm.classList.add('opacity-0', 'pointer-events-none');
            }

            // Function to show the registration form and hide the login form
            function showRegisterForm() {
                loginForm.classList.add('opacity-0', 'pointer-events-none');
                registerForm.classList.remove('opacity-0', 'pointer-events-none');
            }

            // Add event listeners for the links
            showLoginLink.addEventListener('click', (e) => {
                e.preventDefault();
                showLoginForm();
            });

            showRegisterLink.addEventListener('click', (e) => {
                e.preventDefault();
                showRegisterForm();
            });

            // Handle form submissions (front-end only)
            loginFields.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = e.target.elements['email'].value;
                const password = e.target.elements['password'].value;
                console.log('Login attempt:', { email, password });
                // In a real application, you would send this data to a server
                showCustomAlert('Login functionality is not implemented yet. Check the console for data.');
            });

            registerFields.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = e.target.elements['name'].value;
                const email = e.target.elements['email'].value;
                const password = e.target.elements['password'].value;
                console.log('Registration attempt:', { name, email, password });
                // In a real application, you would send this data to a server
                showCustomAlert('Registration functionality is not implemented yet. Check the console for data.');
            });

            // Toggle hamburger menu on click
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            // Universe Background Animation
            const canvas = document.getElementById('star-canvas');
            const ctx = canvas.getContext('2d');
            let stars = [];
            const numStars = 1000;

            // Set canvas size
            function setCanvasSize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            setCanvasSize();
            window.addEventListener('resize', setCanvasSize);

            // Create a star class
            class Star {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.radius = Math.random() * 1.5;
                    this.vx = Math.random() * 0.1 - 0.05; // Random velocity for movement
                    this.vy = Math.random() * 0.1 - 0.05;
                    this.alpha = Math.random();
                }

                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
                    ctx.fill();
                }

                update() {
                    this.x += this.vx;
                    this.y += this.vy;

                    // Wrap stars around the screen
                    if (this.x < 0) this.x = canvas.width;
                    if (this.x > canvas.width) this.x = 0;
                    if (this.y < 0) this.y = canvas.height;
                    if (this.y > canvas.height) this.y = 0;

                    // Change alpha for a subtle twinkling effect
                    this.alpha += (Math.random() - 0.5) * 0.01;
                    if (this.alpha > 1) this.alpha = 1;
                    if (this.alpha < 0) this.alpha = 0;
                }
            }

            // Create the initial stars
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star());
            }

            // Animation loop
            function animate() {
                // Clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Update and draw each star
                stars.forEach(star => {
                    star.update();
                    star.draw();
                });

                requestAnimationFrame(animate);
            }
            animate();
        });
