var canvas = document.getElementById("canvas");
console.log(localStorage.length);

for(let i=0;i<localStorage.length;i++)
{
    if(localStorage.key(i) == 'id'){
        continue;
    }
    let myStorage = JSON.parse(localStorage.getItem(localStorage.key(i)));
    console.log(myStorage);
    var templateCanvas = canvas.content.cloneNode(true);
            templateCanvas.getElementById("image-sh").innerHTML = `<img class='image-hero' src="${myStorage.thumbnail.path}.${myStorage.thumbnail.extension}" />`;
            templateCanvas.getElementById("name").innerHTML = '<b>Name: </b> ' + myStorage.name;
            templateCanvas.getElementById("id").innerHTML = '<b>Hero ID: </b> ' + myStorage.id ;
            templateCanvas.getElementById("comic").innerHTML = '<b>Comic Available: </b>'+ myStorage.comics.available ;
            templateCanvas.getElementById("series").innerHTML = '<b>Series Available: </b>'+ myStorage.series.available ;
            templateCanvas.getElementById("stories").innerHTML = '<b>Stories Available: </b>'+ myStorage.stories.available ;
    templateCanvas.getElementById("learn-more").addEventListener('click',function(){
        localStorage.setItem('id',myStorage.id);
        window.location.assign('about.html');
    });
    templateCanvas.getElementById("fav").addEventListener('click',function (){
        myStorage.innerHTML = null;
        localStorage.removeItem(localStorage.key(i));
        window.location.assign('favourite.html');

    });
    document.getElementById("superhero-list").appendChild(templateCanvas);
}