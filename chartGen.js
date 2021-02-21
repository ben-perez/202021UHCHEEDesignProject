//helper functions

function convertRelWidthToAbs(relWidth){

    let widthPercent = parseFloat(relWidth)/100;
    var absWidth = widthPercent*window.innerWidth;

    return absWidth;
}

function convertRelHeightToAbs(relHeight){

    let heightPercent = parseFloat(relHeight)/100;
    var absHeight = heightPercent*window.innerHeight;

    return absHeight;
}

function type(d) {

    return {"Application":d.Application,
            "Amount":parseFloat(d.Amount)};

}


var megUsesCsvPath = "./Assets/MEGUses.csv";

var newChart = d3.csv(megUsesCsvPath, type).then(data => {

    var labels = data.map(d => d.Application);
    var values = data.map(d => d.Amount);

    var ctx = document.getElementById("meg-bar-chart");

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: "#C8102E"
            }]
        },
        options: {
            title: {
                display: true,
                text: 'EG Usage By Application'
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })

});

