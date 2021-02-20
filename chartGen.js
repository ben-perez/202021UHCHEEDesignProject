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
            "Amount":d.Amount};

}

var megUsesCsvPath = "./Assets/MEGUses.csv";

var megChart = d3.select("#meg-bar-chart");

var margin = 50;
var width = convertRelWidthToAbs(megChart.attr("width")) - margin;
var height = convertRelHeightToAbs(megChart.attr("height")) - margin;

var xScale = d3.scaleBand().range([0,width]).padding(0.4);
var yScale = d3.scaleLinear().range([height,0]);

const gXAxis = megChart.append("g")
                       .attr("transform", `translate(0, ${height})`);

const gYAxis = megChart.append('g');

d3.csv(megUsesCsvPath, type)
  .then(data => {
    
    const y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.Amount)])
                .range([height, 0]);

    const x = d3.scaleBand()
                .domain(data.map(item => item.Application))
                .range([0, 500])
                .paddingInner(0.2)
                .paddingOuter(0.2);
                
    const rects = megChart.selectAll("rect")
                          .data(data);


    rects.attr("width", x.bandwidth)
        .attr("height", d => height - y(d.Amount))
        .attr("x", d => x(d.Period))
        .attr("y", d => y(d.Amount));

    rects.enter()
         .append("rect")
         .attr("width", x.bandwidth)
         .attr("height", d => height - y(d.Amount))
         .attr("x", d => x(d.Period))
         .attr("y", d => y(d.Amount));

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y)
                    .ticks(5)
                    .tickFormat(d => d);

    gXAxis.call(xAxis);
    gYAxis.call(yAxis);
})
