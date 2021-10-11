//GLOBAL VARIABLES
const apiKeyCurrent = "6253c56c808bcdaa72af78a1a5171dde";
const searchForm = document.querySelector("#search-form");
const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");
const searchList = document.querySelector("#search-list");
const currentDateEl = document.querySelector("#currentDate");
const currentTimeEl = document.querySelector("#currentTime");
const today = moment();
let city = searchInput.value.trim();
let currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKeyCurrent;
//sets the current date and time
currentDateEl.textContent = today.format("dddd, MMMM, DD, YYYY");
currentTimeEl.textContent = today.format("h:mm a");
//searches is an array containing storedSearches
let searches = [];
//searchText is the value being saved to local storage with the key searchInput.
let searchText = (searchInput.value.trim());





//FUNCTIONS

//takes searches from local storage and puts them into searchList with key: searchInput, and value: search
function renderSearches() {
    //clear searchList and update searchCountSpan
    searchList.innerHTML = "";
    //render a new li for each search
    for (let i = 0; i < searches.length; i++) {
        let search = searches[i];
        let li = document.createElement("li");
        li.textContent = search;
        li.setAttribute("data-index", i);
        let a = document.createElement("a");
        a.href = (currentQueryURL);
        a.appendChild(li);
        searchList.appendChild(a);
    }
}

//function runs when page loads
function init() {
    //gets stored searches from localStorage
    let storedSearches = JSON.parse(localStorage.getItem("searches"));
    //if searches were retrieved from local storage, update the searches array
    if (storedSearches !== null) {
        //searches is an array made up of storedSearches (searches that have been submitted to local storage)
        searches = storedSearches;
    };
    //helper function renders searches to the DOM
    renderSearches();
};

//function puts searches into searches array in local storage
function storeSearches() {
    //strigify and set key in localStorage to searches array
    localStorage.setItem("searches", JSON.stringify(searches));
}

//user inputs their search, and the search returns fetch data
function getCurrentWeather() {
    // city is made up of user input in the search box
    city = searchInput.value.trim();
    //API request URL
    currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKeyCurrent;
    console.log(currentQueryURL);
    let todaysWeatherCard = document.querySelector("#todays-weather-card-body");
    // me reaching out to openweathermap.org to get information about the city (user determined)
    fetch(currentQueryURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            
            
            //loops through each search to get only the information desired


            //i is undefined
            for (let i = 0; i < data.length; i++) {
                let cityName = document.createElement("p");
                cityName.textContent = data[i].name;
                console.log(cityName);

                todaysWeatherCard.append(cityName);
            }
            // --city name
            // --current date (moment.js())
            // --current hour (moment.js()hours())
            // --icon representing weather conditions
            // --temperature
            // --humidity
            // --wind speed
            // --UV index
        });
};





//PROCESSES

//make pressing enter submit the search
searchInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
});

//make clicking the search button submit the search
searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    //searchText is the input trimmed of any excess white space around the input characters
    let searchText = searchInput.value.trim();
    //return from function early if search input is blank, and give alert popup with reminder for user
    if (searchText === "") {
        alert("Please enter a valid city name");
        return;
    };
    //searches array gets searchText added to the end of the searches array and returns the new length of the array
    searches.push(searchText);
    
    //helper function stores searches to local storage
    storeSearches();
    //helper function renders searches to the DOM
    renderSearches();
    //helper function fetches current weather data
    getCurrentWeather();
    // clearing the search box to prepare for another search
    searchInput.value = "";
});

init()
