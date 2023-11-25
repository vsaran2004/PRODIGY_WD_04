document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header');
    var headerHeight = header.offsetHeight;

    window.addEventListener('scroll', function () {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > headerHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});

// project section

function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || category === cardCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
