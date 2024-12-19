let movieData = [];
let filterData = [];
let ratingData = [];
let ratingValue = 0;
let yearList =[];
let yearValue = 0;
let yeardata = [];
let genreList =[];
let genreValue = 0;
let genreData = [];
const showData = (htmlData) => {
  const getPoster = document.querySelector(".movies-container");
  getPoster.innerHTML = "";
  htmlData.forEach((data) => {
    const posterContainer = document.createElement("div");

    posterContainer.classList.add("poster-container");
  posterContainer.addEventListener('click',()=>{
    window.location.href="/movies-project/movie.html"+"?id="+data.id
  })
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    posterContainer.appendChild(imageContainer);
    const image = document.createElement("img");
    image.src = "https://image.tmdb.org/t/p/w300/" + data.poster_path;
    const para = document.createElement("p");
    para.textContent = data.title;
    const desc = document.createElement("p");
    desc.textContent = data.release_date;
    imageContainer.appendChild(image);
    imageContainer.appendChild(para);
    imageContainer.appendChild(desc);
    getPoster.appendChild(posterContainer);
  });
};
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjM4ZjI4YTRiMzEwYTVhZTNlYTE1Y2FkMTY1NmEwYiIsIm5iZiI6MTczNDE5MjkwNS4yMDEsInN1YiI6IjY3NWRhZjA5MDE4ZGM4ZTdiYmQxOGI1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wtn8-CMFJOW27oipCv0y83RgeTKChiaIaERuAFz6iJk",
  },
};
fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  options
)
  .then((response) => {
    // console.log(response.json())
    return response.json();
  })
  .then((data) => {
    console.log(data);
    movieData = data.results;
    // console.log(movieData)

    showData(movieData);

// we are fetching the year only 
    movieData.map((data)=>{
      const date = new Date(data.release_date); // Example date
      const year = date.getFullYear();
      
      
      yearList.push(year)
    
      // console.log(yearList);
    })
yearList = [...new Set(yearList)]// 2024 - output
console.log(yearList)

yearList.forEach((data)=>{
const getYear = document.getElementById("year")
const createOption = document.createElement("option")
createOption.textContent = data+"year";
createOption.value = data;
getYear.appendChild(createOption)
})

const genreList = {
  "Action": 28,
  "Adventure": 12,
  "Animation": 16,
  "Comedy": 35,
  "Crime": 80,
  "Documentary": 99,
  "Drama": 18,
  "Family": 10751,
  "Fantasy": 14,
  "History": 36,
  "Horror": 27,
  "Music": 10402,
  "Mystery": 9648,
  "Romance": 10749,
  "Science Fiction": 878,
  "TV Movie": 10770,
  "Thriller": 53,
  "War": 10752,
  "Western": 37
};


//selecting the dropdon for genre
const genreArray = Object.entries(genreList);
console.log(genreArray)
genreArray.forEach((data)=>{
  const genreSelect = document.getElementById("genre");
  const option = document.createElement("option");
  
  
  option.textContent = data[0];         
  option.value = data[1];    
  
  
  genreSelect.appendChild(option);
}) 
  
  
})



  .catch((err) => console.error(err));



// dATA hta rhe h backspace se
const inputData = document.querySelector(".input-data");
inputData.addEventListener("keydown", () => {
  showData(movieData);
});


// search button p jo ho rha h
const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", () => {
  filterData = movieData.filter((data) => {
    return data.title.toLowerCase().includes(inputData.value.toLowerCase());
  });
  
//variable k andar store kr rhe h filter data
  ratingData = filterData.filter((data) => {
    return data.vote_average >= parseInt(ratingValue);
  });
// year data filter k liye
  yeardata= ratingData.filter((data) => {
    if (yearValue==0) {
      return ratingData;
    } else {
      const date = new Date(data.release_date); // Example date
    const year = date.getFullYear();
    return parseInt(year) == parseInt(yearValue);
    }
    
  });


// genre filter
genreData  =  yeardata.filter((data)=>{
  
if(genreValue==0){
return yeardata;


}
else{

return data.genre_ids.includes(parseInt(genreValue))


}


})







  showData(genreData);//filter data ko bhj rhe h dikhane k liye
});

// rating value mein data store krwa rhe hain
const selectRating = document.getElementById("rating");
selectRating.addEventListener("change", (e) => {
  console.log("chirag");
  ratingValue = e.target.value;

  console.log(ratingData);
});

//year ko select krte h to y change hoga
const selectYear = document.getElementById("year");
selectYear.addEventListener("change", (e) => {
 
  yearValue = e.target.value;

  console.log(yearValue);
});


// genre k liye event listner ye hain
const selectGenre = document.getElementById("genre");
selectGenre.addEventListener("change", (e) => {
  
  genreValue = e.target.value;

  console.log(genreValue);
});




// 2nd page js start from here
























// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjM4ZjI4YTRiMzEwYTVhZTNlYTE1Y2FkMTY1NmEwYiIsIm5iZiI6MTczNDE5MjkwNS4yMDEsInN1YiI6IjY3NWRhZjA5MDE4ZGM4ZTdiYmQxOGI1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wtn8-CMFJOW27oipCv0y83RgeTKChiaIaERuAFz6iJk'
//     }
//   };

//   fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     movieData = data.results;

// showData(movieData)
//     }

// )
// .catch(err => console.error(err));
// const getPoster = document.querySelector(".movies-container")

// const showData = (data)=>{
//     getPoster.innerHTML =""
//     getPoster.innerHTML =
//     data.map((data)=>{
//         let htmlData = `<div class="poster-container">
//             <div class="image-container">
//               <img
//                 src="https://image.tmdb.org/t/p/w300/${data.poster_path}"
//                 alt="icon"
//               />
//               <p>${data.title}</p>
//               <p>${data.release_date}</p>
//             </div>
//           </div>`

//         return htmlData;

//      })
//     //  .join("")

// }
