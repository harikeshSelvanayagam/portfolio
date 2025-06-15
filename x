<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">d
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Harikesh - Portfolio</title>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet">
</head>
<body>
    <nav>
        <a href="#hero">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
    </nav>
    <header>
        <div class="header-container">
            <div class="profile-pic">
                <img src="harikesh.jpg" alt="Harikesh Profile Picture">
            </div>
            <div class="header-text">
                <h1>Harikesh</h1>
                <p class="vibe-coder">Vibe Coder</p>
                <p>Electrical & Electronic Engineer | Front-End Developer | AI & ML Enthusiast</p>
            </div>
        </div>
    </header>
    <main>
        <section id="hero">
            <h2>Innovative Engineer & Developer</h2>
            <p>Passionate about AI, ML, and Front-End Development</p>
            <a href="#projects"><button>Explore My Work</button></a>
        </section>
        <section id="skills">
            <h2>Skills</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/html5/html5-original.svg" alt="HTML">
                    <p>HTML</p>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/css3/css3-original.svg" alt="CSS">
                    <p>CSS</p>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg" alt="JavaScript">
                    <p>JavaScript</p>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/python/python-original.svg" alt="Python">
                    <p>Python</p>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/php/php-original.svg" alt="PHP">
                    <p>PHP</p>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/matlab/matlab-original.svg" alt="MATLAB">
                    <p>MATLAB</p>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/jupyter/jupyter-original.svg" alt="Jupyter Notebook">
                    <p>Jupyter Notebook</p>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/vscode/vscode-original.svg" alt="VS Code">
                    <p>VS Code</p>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/c/c-original.svg" alt="C">
                    <p>C</p>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/cplusplus/cplusplus-original.svg" alt="C++">
                    <p>C++</p>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tensorflow/tensorflow-original.svg" alt="AI">
                    <p>AI</p>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/pytorch/pytorch-original.svg" alt="ML">
                    <p>ML</p>
                </div>
            </div>
        </section>
        <section id="projects">
            <h2>Projects</h2>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="project-card">
                            <img src="project1.jpg" alt="LSTM-based MPPT Controller">
                            <div class="project-overlay">
                                <h3>LSTM-based MPPT Controller</h3>
                                <p>Developed an LSTM-based MPPT controller for solar panels, improving efficiency.</p>
                                <a href="#">View Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="project-card">
                            <img src="project2.jpg" alt="Project 2">
                            <div class="project-overlay">
                                <h3>Project 2</h3>
                                <p>Description of project 2.</p>
                                <a href="#">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </section>
        <section id="resume">
            <h2>Resume</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Bachelor's in Electrical and Electronic Engineering</h3>
                        <p>[University Name], [Year]</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>Work Experience</h3>
                        <p>Coming Soon</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact">
            <h2>Contact Me</h2>
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    </main>
    <footer>
        <a href="#"><i class="fas fa-pen"></i></a>
        <a href="#"><i class="fas fa-code"></i></a>
        <a href="#"><i class="fas fa-book"></i></a>
        <a href="#"><i class="fas fa-wrench"></i></a>
        <p>© 2025 Harikesh. All rights reserved.</p>
    </footer>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.classList.add('visible');
            } else {
                nav.classList.remove('visible');
            }
        });
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.5 });
        sections.forEach(section => {
            observer.observe(section);
        });
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    </script>
</body>
</html>
