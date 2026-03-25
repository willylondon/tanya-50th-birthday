document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const rsvpSection = document.getElementById('rsvp-section');
    const instruction = document.querySelector('.instruction');
    let isOpen = false;

    envelope.addEventListener('click', () => {
        if (!isOpen) {
            envelope.classList.add('open');
            instruction.style.display = 'none';
            isOpen = true;

            // Scroll to RSVP section after card is revealed
            setTimeout(() => {
                rsvpSection.classList.add('visible');
                rsvpSection.scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        }
    });

    // Handle RSVP button clicks
    const attendBtn = document.querySelector('.btn.attend');
    const declineBtn = document.querySelector('.btn.decline');

    attendBtn.addEventListener('click', () => {
        alert("We are thrilled you're coming! Tanya can't wait to see you.");
        attendBtn.style.backgroundColor = '#D4AF37';
        attendBtn.style.borderColor = '#D4AF37';
        declineBtn.style.opacity = '0.5';
    });

    declineBtn.addEventListener('click', () => {
        alert("We're sorry you can't make it! You'll be missed.");
        declineBtn.style.backgroundColor = '#eee';
        attendBtn.style.opacity = '0.5';
    });
});
