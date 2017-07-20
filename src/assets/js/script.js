var w = window.innerWidth < 768 ? window.innerWidth - 200 : 500,
    h = window.innerWidth < 768 ? window.innerWidth - 200 : 500;

var colorscale = function() {};

//Legend titles
var LegendOptions = ['Smartphone', 'Tablet'];

//Data
var d = [
    [
        { axis: "Población", value: 3 },
        { axis: "Extranjeros", value: 1 },
        { axis: "Riqueza", value: 7 },
        { axis: "Tasa de dependencia", value: 2 },
        { axis: "Tráfico peatonal", value: 4 },
        { axis: "Desempleo", value: 1 },
        { axis: "Actividad comercial", value: 6 }
    ],
    [
        { axis: "Población", value: 7 },
        { axis: "Extranjeros", value: 2 },
        { axis: "Riqueza", value: 3 },
        { axis: "Tasa de dependencia", value: 6 },
        { axis: "Tráfico peatonal", value: 2 },
        { axis: "Desempleo", value: 7 },
        { axis: "Actividad comercial", value: 1 }
    ],
    [
        { axis: "Población", value: 5 },
        { axis: "Extranjeros", value: 2 },
        { axis: "Riqueza", value: 5 },
        { axis: "Tasa de dependencia", value: 4 },
        { axis: "Tráfico peatonal", value: 1 },
        { axis: "Desempleo", value: 3 },
        { axis: "Actividad comercial", value: 7 }
    ]
];

//Options for the Radar chart, other than default
var mycfg = {
    containerClass: 'radar-chart',
    w: w,
    h: h,
    maxValue: 7,
    levels: 5,
    factor: 1,
    showLevels: false,
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////
console.log(window.innerWidth);
var svg = d3.select('#body')
    .selectAll('svg')
    .append('svg')
    .attr("width", w + 300)
    .attr("max-width", '100%')
    .attr("height", h)

//Create the title for the legend
var text = svg.append("text")
    .attr("class", "title")
    .attr('transform', 'translate(90,0)')
    .attr("x", w - 70)
    .attr("y", 10)
    .attr("font-size", "12px")
    .attr("fill", "#404040")
    .text("What % of owners use a specific service in a week");

//Initiate Legend