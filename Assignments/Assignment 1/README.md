# Assignment 1
Create a weather forecast app using Python as back end.

## Setup

1. Clone the git repository for the assignment: (You probably did this already)
    * <code>git clone https://github.com/Lundalogik/lca-web-programming-assignments.git</code>
    
2. Install Node JS and make sure the command <code>npm</code> works
    * Can be found here: https://nodejs.org/en/download/
  
3. Open a command prompt such as cmd or Power Shell.

4. Browse to the folder: <code>"%repoRoot%\Assignments\Assignment 1"</code>

5. Install the required packages with the command: <code>npm install</code>
    * Installs the requirements from the package.json file in the current folder.

6. Install the gulp globally with the command: <code>npm install -g gulp</code>
    * Installs the gulp globally so that you can use it in the cmd wherever you are.

7. Run the development server with the command: <code>gulp</code>
    * Executes the commands in the gulpfile.js file

## Structure of web app
You should do all your changes in the <code>src</code> folder.
Gulp will handle everything regarding the build and such.

In the <code>src</code> you will find several folders:
* <code>components</code> - this is where all the custom components is stored. They contain logic (js) and a view (html)
* <code>models</code> - this is for storing multiple values in a single object.
* <code>resources</code> - this is where you have your resources:
   * Images and icons
   * Constant values, texts.
   * Localization and so on.
* <code>styles</code> - All custom css (Design of the web app
* <code>utilities</code> - utilities that you need, ie. api calls.

## What to do

### Step 1 - Configure component toolbar

#### Step 1.1 - Configure component <code>toolbar</code> (Create elements and bindings)
* Add title text for toolbar
* Add search input for city and country (Use <code>observables</code> in <code>Knockout</code>)
* Add search button
  * When the search button is clicked, do an alert of the current city and country value and confirm that it works.

_Be welcome to design it however you'd like :)_

#### Step 1.2 - Configure component <code>toolbar</code> (Make Api requests)
* **YOU SHOULD HAVE DONE THIS IN BEFORE HAND** - Create you own API key from: https://openweathermap.org/appid
  * You'll have to sign up and create it. (May take up to an hour before it works)
* The API request is already created fo you, so just need to use it.
   * You must insert you API-key in the <code>utilities/api.js</code>
* Use <code>getForecast</code> function from the <code>utilities/api.js</code> module in your search function.
  * The function will return a promise, so use <code>then</code> and <code>catch</code> for handling result.
* Alert the results to make sure that they work. (use <code>JSON.stringify</code>)
  * You can get an error by searching for a city that doesn't exist i.e. "asgkhhaogoah"

### Step 2 - Configure component <code>toolbar</code> & <code>error-message</code> (Handling response)
#### Step 2.1 - Configure component <code>toolbar</code> (Use the given parameter <code>searchError</code> and <code>searchResult</code> )
* The constructor will input an object called "params" that contains two observables called "searchError" and "searchResult". Store those params in the class.
* Set the value of the observable <code>searchError</code> with the error message from the api.
* Set the value of the observable <code>searchResult</code> with the data from the api.

#### Step 2.2 - Configure component <code>error-message</code> (Show message to user)
* The constructor will input an object called "params" that contains an observable called "error". Store that param in the class.
* Use the above observable to show the message to the user. If it's empty, the message should not be shown.
  * Use what design you'd like but we recommend Bootstrap <code>alert</code> <code>alert-danger</code> 

### Step 3 - Parse WeatherApi response
#### Step 3.1 - Constructor for model <code>city_forecast</code>
* The constructor takes in the response from the web request to the weather api.
* Parse and store the values you'd like (See documentation: <code>https://openweathermap.org/forecast5#JSON</code>):
* Loop each object in the <code>list</code> array and create a <code>WeatherData</code> model _(Send the object as parameter)_ for each: (Tips: use <code>filter</code> and <code>map</code>)
    * Every 8th is a new day in nearest future time

#### Step 3.2 - Constructor for model <code>weather_data</code>
* The constructor should take in an object from the forecast list of the web requests response.
* Parse and store the values you'd like:
  * Tips:
    * Use <code>moment</code> to extract date, time and such
    * Use <code>calendar</code> in moment to get for example, "Today", "Tomorrow"
    * You can get an icon image from openweathermap's api (See <code>https://openweathermap.org/weather-conditions</code>)

#### Step 3.3 Use the parsing & make sure that it works

##### Step 3.3.1 Make sure that it works (component <code>app</code>)
  * The searchResult observable will be changed everytime the user search for something in the web app.
  * Try to use <code>Knockouts</code> <code>subscribe</code> function to create a new <code>CityForecast</code> model from the new search value when a user search.
  * Alert the newly created <code>CityForecast</code> model and see if the parsing went well. (use <code>JSON.stringify</code>)

##### Step 3.3.2 Store the parsed <code>CityForecast</code> model in the <code>cityForecasts</code> observableArray
  * Insert the newly created <code>CityForecast</code> model using <code>unshift</code> _(Puts the object first in the array)_ to the <code>cityForecasts</code> array

### Step 4 - Use the parsed models and show them in the web app
### Step 4.1 - Configure component <code>city_tile</code>
* The constructor will input an object called "params" that contains a <code>CityForecast</code> model called <code>cityForecast</code>. Store that param in the class.
* Configure the template of the component _(Important: The root must be a <code>li</code> element, because the <code>city-list</code> component uses foreach on an <code>ul</code> so all children must be of type <code>li</code>)_
  * Add a title containg what you'd like (i.e the city name and country)
  * Create an <code>ul</code> element with a <code>foreach</code> binding (using <code>Knockout</code>)
    * Add what styling you'd like using bootstrap. (For example <code>list-group</code>)
  * Inside the above <code>foreach</code> add the component <code>weather-item</code> and send in <code>$data</code> as a parameter.
    
### Step 4.2 - Configure component <code>weather_item</code>
* The constructor will input an object called "params" that should contain a <code>WeatherData</code> model. Store that param in the class.
* Configure the template of the component (Important: The root must be a <code>li</code> element with class <code>list-group-item</code>)
  * A good example is to use Bootstrap's <code>media</code>
