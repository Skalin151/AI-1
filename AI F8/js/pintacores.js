document.addEventListener('DOMContentLoaded', function () {
    const colorLabels = document.querySelectorAll('.color-label');
    const colorDiv = document.getElementById('colorDiv');

    colorLabels.forEach(label => {
        label.addEventListener('mouseover', function () {
            const color = this.textContent;
            colorDiv.style.backgroundColor = color;
        });

        label.addEventListener('mouseout', function () {
            colorDiv.style.backgroundColor = '';
        });
    });
});
