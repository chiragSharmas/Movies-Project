

const movieId = new URLSearchParams(window.location.search)
console.log(movieId)
console.log(movieId.get("id"))












$.ajax({
    type: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId.get("id")}?language=en-US`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjM4ZjI4YTRiMzEwYTVhZTNlYTE1Y2FkMTY1NmEwYiIsIm5iZiI6MTczNDE5MjkwNS4yMDEsInN1YiI6IjY3NWRhZjA5MDE4ZGM4ZTdiYmQxOGI1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wtn8-CMFJOW27oipCv0y83RgeTKChiaIaERuAFz6iJk'
    },
    dataType: "json",
    success: function (response) {
      console.log(response)


// $(".Movie-name").text(response.title)
const getName = document.querySelector(".Movie-name")
getName.textContent = response.title

const getOverview = document.querySelector(".overview-name")
getOverview.textContent = response.overview
const gettag = document.querySelector(".tagline")
gettag.textContent =  response.tagline



// $(".main-container").css({
//     "background": `url(https://image.tmdb.org/t/p/w300/${response.backdrop_path})`,
  
   
// });
document.querySelector(".main-container").style.cssText = `
    background: url(https://image.tmdb.org/t/p/w500/${response.backdrop_path}) no-repeat center center;
    background-size: 100%; `;


    const posterContainer = document.querySelector(".poster-container");
    const imageContainer = document.createElement("div");
    posterContainer.appendChild(imageContainer);
    imageContainer.classList.add("image-container");
    const image = document.createElement("img");
    image.src = "https://image.tmdb.org/t/p/w300/" + response.poster_path;
    imageContainer.appendChild(image);
    

    }


   

  });