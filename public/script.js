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

async function seriesChart() {
  const eighties = await fetch('/api/eighties');
  const eightiesData = await eighties.json();
  const nineties = await fetch('/api/nineties');
  const ninetiesData = await nineties.json();
  const twothou = await fetch('/api/twothou');
  const twothouData = await twothou.json();
  const twoten = await fetch('/api/twoten');
  const twotenData = await twoten.json();
  
  const info = [];
  info.push(eightiesData);
  info.push(ninetiesData);
  info.push(twothouData);
  info.push(twotenData);

  console.log(info[2]);
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
      name: info[0][0]['genre_name'],
      type: 'spline',
      showInLegend: true,
      dataPoints: [
        { x: new Date(1980,1,1), y: info[0][0]['global_sales'] },
        { x: new Date(1990,1,1), y: info[1][4]['global_sales'] },
        { x: new Date(2000,1,1), y: info[2][5]['global_sales'] },
        { x: new Date(2010,1,1), y: info[3][9]['global_sales'] }
      ]
    },
    {
      name: info[0][1]['genre_name'],
      type: 'spline',
      yValueFormatString: '#0.##',
      showInLegend: true,
      dataPoints: [
        { x: new Date(1980,1,1), y: info[0][1]['global_sales'] },
        { x: new Date(1990,1,1), y: info[1][5]['global_sales'] },
        { x: new Date(2000,1,1), y: info[2][6]['global_sales'] },
        { x: new Date(2010,1,1), y: info[3][10]['global_sales'] }
      ]
    },
    {
      name: info[0][2]['genre_name'],
      type: 'spline',
      yValueFormatString: '#0.##',
      showInLegend: true,
      dataPoints: [
        { x: new Date(1980,1,1), y: info[0][2]['global_sales'] },
        { x: new Date(1990,1,1), y: info[1][8]['global_sales'] },
        { x: new Date(2000,1,1), y: info[2][9]['global_sales'] },
        { x: new Date(2010,1,1), y: info[3][13]['global_sales'] }
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
  //getDecades();
  seriesChart();
}

window.onload = windowOnload;