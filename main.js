// Adegan Global Enterprise - Main JavaScript

// Weather Widget Functionality
async function fetchWeather() {
    const weatherInfo = document.getElementById('weather-info');
    
    try {
        // Using Open-Meteo API (free, no API key required)
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current_weather=true');
        const data = await response.json();
        
        const temp = Math.round(data.current_weather.temperature);
        const windSpeed = data.current_weather.windspeed;
        
        const weatherIcons = {
            0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
            45: '🌫️', 48: '🌫️',
            51: '🌧️', 53: '🌧️', 55: '🌧️',
            61: '🌧️', 63: '🌧️', 65: '🌧️',
            80: '🌧️', 81: '🌧️', 82: '🌧️',
            95: '⛈️', 96: '⛈️', 99: '⛈️'
        };
        
        const icon = weatherIcons[data.current_weather.weathercode] || '🌡️';
        
        weatherInfo.innerHTML = `
            <p style="font-size: 2.5rem; margin-bottom: 10px;">${icon}</p>
            <p><strong>${temp}°C</strong> in Lagos, Nigeria</p>
            <p style="font-size: 0.9rem; color: #666;">Wind: ${windSpeed} km/h</p>
            <p style="font-size: 0.8rem; color: #999; margin-top: 5px;">Updated: ${new Date().toLocaleTimeString()}</p>
        `;
    } catch (error) {
        console.error('Weather fetch error:', error);
        weatherInfo.innerHTML = `
            <p>Unable to load weather data</p>
            <p style="font-size: 0.8rem; color: #999;">Please check your connection</p>
        `;
    }
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to top button functionality
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all service cards and sections
document.addEventListener('DOMContentLoaded', () => {
    // Initialize weather widget
    fetchWeather();
    
    // Update weather every 10 minutes
    setInterval(fetchWeather, 600000);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .license-item, .galaxy-news-item').forEach(el => {
        observer.observe(el);
    });
    
    // Add fade-in class to hero section
    document.querySelector('.hero')?.classList.add('fade-in');
});

// Dynamic year in footer
function updateFooterYear() {
    const footer = document.querySelector('footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = `© ${currentYear} Adegan Global Enterprise. All rights reserved.`;
    }
}

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('mobile-active');
}

// Form validation for contact forms (if added)
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.style.border = '2px solid red';
        } else {
            input.style.border = '';
        }
    });
    
    return isValid;
}

// Loading indicator helper
function showLoading(element, message = 'Loading...') {
    element.innerHTML = `
        <div class="loading"></div>
        <p>${message}</p>
    `;
}

// Error handling helper
function showError(element, message = 'An error occurred') {
    element.innerHTML = `
        <p style="color: red;">❌ ${message}</p>
    `;
}

// Update copyright year when page loads
updateFooterYear();