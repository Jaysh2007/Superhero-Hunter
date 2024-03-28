let ts = "17/03/2024, 17:09:39";
const pubKey = "4da64e69da4c8db76655129ae70e645a";
const privateKey = "587839a5396df452e2b55a83f287b59ca2a2b70c";
let searchHero = document.getElementById('search-string');



searchHero.addEventListener("input", () => {
    const keyword = document.getElementById("search-string").value;
  fetch(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${keyword}&ts=${ts}&apikey=${pubKey}&hash=a65ab52659aa671b88ef9cd9ad448c4d`
  )
    .then((response) => response.json())
    .then((data) => {
      const searchData = data.data.results;
      searchData.forEach((user) => {
        display(data)
    })
    .catch((error) => console.error(error));
});
})
let canvas = document.getElementById('canvas');
function display(data){

    var superHeroList = document.getElementById('superhero-list');
    superHeroList.innerHTML = "";
    var results = data.data.results;
    const searchName = document.getElementById('search-character');
    if(!results){
        searchName.value = "";
        window.alert("No super hero found!");
    }else{
        for(let result of results){
            console.log(result.thumbnail);

            var templateCanvas = canvas.content.cloneNode(true);
            templateCanvas.getElementById("image-sh").innerHTML = `<img class='image-hero' src="${result.thumbnail.path}.${result.thumbnail.extension}" />`;
            templateCanvas.getElementById("name").innerHTML = '<b>Name: </b> ' + result.name;
            templateCanvas.getElementById("id").innerHTML = '<b>Hero ID: </b> ' + result.id ;
            templateCanvas.getElementById("comic").innerHTML = '<b>Comic Available: </b>'+ result.comics.available ;
            templateCanvas.getElementById("series").innerHTML = '<b>Series Available: </b>'+ result.series.available ;
            templateCanvas.getElementById("stories").innerHTML = '<b>Stories Available: </b>'+ result.stories.available ;
            templateCanvas.getElementById('learn-more').addEventListener('click', function(){
                localStorage.setItem('id', result.id);
                window.location.assign('./about.html');
            });
            templateCanvas.getElementById('fav').addEventListener('click', function(){
                var index = localStorage.length;
                var data = JSON.stringify(result);
                localStorage.setItem(result.id,data);

            });
            superHeroList.appendChild(templateCanvas);
        }
    }
};
function addFunction() {
  var x = document.getElementById("fav-alert");
  console.log('HERE')
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
 
}
