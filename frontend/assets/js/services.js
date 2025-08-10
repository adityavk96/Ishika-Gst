      document.addEventListener('DOMContentLoaded', () => {
            // ===================================================
            // Logic for the animated star background
            // ===================================================
            const canvas = document.getElementById('star-canvas');
            const ctx = canvas.getContext('2d');
            let width = window.innerWidth;
            let height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            // Star properties
            const stars = [];
            const numStars = 500;
            let mouseX = width / 2;
            let mouseY = height / 2;

            // Star class
            class Star {
                constructor() {
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                    this.z = Math.random(); // Z-index for depth effect
                    this.radius = this.z * 1.5;
                    this.velocity = {
                        x: 0,
                        y: 0
                    };
                }

                // Draw the star on the canvas
                draw() {
                    ctx.beginPath();
                    // Use a subtle glow effect
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.z})`;
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.closePath();
                }

                // Update the star's position
                update() {
                    const centerX = width / 2;
                    const centerY = height / 2;
                    const dx = (mouseX - centerX) * 0.0001;
                    const dy = (mouseY - centerY) * 0.0001;

                    // Update position based on mouse movement and depth
                    this.x += this.z * dx * 10;
                    this.y += this.z * dy * 10;
                    this.x += this.velocity.x * this.z;
                    this.y += this.velocity.y * this.z;

                    // Loop stars back to the opposite side
                    if (this.x > width) this.x = 0;
                    if (this.x < 0) this.x = width;
                    if (this.y > height) this.y = 0;
                    if (this.y < 0) this.y = height;
                }
            }

            // Create stars
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star());
            }

            // Main animation loop
            function animate() {
                // Clear the canvas
                ctx.clearRect(0, 0, width, height);
                // Animate each star
                stars.forEach(star => {
                    star.update();
                    star.draw();
                });
                requestAnimationFrame(animate);
            }

            // Event listener for mouse movement to control star velocity
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
            
            // Event listener for window resizing
            window.addEventListener('resize', () => {
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;
            });

            // Start the animation
            animate();

            // ===================================================
            // Logic for the hamburger menu
            // ===================================================
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('nav-links');

            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        });