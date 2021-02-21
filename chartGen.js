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

const data = d3.csv(megUsesCsvPath, type);

var labels = data.map(d => d.Application);
var values = data.map(d => d.Amount);

var ctx = document.getElementById("meg-bar-chart");

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Uses of MEG By Application',
            data: values,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})