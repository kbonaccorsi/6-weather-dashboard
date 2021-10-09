//Global Variables- API keys
const apiKeyFuture = "2333826092b58c3b0f9ed3b12d33f616";
const apiKeyCurrent = "6253c56c808bcdaa72af78a1a5171dde";

// Global Variables
const currentDateEl = document.getElementById("currentDate");
const currentTimeEl = document.getElementById("currentTime");
const today = moment();



//sets the current date and time
currentDateEl.textContent = today.format("dddd, MMMM, DD, YYYY");
currentTimeEl.textContent = today.format("h:mm a");


/*fetch information from weather API
fetch(insert requested weather API URL)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        return data.json()
    });
*/


/*
let uvIndexCheck function() {
if UV index is === favorable
add.class "favorable"
else if UV index is === moderate
add.class "moderate"
else if UV index is === severe
add.class "severe"
*/


/* saves searches to local storage when search button is clicked, or enter (key13) is pressed
searchSave.function() {
searchButton.getEventListener("click", function()) {
    event.preventDefault()
localStorage.getItem.json.parse(changes object to string)
}
};
*/




/*saves searches to .searchHistoryList, from local storage
searchHistory.function() {
localStorage.setItem.json.setstringify (changes string to object)
(.searchHistoryList).add(li) for each search submitted
return ()
}
*/