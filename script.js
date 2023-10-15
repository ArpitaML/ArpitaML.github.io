document.addEventListener('DOMContentLoaded', function () {
    // Add a click event listener to each project heading
    const projectHeadings = document.querySelectorAll('.project h3');

    projectHeadings.forEach(heading => {
        heading.addEventListener('click', function () {
            // Toggle the class 'show' on the parent project div
            this.parentNode.classList.toggle('show');

            // Close other projects when one is opened
            projectHeadings.forEach(otherHeading => {
                if (otherHeading !== heading) {
                    otherHeading.parentNode.classList.remove('show');
                }
            });
        });
    });
});
