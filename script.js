const ctx = document.getElementById('waveGraph').getContext('2d');
const waveGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            label: 'Your record.',
            data: [10, 25, 50, 75, 50, 25, 10, 5, 15, 30],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: true,
            lineTension: 0.4,
            pointStyle: 'circle',
            pointRadius: 6,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false
            },
            y: {
                beginAtZero: true,
                max: 100
            }
        },
        plugins: {
            legend: {
                labels: {
                    boxWidth: 7, // Adjust the width of the legend box
                    boxHeight: 7, // Adjust the height of the legend box
                    padding: 7, // Space between the box and text
                    usePointStyle: true // Use the point style as the legend marker
                }
            }
        }
    }
});


// Initialize Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})