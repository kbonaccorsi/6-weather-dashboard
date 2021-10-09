//Global Variables- API keys
const apiKeyFuture="2333826092b58c3b0f9ed3b12d33f616";
const apiKeyCurrent="6253c56c808bcdaa72af78a1a5171dde";

// Global Variables
const currentDateEl=document.getElementById("currentDate");
const currentTimeEl=document.getElementById("currentTime");
const today=moment();



currentDateEl.textContent = today.format("dddd, MMMM, DD, YYYY");
currentTimeEl.textContent=today.format("h:mm a");

//fetch information from weather API

//save search to local storage

//create a new list item each time a search is run

//add search to search history list