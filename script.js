document.addEventListener("DOMContentLoaded", function() {
    const donationForm = document.getElementById('donationForm');
    const contactForm = document.getElementById('contactForm');
    const subscribeForm = document.getElementById('subscribeForm'); 

    // Handle donation form submission
    donationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const bloodType = document.getElementById('bloodType').value;

        // Display confirmation message
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.innerHTML = `<p>Thank you, ${name}! Your blood type (${bloodType}) has been recorded.</p>`;

        // Reset the form
        donationForm.reset();
    });

    // Handle contact form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const contactName = document.getElementById('contactName').value;

        // Display confirmation message
        const contactConfirmationMessage = document.getElementById('contactConfirmationMessage');
        
        contactConfirmationMessage.innerHTML = `<p>Thank you, ${contactName}! Your message has been sent.</p>`;

        // Reset the form
        contactForm.reset();
    });

    subscribeForm.addEventListener('submit', function(event){
        event.preventDefault();
        const mail = document.getElementById('gmail').value;

        const ConfirmationMessage = document.getElementById('ConfirmationMessage');
        ConfirmationMessage.innerHTML = `Thanks for subscribing!`;
        subscribeForm.reset();

    });

    // Slider section
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const sliderContainer = document.querySelector('.slider-container');

    function showSlide(index) {
        // Calculate the offset for the current slide
        const offset = -index * 100; // Each slide is 100% wide
        sliderContainer.style.transform = `translateX(${offset}%)`; // Move the container
    }

    function changeSlide() {
        currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
        showSlide(currentSlide);
    }

    // Initialize the slider
    showSlide(currentSlide);

    // Set interval to change slide every 1 second
    setInterval(changeSlide, 2000);
    
});


/* join button */
 
document.getElementById('joinUsButton').addEventListener('click', function () {
    alert('Thank you for your interest in becoming a donor! Please fill out the "Donate Blood" form.');
});    
  