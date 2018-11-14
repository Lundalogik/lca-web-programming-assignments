# Assignment 1 - Step by step - Answers

## Step 1 - Configure component toolbar

### Step 1.1 - Configure component <code>toolbar</code> (Create elements and bindings)
* Add title text for toolbar
* Add search field for city and country
  * Make sure that the search fields have observable values linked to them. (Use <code>knockout</code>)
* Add search button
  * When the search button is clicked, do an alert of the current city ad country value and confirm that it works.

Be welcome to design it however you'd like :)

### Step 1.2 - Configure component <code>toolbar</code> (Make Api requests)
* Create you own API key from: https://openweathermap.org/appid
  * You'll have to sign up and create it. (May take up to an hour before it works)
* The API request is already created fo you, so just need to use it.
* Use <code>getForecast</code> function from the utilities/api module in your search function.
  * The function will return a promise so use, <code>then</code> and <code>catch</code> for handling result.
* Alert the results to make sure that they work. (use <code>JSON.stringify</code>)
  * You can get an error by searching for a city that doesn't exist i.e. "asgkhhaogoah"

## Step 2 - Configure component <code>toolbar</code> & <code>error-message</code>
### Step 2.1 - Configure component <code>toolbar</code> (Use the given parameter searchError)
* The constructor will input an object called "params" that contains an observable called "searchError". Store that param in the class.
  * Using <code>this.searchError = params.searchError</code>
* Set the value of that observable with the error message from the api.
  * Remember that it is an observable so use <code>this.searchError('New value')</code>

### Step 2.2 - Configure component <code>error-message</code> (Show message to user)
* The constructor will input an object called "params" that contains an observable called "error". Store that param in the class.
  * Using <code>this.error = params.error</code>
* Use the above observable to show the message to the user. If it's empty the message should not be shown.
  * Use what design you'd like but we recommend Bootstrap alert alert-danger 
 
## Step 3 - Parse WeatherApi response
### Step 3.1 - Constructor for model <code>city_forecast</code>
* The constructor takes in the response from the web request to the weather api.
* Store the following:
  * city id
  * title, (city or country or both)
  * forecasts - Loop through the forecast list in the response and create a waether_data for each item you'd like and store in an array (Every 8th is a new day in current time)

### Step 3.2 - Constructor for model <code>weather_data</code>
* The constructor should takes in the an object from the forecast list of the web requests response.
* Store the following:
  * Date
  * title - Use <code>momentjs</code> to get a nice tiel for example  Today, Tomorrow e.t.c. (Tips: <code>moment</code> <code>calendar</code>)
  * time - Extract the time from the date using <code>momentjs</code>
  * temperature - The temperature is returned in Celcius, can convert if needed.
  * main_weather - Store the <code>name</code> of the weather, take first in array.
  * icon - Use openweathermap's icons as url (See <code>https://openweathermap.org/weather-conditions</code>)
  * description - Combine above values as you'd like to create a good overview for the user. (i.e. main_weather, temperature and time)

### Step 3.3 Use the parsing & make sure that the parsing works
* In the module <code>app</code> do the following in the <code>constructor</code>:
  * Subscribe for changes on the searchResult observable (Using <code>knockout</code>)
  * In the above function create a new <code>CityForecast</code> model and store it in a variable.
  * Alert the newly created <code>CityForecast</code> model and see if the parsing went well. (use <code>JSON.stringify</code>)
  * Insert the newly created <code>CityForecast</code> model using <code>unshift</code> (Puts the object first in the array)

## Step 4 - Use the parsed models to show in the web app
## Step 4.1 - Configure component <code>city_tile</code>
* The constructor will input an object called "params" that contains a <code>CityForecast</code> model called "cityForecast". Store that param in the class.
  * Using <code>this.cityForecast = params.cityForecast</code>
* Configure the template of the component (Important: The root must be a <code>li</code> element, with class <code>list-group-item</code>)
  * Add a title containg what you'd like (i.e the city name and country)
  * Create an <code>ul</code> element with a <code>foreach</code> bind (using <code>knockout</code>)
  * Inside the above <code>foreach</code> add the component <code>weather-item</code> and send in <code>$data</code> as a parameter.
    * Using <code>\<weather-item params="weatherData: $data"\>\</weather-item\></code>
    
## Step 4.2 - Configure component <code>weather_item</code>
* The constructor will input an object called "params" that contains a <code>WeatherData</code> model called "cityForecast". Store that param in the class.
  * Using <code>this.weatherData = params.weatherData</code>
* Configure the template of the component (Important: The root must be a <code>li</code> element)
  * A good example is to use <code>bootstrap's</code> <code>media</code>
