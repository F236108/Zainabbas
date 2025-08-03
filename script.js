// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key

// Initialize Supabase
const supabaseUrl = 'YOUR_SUPABASE_URL'; // Replace with your Supabase URL
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your Supabase anon key
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Global variables
let currentResume = null;
let isAdmin = false;
const ADMIN_PASSWORD = 'admin123'; // Change this to your desired password

// Portfolio projects data
const projects = [
    {
        id: 1,
        title: "Smart Home Automation System",
        description: "A comprehensive IoT-based home automation system using Arduino and C++ programming, featuring remote control capabilities and energy monitoring.",
        type: "IoT Project",
        image: "/public/lovable-uploads/2310bf25-5020-460f-a321-c77665083e59.png",
        tags: ["Arduino", "C++", "IoT", "Home Automation"],
        github: "https://github.com/F236108",
        demo: "#"
    },
    {
        id: 2,
        title: "Digital Signal Processing Lab",
        description: "Implementation of various DSP algorithms and filters using MATLAB and C++, focusing on real-time signal analysis and processing techniques.",
        type: "Academic Project",
        image: "/public/lovable-uploads/4f7799d8-efc7-46a6-90c4-df91c346a78d.png",
        tags: ["MATLAB", "C++", "DSP", "Signal Processing"],
        github: "https://github.com/F236108",
        demo: "#"
    },
    {
        id: 3,
        title: "Circuit Design Simulator",
        description: "A comprehensive circuit simulation tool built with C++ that allows users to design, analyze, and test electrical circuits with real-time feedback.",
        type: "Software Development",
        image: "/public/lovable-uploads/5fd94d76-0a1f-4a7c-8b1d-315587890b70.png",
        tags: ["C++", "Circuit Design", "Simulation", "GUI"],
        github: "https://github.com/F236108",
        demo: "#"
    },
    {
        id: 4,
        title: "Renewable Energy Monitoring",
        description: "Solar panel efficiency monitoring system with data logging capabilities, built using embedded systems and wireless communication protocols.",
        type: "Research Project",
        image: "/public/lovable-uploads/c2c6b82f-a364-45ad-9185-fba44ec51cc3.png",
        tags: ["Embedded Systems", "Solar Energy", "Data Logging", "Wireless"],
        github: "https://github.com/F236108",
        demo: "#"
    },
    {
        id: 5,
        title: "Motor Control System",
        description: "Advanced motor control system using microcontrollers and C++ programming, featuring PID control algorithms and real-time monitoring.",
        type: "Control Systems",
        image: "/public/lovable-uploads/e6e89a7e-5dfa-4c0d-b136-9ad6f4b3e23b.png",
        tags: ["Microcontrollers", "PID Control", "C++", "Motor Control"],
        github: "https://github.com/F236108",
        demo: "#"
    },
    {
        id: 6,
        title: "Network Analysis Tool",
        description: "C++ based network analysis application for studying electrical network behavior, impedance calculations, and frequency response analysis.",
        type: "Analysis Tool",
        image: "/public/lovable-uploads/2310bf25-5020-460f-a321-c77665083e59.png",
        tags: ["C++", "Network Analysis", "Electrical Networks", "GUI"],
        github: "https://github.com/F236108",
        demo: "#"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    setupNavigation();
    setupScrollEffects();
    setupHeroAnimations();
    loadPortfolio();
    setupContactForm();
    setupCVManager();
    updateCurrentYear();
    fetchCurrentResume();
}

// Navigation functionality
function setupNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Scroll effects
function setupScrollEffects() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        // Navbar background on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active section highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Hero section animations
function setupHeroAnimations() {
    // Add entrance animations to hero elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });

    // Floating animation for profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', () => {
            profileImage.style.transform = 'scale(1.1)';
        });
        
        profileImage.addEventListener('mouseleave', () => {
            profileImage.style.transform = 'scale(1)';
        });
    }
}

// Load portfolio projects
function loadPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    projects.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectCard.style.animationDelay = `${index * 0.1}s`;
        portfolioGrid.appendChild(projectCard);
    });
}

// Create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'portfolio-card';
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="portfolio-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzNDc1NSIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OEE2QkMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pgo8L3N2Zz4K'">
        <div class="portfolio-content">
            <div class="portfolio-type">${project.type}</div>
            <h3 class="portfolio-title">${project.title}</h3>
            <p class="portfolio-description">${project.description}</p>
            <div class="portfolio-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="portfolio-buttons">
                <a href="${project.demo}" class="btn btn-primary btn-small">
                    <i class="fas fa-external-link-alt"></i>
                    View Details
                </a>
                <a href="${project.github}" target="_blank" class="btn btn-outline btn-small">
                    <i class="fab fa-github"></i>
                    GitHub
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Contact form functionality
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        try {
            // Replace with your EmailJS service details
            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'zainabbasm416@gmail.com'
            });
            
            showToast('Message sent successfully!', 'success');
            contactForm.reset();
        } catch (error) {
            console.error('Error sending email:', error);
            showToast('Failed to send message. Please try again.', 'error');
        }
    });
}

// CV Manager functionality
function setupCVManager() {
    const adminToggle = document.getElementById('admin-toggle');
    const adminSection = document.getElementById('admin-section');
    const adminLoginBtn = document.getElementById('admin-login-btn');
    const adminPasswordInput = document.getElementById('admin-password');
    const cvUpload = document.getElementById('cv-upload');
    const downloadCvBtn = document.getElementById('download-cv');
    const resumeDownloadBtn = document.getElementById('resume-download');

    // Toggle admin section visibility
    adminToggle.addEventListener('click', () => {
        const isVisible = adminSection.style.display !== 'none';
        adminSection.style.display = isVisible ? 'none' : 'block';
    });

    // Admin login
    adminLoginBtn.addEventListener('click', () => {
        const password = adminPasswordInput.value;
        if (password === ADMIN_PASSWORD) {
            isAdmin = true;
            document.getElementById('admin-login').style.display = 'none';
            document.getElementById('admin-panel').style.display = 'block';
            showToast('Admin login successful!', 'success');
            fetchResumes();
        } else {
            showToast('Invalid password!', 'error');
        }
    });

    // CV upload
    cvUpload.addEventListener('change', handleFileUpload);

    // CV download buttons
    downloadCvBtn.addEventListener('click', handleResumeDownload);
    resumeDownloadBtn.addEventListener('click', handleResumeDownload);

    // Enter key for admin login
    adminPasswordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            adminLoginBtn.click();
        }
    });
}

// Handle file upload
async function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file
    if (file.type !== 'application/pdf') {
        showToast('Please select a PDF file only.', 'error');
        return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
        showToast('File size must be less than 10MB.', 'error');
        return;
    }

    try {
        showToast('Uploading CV...', 'success');

        // Create bucket if it doesn't exist
        await createBucketIfNotExists();

        // Upload file to Supabase storage
        const fileName = `cv_${Date.now()}.pdf`;
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('resumes')
            .upload(fileName, file);

        if (uploadError) throw uploadError;

        // Set all existing resumes as not current
        await supabase
            .from('resumes')
            .update({ is_current: false })
            .neq('id', '00000000-0000-0000-0000-000000000000');

        // Insert resume record in database
        const { data: resumeData, error: dbError } = await supabase
            .from('resumes')
            .insert([{
                filename: file.name,
                file_path: fileName,
                content_type: file.type,
                file_size: file.size,
                is_current: true
            }])
            .select()
            .single();

        if (dbError) throw dbError;

        showToast('CV uploaded successfully!', 'success');
        fetchResumes();
        fetchCurrentResume();
        
        // Reset file input
        event.target.value = '';
    } catch (error) {
        console.error('Error uploading CV:', error);
        showToast('Failed to upload CV. Please try again.', 'error');
    }
}

// Create Supabase bucket if it doesn't exist
async function createBucketIfNotExists() {
    try {
        const { data: buckets } = await supabase.storage.listBuckets();
        const bucketExists = buckets.some(bucket => bucket.name === 'resumes');
        
        if (!bucketExists) {
            await supabase.storage.createBucket('resumes', {
                public: true,
                allowedMimeTypes: ['application/pdf'],
                fileSizeLimit: 10485760 // 10MB
            });
        }
    } catch (error) {
        console.error('Error creating bucket:', error);
    }
}

// Fetch current resume
async function fetchCurrentResume() {
    try {
        const { data, error } = await supabase
            .from('resumes')
            .select('*')
            .eq('is_current', true)
            .single();

        if (error && error.code !== 'PGRST116') {
            console.error('Error fetching current resume:', error);
            return;
        }

        currentResume = data;
    } catch (error) {
        console.error('Error fetching current resume:', error);
    }
}

// Fetch all resumes for admin panel
async function fetchResumes() {
    if (!isAdmin) return;

    try {
        const { data, error } = await supabase
            .from('resumes')
            .select('*')
            .order('uploaded_at', { ascending: false });

        if (error) throw error;

        displayResumes(data);
    } catch (error) {
        console.error('Error fetching resumes:', error);
        showToast('Failed to fetch resumes.', 'error');
    }
}

// Display resumes in admin panel
function displayResumes(resumes) {
    const resumeList = document.getElementById('resume-list');
    resumeList.innerHTML = '';

    if (resumes.length === 0) {
        resumeList.innerHTML = '<p>No resumes uploaded yet.</p>';
        return;
    }

    resumes.forEach(resume => {
        const resumeItem = document.createElement('div');
        resumeItem.className = 'resume-item';
        
        resumeItem.innerHTML = `
            <div class="resume-info">
                <div class="resume-filename">${resume.filename} ${resume.is_current ? '(Current)' : ''}</div>
                <div class="resume-meta">
                    Uploaded: ${new Date(resume.uploaded_at).toLocaleDateString()} | 
                    Size: ${formatFileSize(resume.file_size)}
                </div>
            </div>
            <div class="resume-actions">
                <button class="btn btn-outline btn-small" onclick="downloadResume('${resume.id}', '${resume.file_path}', '${resume.filename}')">
                    <i class="fas fa-download"></i>
                </button>
                <button class="btn btn-outline btn-small" onclick="deleteResume('${resume.id}', '${resume.file_path}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        resumeList.appendChild(resumeItem);
    });
}

// Handle resume download
async function handleResumeDownload() {
    if (!currentResume) {
        showToast('No resume available for download.', 'error');
        return;
    }

    try {
        const { data, error } = await supabase.storage
            .from('resumes')
            .download(currentResume.file_path);

        if (error) throw error;

        // Create download link
        const url = URL.createObjectURL(data);
        const a = document.createElement('a');
        a.href = url;
        a.download = currentResume.filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast('Download started!', 'success');
    } catch (error) {
        console.error('Error downloading resume:', error);
        showToast('Failed to download resume.', 'error');
    }
}

// Download specific resume (admin function)
async function downloadResume(resumeId, filePath, filename) {
    try {
        const { data, error } = await supabase.storage
            .from('resumes')
            .download(filePath);

        if (error) throw error;

        const url = URL.createObjectURL(data);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast('Download started!', 'success');
    } catch (error) {
        console.error('Error downloading resume:', error);
        showToast('Failed to download resume.', 'error');
    }
}

// Delete resume (admin function)
async function deleteResume(resumeId, filePath) {
    if (!confirm('Are you sure you want to delete this resume?')) return;

    try {
        // Delete from storage
        const { error: storageError } = await supabase.storage
            .from('resumes')
            .remove([filePath]);

        if (storageError) throw storageError;

        // Delete from database
        const { error: dbError } = await supabase
            .from('resumes')
            .delete()
            .eq('id', resumeId);

        if (dbError) throw dbError;

        showToast('Resume deleted successfully!', 'success');
        fetchResumes();
        fetchCurrentResume();
    } catch (error) {
        console.error('Error deleting resume:', error);
        showToast('Failed to delete resume.', 'error');
    }
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function updateCurrentYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-card, .service-card, .portfolio-card');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});

// Smooth scrolling for all anchor links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
    }
});

// Preload images
function preloadImages() {
    const images = [
        'https://i.postimg.cc/j2dxy1vN/2.jpg',
        ...projects.map(project => project.image)
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize image preloading
document.addEventListener('DOMContentLoaded', preloadImages);