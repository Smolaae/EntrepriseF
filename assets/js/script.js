// Navbar scroll behavior
let prevScrollpos = window.pageYOffset;
        
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('nav').classList.remove('hidden-navbar');
    } else {
        document.querySelector('nav').classList.add('hidden-navbar');
    }
    
    prevScrollpos = currentScrollPos;
};

// Mobile menu functionality
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
});

closeMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
});

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
}

// Modal functionality <3
function openModal() {
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}