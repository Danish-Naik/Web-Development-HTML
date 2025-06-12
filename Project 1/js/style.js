document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('main input');

    // Focus and blur effects
    input.addEventListener('focus', () => {
        input.style.boxShadow = '0 0 10px #e23744';
    });

    input.addEventListener('blur', () => {
        input.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
    });

    // Placeholder change on hover
    input.addEventListener('mouseover', () => {
        input.placeholder = "Try 'Pizza', 'Cafe', 'Biryani'...";
    });

    input.addEventListener('mouseout', () => {
        input.placeholder = "Search for restaurants, cuisines and dish";
    });

    // Press Enter to simulate search
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            alert(`Searching for: ${input.value}`);
        }
    });

    // Scroll to top button
    const scrollBtn = document.createElement("button");
    scrollBtn.id = "scrollTopBtn";
    scrollBtn.innerHTML = "↑";
    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 100) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });
});
