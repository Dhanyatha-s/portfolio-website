document.addEventListener("DOMContentLoaded", function() {
    const skillItems = document.querySelectorAll(".skill-item");
    
    function handleScroll() {
        skillItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                item.classList.add("visible");
            }
        });
    }
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load in case already in view
});


document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.querySelector('.skills-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsSection.classList.add('visible'); // Add class to make it visible
                observer.unobserve(skillsSection); // Stop observing after it becomes visible
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% is visible

    observer.observe(skillsSection); // Start observing
});

// this is email 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value.trim();

    if (!message) {
        alert("Please enter a message before sending.");
        return;
    }

    const data = { message: message };

    fetch('/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert(data.message);
            document.getElementById('message').value = '';
        } else {
            alert(data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error sending message. Please try again.');
    });
});


document.querySelectorAll('.category').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();

        // Remove active class from all category links
        document.querySelectorAll('.category').forEach(link => link.classList.remove('active'));
        item.classList.add('active');

        // Get selected category
        const category = item.getAttribute('data-category');

        // Show/Hide project cards based on selected category
        document.querySelectorAll('.project-card').forEach(card => {
            if (card.classList.contains(category)) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    });
});



