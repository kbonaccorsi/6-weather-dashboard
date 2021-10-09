# 6-weather-dashboard
weather dashboard for multiple cities



# 6-weather-dashboard
weather dashboard for multiple cities


Build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather One Call API](https://openweathermap.org/api/one-call-api) to retrieve weather data for cities.

use `localStorage` to store any persistent data. 


For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

mobile responsive
    ✓ full width
    ✓ flex boxes
    ✓media query

accessibility
    ✓font > 16px;
    --alt text
    ✓colors

bootstrap
    ✓link in the head section of html

fetch
    --use weather APIs

AS A traveler
    I WANT to see the weather outlook for multiple cities
    SO THAT I can plan a trip accordingly


GIVEN a weather dashboard with form inputs
    
    
    WHEN I search for a city
    THEN I am presented with current and future conditions for that city and that city is added to the search history
        ✓form input field for user to search
        --display current conditions
        --display future conditions
        --add to search history
        --list of previously visited locations
            --local storage
                --get user input into local storage
                --set user input into search history
                --traverse the DOM through DevTools, console, console logged information drop down arrow
    
    WHEN I view current weather conditions for that city
    THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
        --view current conditions
        --json array of objects
            currentlyObject
                --city name
                --current date (moment.js())
                --current hour (moment.js()hours())
                --icon representing weather conditions
                --temperature
                --humidity
                --wind speed
                --UV index
    
    WHEN I view the UV index
    THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
        --color based on UV index
            ✓favorable-green
                 ✓add.class "favorable"
            ✓moderate-yellow
                 ✓add.class "moderate"
            ✓severe-red
                ✓add.class"severe"
            --if else statement
                 --if UV index is === favorable
                    add.class "favorable"
                    else if UV index is === moderate
                    add.class "moderate"
                    else if UV index is === severe
                    add.class "severe"
    
    WHEN I view future weather conditions for that city
    THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
        --future conditions
            --json array of objects
            -- 5-day forecast object
                --date
                --icon representing weather conditions
                --temperature
                --wind speed
                --humidity
    
    WHEN I click on a city in the search history
    THEN I am again presented with current and future conditions for that city
        --clickable history
        --document replace   OR  add <a href= insert link>


## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-demo.png)



    * Uses the OpenWeather API to retrieve weather data.

    * Uses `localStorage` to store persistent data.

