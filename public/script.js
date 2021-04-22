async function getGames() {
  const requestGames = await fetch('/api/games');
  const gamesData = await requestGames.json();
  const data = [];

  data.push(gamesData);
  console.log(data[0]['data']);

  return gamesData;
}

async function getGenre() {
  const requestGenres = await fetch('/api/genres');
  const genresData = await requestGenres.json();
  const data = [];
  data.push(genresData);
  console.log(data[0]['data']);
  return data;
}

async function getDecades() {
  const eighties = await fetch('/api/eighties');
  const eightiesData = await eighties.json();
  const nineties = await fetch('/api/nineties');
  const ninetiesData = await nineties.json();
  const twothou = await fetch('/api/twothou');
  const twothouData = await twothou.json();
  const twoten = await fetch('/api/twoten');
  const twotenData = await twoten.json();
  
  const data = [];
  data.push(eightiesData);
  data.push(ninetiesData);
  data.push(twothouData);
  data.push(twotenData);
  console.log(data);
  return data;
}

async function seriesChart(data) {
  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    title: {
      text: 'Regional Sales By Genre'
    },
    axisX: {
      valueFormatString: 'YYYY'
    },
    axisY: {
      title: 'Sales (Millions)'
    },
    legend: {
      cursor: 'pointer',
      fontSize: 16,
      itemclick: toggleDataSeries
    },
    toolTip: {
      shared: true
    },
    data: [{
      name: 'Myrtle Beach',
      type: 'spline',
      yValueFormatString: '#0.## °C',
      showInLegend: true,
      dataPoints: [
        { x: new Date(2017, 6, 24), y: 31 },
        { x: new Date(2017, 6, 25), y: 31 },
        { x: new Date(2017, 6, 26), y: 29 },
        { x: new Date(2017, 6, 27), y: 29 },
        { x: new Date(2017, 6, 28), y: 31 },
        { x: new Date(2017, 6, 29), y: 30 },
        { x: new Date(2017, 6, 30), y: 29 }
      ]
    },
    {
      name: 'Martha Vineyard',
      type: 'spline',
      yValueFormatString: '#0.## °C',
      showInLegend: true,
      dataPoints: [
        { x: new Date(2017, 6, 24), y: 20 },
        { x: new Date(2017, 6, 25), y: 20 },
        { x: new Date(2017, 6, 26), y: 25 },
        { x: new Date(2017, 6, 27), y: 25 },
        { x: new Date(2017, 6, 28), y: 25 },
        { x: new Date(2017, 6, 29), y: 25 },
        { x: new Date(2017, 6, 30), y: 25 }
      ]
    },
    {
      name: 'Nantucket',
      type: 'spline',
      yValueFormatString: '#0.## °C',
      showInLegend: true,
      dataPoints: [
        { x: new Date(2017, 6, 24), y: 22 },
        { x: new Date(2017, 6, 25), y: 19 },
        { x: new Date(2017, 6, 26), y: 23 },
        { x: new Date(2017, 6, 27), y: 24 },
        { x: new Date(2017, 6, 28), y: 24 },
        { x: new Date(2017, 6, 29), y: 23 },
        { x: new Date(2017, 6, 30), y: 23 }
      ]
    }]
  });
  chart.render();

  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
}

async function windowOnload() {
  //getGenre();
  //getGames();
  getDecades();
  seriesChart(getDecades);
}

window.onload = windowOnload;