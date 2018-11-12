# Step by step - Answers

## Step 1 - Configure component toolbar

### Step 1.1 Configure component toolbar (Create elements and bindings)
* Add title text for tooolbar
* Add search field for city and country
  * Make sure that the search fields have observable values linked to them.
* Add search button
  * When the search button is clicked, do an alert of the current city ad country value and confirm that it works.

Be welcome to design it howerver you'd like :)

### Step 1.2 - Configure component toolbar (Make Api requests)
* Create you own API key from: https://openweathermap.org/appid
  * You'll have to sign up and create it. (May take up to an hour before it works)
* The API request is already created fo you, so just need to use it.
* Use <code>getForecast</code> function from the utilities/api module in your search function.
  * The function will return a promise so use, <code>then</code> and <code>catch</code> for handling result.
* Alert the results to make sure that they work.
  * You can get an error by searching for a city that doesn't exist i.e. "asgkhhaogoah"

## Step 2 - Configure component toolbar & error-message
### Step 2.1 - Configure component toolbar (Use the given parameter searchError)
* The constructor will input an object called "params" that contains an observable called "searchError". Store that param in the class.
  * Using <code>this.searchError = params.searchError</code>
* Set the value of that observable with the error message from the api.
  * Remember that it is an observable so use <code>this.searchError('New value')</code>

### Step 2.2 - Configure component error-message (Show message to user)
* The constructor will input an object called "params" that contains an observable called "error". Store that param in the class.
  * Using <code>this.error = params.error</code>
* Use the above observable to show the message to the user. If it's empty the message should not be shown.
  * Use what design you'd like but we recommend Bootstrap alert alert-danger 
 
## Step 3 - Configure component city-list
Next step...
