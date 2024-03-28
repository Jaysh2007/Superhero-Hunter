var resultId = localStorage.getItem('id');
let ts = "17/03/2024, 17:09:39";
const pubKey = "4da64e69da4c8db76655129ae70e645a";
const privateKey = "587839a5396df452e2b55a83f287b59ca2a2b70c";
let searchHero = document.getElementById('search-string');
var url = `https://gateway.marvel.com/v1/public/characters/${resultId}?ts=${ts}&apikey=${pubKey}&hash=a65ab52659aa671b88ef9cd9ad448c4d`;

fetch(url)
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
        document.getElementById("name").innerHTML = '<b>Name: </b> ' + response.data.results[0].name;
        document.getElementById("id").innerHTML = '<b>Hero ID: </b> ' + response.data.results[0].id ;
        document.getElementById("desc").innerHTML = '<b>Description: </b> ' + response.data.results[0].description ;
        document.getElementById("comic").innerHTML = '<b>Comic Available: </b>'+ response.data.results[0].comics.available ;
        document.getElementById("series").innerHTML = '<b>Series Available: </b>'+ response.data.results[0].series.available ;
        document.getElementById("stories").innerHTML = '<b>Stories Available: </b>'+ response.data.results[0].stories.available ;
        document.getElementById("count").innerHTML = '<b>Count: </b>'+ response.data.count ;
        document.getElementById("modified").innerHTML = '<b>Modified: </b>'+ response.data.results[0].modified;
        document.getElementById("status").innerHTML = '<b>Status: </b>'+ response.status;
        document.getElementById("total").innerHTML = '<b>Total: </b>'+ response.data.total;
        document.getElementById("limit").innerHTML = '<b>Limit: </b>'+ response.data.limit;
        document.getElementById("offset").innerHTML = '<b>Offset: </b>'+ response.data.offset;
        document.getElementById("code").innerHTML = '<b>Code: </b>'+ response.code;
        document.getElementById("superhero-img-div").innerHTML = `<img class='about-image-hero' src="${response.data.results[0].thumbnail.path}.${response.data.results[0].thumbnail.extension}" />`;

    })
    .catch((error) => console.error(error));
