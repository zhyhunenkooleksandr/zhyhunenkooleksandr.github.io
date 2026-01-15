const checkboxes = document.querySelectorAll('.filter-check');
const courses = document.querySelectorAll('.course-item');

checkboxes.forEach(box => {
    box.addEventListener('change', () => {
        // 1. Collect all the values of the checkboxes that are currently checked
        const checkedValues = Array.from(checkboxes)
            .filter(c => c.checked)
            .map(c => c.value);

        // 2. Loop through every course box
        courses.forEach(course => {
            const category = course.getAttribute('data-category');
            
            // 3. Logic: If nothing is checked, show all. 
            // If something is checked, show only the matching category.
            if (checkedValues.length === 0 || checkedValues.includes(category)) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    });
});