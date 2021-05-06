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

async function NAChart90s() {

  const na90sData = await fetch('/api/NAnineties');
  const na90sjson = await na90sData.json();
  const data=[];
  data.push(na90sjson);
  console.log(data);

  const chart = new CanvasJS.Chart("NAchartContainer", {
    animationEnabled: true,

    axisX:{
      interval: 1,
      title:  "Genres"
    },
    axisY:{
      title: "Sales (Millions)"
    },
    data: [{
      type: "bar",
      name: "companies",
      //axisYType: "secondary",
      color: "#014D65",
      dataPoints: [
        { y: data[0][2]['na_sales'], label: data[0][2]['genre_name'] },
        { y: data[0][1]['na_sales'], label: data[0][1]['genre_name'] },
        { y: data[0][0]['na_sales'], label: data[0][0]['genre_name'] },
      ]
    }]
  });
  chart.render();
}

async function JPChart90s() {
  
  
  const jp90sData = await fetch('/api/JPnineties');
  const jp90sjson = await jp90sData.json();
  const data=[];
  data.push(jp90sjson);
  console.log(data);

  const chart = new CanvasJS.Chart("JPchartContainer", {
    animationEnabled: true,
    
    axisX:{
      interval: 1,
      title:  "Genres"
    },
    axisY:{
      title: "Sales (Millions)"
    },
    data: [{
      type: "bar",
      name: "companies",
      color: "#014D65",
      dataPoints: [
        { y: data[0][2]['jp_sales'], label: data[0][2]['genre_name'] },
        { y: data[0][1]['jp_sales'], label: data[0][1]['genre_name'] },
        { y: data[0][0]['jp_sales'], label: data[0][0]['genre_name'] },
      ]
    }]
  });
  chart.render();
}

function imgfunc90s() {
  NAChart90s();
  JPChart90s();
}

async function NAChart00s() {

  const na00sData = await fetch('/api/NAtwothou');
  const na00sjson = await na00sData.json();
  const data=[];
  data.push(na00sjson);
  console.log(data);

  const chart = new CanvasJS.Chart("NAchartContainer", {
    animationEnabled: true,

    axisX:{
      interval: 1,
      title:  "Genres"
    },
    axisY:{
      title: "Sales (Millions)"
    },
    data: [{
      type: "bar",
      name: "companies",
      //axisYType: "secondary",
      color: "#014D65",
      dataPoints: [
        { y: data[0][2]['na_sales'], label: data[0][2]['genre_name'] },
        { y: data[0][1]['na_sales'], label: data[0][1]['genre_name'] },
        { y: data[0][0]['na_sales'], label: data[0][0]['genre_name'] },
      ]
    }]
  });
  chart.render();
}

async function JPChart00s() {
  
  
  const jp00sData = await fetch('/api/JPtwothou');
  const jp00sjson = await jp00sData.json();
  const data=[];
  data.push(jp00sjson);
  console.log(data);

  const chart = new CanvasJS.Chart("JPchartContainer", {
    animationEnabled: true,
    
    axisX:{
      interval: 1,
      title:  "Genres"
    },
    axisY:{
      title: "Sales (Millions)"
    },
    data: [{
      type: "bar",
      name: "companies",
      color: "#014D65",
      dataPoints: [
        { y: data[0][2]['jp_sales'], label: data[0][2]['genre_name'] },
        { y: data[0][1]['jp_sales'], label: data[0][1]['genre_name'] },
        { y: data[0][0]['jp_sales'], label: data[0][0]['genre_name'] },
      ]
    }]
  });
  chart.render();
}

function imgfunc00s() {
  NAChart00s();
  JPChart00s();
}

async function NAChart10s() {

  const na10sData = await fetch('/api/NAtwoten');
  const na10sjson = await na10sData.json();
  const data=[];
  data.push(na10sjson);
  console.log(data);

  const chart = new CanvasJS.Chart("NAchartContainer", {
    animationEnabled: true,

    axisX:{
      interval: 1,
      title:  "Genres"
    },
    axisY:{
      title: "Sales (Millions)"
    },
    data: [{
      type: "bar",
      name: "companies",
      //axisYType: "secondary",
      color: "#014D65",
      dataPoints: [
        { y: data[0][2]['na_sales'], label: data[0][2]['genre_name'] },
        { y: data[0][1]['na_sales'], label: data[0][1]['genre_name'] },
        { y: data[0][0]['na_sales'], label: data[0][0]['genre_name'] },
      ]
    }]
  });
  chart.render();
}

async function JPChart10s() {
  
  
  const jp10sData = await fetch('/api/JPtwoten');
  const jp10sjson = await jp10sData.json();
  const data=[];
  data.push(jp10sjson);
  console.log(data);

  const chart = new CanvasJS.Chart("JPchartContainer", {
    animationEnabled: true,
    
    axisX:{
      interval: 1,
      title:  "Genres"
    },
    axisY:{
      title: "Sales (Millions)"
    },
    data: [{
      type: "bar",
      name: "companies",
      color: "#014D65",
      dataPoints: [
        { y: data[0][2]['jp_sales'], label: data[0][2]['genre_name'] },
        { y: data[0][1]['jp_sales'], label: data[0][1]['genre_name'] },
        { y: data[0][0]['jp_sales'], label: data[0][0]['genre_name'] },
      ]
    }]
  });
  chart.render();
}

function imgfunc10s() {
  NAChart10s();
  JPChart10s();
}

function naSalestotal(data) {

  let na=0;
  for (x=0; x< data.length+1; x++) {
    na+=data[0][x]['na_sales'];
  }

  return na;
}

function jpSalestotal(data) {

  let jp=0;
  for (x=0; x< data.length+1; x++) {
    jp+=data[0][x]['jp_sales']
  }

  return jp;
}

async function allChart() {
  
  const allData = await fetch('/api/games');
  const alljson = await allData.json();
  const data=[];
  data.push(alljson);
 
  const na = naSalestotal(data);
  const jp = jpSalestotal(data);

  const chart = new CanvasJS.Chart("NAchartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title:{
      text: "Regional Market Size"
    },
    axisY: {
      title: "Total Sales (Millions)"
    },
    data: [{        
      type: "column",  
      dataPoints: [      
        { y: na, label: "North America" },
        { y: jp,  label: "Japan" },
      ]
    }]
  });
  chart.render();
}


function imgfuncall() {
  $(".JPchartContainer").attr("src","images/gamecontroller.png");
  allChart();

}

async function nivoSlider() {
  $('#slider').nivoSlider({
    effect:'random', 
    slices:15,  
    animSpeed:500, 
    pauseTime:5000
  });
}

async function prettyPhoto() {
  $("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal', theme:'dark_rounded', social_tools:false, slideshow:false, autoplay_slideshow: false});
  $(".image a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal', theme:'dark_rounded', social_tools:false, slideshow:false, autoplay_slideshow: false});
}

async function formSub() {
  const buttons = document.querySelector('#submit1');
  const form = document.querySelector('#new_record');
  buttons.addEventListener('submit', async (event) => {
    const post = await fetch('/api/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({form:search.value})

    });

    const data = await request.json();
  });
}

async function windowOnload() {
  nivoSlider();
  prettyPhoto();
  formSub();

}

window.onload = windowOnload;