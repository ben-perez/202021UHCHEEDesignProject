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

const baseHeight = 600;
const baseWidth = 1000;
const margin = {"top":20, "bottom":20, "left": 100, "right":100}

var megUsesCsvPath = "./Assets/MEGUses.csv";




var width = baseWidth - margin.left - margin.right;
var height = baseHeight - margin.top - margin.bottom;

var megChart = d3.select("#meg-bar-chart")
                 .attr("height", baseHeight)
                 .attr("width", baseWidth)
                 .attr("transform", `translate(${margin.left}, ${margin.top})`);

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
                .range([0, width])
                .paddingInner(0.2)
                .paddingOuter(0.2);
                
    const rects = megChart.selectAll("rect")
                          .data(data);


    rects.attr("width", x.bandwidth)
        .attr("height", d => height - y(d.Amount))
        .attr("x", d => x(d.Application))
        .attr("y", d => y(d.Amount));

    rects.enter()
         .append("rect")
         .attr("class","chart-bar")
         .attr("width", x.bandwidth)
         .attr("height", d => height - y(d.Amount))
         .attr("x", d => x(d.Application))
         .attr("y", d => y(d.Amount));

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y)
                    .ticks(5)
                    .tickFormat(d => d);

    gXAxis.call(xAxis);
    gYAxis.call(yAxis);
})
