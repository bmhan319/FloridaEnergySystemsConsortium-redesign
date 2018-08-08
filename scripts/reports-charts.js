// 1 DomContentLoad
// 2 Google Cahrt
// 3 Get API DAta
// 4 Receive API DAta
// 5 Draw Chart


function onDOMLoad() {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(getData);
  google.charts.setOnLoadCallback(getData2);
}

document.addEventListener("DOMContentLoaded", onDOMLoad);

function getData() {
  let request = new XMLHttpRequest();
  let requestUrl = "https://api.eia.gov/series/?api_key=ffdbc2ac0fd91596a58b9cf3fb6c29bd&series_id=SEDS.REPRB.FL.A"
  request.open('GET', requestUrl, true)
  request.onload = function(){
    console.log("response from server is: ", request)
    if (request.status !== 200) {
      console.log("Something is wrong", request);
      return;
    }
    let response = JSON.parse(request.response);
    drawChart(response.series[0].data);
  }
  
  request.error = function(err){
    console.log("error is: ", err);
  }
  request.send();
}

function getData2() {
  let request = new XMLHttpRequest();
  let requestUrl = "https://api.eia.gov/series/?api_key=ffdbc2ac0fd91596a58b9cf3fb6c29bd&series_id=SEDS.TETCB.FL.A"
  request.open('GET', requestUrl, true)
  request.onload = function(){
    console.log("response from server is: ", request)
    if (request.status !== 200) {
      console.log("Something is wrong", request);
      return;
    }
    let response = JSON.parse(request.response);
    drawChart2(response.series[0].data);
  }
  
  request.error = function(err){
    console.log("error is: ", err);
  }
  request.send();
}

function drawChart(freshData) {
  let headerArray = ['Year' , 'BTUs (in billions)'];
  let flippedData = freshData;
  let fixedData = flippedData.reverse();
  fixedData.unshift(headerArray);
  let data = google.visualization.arrayToDataTable(fixedData);

  let options = {
    title: 'Florida Energy Production',
    hAxis: {title: 'Year'},
    vAxis: {title: 'BTUs (in billions)'},
    colors: ['#618b44'],
    legend: 'none',
  };

  let chart = new google.visualization.ScatterChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
  
  $(window).resize(function () {
    chart.draw(data, options);
  });
}


function drawChart2(freshData) {
  let headerArray = ['Year' , 'BTUs (in billions)'];
  let flippedData = freshData;
  let fixedData = flippedData.reverse();
  fixedData.unshift(headerArray);
  let data = google.visualization.arrayToDataTable(fixedData)

  let options = {
    title: 'Florida Electrictiy Consumption',
    curveType: 'function',
    legend: { position: 'bottom' },
    colors: ['#FF8811']
  };

  let chart = new google.visualization.LineChart(document.getElementById('curve_chart2'));

  chart.draw(data, options);
  
  $(window).resize(function () {
    chart.draw(data, options);
  });
}