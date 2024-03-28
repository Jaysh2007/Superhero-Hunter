// import { MD5 } from "crypto-js/md5";
// console.log(MD5("text to hash").toString());
// let ts = new Date().toLocaleString('en-GB')
// let ts = "17/03/2024, 17:09:39";
// const pubKey = "4da64e69da4c8db76655129ae70e645a";
// const privateKey = "587839a5396df452e2b55a83f287b59ca2a2b70c";

// fetch(
//   `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${pubKey}&hash=a65ab52659aa671b88ef9cd9ad448c4d`
// )
//   .then((response) => response.json())
//   .then((data) => {
//     const realData = data.data.results;
//     realData.forEach((user) => {
//       const markup = `<a href='#${user.name}'><li id='${user.name}'>${user.name}</li></a>`;
//       document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
//     });
//   })
//   .catch((error) => console.log(error));

// const search = document.getElementById("searchbar");
// search.addEventListener("input", () => {
//   const searchResult = document.getElementsByClassName('searchResult');
//   console.log(searchResult);
//   if (searchResult.length != 0) Array.from(searchResult).forEach((e)=>{
//     e.remove();
//   });
//   const searchItem = document.getElementById("ul");
//   const keyword = document.getElementById("searchbar").value;
//   fetch(
//     `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${keyword}&ts=${ts}&apikey=${pubKey}&hash=a65ab52659aa671b88ef9cd9ad448c4d`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       const searchData = data.data.results;
//       searchData.forEach((user) => {
//         const markup = `<div class="searchResult" ><li id='${user.name}'><a href="#">${user.name}</a></li></div>`;
//         document
//           .getElementById("floating-div")
//           .insertAdjacentHTML("beforeend", markup);
//       });
//       document.getElementById("floating-div").style.display = "block";
//     })
//     .catch((error) => console.error(error));
// });

// const floatingDiv = document.getElementById("floating-div");
// document.addEventListener("click", function (event) {
//   if (!floatingDiv.contains(event.target)) {
//     floatingDiv.style.display = "none";
//   }
// });
