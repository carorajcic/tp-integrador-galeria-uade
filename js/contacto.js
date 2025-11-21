const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const messageDiv = document.getElementById('formMessage');
        messageDiv.innerHTML = '<p class="success-message">Mensaje enviado exitosamente! Te responderemos a la brevedad.</p>';
        this.reset();
        setTimeout(() => {
            messageDiv.innerHTML = '';
        }, 5000);
    });
}

