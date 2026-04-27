function randomWalk(start){

let prices=[start];

for(let i=1;i<100;i++){

let change=(Math.random()-0.5)*5;

prices.push(
prices[i-1]+change
);

}

return prices;
}

function updateDashboard(){

let ticker=
document.getElementById("ticker").value;

let dates=[];

for(let i=0;i<100;i++){
dates.push(i);
}

let prices=randomWalk(
100+Math.random()*100
);

let trace={
x:dates,
y:prices,
type:"scatter",
mode:"lines",
name:ticker,
fill:"tozeroy"
};

let layout={
title:ticker + " Price Simulation",
template:"plotly_dark"
};

Plotly.newPlot(
"stockChart",
[trace],
layout
);

}

updateDashboard();
