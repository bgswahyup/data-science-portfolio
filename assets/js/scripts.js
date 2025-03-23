// Animations on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(element => {
        observer.observe(element);
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Year in Footer
const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

// Form Submission Handling
const contactForm = document.querySelector('.contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        }, 1000);
    });
}

// Dark Mode Toggle
const darkModeToggle = document.createElement('div');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.querySelector('i').classList.toggle('fa-sun');
    darkModeToggle.querySelector('i').classList.toggle('fa-moon');
});

// Typewriter Effect for Hero Text
const heroText = document.querySelector('.hero-content h1');
if (heroText) {
    const text = heroText.innerText;
    heroText.innerText = '';
    let i = 0;

    const typewriter = setInterval(() => {
        if (i < text.length) {
            heroText.innerText += text.charAt(i);
            i++;
        } else {
            clearInterval(typewriter);
        }
    }, 100);
}

// Project Card Hover Effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(255, 111, 97, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(255, 111, 97, 0.2)';
    });
});

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Load More Projects (Simulated)
const loadMoreButton = document.createElement('button');
loadMoreButton.innerText = 'Load More Projects';
loadMoreButton.classList.add('btn', 'load-more');
document.querySelector('.projects').appendChild(loadMoreButton);

loadMoreButton.addEventListener('click', () => {
    // Simulate loading more projects
    setTimeout(() => {
        const newProject = document.createElement('div');
        newProject.classList.add('project-card', 'animate');
        newProject.innerHTML = `
            <img src="assets/images/project4.jpg" alt="Project 4">
            <h3>New Project</h3>
            <p>This is a newly loaded project. More details coming soon!</p>
            <a href="#" class="project-link">View Details <i class="fas fa-arrow-right"></i></a>
        `;
        document.querySelector('.project-grid').appendChild(newProject);
        loadMoreButton.style.display = 'none';
    }, 1000);
});