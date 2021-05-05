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

function imgfunc1() {
  $('#NA').attr('src', 'images/slider/slider-img-1.jpg');
  $('#JP').attr('src', 'images/slider/slider-img-2.jpg');
}

function imgfunc2() {
  $('#NA').attr('src', 'images/slider/slider-img-2.jpg');
  $('#JP').attr('src', 'images/slider/slider-img-3.jpg');
}

function imgfunc3() {
  $('#NA').attr('src', 'images/slider/slider-img-3.jpg');
  $('#JP').attr('src', 'images/slider/slider-img-1.jpg');
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

async function windowOnload() {
  nivoSlider();
  prettyPhoto();
  imgfunc1();
  imgfunc2();
  imgfunc3();
}

window.onload = windowOnload;