const page = document.querySelector('.page');
page.addEventListener('wheel', (e) => {
        let deltaSign = e.deltaY > 0 ? 1 : -1;
        page.scrollLeft += 35 * deltaSign;
});
