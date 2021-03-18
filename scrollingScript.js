let pageCanScroll = true;

const page = document.querySelector('.page');
page.addEventListener('wheel', (e) => {
    if(pageCanScroll) {
        let deltaSign = e.deltaY > 0 ? 1 : -1;
        e.preventDefault();
        page.scrollLeft += 35 * deltaSign;
    }
});

const experienceSection = document.querySelector('.section-experience__table');
experienceSection.addEventListener('mousemove', () => pageCanScroll = false)
experienceSection.addEventListener('mouseleave', () => pageCanScroll = true)