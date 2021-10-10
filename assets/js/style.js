//Global Variables- API keys
//const apiKeyFuture = "2333826092b58c3b0f9ed3b12d33f616";
// let city is giving a 404 message when being used instead of typing the city name straight into the API request
let city;
// let state;
// let country;
const apiKeyCurrent = "6253c56c808bcdaa72af78a1a5171dde";
let currentQueryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyCurrent}`;
console.log(currentQueryURL)
console.log(currentQueryURL);
//let futureQueryURL = "" + city + "&appid=" + apiKeyFuture;


// Global Variables
const searchButton = document.getElementById("searchButton");
const searchBoxEl = document.getElementById("searchBox");
const searchListEl = document.getElementById("searchHistoryListEl");
const currentDateEl = document.getElementById("currentDate");
const currentTimeEl = document.getElementById("currentTime");
const today = moment();

city = searchBoxEl;

//sets the current date and time
currentDateEl.textContent = today.format("dddd, MMMM, DD, YYYY");
currentTimeEl.textContent = today.format("h:mm a");


/*
let uvIndexCheck function() {
if UV index is === favorable
add.class "favorable"
else if UV index is === moderate
add.class "moderate"
else if UV index is === severe
add.class "severe"
*/


let searches =[];

//user inputs their search, and the search is added as a new list item to the list of previous searches
function renderSearches() {
    searchListEl.textContent ="";

    for (i = 0; i < searches.length; i++) {
        let search = searches[i];

    let a = document.createElement("a");
    let li = document.createElement("li");
    
    li.textContent = (search);
    li.setAttribute("city", i);
    a.href = (currentQueryURL);
    
    searchListEl.appendChild(a);
    a.appendChild(li);
    };

    
    
fetch (currentQueryURL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)

        for (var i = 0; i < data.length; i++) {
            var link = document.createElement("a");

            link.textContent = data[i].html_url;
            link.href = data[i].html_url;

            li.appendChild(link);
            
        }
    });

//     fetch (futureQueryURL)
//     .then(function(response) {
// return response.json()
//     })
//     .then(function(data) {
//         return data.json()
//     });








};



// saves searches to local storage when search button is clicked, or enter (key13) is pressed
function init() {
    let searchSave = JSON.parse(localStorage.getItem(searchBoxEl));
    if(searchSave !== null) {
    searches  = searchSave;
    };
    renderSearches()
};

//user searches a city and that search is saved in local storage
function storeSearches() {
    localStorage.setItem(searchBoxEl, JSON.stringify(searches))
};

//make the search button, and enter submit the search
searchBoxEl.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
}
});

searchButton.addEventListener("click", function() {
    const searchText = (searchBoxEl.value.trim());
    
    if (searchText === "") {
        return;
    };

    searches.push(searchText);
    searchBoxEl.value = "";

    storeSearches();
    renderSearches();
});

init()