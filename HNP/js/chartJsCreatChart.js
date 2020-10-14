var ctx = document.getElementById('myChart').getContext('2d');
//<canvas id="myChart"></canvas>
data = {
    datasets: [{
        data: [10, 20, 30,100],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],

    }

    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue',
        'Black'
    ],

};
var options = {}

var chart2 = new Chart(ctx, {
    data: data,
    type: 'pie',
    options: options
});
