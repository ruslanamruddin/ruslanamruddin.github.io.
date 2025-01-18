const modelViewer = document.querySelector('model-viewer');
const resetViewButton = document.querySelector('.reset-button'); // Use the class selector

// Set the initial camera orbit
const initialCameraOrbit = '290deg 80deg 100m';
const initialFieldOfView = '50deg';
const initialCameraTarget = '0m 10m 0m';

// Add a click event listener to reset the view
resetViewButton.addEventListener('click', () => {
    modelViewer.cameraOrbit = initialCameraOrbit;
    modelViewer.fieldOfView = initialFieldOfView;
    modelViewer.cameraTarget = initialCameraTarget;
});



// Graph 1 - Temperature
const graph1 = new Chart(document.getElementById('graph1').getContext('2d'), {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            label: 'Temperature',
            data: [10, 20, 15, 25, 30],
            borderColor: '#ff5733',
            backgroundColor: 'rgba(156, 52, 28, 0.2)',
            borderWidth: 2,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { min: 0, max: 50 }
        }
    }
});

// Graph 2 - Pressure
const graph2 = new Chart(document.getElementById('graph2').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            label: 'Pressure',
            data: [5, 10, 8, 12, 15],
            backgroundColor: '#3398FF',
            borderColor: '#0056b3',
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Graph 3 - Distribution
const graph3 = new Chart(document.getElementById('graph3').getContext('2d'), {
    type: 'pie',
    data: {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
            label: 'Distribution',
            data: [10, 20, 30, 40],
            backgroundColor: ['#ffcc00', '#33cc33', '#3366cc', '#cc3333']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Graph 4 - Flow Rate
const graph4 = new Chart(document.getElementById('graph4').getContext('2d'), {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            label: 'Flow Rate',
            data: [3, 5, 2, 8, 6],
            borderColor: '#33cc99',
            backgroundColor: 'rgba(51, 204, 153, 0.2)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Adjust graphs dynamically based on window height
function resizeGraphs() {
    const container = document.getElementById('graphsContainer');
    const containerHeight = window.innerHeight * 0.4; // 40% of window height for the container
    container.style.height = `${containerHeight}px`;
    const graphElements = document.querySelectorAll('.graph');
    graphElements.forEach(graph => {
        graph.style.height = `${containerHeight / 2 - 10}px`; // Adjust height while keeping gap
        graph.style.width = `${(containerHeight / 2 - 10) * 1.5}px`; // Maintain aspect ratio
    });
}

window.addEventListener('resize', resizeGraphs);
resizeGraphs(); // Initial call

// Connect sliders to graphs
document.getElementById('slider1').addEventListener('input', (e) => {
    graph1.data.datasets[0].data[0] = Number(e.target.value);
    graph1.update();
});

document.getElementById('slider2').addEventListener('input', (e) => {
    graph2.data.datasets[0].data[0] = Number(e.target.value);
    graph2.update();
});

document.getElementById('slider3').addEventListener('input', (e) => {
    graph3.data.datasets[0].data[0] = Number(e.target.value);
    graph3.update();
});

document.getElementById('slider4').addEventListener('input', (e) => {
    graph4.data.datasets[0].data[0] = Number(e.target.value);
    graph4.update();
});
