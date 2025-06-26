const canvas = document.getElementById('kineticCanvas');
const ctx = canvas.getContext('2d');
const mainContent = document.querySelector('.main-content');
const exploreButton = document.querySelector('.explore-button');
const draggableNavArea = document.querySelector('.draggable-nav-area');
const navItems = document.querySelectorAll('.nav-item');
const portfolioSections = document.querySelectorAll('.portfolio-section');
const projectThumbnails = document.querySelectorAll('.project-thumbnail');

let particles = [];
const numParticles = 100;
const maxDistance = 100;

let mouse = {
    x: undefined,
    y: undefined,
    radius: 150
};

// --- Canvas Setup ---
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();
window.addEventListener('resize', setCanvasSize);

// --- Mouse Interaction for Particles ---
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('mouseout', function() {
    mouse.x = undefined;
    mouse.y = undefined;
});

// --- Particle Class (unchanged) ---
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
            this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;

        if (mouse.x !== undefined && mouse.y !== undefined) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                    this.x += 1;
                }
                if (mouse.x > this.x && this.x > this.size * 10) {
                    this.x -= 1;
                }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                    this.y += 1;
                }
                if (mouse.y > this.y && this.y > this.size * 10) {
                    this.y -= 1;
                }
            }
        }
        this.draw();
    }
}

// --- Initialize Particles (unchanged) ---
function initParticles() {
    particles = [];
    for (let i = 0; i < numParticles; i++) {
        let size = (Math.random() * 5) + 1;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let directionX = (Math.random() * 0.5) - 0.25;
        let directionY = (Math.random() * 0.5) - 0.25;
        let color = 'rgba(0, 191, 255, 0.6)';
        particles.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// --- Connect Particles with Lines (unchanged) ---
function connectParticles() {
    let opacityValue = 1;
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) +
                           ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));

            if (distance < maxDistance * maxDistance) {
                opacityValue = 1 - (distance / (maxDistance * maxDistance));
                ctx.strokeStyle = `rgba(0, 191, 255, ${opacityValue * 0.5})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

// --- Animation Loop (unchanged) ---
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
    }
    connectParticles();
}

// --- Draggable Navigation Logic (unchanged, just initial pos updated) ---
let isDragging = false;
let dragOffsetX, dragOffsetY;

draggableNavArea.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragOffsetX = e.clientX - draggableNavArea.getBoundingClientRect().left;
    dragOffsetY = e.clientY - draggableNavArea.getBoundingClientRect().top;
    draggableNavArea.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    draggableNavArea.style.left = `${e.clientX - dragOffsetX}px`;
    draggableNavArea.style.top = `${e.clientY - dragOffsetY}px`;

    const bounds = draggableNavArea.getBoundingClientRect();
    if (bounds.left < 0) draggableNavArea.style.left = '0px';
    if (bounds.top < 0) draggableNavArea.style.top = '0px';
    if (bounds.right > window.innerWidth) draggableNavArea.style.left = `${window.innerWidth - bounds.width}px`;
    if (bounds.bottom > window.innerHeight) draggableNavArea.style.top = `${window.innerHeight - bounds.height}px`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    draggableNavArea.style.cursor = 'grab';
});

// Initial positioning for draggable nav
draggableNavArea.style.left = `${window.innerWidth - draggableNavArea.offsetWidth - 20}px`;
draggableNavArea.style.top = `${window.innerHeight / 2 - draggableNavArea.offsetHeight / 2}px`;


// --- Scene Transitions & Revealing Content (NEW) ---
let currentSectionIndex = 0;
let isScrolling = false; // Flag to prevent rapid section changes

function updateActiveSection() {
    const mainContentTop = mainContent.scrollTop;
    const viewportHeight = window.innerHeight;

    let newActiveIndex = currentSectionIndex;

    // Determine which section is currently in view
    portfolioSections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // A section is considered active if at least 50% of it is in view
        if (mainContentTop >= sectionTop - viewportHeight * 0.5 && mainContentTop < sectionBottom - viewportHeight * 0.5) {
            newActiveIndex = index;
        }
    });

    if (newActiveIndex !== currentSectionIndex) {
        // Deactivate old section
        portfolioSections[currentSectionIndex].classList.remove('active');
        // Hide its content with a transformation for cinematic effect
        portfolioSections[currentSectionIndex].querySelector('.section-content').style.transform = 'translateY(100px)';
        portfolioSections[currentSectionIndex].querySelector('.section-content').style.opacity = '0';


        // Activate new section
        currentSectionIndex = newActiveIndex;
        const activeSection = portfolioSections[currentSectionIndex];
        activeSection.classList.add('active');

        // Reset content transformation for the newly active section to reveal
        activeSection.querySelector('.section-content').style.transform = 'translateY(0)';
        activeSection.querySelector('.section-content').style.opacity = '1';

        // Update body theme based on data-theme attribute of the active section
        document.body.setAttribute('data-theme', activeSection.dataset.theme);

        // Update active nav item
        navItems.forEach(item => item.classList.remove('active'));
        navItems[currentSectionIndex].classList.add('active');
    }
}

// Initial activation and theme setting
updateActiveSection();

// Use IntersectionObserver for more robust active section detection
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionIndex = Array.from(portfolioSections).indexOf(entry.target);
            if (!isScrolling && sectionIndex !== currentSectionIndex) { // Only update if not actively scrolling from a nav click
                updateActiveSection();
            }
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is visible

portfolioSections.forEach(section => {
    sectionObserver.observe(section);
});

// Event listener for scroll-snapping navigation (buttons/nav items)
exploreButton.addEventListener('click', (e) => {
    e.preventDefault();
    isScrolling = true; // Set flag to true
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { isScrolling = false; }, 1000); // Reset flag after scroll animation
});

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        isScrolling = true; // Set flag to true
        const targetId = e.target.getAttribute('data-section');
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => { isScrolling = false; }, 1000); // Reset flag after scroll animation
    });
});

// --- Interactive Project Thumbnails (Unfold Effect - Unchanged) ---
projectThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        document.querySelectorAll('.project-thumbnail.expanded').forEach(expandedThumb => {
            if (expandedThumb !== thumbnail) {
                expandedThumb.classList.remove('expanded');
            }
        });
        thumbnail.classList.toggle('expanded');
    });
});


// --- Start the Show ---
initParticles();
animate();

// Trigger initial section update to set theme and activate first section
window.addEventListener('load', updateActiveSection);
mainContent.addEventListener('scroll', updateActiveSection); // Listen for user scroll
