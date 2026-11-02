// Mobile Responsive Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fee Structure Toggle (Click par show/hide hoga)
const feeNavBtn = document.getElementById('fee-nav-btn');
const feeSection = document.getElementById('fees');

feeNavBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Page upar jump karne se rokne ke liye
    feeSection.classList.toggle('hidden-fees'); // Class toggle hogi
    
    // Smooth scroll to fee section jab wo open ho
    if (!feeSection.classList.contains('hidden-fees')) {
        feeSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Contact Form Submit Alert
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Aapka paigham mil gaya hai! Hum jald hi aapse rabta karenge.');
    contactForm.reset();
});