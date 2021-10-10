//Global Variables
const apiKeyCurrent = "6253c56c808bcdaa72af78a1a5171dde";
const searchButton = document.getElementById("searchButton");
const searchBoxEl = document.getElementById("searchBox");
const searchListEl = document.getElementById("searchHistoryListEl");
const currentDateEl = document.getElementById("currentDate");
const currentTimeEl = document.getElementById("currentTime");
const today = moment();

//sets the current date and time
currentDateEl.textContent = today.format("dddd, MMMM, DD, YYYY");
currentTimeEl.textContent = today.format("h:mm a");


//searches is put into an array
let searches = [];

//user inputs their search, and the search is added as a new list item to the list of previous searches
function getCurrentWeather() {
    // city is made up of user input in the search box
    let city = searchBoxEl.value.trim();
    console.log(city);

    //API request URL
    let currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKeyCurrent;
    console.log(currentQueryURL);

    // me reaching out to openweathermap.org to get information about the city (user determined)
    fetch(currentQueryURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        });
};



//     function conductSearch() {

//             //     searchListEl.textContent = "";

//         //     for (i = 0; i < searches.length; i++) {
//         //         let search = searches[i];

//         //         let a = document.createElement("a");
//         //         let li = document.createElement("li");

//         //         li.textContent = (search);
//         //         li.setAttribute("data-index", i);
//         //         a.href = (currentQueryURL);

//         //         searchListEl.appendChild(a);
//         //         a.appendChild(li);
//         //     };
//     };    



// // saves searches to local storage when search button is clicked, or enter (key13) is pressed
// function saveSearches() {
//     let searchSave = JSON.parse(localStorage.getItem(searchBoxEl));
//     if (searchSave !== null) {
//         searches = searchSave;
//     };
// };

// //user searches a city and that search is saved in local storage
// function storeSearches() {
//     localStorage.setItem(searchBoxEl, JSON.stringify(searches))
// };





//make the search button, and enter submit the search
searchBoxEl.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
});

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    const searchText = (searchBoxEl.value.trim());

    if (searchText === "") {
        alert("Please enter a valid city name");
        return;
    };
    //searches array gets searchText added to thend of the searches array and returns the new length of the array
    searches.push(searchText);

    getCurrentWeather()
    //storeSearches()

    // clearing the search box to prepare for another search
    searchBoxEl.value = "";
});

//saveSearches()


/*
let uvIndexCheck function() {
if UV index is === favorable
add.class "favorable"
else if UV index is === moderate
add.class "moderate"
else if UV index is === severe
add.class "severe"
*/

/*
let conditions function() {
    if condtion
}
*/

//const apiKeyFuture = "2333826092b58c3b0f9ed3b12d33f616";
// let state;
// let country;
//let futureQueryURL = "" + city + "&appid=" + apiKeyFuture;

//     fetch (futureQueryURL)
//     .then(function(response) {
// return response.json()
//     })
//     .then(function(data) {
//         return data.json()
//     });
